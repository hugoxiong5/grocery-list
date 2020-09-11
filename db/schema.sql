DROP DATABASE IF EXISTS grocery_app;

CREATE DATABASE grocery_app;

USE grocery_app;

CREATE TABLE list (
  id INTEGER(5) AUTO_INCREMENT PRIMARY KEY,
  item VARCHAR(255) NOT NULL
);

CREATE TABLE sublist (
  id INTEGER(5) AUTO_INCREMENT PRIMARY KEY,
  item VARCHAR(255) NOT NULL,
  list INTEGER(5),
  FOREIGN KEY (list)
    REFERENCES list(id)
    -- ON DELETE CASCADE
);

INSERT INTO list (item) VALUES ('milk');
INSERT INTO list (item) VALUES ('eggs');
INSERT INTO list (item) VALUES ('bread');

INSERT INTO sublist (item, list) VALUES ('skim', 1);
INSERT INTO sublist (item, list) VALUES ('organic', 2);
INSERT INTO sublist (item, list) VALUES ('cage-free', 2);
INSERT INTO sublist (item, list) VALUES ('sourdough', 3);
INSERT INTO sublist (item, list) VALUES ('french', 3);
INSERT INTO sublist (item, list) VALUES ('wheat', 3);

-- CREATE TABLE list3 (
--   id INTEGER,
--   name VARCHAR(255)
-- )


-- CREATE TABLE parent (
--     id INT NOT NULL AUTO_INCREMENT,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE child (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     parent_id INT,
--     FOREIGN KEY (parent_id)
--         REFERENCES parent(id)
--         ON DELETE CASCADE
-- );


-- CREATE TABLE product (
--     category INT NOT NULL, id INT NOT NULL,
--     price DECIMAL,
--     PRIMARY KEY(category, id)
-- )   ENGINE=INNODB;

-- CREATE TABLE customer (
--     id INT NOT NULL,
--     PRIMARY KEY (id)
-- )   ENGINE=INNODB;

-- CREATE TABLE product_order (
--     no INT NOT NULL AUTO_INCREMENT,
--     product_category INT NOT NULL,
--     product_id INT NOT NULL,
--     customer_id INT NOT NULL,

--     PRIMARY KEY(no),
--     INDEX (product_category, product_id),
--     INDEX (customer_id),

--     FOREIGN KEY (product_category, product_id)
--       REFERENCES product(category, id)
--       ON UPDATE CASCADE ON DELETE RESTRICT,

--     FOREIGN KEY (customer_id)
--       REFERENCES customer(id)
-- )   ENGINE=INNODB;

/*  Execute this file from the command line by typing:
 *    mysql -u root < db/schema.sql
 *  to create the database and the tables.*/