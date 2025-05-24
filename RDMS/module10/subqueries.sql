-- Active: 1747800934885@@127.0.0.1@5433@ph
select *
from employees e
    JOIN departments d ON e.department_id = d.department_id;

select *
from employees e
where
    e.salary > (
        select max(salary)
        from employees e
            JOIN departments d ON e.department_id = d.department_id
        where
            d.department_name = 'HR'
    );

select *
from employees e
    join departments d on e.department_id = d.department_id
where
    d.department_name in (
        select d.department_name
        from departments d
        where
            d.department_name like '%R%'
    );