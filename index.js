const express = require("express");
// get sequelize connection from config file
const sequelize = require("./config");
// import the department routes
const departmentRoutes = require("./routes/department");
const employeeRoutes = require("./routes/employee");
const studentsRoutes = require("./routes/student");
const authRoutes = require("./routes/auth");
const fileRoutes = require("./routes/files");
var cors = require("cors");
const verifyToken = require("./middlewares/auth");
const app = express();
// this allows working with url encoded data
app.use(express.urlencoded({ extended: true }));
// this allows working with json data
app.use(express.json());
// enable CORS for all routes
app.use(cors());

// Public routes (unprotected)
app.use(authRoutes);

// Apply JWT auth to all routes below this line
app.use(verifyToken);
// Protected routes (require authentication)
app.use(departmentRoutes);
app.use(employeeRoutes);
app.use(studentsRoutes);
app.use(fileRoutes);
// testing database connection (asyncronous operation)
sequelize
  .sync() // sync creates the table if it does not exist in the database
  .then(() => {
    console.log("connection has been established successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 3000, () => {
  console.log("listening to port 3000");
});
