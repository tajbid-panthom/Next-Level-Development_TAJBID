-- Active: 1747800934885@@127.0.0.1@5433@ph

--show timezone:
select now(), current_setting('timezone');

show timezone;

select CURRENT_DATE;

select current_time;

select now()::date;

select now()::time;

select now()::timestamp;

select to_char( now(), 'YYYY-MM-DD HH24:MI:SS' );

select CURRENT_DATE - INTERVAL '1 year';

select age (CURRENT_DATE, '2004-04-17');

select extract( year from '2025-05-23'::date )