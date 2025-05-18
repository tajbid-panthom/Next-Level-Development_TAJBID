-- Active: 1747547481559@@127.0.0.1@5433@ph
create table student (
    student_id SERIAL PRIMARY KEY,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    age INT,
    grade VARCHAR(2),
    course VARCHAR(50),
    email VARCHAR(50),
    dob DATE,
    blood_group VARCHAR(5),
    country VARCHAR(50)
);

SELECT grade, max(student_id) sc
FROM student
GROUP BY
    grade
ORDER BY max(student_id) DESC;

select DISTINCT blood_group from student;

SELECT student_id, first_name
FROM student
WHERE
    length(first_name) = (
        SELECT max(length(first_name))
        from student
    );

SELECT *
FROM student
WHERE
    grade IN ('A', 'B')
    AND course IN ('Physics', 'Chemistry');

select concat(first_name, ' ', last_name) FROM student;

SELECT * FROM student LIMIT 5;

SELECT * FROM student OFFSET 5;

SELECT * FROM student LIMIT 5 OFFSET 5 * 1;

select * from student;
-- Pegintation formula
-- LIMIT page_size OFFSET (page_number - 1) * page_size;