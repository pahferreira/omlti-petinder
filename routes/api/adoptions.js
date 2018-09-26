const express = require("express");
const router = express.Router();


/*
  Route: GET para api/adoptions/test
  Description: Rota teste para adoção
  Access: public
*/
router.get("/test", (req, res) => {
  res.json({ message: "Teste com sucesso para adoção." });
});

module.exports = router;