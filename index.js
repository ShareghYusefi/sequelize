const express = require("express");
// get sequelize connection from config file
const sequelize = require("./config");
const app = express();

// import the department model
const Department = require("./models/department");

// get all departments
app.get("/departments", (req, res) => {
  Department.findAll()
    .then((deparment) => {
      res.status(200).send(deparment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error)");
    });
});

// testing database connection (asyncronous operation)
sequelize
  .sync() // sync creates the table if it does not exist in the database
  .then(() => {
    console.log("connection has been established successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("listening to port 3000");
});
