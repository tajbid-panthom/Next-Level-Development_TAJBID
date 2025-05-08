"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function formatString(input, toUpper) {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
console.log(formatString("Hello")); // Output: "HELLO"
console.log(formatString("Hello", true)); // Output: "HELLO"
console.log(formatString("Hello", false)); // Output: "hello"
function filterByRating(items) {
    return items.filter((ele) => ele.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(books));
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
function concatenateArrays(...arrays) {
    let a = [];
    arrays.forEach((ele) => a.push(...ele));
    return a;
}
console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        console.log(`Model: ${this.model}`);
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
console.log(myCar.getModel()); // Output: "Model: Corolla"
function processValue(value) {
    if (typeof value === "string")
        return value.length;
    else if (typeof value === "number")
        return value * 2;
    else
        return 0;
}
console.log(processValue("hello")); // Output: 5
console.log(processValue(10)); // Output: 20
function getMostExpensiveProduct(products) {
    products.sort((a, b) => a.price - b.price);
    return products[products.length - 1];
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Sunday || day === Day.Saturday) {
        return "Weekend";
    }
    else {
        return "Weekday";
    }
}
console.log(getDayType(Day.Monday)); // Output: "Weekday"
console.log(getDayType(Day.Sunday)); // Output: "Weekend"
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (n > 0) {
                setTimeout(() => {
                    resolve(n * n);
                }, 1000);
            }
            else {
                reject("Error: Negative number not allowed");
            }
        });
    });
}
squareAsync(4).then((data) => console.log(data));
squareAsync(-3).catch((err) => console.log(err));
