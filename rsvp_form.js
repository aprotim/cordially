function getColumnLetter(num) {
  return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1, num).getA1Notation().charAt(0);
}

function addColumnWithMetadata(sheet, columnTitle, metadataName) {
  var results = sheet.createDeveloperMetadataFinder()
                     .withKey(metadataName)
                            .withLocationType(SpreadsheetApp.DeveloperMetadataLocationType.COLUMN)
                            .find();
  if (!results.length) {
    var lastColumn = sheet.getLastColumn();
    sheet.insertColumnAfter(lastColumn);
    sheet.getRange(1, lastColumn + 1).setValue(columnTitle);
    var colLetter = getColumnLetter(lastColumn + 1);
    var col = sheet.getRange(colLetter + ':' + colLetter);
    col.addDeveloperMetadata(metadataName);
  }
  
}

function getResponseIdFromUrl(url) {
  var queryString = url.substring(url.lastIndexOf('?') + 1);
  Logger.log(queryString);
  if (queryString) {
    var pairs = queryString.split('&');
    for (var i in pairs) {
      var pair = pairs[i].split('=');
      if (pair[0] == 'edit2') {
        return pair[1];
      }
    }
  }
  return null;
}

function syncFormEditors() {
  var formUrl = getMetadataValue('cordially/formUrl');
  if (formUrl !== null) {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheetEditors = spreadsheet.getEditors().map(function (u) {return u.getEmail()});
    var form = FormApp.openByUrl(formUrl);
    var formEditors = form.getEditors().map(function(u) {return u.getEmail();});
    
    formEditors.forEach(function (address) {if (sheetEditors.indexOf(address) == -1) form.removeEditor(address);});
    sheetEditors.forEach(function (address) {if (formEditors.indexOf(address) == -1) form.addEditor(address);});
  }
}

function setUpBookKeeping(){
  var invitee_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Invitees');
  
  addColumnWithMetadata(invitee_sheet, 'RSVP URL', 'formUrl');
  addColumnWithMetadata(invitee_sheet, 'Emailed?', 'emailed');
  
  createRSVPForm();
  syncFormEditors();
}

function createRSVPForm() {
  if (getMetadataValue('cordially/formUrl') == null) {
    SpreadsheetApp.getActiveSpreadsheet();
    var form = FormApp.create('RSVP');
    updateMetadata('cordially/formUrl', form.getEditUrl());
    var nameQuestion = form.addTextItem().setTitle('Who are you?').setRequired(true);
    updateMetadata('cordially/nameResponseField', String(nameQuestion.getId()));
    var yesNoQuestion = form.addMultipleChoiceItem().setTitle('Are you coming?').setRequired(true);
    var yesDetails = form.addPageBreakItem().setTitle('Who\'s coming?');
    yesNoQuestion.setChoices([yesNoQuestion.createChoice('Yes', yesDetails),
                              yesNoQuestion.createChoice('No', FormApp.PageNavigationType.SUBMIT),
                              yesNoQuestion.createChoice('Maybe', yesDetails)]);
    var positiveIntValidator = FormApp.createTextValidation().requireWholeNumber().requireNumberGreaterThan(0);
    form.addTextItem().setTitle('How many in your group (including yourself)?')
                      .setRequired(true).setValidation(positiveIntValidator);
    form.addTextItem().setTitle('Who else is in your group?');
    form.setConfirmationMessage('Thank you for RSVPing!');
    form.setAllowResponseEdits(true);
    form.setDestination(FormApp.DestinationType.SPREADSHEET, SpreadsheetApp.getActiveSpreadsheet().getId());
  }
}

function updateRSVPFormWithEventDetails() {
  var form = FormApp.openByUrl(getMetadataValue('cordially/formUrl'));
  var config = getEventConfig();
  config = preRenderConfigInfo(config);
  form.setTitle('RSVP for ' + config.title);
  form.setDescription([
    config.summary,
    "When: " + config.prettyTime,
    "Where: " + config.locationName].join('\n')
  );
}


function getTypedItem(item) {
  switch (item.getType()) {
    case (FormApp.ItemType.CHECKBOX):
      return item.asCheckboxItem();
      break;
    case (FormApp.ItemType.CHECKBOX_GRID):
      return item.asCheckboxGridItem();
      break;
    case (FormApp.ItemType.DATE):
      return item.asDateItem();
      break;
    case (FormApp.ItemType.DATETIME):
      return item.asDateTimeItem();
      break;
    case (FormApp.ItemType.DURATION):
      return item.asDurationItem();
      break;
    case (FormApp.ItemType.GRID):
      return item.asGridItem();
      break;
    case (FormApp.ItemType.IMAGE):
      return item.asImageItem();
      break;
    case (FormApp.ItemType.LIST):
      return item.asListItem();
      break;
    case (FormApp.ItemType.MULTIPLE_CHOICE):
      return item.asMultipleChoiceItem();
      break;
    case (FormApp.ItemType.PAGE_BREAK):
      return item.asPageBreakItem();
      break;
    case (FormApp.ItemType.PARAGRAPH_TEXT):
      return item.asParagraphTextItem();
      break;
    case (FormApp.ItemType.SCALE):
      return item.asScaleItem();
      break;
    case (FormApp.ItemType.SECTION_HEADER):
      return item.asSectionHeaderItem();
      break;
    case (FormApp.ItemType.TEXT):
      return item.asTextItem();
      break;
    case (FormApp.ItemType.TIME):
      return item.asTimeItem();
      break;
    case (FormApp.ItemType.VIDEO):
      return item.asVideoItem();
      break;
  }
  Logger.log('How did we get here?');
}

function assignEditUrls() {
  console.time('assignEditUrls');
  var invitee_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Invitees');

  var form = FormApp.openByUrl(getMetadataValue('cordially/formUrl'));

  var num_frozen_rows = invitee_sheet.getFrozenRows();
  var all_range = invitee_sheet.getDataRange();
  var data_range = all_range.offset(num_frozen_rows, 0,
                                    all_range.getNumRows() - num_frozen_rows);
  var data = data_range.getValues();
  var headers = all_range.offset(0, 0, num_frozen_rows).getValues();
  var urlColOffset = invitee_sheet.createDeveloperMetadataFinder()
                            .withKey('formUrl')
                            .withLocationType(SpreadsheetApp.DeveloperMetadataLocationType.COLUMN)
                            .find()[0].getLocation().getColumn().getColumn() - 1;
  var url_col = all_range.offset(num_frozen_rows, urlColOffset, all_range.getNumRows() - num_frozen_rows, 1);
  
  for (var r = 0; r < data.length; r++) {
    if (data[r][urlColOffset] != "")
      continue;
    var response = form.createResponse();
    for (var c = 0; c < data[r].length; c++){
      
      if (normalizeHeader(headers[0][c]) == "name"){
        var item = form.getItemById(Number(getMetadataValue('cordially/nameResponseField')));
        var typed_item = getTypedItem(item);
        var ir = typed_item.createResponse(data[r][c]);
        var info = {
          response: ir.getResponse(),
            item_id: ir.getItem().getId()
        };
        response.withItemResponse(ir);
      }
    }
    var submitted_response = response.submit();
    data_range.getCell(r + 1, urlColOffset + 1).setValue(submitted_response.getEditResponseUrl())

  }
  console.timeEnd('assignEditUrls');
  
}

