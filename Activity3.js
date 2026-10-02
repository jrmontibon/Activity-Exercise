const storeNameTitle = "Downtown Market";
const salesTaxRate = 0.05;
const highSaleThreshold = 100;
const currencySymbol = "USD";
const dailyRegisterSales = [50, 120, 80];
let totalDailyRevenue = 0;
for (let index = 0; index < dailyRegisterSales.length; index++) { totalDailyRevenue += dailyRegisterSales[index]; }
for (let saleAmount of dailyRegisterSales) { 
  if (saleAmount > highSaleThreshold) console.log("Item 14 High sale found:", `${saleAmount} ${currencySymbol}`); 
}
console.log("Item 14 Total:", `${totalDailyRevenue} ${currencySymbol} at ${storeNameTitle}`);