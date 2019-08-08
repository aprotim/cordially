function icalFold(str, firstLineOffset) {
  var escaped = str.replace(/[\\;,]/g, '\\$&');
  escaped = escaped.replace(/\n/g, '\\n');
  var consumed = 75 - firstLineOffset;
  var folded = escaped.slice(0, consumed);
  while (consumed < escaped.length) {
    folded += "\n " + escaped.slice(consumed, consumed + 74);
    consumed += 74;
  }
  return folded;
}

function getIcalBlob(config) {
  ical_text = ['BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    'DTSTAMP:' + Utilities.formatDate(new Date(), 'GMT', "yyyyMMdd'T'HHmmss'Z'"),
    'UID:'+ SpreadsheetApp.getActiveSpreadsheet().getId() + '@cordial.aprotim.com',
    'DTSTART;TZID="' + config.timeZone + '":' + config.startDateTimeISO8601,
    'DTEND;TZID="'+ config.timeZone + '":' + config.endDateTimeISO8601,
    'ORGANIZER;CN=' + config.hostName + ':mailto:' + Session.getActiveUser().getEmail(),
    'SUMMARY:' + icalFold(config.title, "SUMMARY:".length),
    'DESCRIPTION:' + icalFold(config.summary + '\n\n' + config.details, "DESCRIPTION:".length),
    'LOCATION:' + icalFold(config.locationName, "LOCATION:".length),
    'END:VEVENT',
    'END:VCALENDAR'].join('\n');
  
  return Utilities.newBlob(ical_text, "text/calendar", "event.ics");
}