const { get } = require("http");
const { rawData, sumOfNums } = require("./aoc");

const data = rawData("day3.txt").split(/\n/)

// break rucksacks into two compartments each
const breakInTwo = (arrOfStrs) => {
    return arrOfStrs.map(str => {
        return [
            str.substring(0, str.length/2),
            str.substring(str.length/2)
        ]
    })
}
// find repeating item types in both compartments
const findRepeatingItems = (arrOfSubStrs) => {
    return arrOfSubStrs.map(arrOfStr => { 
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
// determine value of repeating item
const getValueOfItems = (arrOfItems) => {
    return arrOfItems.map(item => {
        let value = item.charCodeAt(0);
        // a-z 1-26 charcode 97-122
        if (value > 96 && value < 123) {
            value -= 96;
        // A-Z 27-52 charcode 65-90
        } else if (value > 64 && value < 91) {
            value -= 38;
        } else {
            return item
        }
        return value
    })
}

// divide rucksacks into groups of three
const getGroupsOfThree = (arrOfStrs) => {
    let groupsOfThree = []
    for (let i = 0; i < arrOfStrs.length; i+=3) {
        groupsOfThree.push([arrOfStrs[i], arrOfStrs[i+1], arrOfStrs[i+2]])
    }
    return groupsOfThree
}

// part one
const rucksacks = breakInTwo(data);
const repeatingItems = findRepeatingItems(rucksacks);
const valueOfItems = getValueOfItems(repeatingItems)
const sumOfAllItemValues = sumOfNums(valueOfItems);
console.log(sumOfAllItemValues)

//part two
const elfGroups = getGroupsOfThree(data);
const elfBadges = findGroupBadges(elfGroups);
const sumOfBadgeValues = sumOfNums(getValueOfItems(elfBadges))
console.log(sumOfBadgeValues)