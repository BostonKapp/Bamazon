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
    console.log(res);
  });
  
  //a function to promt the user input of what item id they want.
  function userStart() {
  
    inquirer.prompt([
  {
      type: input,
      message: "Please pick an item ID number 1-10",
      validate: validateInput,
      filter: Number
  
  }
    ])
  };
  userStart();
  //prompt a message to see how many untits the customer wants to buy
  
  //create  function to see if the quantity requested can be fufilled by bamazon
  
  //create a function to update the data base with the new quantity and give the customer the total