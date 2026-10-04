class StorageBox {
  #storedItemName;
  constructor(storedItemName) { this.#storedItemName = storedItemName; }
  getItemName() { return this.#storedItemName; }
}
class TravelBag {
  #storedItemName;
  constructor(storedItemName) { this.#storedItemName = storedItemName; }
  getItemName() { return this.#storedItemName; }
}
const woodBox = new StorageBox("Textbook");
const leatherBag = new TravelBag("Pen");
console.log("Bag: ", woodBox.getItemName(), "|", leatherBag.getItemName());