const { rawData } = require("./aoc");

const data = rawData("day2.txt").split(/\n/).map(str => str.split(" "));

const code = {
    "A": 1,
    "B": 2,
    "C": 3,
    "X": 1, // part2 - lose
    "Y": 2, // part2 - draw
    "Z": 3 // part2 - win
};

const changePlay = (opponent, me) => {
    if (code[me] === 2) { // draw
        return opponent
    }
    if (code[me] === 1) { // lose
        if (code[opponent] === 3) {
            return "Y"
        }
        if (code[opponent] === 2) {
            return "X"
        }
        if (code[opponent] === 1) {
            return "Z"
        }
    }
    if (code[me] === 3) { // win
        if (code[opponent] === 3) {
            return "X"
        }
        if (code[opponent] === 2) {
            return "Z"
        }
        if (code[opponent] === 1) {
            return "Y"
        }
    }
}

const checkWin = ([opponent, me], part1 = true) => {
    if (!part1) {
        me = changePlay(opponent, me)
    }
    let winner = "none";
    let outcome = "win";
    if (code[opponent] === code[me]) {
        outcome = "draw";
    };
    // rock beats scissors
    if (code[opponent] === 1 && code[me] === 3) { 
        winner = "opponent"
    } else if (code[opponent] === 3 && code[me] === 1) {
        winner = "me"
    // otherwise we can use the larger number to find the winner
    } else if (code[opponent] > code[me]) {
        winner = "opponent";
    } else if (code[opponent] < code[me]) {
        winner = "me";
    };
    return {
        opponentPlay: opponent,
        myPlay: me,
        outcome,
        winner
    };
};

const calcScore = ({ opponentPlay, myPlay, outcome, winner }, score) => {
    if (outcome === "draw") {
        score.opponent += 3;
        score.me += 3;
    }

    if (outcome === "win") {
        score[winner] += 6;
    }

    score.opponent += code[opponentPlay];
    score.me += code[myPlay];
}

const partOne = () => {
    const score = {
        "opponent": 0,
        "me": 0
    };
    data.forEach(play => {
        calcScore(checkWin(play), score)
    })
    console.log('p1 score: ', score)
}

const partTwo = () => {
    const score = {
        "opponent": 0,
        "me": 0
    };
    data.forEach(play => {
        calcScore(checkWin(play, false), score)
    })
    console.log('p2 score: ', score)
}

partOne();
partTwo();