// GETTERS / SETTERS
class Account {
  _balance: number = 0;
  
  get balance() {
    return this._balance;
  }
  
  set balance(value:number) {
    this._balance = value;
  }
}

var account = new Account();
account.balance = 10.25;
console.log('account.balance: ' + account.balance);