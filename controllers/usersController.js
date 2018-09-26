exports.test = (req, res) => {
  res.json({ message: "Teste com Sucesso para Users." });
};

exports.testPrivate = (req, res) => {
	res.json({ message: "Teste com Sucesso para Users. (privado)" });
};
