

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = createConnection({

  host: "localhost",

  port: 3306,

  user: "root",

  password: "root",

  database: "bamazon"

})

function start(){

connection.query('SELECT * FROM Products', function(err, res){

  if(err) throw err;


  for(var i = 0; i<res.length;i++){

    console.log("ID: " + res[i].Item_ID + " | " + "Product: " + res[i].Product_Name + " | " + "Department: " + res[i].DepartmentName + " | " + "Price: " + res[i].Price + " | " + "QTY: " + res[i].StockQuantity);

  }


    prompt([

    {

      type: "input",

      name: "id",

      message: "What is the ID of the product you would like to purchase?",

      validate: function(value){

        if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){

          return true;

        } else{

          return false;

        }

      }

    },

    {

      type: "input",

      name: "qty",

      message: "How much would you like to purchase?",

      validate: function(value){

        if(isNaN(value)){

          return false;

        } else{

          return true;

        }

      }

    }

    ]).then(function(ans){

      var whatToBuy = (ans.id)-1;

      var howMuchToBuy = parseInt(ans.qty);

      var grandTotal = parseFloat(((res[whatToBuy].Price)*howMuchToBuy).toFixed(2));

     

      if(res[whatToBuy].StockQuantity >= howMuchToBuy){

        
        connection.query("UPDATE Products SET ? WHERE ?", [

        {StockQuantity: (res[whatToBuy].StockQuantity - howMuchToBuy)},

        {ItemID: ans.id}

        ], function(err, result){

            if(err) throw err;

            console.log("Total is $" + grandTotal.toFixed(2) + "Item Shipped")
        });



        connection.query("SELECT * FROM Departments", function(err, deptRes){

          if(err) throw err;

          var index;

          for(var i = 0; i < deptRes.length; i++){

            if(deptRes[i].DepartmentName === res[whatToBuy].DepartmentName){

              index = i;

            }

          }

          
          connection.query("UPDATE Departments SET ? WHERE ?", [

          {TotalSales: deptRes[index].TotalSales + grandTotal},

          {DepartmentName: res[whatToBuy].DepartmentName}

          ], function(err, deptRes){

              if(err) throw err;

              
          });

        });



      } else{

        console.log("Out of Stock");

      }

      reprompt();

    })

})

}



function reprompt(){

    prompt([{

    type: "confirm",

    name: "reply",

    message: "Another Item?"

  }]).then(function(ans){

    if(ans.reply){

      start();

    } else{

      console.log("Thankyou!");

    }

  });

}



start();