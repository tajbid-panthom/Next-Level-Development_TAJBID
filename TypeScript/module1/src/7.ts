{//spread operator
//rest operator
//destructuring

const bros1 : string[] = ['John', 'Doe', 'Smith'];
const bros2 : string[] = ['Jane', 'Doe', 'Smith'];

//spread operator
bros1.push(...bros2);
console.log(bros1); // ['John', 'Doe', 'Smith', 'Jane', 'Doe', 'Smith']


const mentor1 ={
    ts:"mezba",
    redux:"mir",
    dbms:"mizan"
}

const mentor2 ={
    prima :"firoz",
    nextjs : "tonmoy",
    cloud:"nahid"
}

const mentorList={
    ...mentor1,
    ...mentor2
}

// console.log(mentorList)



//rest operator

const greetFriends = (...friends:string[])=>{
    friends.forEach((friend:string)=> console.log(`Hello ${friend}`))
}

console.log(greetFriends("John", "Doe", "Smith")) // ['John', 'Doe', 'Smith']


}