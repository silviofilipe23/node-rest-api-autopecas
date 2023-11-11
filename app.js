const URL_BASE = "/api.autopecas";
const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas virão neste ponto
// <rotas>
const contatoDao = require("./rotas/produtosDao");
app.use(URL_BASE + "/produto-dao", contatoDao);

// </rotas>

app.use(URL_BASE, (req, res, next) => {
	res.status(200).send({
		resposta: "URL do app funcionou!",
	});
});

app.use((req, res, next) => {
	const erro = new Error("Rota não encontrada");
	erro.status = 404;
	next(erro);
});

module.exports = app;
