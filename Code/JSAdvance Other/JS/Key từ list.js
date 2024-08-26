const mapCodeToText =
{
  '100': 'Continue',
  '101': 'Switching Protocols',
  '102': 'Processing',
  '103': 'Early Hints',
  '200': 'OK',
  'default': "No Code",
}
const getTextFromText = code => {
  console.log(mapCodeToText[code] || mapCodeToText['default']);
}
getTextFromText(200);

// Cách nhanh nhất search key lấy object từ list trong JS
const mapCodeToTextUseMap = new Map([
  ['100', 'Continue'],
  ['101', 'Switching Protocols'],
  ['102', 'Processing'],
  ['103', 'Early Hints'],
  ['200', 'OK'],
  ['default', "No Code"],
]);
const getTextFromTextUseMap = code => {
  console.log(mapCodeToTextUseMap.get(code) || mapCodeToTextUseMap.get("default"));
}
getTextFromTextUseMap(200);
