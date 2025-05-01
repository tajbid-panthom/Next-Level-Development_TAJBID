{//ternary operator || optional chaining || nullish coalescing

const age:number = 20;

if(age > 18) {
console.log("Adult");
}
else {
console.log("Not Adult");
}

age>18 ? console.log("Adult") : console.log("Not Adult");
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
const city = person?.address?.city?.street || "Unknown City"
console.log(city); // Output: "New York"
//nullish coalescing
const {nam} = person ?? "Unknown";
console.log(nam); }