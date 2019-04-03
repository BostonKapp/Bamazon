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


function userStart() {
  
    inquirer.prompt([
  {
      type: `input`,
      name:`choice`,
      message: "Please pick an item ID number 1-10",
      validate: function(value) {
        if (isNaN(value) == false && parseInt(value) <= results.length && parseInt(value) > 0) {
            return true;
        } else {
            console.log('choose an item! please enter the product ID to put it in your cart');
            return false;
        }
    },
      filter: Number
  },
  {
      type: `input`,
      name:`quantity`,
      message: "How many do you want to buy?",
      validate: function(value) {
        if (isNaN(value) == false && parseInt(value) <= results.length && parseInt(value) > 0) {
            return true;
        } else {
            console.log('Incorrect number selected');
            return false;
        }
    },
      filter:Number
  },
    ])
    .then(function (answer) {

      var productSelected = answer.choice;
      var quantitySelected = answer.quantity;
    
      console.log(productSelected);
      console.log(quantitySelected);
      //Just inserted
      var queryStr = "SELECT * FROM products WHERE ?";

      connection.query(queryStr, {product_name: productSelected}, function(err,data) {
        if(err) throw err;

        if (data.length === 0) {
          console.log("Invalid Item ID");
          displayInventory();
        }
        else {
          var productData = data[0];

          if (quantity <= productData.stock_quantity) {
            console.log("That product is in stock! Placing order!");

            var updateQueryStr = "UPDATE products SET stock_quantity =" + (productData.stock_quantity - quantity) + "WHERE product_name =" + item;

            connection.query(updateQueryStr, function(err, data) {
              if (err) throw err;
              console.log("Thanks for stopping by");
              connection.end(); 
            })
            
          }
          else{ 
            displayInventory();
          }

        }
      })
    }
      )}
    });

    function displayInventory(){
      
    }
    
    // Run the application logic
    // runBamazon();

      // if(answer.input) {
      //   "Choose item"
      //   select();
      //   connection.query()
      // } 
      // else {
      //   "Exit"
      //   console.log("Goodbye")
      //   connection.end()
    //   }
    // })
        //query select
        //for loop for answers