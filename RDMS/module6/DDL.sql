-- Active: 1747547481559@@127.0.0.1@5433@ph

select * from person;

alter table person add COLUMN email VARCHAR(55);

alter table person
alter COLUMN email
set DEFAULT 'default@gmail.com';

update person set email = 'tajbid@gmail.com' WHERE id = 1;

insert into person (user_name, age) values ('hossain', 21);

insert into person (user_name, age) values ('md', 21);

alter table person
add constraint unique_person_user_name UNIQUE (user_name);

alter table person drop constraint unique_person_user_name;