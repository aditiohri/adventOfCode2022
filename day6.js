const { rawData } = require("./aoc");

const data = rawData("day6.txt");

const findCharAfterMarker = (string, markerLen) => {
  // find the first character after four letters in a row without repeating letters
  let beforeMarker = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    // if the beforeMarker limit hasn't been reached
    if (beforeMarker.length < markerLen) {
      if (beforeMarker.includes(char)) {
        // reset beforeMarker to begin after the first instance of the repeating char
        beforeMarker =
          beforeMarker.substring(beforeMarker.indexOf(char) + 1) + char;
      } else {
        beforeMarker += char;
      }
    }

    // once beforeMarker limit has been reached
    if (beforeMarker.length === markerLen) {
      // find the letter's index in the string
      return i + 1;
    }
  }
};

const partOne = findCharAfterMarker(data, 4);
const parTwo = findCharAfterMarker(data, 14);

console.log(`part one: ${partOne} // part two: ${parTwo}`);
