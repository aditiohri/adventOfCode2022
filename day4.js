const { rawData } = require("./aoc");

const data = rawData("day4.txt").split(/\n/);

const getRanges = (arrOfStr) => {
  return arrOfStr.map((str) => {
    return str.split(",").map((subStr) => {
      return subStr.split("-").map((str) => Number(str));
    });
  });
};

const includesOtherRange = ([
  startRangeOne,
  endRangeOne,
  startRangeTwo,
  endRangeTwo,
]) => {
  if (startRangeOne <= startRangeTwo && endRangeOne >= endRangeTwo) {
    return true;
  }
  if (startRangeOne >= startRangeTwo && endRangeOne <= endRangeTwo) {
    return true;
  }
};

const overlapsOtherRange = ([
  startRangeOne,
  endRangeOne,
  startRangeTwo,
  endRangeTwo,
]) => {
  if (startRangeOne <= startRangeTwo && endRangeOne >= startRangeTwo) {
    return true;
  }
  if (startRangeTwo <= startRangeOne && endRangeTwo >= startRangeOne) {
    return true;
  }
};

const getRangesThatIncludeOtherRanges = (
  nestedArrOfNums,
  isPartTwo = false
) => {
  return nestedArrOfNums.filter((nestedArr) => {
    if (!isPartTwo && includesOtherRange(nestedArr.flat())) {
      return nestedArr;
    }
    if (isPartTwo && overlapsOtherRange(nestedArr.flat())) {
      return nestedArr;
    }
  });
};

const ranges = getRanges(data);
const allRangesThatIncludeOtherRanges = getRangesThatIncludeOtherRanges(ranges);
// part one
console.log(allRangesThatIncludeOtherRanges.length);
// part two
const allRangesThatOverlapOtherRanges = getRangesThatIncludeOtherRanges(
  ranges,
  true
);
console.log(allRangesThatOverlapOtherRanges.length);
