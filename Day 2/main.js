// Sample Input:
// C Z
// A Z
// B Z

// First Column - Oponent Move
// A - Rock
// B - Paper
// C - Scissors

// Second Column - Planned Move?
// X - Rock
// Y - Paper
// Z - Scissors

const fs = require('fs');

function parseInput() {
    let parsedInput = []

    let input = fs.readFileSync("input.txt").toString();
    let rows = input.split("\n");

    let index = 0;

    for (const row of rows) {
        parsedInput[index] = { you: row[2], opponent: row[0]}
        index += 1
    }
    
    return parsedInput
}

function normalize(input) {
    switch (input) {
        case "X":
            return "A"
        case "Y":
            return "B"
        case "Z":
            return "C"
    }

    // return input.repl`ace("X", "A").replace("Y", "B").replace("Z", "C");
}

function scoreMatch(you, opponent) {
    you = normalize(you);

    let score = 0;

    if (you == "A") {
        score += 1;
    }

    if (you == "B") {
        score += 2;
    }

    if (you == "C") {
        score += 3;
    }

    // Tie
    if (you == opponent) { score += 3; }

    if (you == "A" && opponent == "C") { score += 6 }
    if (you == "B" && opponent == "A") { score += 6 }
    if (you == "C" && opponent == "B") { score += 6 }

    return score;
}

function scoreMatchNew(endState, opponent) {
    let score = 0;
    
    let scoreMap = [];

    scoreMap["X"] = [];
    scoreMap["Y"] = [];
    scoreMap["Z"] = [];

    scoreMap["X"]["A"] = 3 + 0;
    scoreMap["X"]["B"] = 1 + 0;
    scoreMap["X"]["C"] = 2 + 0;

    scoreMap["Y"]["A"] = 1 + 3
    scoreMap["Y"]["B"] = 2 + 3
    scoreMap["Y"]["C"] = 3 + 3

    scoreMap["Z"]["A"] = 2 + 6;
    scoreMap["Z"]["B"] = 3 + 6;
    scoreMap["Z"]["C"] = 1 + 6;

    return scoreMap[endState][opponent];
}

let totalScore = 0;
let totalScoreNew = 0;

for (const match of parseInput()) {
    totalScore += scoreMatch(match.you, match.opponent);
    totalScoreNew += scoreMatchNew(match.you, match.opponent);
}

console.log(totalScoreNew)