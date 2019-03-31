DROP DATABASE IF EXISTS bamazon_db;

Create Database bamazon_db;

Use Database bamazon_db;

Create Table Products(
    id integer not null auto_increment,
    product_name varchar(75) not null,
    department_name varchar(75) not null,
    product_price decimal(10,2) Not null,
    stock_quantity Integer(10) not null
)

Insert Into Products(product_name, department_name, product_price, stock_quantity)
Values("Dvd Player", "Electronics", 50, 100);

Insert Into Products(product_name, department_name, product_price, stock_quantity)
Values("Chocolate", "Food", 25, 35)

Insert Into Products(product_name, department_name, product_price, stock_quantity)
Values("Bike", "Sporting Goods", 175, 50)

Insert Into Products(product_name, department_name, product_price, stock_quantity)
Values("Bowling Ball", "Sporting Goods", 100, 3)

Insert Into Products(product_name, department_name, product_price, stock_quantity)
Values("", "", ,)

Insert Into Products(product_name, department_name, product_price, stock_quantity)
Values("", "", ,)

Insert Into Products(product_name, department_name, product_price, stock_quantity)
Values("", "", ,)