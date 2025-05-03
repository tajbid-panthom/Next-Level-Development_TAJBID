"use strict";
//function with generic
const createArray = (params) => {
    return [params];
};
const createArrayWithGenerics = (params) => {
    return [params];
};
const result1 = createArray("bng");
const result2 = createArrayWithGenerics(true);
const result3 = createArrayWithGenerics({ name: "Tajbid", age: 21 });
const createArrayWithTuple = (param1, param2) => {
    return [param1, param2];
};
const result22 = createArrayWithTuple(true, { name: "Tajbid", age: 21 });
const result33 = createArrayWithTuple({ name: "Tajbid", age: 21 }, true);
const addCourse = (student) => {
    const course = "Next Level Web Development";
    return Object.assign(Object.assign({}, student), { course });
};
const student1 = addCourse({ name: "Tajbid", age: 21 });
console.log(student1);
