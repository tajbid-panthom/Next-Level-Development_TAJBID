"use strict";
var _a, _b;
{ //ternary operator || optional chaining || nullish coalescing
    const age = 20;
    if (age > 18) {
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
    age > 18 ? console.log("Adult") : console.log("Not Adult");
    //optional chaining
    const person = {
        nam: "John",
        age: 30,
        address: {
            city: {
                street: "",
                zip: "10001"
            },
            country: "USA"
        }
    };
    const city = ((_b = (_a = person === null || person === void 0 ? void 0 : person.address) === null || _a === void 0 ? void 0 : _a.city) === null || _b === void 0 ? void 0 : _b.street) || "Unknown City";
    console.log(city); // Output: "New York"
    //nullish coalescing
    const { nam } = person !== null && person !== void 0 ? person : "Unknown";
    console.log(nam);
}
