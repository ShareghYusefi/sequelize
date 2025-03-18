// router is used to create routes in express in a separate file
const router = require("express").Router();
// import the department model
const Department = require("../models/department");

// get all departments
router.get("/departments", (req, res) => {
  Department.findAll()
    .then((deparments) => {
      res.status(200).send(deparments);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error)");
    });
});

// export the router
module.exports = router;
