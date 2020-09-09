DROP DATABASE IF EXISTS grocery_app;

CREATE DATABASE grocery_app;

USE grocery_app;

CREATE TABLE list (
  id INTEGER(5) auto_increment PRIMARY KEY,
  item VARCHAR(20)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/