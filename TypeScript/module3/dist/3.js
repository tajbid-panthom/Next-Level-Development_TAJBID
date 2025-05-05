"use strict";
{
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and I am ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name} and I am member`);
        }
    };
    const normaluser = { name: "Member" };
    const adminuser = { name: "Admin", role: "admin" };
    getUser(normaluser);
    getUser(adminuser);
}
