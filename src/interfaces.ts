interface ISettings {
  id: string;
  field: string;
}

interface IMessage {
  greeting:string;
}

interface IGreet {
  greet(message:IMessage):void;
}


interface IAccountInfo {
  routingNumber:string;
  bankNumber:number;
}

interface IAccountActions {
  deposit(amount:number):void;
  withdraw(amount:number):number;
}

interface IAccount extends IAccountActions {
  accountInfo:IAccountInfo;
  deposit(amount:number):void;
  withdraw(amount:number):number;
}