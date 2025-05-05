{
  //access modifiers

  class BankAccount {
    public readonly id;
    name: string;
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    addDeposit(amount: number) {
      this._balance += amount;
    }
    getBalance() {
      return this._balance;
    }
  }

  class Student extends BankAccount {
    constructor(id: number, name: string, balance: number) {
      super(id, name, balance);
    }

    getBalance(): number {
      return this._balance;
    }
  }

  const goribManush = new BankAccount(1, "Tajbid", 1000);
  goribManush.addDeposit(200);
  console.log(goribManush.getBalance()); // 1200
}
