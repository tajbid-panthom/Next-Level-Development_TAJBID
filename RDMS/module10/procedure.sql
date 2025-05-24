-- Active: 1747800934885@@127.0.0.1@5433@ph
create procedure taj4()
LANGUAGE plpgsql
AS
$$  
declare
    emp_count int;
    begin
    select count(*) into emp_count from employees ;
    raise notice 'Total employees: %', emp_count;
    end
$$;

select * from employees;

drop PROCEDURE taj4;

call taj4 ();