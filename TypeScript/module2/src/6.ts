{
  //constrains

  const addCourse = <T extends { id: number; name: string; age: number }>(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
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
