-- Active: 1747800934885@@127.0.0.1@5433@ph
CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(50),
    department_id INT,
    salary DECIMAL(10, 2),
    hire_date DATE,
    FOREIGN KEY (department_id) REFERENCES departments (department_id)
);

CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(50)
);

select * from employees;

select * from departments;

-- query0
select * from employees e NATURAL join departments d;

-- query1
select *
from employees e
    JOIN departments d ON e.department_id = d.department_id;

-- query2
select d.department_name, avg(e.salary)
from employees e
    JOIN departments d ON e.department_id = d.department_id
group by
    d.department_name;

-- query3
select d.department_name, count(*)
from employees e
    JOIN departments d ON e.department_id = d.department_id
group by
    d.department_name;

-- query4
select d.department_name, avg(e.salary)
from employees e
    JOIN departments d ON e.department_id = d.department_id
group by
    d.department_name
order by avg(e.salary) desc
LIMIT 1;

-- query5
select extract(
        year
        from e.hire_date
    ) as hire, count(*)
from employees e
GROUP BY
    hire;

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    total_amount DECIMAL(10, 2)
);

select * from orders;

-- query6
select customer_id, count(*), sum(total_amount) as total
from orders
group by
    customer_id
having
    count(*) > 2;

-- query7
select extract(
        month
        from order_date
    ) as month, count(*)
from orders
where
    extract(
        year
        from order_date
    ) = 2022
group by
    month