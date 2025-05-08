
# What is the use of enums in TypeScript?

Enums in ts are used to define a set of named values. If we have some fixed values and we want to seleect any of them then we can use enums.The enums values are strongly typed that's why the ts complier checks at compile time emums values.

=====================================

### Example of numeric Enum in TypeScript

```bash
enum Color{
    red, //0
    green, //1
    blue //2
}
let color1 :Color = Color.red;
console.log(color1); //0
console.log(Color[2]) //blue
```
The Color enums has three values red, green and blue. The values are 0, 1 and 2 respectively. By selecting the color red we can get the value 0 if it is green then 1 and if it is blue then 2.
Another thing is that we can also get the value of enum by using the index of enum. Like Color[2] will give the value of blue which is 2.

=====================================

### Example of string Enum in TypeScript
```bash
enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest"
}

let role: Role = Role.Admin;
console.log(role);  
```
The Role enum with three values Admin, User and Guest. The values are admin, user and guest respectively. By selecting the role Admin we can get the value  "value", it's functions are working as color nums.


=====================================


# Example of using union and intersection types in TypeScript.
Union types are used to define a value that can be one of several types. Intersection types are used to
define to select all the type and all properties.

```bash
type FTDev = {
    skills:string[],
    designation1:"FrontendDeveloper",
    
}
type BKDev = {
    skills:string[],
    designation2:"BackendDeveloper",
}
type FTDevOrBKDev = FTDev | BKDev; //union
type FSDev = FTDev & BKDev; //intersection

const newDeveloper1:FTDevOrBKDev={ // either FTDev or BKDev
    skills:["HTML","CSS","JavaScript","React"],
    designation1:"FrontendDeveloper",
}
const newDeveloper2:FTDevOrBKDev={ //either FTDev or BKDev
    skills:["NodeJS"],
    designation2:"BackendDeveloper",
}
const newDeveloper3:FTDevOrBKDev={ // or  both type can be included
    skills:["HTML","CSS","JavaScript","React","NodeJS"],
    designation1:"FrontendDeveloper",
    designation2:"BackendDeveloper",
}

const fullStackDev:FSDev={ // both must be included
    skills:["HTML","CSS","JavaScript","React","NodeJS"],
    designation1:"FrontendDeveloper",
    designation2:"BackendDeveloper",
}

```
