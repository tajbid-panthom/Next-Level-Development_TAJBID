-- Active: 1747547481559@@127.0.0.1@5433@ph

delete from student where student_id = 10;

update student
set
    first_name = 'Tajbid',
    age = 21,
    grade = 'A+',
    email = 'tajbid@gmail.com'
where
    student_id = 1;

SELECT * FROM student order by student_id;