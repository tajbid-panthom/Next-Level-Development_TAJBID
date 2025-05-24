-- Active: 1747800934885@@127.0.0.1@5433@ph
select * from employees;

explain analyse
select *
from employees
where
    employee_name = 'Emma Martinez';

create index id_employee_name on employees (employee_name);

show data_directory;