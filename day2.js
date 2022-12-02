const adventOfCode = require("./aoc");
const data = new adventOfCode("day2.txt").data.split(/\n/).map(str => str.split(" "));

const score = {
    "opponent": 0,
    "me": 0
};

const code = {
    "A": 1,
    "B": 2,
    "C": 3,
    "X": 1,
    "Y": 2,
    "Z": 3
};

function checkWin([opponent, me]) {
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

const calcScore = ({ opponentPlay, myPlay, outcome, winner }) => {
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

data.forEach(play => {
    calcScore(checkWin(play))
})

console.log('final score: ', score)