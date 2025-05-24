-- Active: 1747800934885@@127.0.0.1@5433@ph
create function taj()
returns int 
LANGUAGE SQL
AS
$$
    select count(*) from employees ;
$$;

select taj ();

select * from employees;

create or replace function taj2()
return void
LANGUAGE SQL
AS
$$
    delete from employees where employee_id = 30;
$$;

select taj2 ();

create or replace function taj2(emp_id int)
return void
LANGUAGE SQL
AS
$$
    delete from employees where employee_id = emp_id;
$$;

select taj3 (30)