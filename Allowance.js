class BaseAccountDetails {
  #accountBalance;
  constructor(accountBalance) { this.#accountBalance = accountBalance; }
  getAccountBalance() { return this.#accountBalance; }
}
class SavingsAccountDetails extends BaseAccountDetails {
  constructor(accountBalance, monthlyAllowance) {
    super(accountBalance);
    this.monthlyAllowance = monthlyAllowance;
  }
  getMonthlyAllowance() { return this.monthlyAllowance; }
}
const mySavingsAccount = new SavingsAccountDetails(100, 20);
console.log("Balance:", mySavingsAccount.getAccountBalance(), "Allowance:", mySavingsAccount.getMonthlyAllowance());