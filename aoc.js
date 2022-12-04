const fs = require("fs");

const rawData = (dataFile) => fs.readFileSync(dataFile, "utf-8")

const sumOfNums = (arr) => arr.reduce((acc, curr) => acc += curr)

const findRepeatingCharInMultStrs = (arrOfMultStrs) => {
   return arrOfMultStrs.map(arrOfStr => { 
       let repeatingItems = [];
       for (let i = 0; i < arrOfStr[0].length; i++) {
           const char = arrOfStr[0][i];
           const charInAllOtherStrs = arrOfStr.every(str => str.includes(char))
           if (charInAllOtherStrs && !repeatingItems.includes(char)) {
               repeatingItems.push(char)
           }
       }
       return repeatingItems;
   }).flat()
} 

module.exports = {
   rawData,
   sumOfNums,
   findRepeatingCharInMultStrs
}