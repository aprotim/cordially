function getMetadata(key) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.createDeveloperMetadataFinder().withKey(key).find();
}

function getMetadataValue(key) {
  console.time('getMetadataValue');
  var md = getMetadata(key);
  if (md.length) {
    console.timeEnd('getMetadataValue');
    return md[0].getValue();
  } else {
    console.timeEnd('getMetadataValue');
    return null;
  }
}

function updateMetadata(key, value){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var finderResults = getMetadata(key);
  if (finderResults.length) {
    finderResults[0].setValue(value);
  } else {
    spreadsheet.addDeveloperMetadata(key, value)
  }
}

// Returns true if the cell where cellData was read from is empty.
// Arguments:
//   - cellData: string
function isCellEmpty(cellData) {
  return typeof(cellData) == "string" && cellData == "";
}

// Returns an Array of normalized Strings.
// Arguments:
//   - headers: Array of Strings to normalize
function normalizeHeaders(headers) {
  return headers.map(normalizeHeader);
}

// Normalizes a string, by removing all alphanumeric characters and using mixed case
// to separate words. The output will always start with a lower case letter.
// This function is designed to produce JavaScript object property names.
// Arguments:
//   - header: string to normalize
// Examples:
//   "First Name" -> "firstName"
//   "Market Cap (millions) -> "marketCapMillions
//   "1 number at the beginning is ignored" -> "numberAtTheBeginningIsIgnored"
function normalizeHeader(header) {
  if (header.match(/^[a-z][a-zA-Z0-9]*$/)) return header; // already camelCase
  return header.toLowerCase().replace(/^[^a-zA-Z]*/, '')
    .replace(/[_ ]\W*(\w)/g, function (match, p1) {return p1.toUpperCase();} )
    .replace(/[^a-zA-Z0-9]/g, '');
}

// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true
  });
}