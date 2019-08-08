function onOpen() {
  var ui = SpreadsheetApp.getUi().createAddonMenu()
      .addItem('Set up invitation', 'setupInvitation')
      .addItem('Update RSVP URLs', 'assignEditUrls')
      .addItem('Synchronize form permissions', 'syncFormEditors')
      .addSeparator()
      .addItem('Send Invitations', 'sendEmailsPrompt')
      .addItem('Show me invitation preview', 'showInvitationTemplate')
      .addItem('Send custom message', 'sendCustomMessagePrompt')
      .addSeparator()
      .addItem('Test Custom Message Handler', 'testCustomMessageHandler')
      .addToUi();
}

function saveInvitationSetup(form){
  updateEventConfig(form);
  updateRSVPFormWithEventDetails();
}

function renderInvitationHTML() {
  var config = preRenderConfigInfo(getEventConfig());
  var html = HtmlService.createHtmlOutput(Handlebars.templates['invitation_template']({event: config}));
  
  return html;     
}

function showInvitationTemplate() {
    SpreadsheetApp.getUi()
      .showSidebar(renderInvitationHTML());

}

function setupInvitation() {
  var ui = SpreadsheetApp.getUi()
  try {
    validateSheet();
    setUpBookKeeping();
  } catch (e) {
    ui.alert('Error: ' + e.message);
    return;
  }
  
  var templateSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Email Info');
  var template = HtmlService.createTemplateFromFile('event_settings')

  template.config = getEventConfig();
  var html = template.evaluate();
  
  html.setTitle('Invitation Configuration').setWidth(300);
  
  SpreadsheetApp.getUi()
      .showSidebar(html);
}

function sendEmailsPrompt() {
  var ui = SpreadsheetApp.getUi();

  var result = ui.alert(
     'Please confirm',
     'This will send emails to anybody who has not already been emailed?',
      ui.ButtonSet.YES_NO);
  
  if (result == ui.Button.YES) {
    assignEditUrls();
    sendEmails("You're invited to ");
  }
}

function sendCustomMessagePrompt() {
  var form = FormApp.openByUrl(getMetadataValue('cordially/formUrl'));
  var potentialItems = form.getItems(FormApp.ItemType.MULTIPLE_CHOICE).map(function (i) {return i.asMultipleChoiceItem();});
  var  template = HtmlService.createTemplateFromFile('custom_message_prompt');
  template.items = potentialItems;
  var html = template.evaluate();

  html.setTitle('Send Custom Message').setWidth(300);
  
  SpreadsheetApp.getUi()
      .showSidebar(html);
}

function customMessageHandler(form) {
  console.log(form);
  if (!Array.isArray(form.allowed_responses)){
    form.allowed_responses = [form.allowed_responses];
  }
  
  sendCustomEmails(form.subject, form.message, getRowObjectsByResponse(form.question, form.allowed_responses), (form.include_details == "true"));
}

function testCustomMessageHandler() {
  console.log("==============testCustomMessageHandler===============");
  console.time('customMessageHandler');
  customMessageHandler({question: '938448494', allowed_responses: 'Yes', subject: 'A', message: 'B'});  
  console.timeEnd('customMessageHandler');
  console.log("============end testCustomMessageHandler=============");
}
