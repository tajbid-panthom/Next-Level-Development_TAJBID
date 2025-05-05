"use strict";
{
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        //getter
        get Balance() {
            return this._balance;
        }
        //setter
        set Deposit(value) {
            this._balance += value;
        }
    }
    const goribManush = new BankAccount(1, "Tajbid", 1000);
    // goribManush.addDeposit(200);
    // console.log(goribManush.getBalance());
    console.log(goribManush.Balance);
    goribManush.Deposit = 200;
    console.log(goribManush.Balance);
}
