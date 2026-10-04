class StoreItem { constructor(itemPrice) { this.itemPrice = itemPrice; } }
class ShoppingCart {
  constructor() { this.cartItems = []; }
  addItemToCart(itemInstance) {
    if (itemInstance.itemPrice > 0) this.cartItems.push(itemInstance);
  }
  calculateTotal() {
    let totalSum = 0;
    for (let itemObj of this.cartItems) {
      if (itemObj.itemPrice < 100) totalSum += itemObj.itemPrice;
    }
    return totalSum;
  }
}
const cheapBook = new StoreItem(30);
const expensivePhone = new StoreItem(150);
const userCart = new ShoppingCart();
userCart.addItemToCart(cheapBook);
userCart.addItemToCart(expensivePhone);
console.log("Cart Total:", userCart.calculateTotal());