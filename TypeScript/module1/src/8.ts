{const user = {
id:123,
name:{
    firstName:"Tajbid",
    lastName:"Hossain"
},
contact:"+880123456789",
address:"Khulna, Bangladesh",
}

const {contact}= user;
const {firstName, lastName} = user.name;
console.log(firstName)
console.log(lastName)
console.log(contact)


const arr:string[] = ["Tajbid", "Hossain", "Khulna"];
const [first, third] = arr;
console.log(first, third);
const [ ...rest] = arr;
console.log(rest);}