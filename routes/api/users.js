const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Importing Users Model
const User = require("../../models/User");

/*
  Route: GET to api/users/test
  Description: Test Route to Users
  Access: public
*/
router.get("/test", (req, res) => {
  res.json({ message: "Successful Test to users." });
});

/*
  Route: Post to api/users/register
  Description: Register an User
  Access: public
*/
router.post("/register", (req, res) => {

});

module.exports = router;
