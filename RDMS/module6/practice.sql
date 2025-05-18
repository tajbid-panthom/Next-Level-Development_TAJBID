-- Active: 1747547481559@@127.0.0.1@5433@ph
-- Step 1: Create ENUM type first (PostgreSQL only)
CREATE TYPE status_enum AS ENUM ('passed', 'failed');

-- Step 2: Create table using the enum
CREATE TABLE UniStudent (
    id SERIAL PRIMARY KEY,
    roll INT UNIQUE,
    name VARCHAR(255),
    age INT,
    department VARCHAR(255),
    score INT,
    status status_enum,
    last_login DATE DEFAULT CURRENT_DATE
);

SELECT * FROM UniStudent;

-- task 1
alter table UniStudent add COLUMN email VARCHAR(255);
-- task 2
alter table UniStudent RENAME COLUMN email to student_email;
-- task 3
alter table UniStudent
add constraint unique_UniStudent_student_email UNIQUE (student_email);
-- task 4
create table courses (
    course_id VARCHAR(50) PRIMARY KEY
)
-- task 5
drop Table courses;
-- task 6
select * from UniStudent where score > 80 and score is not null;

-- task 7
select * from UniStudent where not department = 'CSE';
-- task 8
select * from UniStudent where "name" ilike 'A%';
-- task 9
select * from UniStudent where age BETWEEN 18 and 25;

-- task 10
select * from UniStudent where roll in (1001, 1005);
-- task 11
select count(*) from UniStudent;
-- task 12
select avg(score), department from UniStudent group by department;
-- task 13
SELECT max(age), min(age) from UniStudent;
-- task 14
update UniStudent set "status" = 'failed' where score < 50;
-- task 15
DELETE FROM UniStudent WHERE last_login < '2024-10-01';
-- task 16
select * from UniStudent limit 5 offset 5 * 1;