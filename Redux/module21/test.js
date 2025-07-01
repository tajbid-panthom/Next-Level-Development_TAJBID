const employee = {
  name: "Tajbid",
  address: {
    country: "Bangladesh",
    city: "Khulna",
  },
};
const employee2 = JSON.parse(JSON.stringify(employee));
employee2.address.city = "jashore";
console.log(employee);

const add = (a) => (b) => a + b;
console.log(add(5)(5));

const totalPrice = (discount) => (amount) => amount - amount * discount;
const withDiscount = totalPrice(0.1);
console.log(withDiscount(100)); // 90
console.log(withDiscount(200)); // 180
console.log(withDiscount(300)); // 270
