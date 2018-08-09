const express = require("express");
const router = express.Router();

/*
  Route: GET to users/test
  Description: Test Route to Users
  Access: public
*/
router.get("/test", (req, res) => {
  res.json({ message: "Successful Test to users." });
});

module.exports = router;
