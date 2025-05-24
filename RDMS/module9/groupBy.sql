-- Active: 1747800934885@@127.0.0.1@5433@ph

select
    avg(score) avg_grade,
    count(*) num_students,
    department
from UniStudent
GROUP BY
    department;

select * from UniStudent;

select count(*), age from UniStudent group by age;