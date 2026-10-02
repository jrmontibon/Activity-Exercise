let totalStockCount = 10;
let restockNeededCount = 0;
let emptyStockCount = 0;
const storeInventory = [5, 0, 12];
const emptyItemIndexes = [];
for (let index = 0; index < storeInventory.length; index++) {
  if (storeInventory[index] === 0) {
    emptyStockCount++;
    emptyItemIndexes.push(index);
  } else if (storeInventory[index] < 10) {
    restockNeededCount++;
  }
}
console.log("Item 4:", "Out of stock:", emptyStockCount, "Restock needed:", restockNeededCount);