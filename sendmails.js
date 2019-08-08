function validateSheet() {
  var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Invitees');
  if (dataSheet === null || dataSheet.getLastColumn() === 0) {
    throw new Error('Guest list sheet must be named "Invitees", and cannot be empty.');
  }
  var headers = getNormalizedHeaders(dataSheet.getRange(1, 1, 1, dataSheet.getLastColumn()));
  if (headers.indexOf('name') == -1 || headers.indexOf('emailAddresses') == -1) {
    throw new Error('"Invitees" sheet needs a column titled "Name" and one titled "Email Addresses"');
  }
  
}

function getRowObjectsByResponse(questionId, allowedAnswers) {
  console.time('getRowObjectsByResponse');

  console.time('getRowsData');
  var objects = getRowsData().filter(function (o) {return o.emailAddresses != ''});
  console.timeEnd('getRowsData');

  console.time('get form');
  var form = FormApp.openByUrl(getMetadataValue('cordially/formUrl'));
  console.timeEnd('get form');

  console.time('get question');
  var question = form.getItemById(Number(questionId));
  console.timeEnd('get question');

  console.time('getResponses');
  var responses = form.getResponses();
  console.timeEnd('getResponses');
  
  var filtered = [];
  console.time('responsesLoop');
  for (var i in objects) {
    var rowData = objects[i];

    var respId = getResponseIdFromUrl(rowData.rsvpUrl);

    var response = responses.find(function (e) {return e.getId() === respId;});

    var answer = response.getResponseForItem(question);
    answer = answer ? answer.getResponse() : "";
    
    
    if (allowedAnswers.indexOf(answer) !== -1 ) {
      filtered.push(rowData);
    }
  }
  console.timeEnd('responsesLoop');
  console.timeEnd('getRowObjectsByResponse');
  return filtered;
}

function sendEmails(subjectPrefix) {

  var eventConfig = getEventConfig();
  eventConfig = preRenderConfigInfo(eventConfig);
  var headerImageBlob = null;
  if (eventConfig.headerImageURL) {
    headerImageBlob = UrlFetchApp
                          .fetch(eventConfig.headerImageURL)
                          .getBlob()
                          .setName("headerImageBlob");
  }
  var icalBlob = getIcalBlob(eventConfig);
  
  if (subjectPrefix.slice(-1) != ' ') {
    subjectPrefix += ' ';
  }
  var subjectLine = subjectPrefix + eventConfig.title + "!";

  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Invitees');
  var dataRange = dataSheet.getRange(2, 1, dataSheet.getMaxRows(), dataSheet.getMaxColumns());
  // Create one JavaScript object per row of data.
  var objects = getRowsData()
                  .filter(function (o) {return (o.emailed != o.emailAddresses && o.emailAddresses != '');});

  var emailedColumn = dataSheet.createDeveloperMetadataFinder()
                            .withKey('emailed')
                            .withLocationType(SpreadsheetApp.DeveloperMetadataLocationType.COLUMN)
                            .find()[0].getLocation().getColumn().getColumn();

  // For every row object, create a personalized email from a template and send
  // it to the appropriate person.
  ss.toast('Starting to send out emails', 'Sending emails.', 4);
  var emailsSent = 0;
  for (var i = 0; i < objects.length; ++i) {
    // Get a row object
    var rowData = objects[i];
    
    message = {};
    message.text = "You are invited to " + eventConfig.title + "!";

    message.html = marked(message.text, {sanitize: true})
    
    var htmlBody = Handlebars.templates['invitation_template']({event: eventConfig, guest: rowData, message: message});
    var textBody = Handlebars.templates['plaintext_invitation_template']({event: eventConfig, guest: rowData,  message: message});
    
    sendEmail(subjectLine, eventConfig.hostName, rowData.emailAddresses, htmlBody, textBody, icalBlob, headerImageBlob);

    dataRange.getCell(rowData._rowNum + 1, emailedColumn).setValue(rowData.emailAddresses);

    emailsSent++;
  }
  
  console.log('Sent ' + String(emailsSent) + ' emails out.');
  ss.toast('Sent ' + String(emailsSent) + ' emails out.', 'Done!', 5);
}

function sendCustomEmails(subjectLine, messageMarkup, objects, include_details) {

  var eventConfig = getEventConfig();
  eventConfig = preRenderConfigInfo(eventConfig);
  var headerImageBlob = null;
  if (eventConfig.headerImageURL) {
    headerImageBlob = UrlFetchApp
                          .fetch(eventConfig.headerImageURL)
                          .getBlob()
                          .setName("headerImageBlob");
  }
  var icalBlob = getIcalBlob(eventConfig);
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // For every row object, create a personalized email from a template and send
  // it to the appropriate person.
  ss.toast('Starting to send out emails', 'Sending emails.', 4);
  var emailsSent = 0;
  for (var i = 0; i < objects.length; ++i) {
    // Get a row object
    var rowData = objects[i];
    
    message = {};
    message.text = messageMarkup;

    message.html = marked(message.text, {sanitize: true})
    
    if (include_details) {
      var htmlBody = Handlebars.templates['invitation_template']({event: eventConfig, guest: rowData, message: message});
      var textBody = Handlebars.templates['plaintext_invitation_template']({event: eventConfig, guest: rowData,  message: message});
    } else {
      var htmlBody = Handlebars.templates['invitation_template_no_details']({event: eventConfig, guest: rowData, message: message});
      var textBody = Handlebars.templates['plaintext_invitation_template_no_details']({event: eventConfig, guest: rowData,  message: message});
    }
    
    sendEmail(subjectLine, eventConfig.hostName, rowData.emailAddresses, htmlBody, textBody, icalBlob, headerImageBlob);

    emailsSent++;
  }
  
  ss.toast('Sent ' + String(emailsSent) + ' emails out.', 'Done!', 5);
}

function sendEmail(subject, fromName, toAddresses, htmlBody, textBody, icalBlob, headerImageBlob) {
  var emailOptions = {htmlBody: htmlBody, name: fromName};
  
  if (icalBlob){
    emailOptions.attachments = [icalBlob];
  }

  if (headerImageBlob) {
    emailOptions.inlineImages = {headerImage: headerImageBlob};
  }

  MailApp.sendEmail(toAddresses, subject, textBody, emailOptions);
}

//////////////////////////////////////////////////////////////////////////////////////////
//
// The code below is reused from the 'Reading Spreadsheet data using JavaScript Objects'
// tutorial.
//
//////////////////////////////////////////////////////////////////////////////////////////

function getNormalizedHeaders(range)
{
  return normalizeHeaders(range.getValues()[0]);
}

// getRowsData iterates row by row in the input range and returns an array of objects.
// Each object contains all the data for a given row, indexed by its normalized column name.
// Arguments:
//   - sheet: the sheet object that contains the data to be processed
//   - range: the exact range of cells where the data is stored
//   - columnHeadersRowIndex: specifies the row number where the column names are stored.
//       This argument is optional and it defaults to the row immediately above range; 
// Returns an Array of objects.
function getRowsData() {
  var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Invitees');
  var allRange = dataSheet.getDataRange();
  var dataRange = allRange.offset(1, 0, allRange.getHeight() - 1);

  var headers = getNormalizedHeaders(allRange.offset(0, 0, 1));
  return getObjects(dataRange.getValues(), headers);
}

// For every row of data in data, generates an object that contains the data. Names of
// object fields are defined in keys.
// Arguments:
//   - data: JavaScript 2d array
//   - keys: Array of Strings that define the property names for the objects to create
function getObjects(data, keys) {
  var objects = [];
  for (var i = 0; i < data.length; ++i) {
    var object = {};
    var hasData = false;
    for (var j = 0; j < data[i].length; ++j) {
      var cellData = data[i][j];
      if (keys[j] == "") {
        continue;
      }
      if (!isCellEmpty(cellData)) {
        hasData = true;
      }
      object[keys[j]] = cellData;
    }
    if (hasData) {
      object._rowNum = i;
      objects.push(object);
    }
  }
  return objects;
}

