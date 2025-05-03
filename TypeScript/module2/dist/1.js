"use strict";
{ //type assertion
    let anything;
    anything = true;
    anything = "Next level web development";
    console.log(anything.toUpperCase());
    const kgToGm = (value) => {
        if (typeof value === "string") {
            return `The value is ${parseFloat(value) * 1000}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(100);
    console.log(result1);
    const result2 = kgToGm("100");
    console.log(result2);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
