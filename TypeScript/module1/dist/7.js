"use strict";
{ //spread operator
    //rest operator
    //destructuring
    const bros1 = ['John', 'Doe', 'Smith'];
    const bros2 = ['Jane', 'Doe', 'Smith'];
    //spread operator
    bros1.push(...bros2);
    console.log(bros1); // ['John', 'Doe', 'Smith', 'Jane', 'Doe', 'Smith']
    const mentor1 = {
        ts: "mezba",
        redux: "mir",
        dbms: "mizan"
    };
    const mentor2 = {
        prima: "firoz",
        nextjs: "tonmoy",
        cloud: "nahid"
    };
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    // console.log(mentorList)
    //rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hello ${friend}`));
    };
    console.log(greetFriends("John", "Doe", "Smith")); // ['John', 'Doe', 'Smith']
}
