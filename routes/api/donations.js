const express = require("express");
const router = express.Router();


/*
  Route: GET to api/donations/test
  Description: Rota teste para doação
  Access: public
*/
router.get("/test", (req, res) => {
  res.json({ message: "Successful Test to donation." });
});

module.exports = router;