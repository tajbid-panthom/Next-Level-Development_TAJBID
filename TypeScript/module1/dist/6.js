"use strict";
{ //learning funciton
    function add(a, b) {
        return a + b;
    }
    add(2, 3);
    const addArrow = (a, b) => a + b;
    addArrow(2, 3);
    const addDefault = (a, b = 2) => a + b;
    addDefault(2);
    addDefault(2, 3);
    //function overloading
    const addOverload = (a, b) => {
        return a + b;
    };
    console.log(addOverload(2, 3)); // 5
    addOverload("Tajbid", "Hossain"); // "TajbidHossain"
    const poorUser = {
        name: "Tajbid",
        balance: 0,
        addBalance(balance) {
            return this.balance += balance;
        }
    };
    console.log(poorUser.addBalance(100));
    console.log(poorUser.balance);
    console.log(poorUser.addBalance(200));
    console.log(poorUser.balance);
}
