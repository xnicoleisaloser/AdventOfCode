const fs = require('fs');

function calculatePriority(char) {
    if (char.toLowerCase() == char) {
        return char.charCodeAt(0) - 96
    }
    else {
        return char.charCodeAt(0) - 38
    }
}

let rawInput = fs.readFileSync('input.txt').toString();
let priority = 0; 
let secondPriority = 0;

let count = 3;
let index = -1;
let secondInput = []

for (let line of rawInput.split('\n')) {
    if (count >= 3) {
        count = 0;
        index += 1;
        secondInput[index] = [];
    }

    let first = line.slice(0, line.length / 2);
    let second = line.slice(line.length / 2, line.length);

    for (const char of first) {
        if (second.includes(char)) {
            priority += calculatePriority(char);
            break;
        }
    }

    secondInput[index][count] = line;

    count += 1;
}

for (const group of secondInput) {
    for (const char of group[0]) {
        if(group[1].includes(char) && group[2].includes(char)) {
            secondPriority += calculatePriority(char);
            break;
        }
    }
}

console.log(priority);
console.log(secondPriority);