const express = require("express");
const router = express.Router();


/*
  Route: GET para api/donations/test
  Description: Rota teste para doação
  Access: public
*/
router.get("/test", (req, res) => {
  res.json({ message: "Teste com sucesso para doação." });
});

module.exports = router;