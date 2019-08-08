function getEventConfig() {
  console.time('getEventConfig');
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var metadata = spreadsheet.getDeveloperMetadata();
  var config = {};
  for (var fieldName in configFieldDefaults) {
    if (configFieldDefaults.hasOwnProperty(fieldName)){
      var md_val = metadata.find(function (m) {return m.getKey() === fieldName;});
      if (md_val) {
        config[fieldName] = md_val.getValue();
      } else {
        config[fieldName] = configFieldDefaults[fieldName];
      }
    }
  }
    
  if (!config.endDate) { config.endDate = config.startDate; }
  
  if (!config.timeZone) {
    config.timeZone = SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetTimeZone();
  }

  console.timeEnd('getEventConfig');
  console.log(config);
  return config;
}

function updateEventConfig(config) {
  for (var key in config) {
    if (config.hasOwnProperty(key) && configFieldDefaults.hasOwnProperty(key)){
      updateMetadata(key, config[key]);
    }
  }
}

var configFieldDefaults = {
  title: "",
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
  locationName: "",
  locationURL: "",
  summary: "",
  details: "",
  footnote: "",
  invitationGreeting: "",
  headerImageURL: "",
  hostName: "",
  hostEmail: "",
  timeZone: "",
  hostAddress: "",
}

function preRenderConfigInfo(config) {
  // These aren't really Zulu time, but I can't get apps script to be smarter about timezones. Forgive me.
  var startDateTime = new Date(config.startDate + "T" + (config.startTime || "00:00") + "Z");
  var endDateTime = new Date(config.endDate + "T" + (config.endTime || "00:00") + "Z");

  config.startDateTimeISO8601 = Utilities.formatDate(startDateTime, 'GMT', "yyyyMMdd'T'HHmmss");
  config.endDateTimeISO8601 = Utilities.formatDate(endDateTime, 'GMT', "yyyyMMdd'T'HHmmss");
  
  if (config.startTime) {
    config.prettyTime = Utilities.formatDate(startDateTime, "UTC", "EEEEEEEE, MMMM dd, yyyy 'at' h:mm a");
  } else {
    config.prettyTime = Utilities.formatDate(startDateTime, "UTC", "EEEEEEEE, MMMM dd");
  }
  
  if (config.endDate != config.startDate || config.endTime) { config.prettyTime += ' until ';}
  
  if (config.endDate != config.startDate && config.endTime) {
    config.prettyTime += Utilities.formatDate(endDateTime, "UTC", "EEEEEEEE, MMMM dd, yyyy 'at' h:mm a");
  } else if (config.endTime) { 
    config.prettyTime += Utilities.formatDate(endDateTime, "UTC", "h:mm a");
  } else if (config.endDate != config.startDate) {
    config.prettyTime += Utilities.formatDate(endDateTime, "UTC", "EEEEEEEE, MMMM dd, yyyy");
  } 
  
  var gcalParams = {text: config.title, ctz: config.timeZone,
                    dates: config.startDateTimeISO8601 + '/' + config.endDateTimeISO8601,
                    location: config.locationName, details: config.details + '\n\n' + config.footnote};
  var searchStr = ''
  for (var param in gcalParams) {
    if (gcalParams.hasOwnProperty(param)){
      searchStr += encodeURIComponent(param) + "=" + encodeURIComponent(gcalParams[param]) + '&';
    }
  }
  
  config.gcalLink = "https://calendar.google.com/calendar/r/eventedit?" + searchStr;
  
  config.htmlDetails = marked(config.details, {sanitize: true});
  config.htmlFootnote = marked(config.footnote, {sanitize: true});

  return config;
}