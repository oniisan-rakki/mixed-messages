// Random Number Generator
function randomNumber() {
    let randNum = Math.floor(Math.random() * 3);
    return randNum;
}

// Lists
const datasetOne = ['Who', 'What', 'Where'];
const datasetTwo = ['left', 'came', 'is'];
const datasetThree = ['work','up', 'Thabang'];

console.log(`${datasetOne[randomNumber()]} ${datasetTwo[randomNumber()]} ${datasetThree[randomNumber()]}?`)

