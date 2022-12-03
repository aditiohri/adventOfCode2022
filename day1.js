const { rawData, sumOfNums } = require("./aoc");

const data = rawData("day1.txt").toString().split(/\n\n/).map(str => str.split(/\n/))

// part one
let allSums = data.map(arr => sumOfNums(arr.map(str => Number(str))))
const largestSum = (arr) => arr.reduce((acc, curr) => acc > curr ? acc : curr)
console.log(largestSum(allSums))

//part two
const largestThreeSums = [];
while (largestThreeSums.length < 3) {
    const currentLargestSum = largestSum(allSums)
    largestThreeSums.push(currentLargestSum)
    allSums.splice(allSums.indexOf(currentLargestSum), 1)
}
console.log(sumOfNums(largestThreeSums))