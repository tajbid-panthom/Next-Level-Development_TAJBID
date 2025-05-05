"use strict";
{
    //access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount) {
            this._balance += amount;
        }
        getBalance() {
            return this._balance;
        }
    }
    class Student extends BankAccount {
        constructor(id, name, balance) {
            super(id, name, balance);
        }
        getBalance() {
            return this._balance;
        }
    }
    const goribManush = new BankAccount(1, "Tajbid", 1000);
    goribManush.addDeposit(200);
    console.log(goribManush.getBalance()); // 1200
}
