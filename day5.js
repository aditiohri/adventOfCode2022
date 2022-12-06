const { rawData } = require("./aoc");

const data = rawData("day5.txt").split(/\n/);
const stackData = data.slice(0, 8);
const moveData = data.slice(10);

const createStacks = (arrOfStr) => {
    const stackObj = {};
     arrOfStr.forEach(str => {
       str.split(/\s{4}|\s/).forEach((subStr, idx) => {
            if (subStr !== "") {
                if (stackObj[idx+1]) {
                    stackObj[idx+1].push(subStr)
                } else {
                    stackObj[idx+1] = [subStr]
                }
            }
       })
    })
    return stackObj
};

const createMoves = (arrOfStr) => {
    return arrOfStr.map(str => {
        return str.split(/move\s|\sfrom\s|\sto\s/).splice(1);
    })
}

const makeMoves = (stacks, moves, crateMover9000 = true) => {
    moves.forEach(moves => {
        const [ moveNum, moveFrom, moveTo ] = moves;
        const toBeMoved = stacks[moveFrom].splice(0, Number(moveNum));
        if (!crateMover9000) {
            stacks[moveTo].unshift(...toBeMoved)
        }  
        if (crateMover9000) {
            toBeMoved.forEach(stackToMove => {
                stacks[moveTo].unshift(stackToMove)
            })
        }
    })
    return stacks
}

const getMsgFromCrates = (objOfArrs) => {
    const firstStrInArr = []
    for (const property in objOfArrs) {
        firstStrInArr.push(objOfArrs[property][0])
    }
    return firstStrInArr.join("").replace(/\[|\]/g, "")
}

const moves = createMoves(moveData)

// part one
const cratesPartOne = createStacks(stackData);
const stacksAfterMovesPartOne = makeMoves(cratesPartOne, moves)
const messageForElvesPartOne = getMsgFromCrates(stacksAfterMovesPartOne)
console.log(messageForElvesPartOne)

const cratesPartTwo = createStacks(stackData);
const stacksAfterMovesPartTwo = makeMoves(cratesPartTwo, moves, false)
const messageForElvesPartTwo = getMsgFromCrates(stacksAfterMovesPartTwo)
console.log(messageForElvesPartTwo)