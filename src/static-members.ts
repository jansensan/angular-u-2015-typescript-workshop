// DEFINING STATIC MEMBERS
class BankAccount {
  private static accountNumber:number = 1234;
  
  static getAccountNumber():number {
    return BankAccount.accountNumber;
  }
}

console.log('BankAccount.getAccountNumber(): ' + BankAccount.getAccountNumber());