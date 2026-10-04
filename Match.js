let totalMatchingItems = 0;
let totalDifferentItems = 0;
const sampleListOne = [1, 2];
const sampleListTwo = [1, 3];
const matchingItemsList = [];
for (let index = 0; index < sampleListOne.length; index++) {
  if (sampleListOne[index] === sampleListTwo[index]) {
    totalMatchingItems++;
    matchingItemsList.push(sampleListOne[index]);
  } else if (sampleListOne[index] !== sampleListTwo[index]) {
    totalDifferentItems++;
  }
}
console.log("Matches:", matchingItemsList, "Differences:", totalDifferentItems);