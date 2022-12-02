const adventOfCode = require("./aoc");

const day1 = new adventOfCode("day1.txt")
const data = day1.data.toString().split(/\n\n/).map(str => str.split(/\n/))
const sumOfNums = (arr) => arr.reduce((acc, curr) => acc += curr)
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