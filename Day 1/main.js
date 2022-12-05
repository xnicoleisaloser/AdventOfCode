const fs = require('fs');

function parseInventoryArray() {
    let input = fs.readFileSync("input.txt").toString()
    
    let inventoryArray = input.split("\n\n")
    let inventoryValArray = []


    let index = 0;

    for (const inventory of inventoryArray) {
        let currentInventoryCalCount = 0;

        for (const inventoryEntry of inventory.split("\n")) {
            currentInventoryCalCount += parseInt(inventoryEntry);
        }

        inventoryValArray[index] = currentInventoryCalCount;
        index++;
    }

    return inventoryValArray;
}

function getHighestCalCount(inventoryArray) {
    return inventoryArray.sort((a, b) => b - a)[0];
}

function getTopThreeInventoryValue(inventoryArray) {
    let totalValue = 0;
    
    for (const inventoryVal of inventoryArray.sort((a, b) => b - a).splice(0, 3)) {
        totalValue += inventoryVal;
    }
    
    return totalValue;
}

let inventoryArray = parseInventoryArray()

console.log(getTopThreeInventoryValue(inventoryArray));