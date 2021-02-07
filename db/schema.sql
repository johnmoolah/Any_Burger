DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

--If table already exists, remove it before creating the table again
DROP TABLE IF EXISTS burgers;

--Creates the burgers table
CREATE TABLE burgers(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);