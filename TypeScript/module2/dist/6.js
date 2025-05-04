"use strict";
{
    //constrains
    const addCourse = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    // const student3 = addCourse({ emni: "emni" });
    const student1 = addCourse({
        id: 123,
        name: "Tajbid",
        age: 21,
        devType: "NLWD",
    });
    const student2 = addCourse({
        id: 123,
        name: "Hossain",
        age: 21,
        hasWatch: "Apple",
    });
}
