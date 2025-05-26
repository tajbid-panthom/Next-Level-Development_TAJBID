-- Active: 1747800934885@@127.0.0.1@5433@conservation_db
create DATABASE conservation_db;

create table rangers (
    ranger_id serial primary key,
    name varchar(50) not null,
    region varchar(50) not null
);

create type conservation as ENUM ('ENDANGERED','VULNERABLE','Historic');

create table species (
    species_id serial primary key,
    common_name varchar(50) not null,
    scientific_name varchar(70) not null,
    discovery_date date not null,
    conservation_status conservation not null
);

create table sightings (
    sighting_id serial primary key,
    ranger_id int,
    species_id int,
    location varchar(100) not null,
    sighting_time timestamp not null,
    notes text default null,
    foreign key (ranger_id) references rangers (ranger_id),
    foreign key (species_id) references species (species_id)
);

insert into
    rangers (name, region)
values (
        'Alice Green',
        'Northern Hills'
    ),
    ('Bob White', 'River Delta'),
    (
        'Carol King',
        'Mountain Range'
    );

insert into
    species (
        common_name,
        scientific_name,
        discovery_date,
        conservation_status
    )
values (
        'Snow Leopard',
        'Panthera uncia',
        '1775-01-01',
        'ENDANGERED'
    ),
    (
        'Bengal Tiger',
        'Panthera tigris tigris',
        '1758-01-01',
        'ENDANGERED'
    ),
    (
        'Red Panda',
        'Ailurus fulgens',
        '1825-01-01',
        'VULNERABLE'
    ),
    (
        'Asiatic Elephant',
        'Elephas maximus indicus',
        '1758-01-01',
        'ENDANGERED'
    );

INSERT INTO
    sightings (
        species_id,
        ranger_id,
        location,
        sighting_time,
        notes
    )
VALUES (
        1,
        1,
        'Peak Ridge',
        '2024-05-10 07:45:00',
        'Camera trap image captured'
    ),
    (
        2,
        2,
        'Bankwood Area',
        '2024-05-12 16:20:00',
        'Juvenile seen'
    ),
    (
        3,
        3,
        'Bamboo Grove East',
        '2024-05-15 09:10:00',
        'Feeding observed'
    ),
    (
        1,
        2,
        'Snowfall Pass',
        '2024-05-18 18:30:00',
        NULL
    );

-- Problem 1

insert into
    rangers (name, region)
values ('Derek Fox', 'Coastal Plains');

-- Problem 2
select count(*) unique_species_count
from (
        select species_id
        from sightings
        group by
            species_id
    );

-- Problem 3
select * from sightings where location like '%Pass%';

-- Problem 4
select r.name, count(*) total_sightings
from rangers r
    join sightings s on r.ranger_id = s.ranger_id
group by
    r.ranger_id
order by r.name;

-- Problem 5
select sp.common_name
from species sp
    left join sightings si on sp.species_id = si.species_id
where
    si.sighting_id is null;

-- Problem 6
select sp.common_name, si.sighting_time, r.name
from
    rangers r
    join sightings si on r.ranger_id = si.ranger_id
    join species sp on sp.species_id = si.species_id
order by si.sighting_time desc
limit 2;

-- Problem 7
update species
set
    conservation_status = 'Historic'
where
    extract(
        year
        from discovery_date
    ) < 1800;

-- Problem 8
select
    sighting_id,
    case
        when extract(
            hour
            from sighting_time
        ) between 0 and 11  then 'Morning'
        when extract(
            hour
            from sighting_time
        ) between 12 and 16  then 'Afternoon'
        when extract(
            hour
            from sighting_time
        ) between 17 and 23  then 'Evening'
    end as time_of_day
from sightings;

-- Problem 9
delete from rangers
where
    ranger_id = (
        select r.ranger_id
        from rangers r
            left join sightings si on r.ranger_id = si.ranger_id
        where
            si.sighting_id is null
    );