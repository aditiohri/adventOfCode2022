const fs = require("fs");

const rawData = (dataFile) => fs.readFileSync(dataFile, "utf-8")

const sumOfNums = (arr) => arr.reduce((acc, curr) => acc += curr)

module.exports = {
   rawData,
   sumOfNums
}