const express = require("express");
const router = express.Router();

/*
  Route: GET to pets/test
  Description: Test Route to Pets
  Access: public
*/
router.get("/test", (req, res) => {
  res.json({ message: "Successful Test to pets." });
});

module.exports = router;
