//require the following
var inquirer = require("inquirer");
var mysql = require("mysql");
var express =  require("express");

//create connection to mysql
var connection = mysql.createConnection({
    host: "localhost",
  
    port:3306,
  
    user: "root",
  
    password: "root",
    database: "bamazon_db"
  });
  connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  });

connection.query(`SELECT * FROM products`,
function(error, results, fields) {
    if (error) {
        console.log(error);
    }
    else {
        console.table(results)
        userStart();
    }
});

function userStart() {
  
    inquirer.prompt([
  {
      type: `input`,
      name:`input`,
      message: "Please pick an item ID number 1-10",
      validate: `validateInput`,
      filter: Number
  
  }
    ])
  };