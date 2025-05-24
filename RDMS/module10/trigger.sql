-- Active: 1747800934885@@127.0.0.1@5433@ph
/*
A trigger is a database object in PostgreSQL (and other database management systems) that automatically executes a specified set of actions in response to certain database events or conditions. 
*/

-- Table-Level Events:
-- INSERT, UPDATE, DELETE, TRUNCATE
-- Database-Level Events
-- Database Startup, Database Shutdown, Connection start and end etc

-- CREATE TRIGGER trigger_name
-- {BEFORE | AFTER | INSTEAD OF} {INSERT | UPDATE | DELETE | TRUNCATE}
-- ON table_name
-- [FOR EACH ROW]
-- EXECUTE FUNCTION function_name();

CREATE Table my_users (
    user_name VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO
    my_users
VALUES ('Mezba', 'mezba@mail.com'),
    ('Mir', 'mir@mail.com');

SELECT * from my_users;

SELECT * from deleted_users_audit;

CREATE Table deleted_users_audit (
    deleted_user_name VARCHAR(50),
    deletedAt TIMESTAMP
)

create or replace function save_deleted_user()
returns trigger
language plpgsql 
as 
$$
begin
    insert into deleted_users_audit(deleted_user_name, deletedAt)
    values (old.user_name, now());
    raise notice 'Deleted user audit log created.';
    return old;
end;
$$;

create trigger save_deleted_user_trigger
before delete
on my_users
for each row
execute function save_deleted_user();

delete from my_users where user_name = 'Mezba';