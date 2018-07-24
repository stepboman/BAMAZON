DROP DATABASE IF EXISTS bamazon;



CREATE DATABASE bamazon;



USE bamazon;



CREATE TABLE products (

    item_id INT NOT NULL AUTO_INCREMENT,

    product_name VARCHAR(50) NOT NULL,

    department_name VARCHAR(50) NOT NULL,

    price INT(10) NOT NULL,

    stock_quantity INT(10) NOT NULL,

    PRIMARY KEY(item_id)

);



INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES("Samsung TV", "Electronics", 150, 20);



INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES("PS2", "Electronics", 99, 30);



INSERT INTO products (product_name, department_name, price, stock_quantity) 

VALUES("Nikon Camera", "Electronics", 141, 15);



INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES("DVD Player", "Electronics", 20, 30);



INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES("X Plane", "Games", 25, 45);



INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES("Snakes and Ladders", "Games", 12, 25);



INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES("Monopoly ", "Games", 15, 30);



INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES("Lego", "Toys", 15, 20);



INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES("Shirt", "Apparel", 10, 25);



INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES("Dress", "Apparel", 9, 35);