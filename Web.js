class WebsiteUser {
  constructor(accountName, accountRole) {
    this.accountName = accountName;
    this.accountRole = accountRole || "Guest";
  }
  getAccountSummary() { return `User Name: ${this.accountName} (${this.accountRole})`; }
}
const adminAccount = new WebsiteUser("Alice", "Admin");
const guestAccount = new WebsiteUser("Bob");
const editorAccount = new WebsiteUser("Carl", "Editor");
console.log(`${adminAccount.getAccountSummary()}`, "|", `${guestAccount.getAccountSummary()}`);