const express = require("express"); // Biblioteca do Express
const router = express.Router(); // Gerenciador de rotas
const url = require("url"); // Ter acesso a url
const querystring = require("querystring"); // Filtrar url
const mysql = require("./mysql").pool; // Importar config do mysql

// http://localhost:3000/api.autopecas/produto-dao/create
router.post("/create", (req, res, next) => {
	const newProduct = req.body;

	const sql = `
        INSERT INTO produto (
            nome_peca,
            numero_referencia,
            categoria,
            fabricante,
            modelo_compativel,
            ano_fabricacao_compativel,
            material,
            peso,
            dimensoes,
            preco,
            estoque_disponivel,
            fornecedor,
            data_aquisicao,
            data_fabricacao,
            data_vencimento,
            notas_adicionais
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

	// Parâmetros da query
	const params = [
		newProduct.nome_peca,
		newProduct.numero_referencia,
		newProduct.categoria,
		newProduct.fabricante,
		newProduct.modelo_compativel,
		newProduct.ano_fabricacao_compativel,
		newProduct.material,
		newProduct.peso,
		newProduct.dimensoes,
		newProduct.preco,
		newProduct.estoque_disponivel,
		newProduct.fornecedor,
		newProduct.data_aquisicao,
		newProduct.data_fabricacao,
		newProduct.data_vencimento,
		newProduct.notas_adicionais,
	];

	mysql.getConnection((error, conn) => {
		if (error) {
			return res.status(500).send({
				error: error,
				response: null,
			});
		}
		conn.query(sql, params, (error, resultado, field) => {
			conn.release();
			if (error) {
				return res.status(500).send({
					error: error,
					response: null,
				});
			}
			res.status(201).send({
				mensagem: "Produto cadastrado com sucesso!",
				id: resultado.insertId,
			});
		});
	});
});

// http://localhost:3000/api.autopecas/produto-dao/getId?id=4
router.get("/getId", (req, res, next) => {
	const reqUrl = url.parse(req.url);
	const queryParams = querystring.parse(reqUrl.query);
	const param = queryParams.id;
	mysql.getConnection((error, conn) => {
		if (error) {
			return res.status(500).send({ error: error });
		}
		conn.query(
			"SELECT * FROM produto WHERE id = ?;",
			[param],
			(error, resultado) => {
				if (error) {
					return res.status(500).send({ error: error });
				}
				return res.status(200).send({ response: resultado });
			}
		);
	});
});

// http://localhost:3000/api.autopecas/produto-dao/getAll
router.get("/getAll", (req, res, next) => {
	mysql.getConnection((error, conn) => {
		if (error) {
			return res.status(500).send({ error: error });
		}
		conn.query("SELECT * FROM produto;", (error, resultado) => {
			if (error) {
				return res.status(500).send({ error: error });
			}
			return res.status(200).send({ response: resultado });
		});
	});
});

// http://localhost:3000/api.autopecas/produto-dao/update/:id
router.put("/update/:id", (req, res, next) => {
	const produtoId = req.params.id;
	const dadosAtualizados = req.body;

	const sql = `
    UPDATE produto
    SET
        nome_peca = ?,
        numero_referencia = ?,
        categoria = ?,
        fabricante = ?,
        modelo_compativel = ?,
        ano_fabricacao_compativel = ?,
        material = ?,
        peso = ?,
        dimensoes = ?,
        preco = ?,
        estoque_disponivel = ?,
        fornecedor = ?,
        data_aquisicao = ?,
        data_fabricacao = ?,
        data_vencimento = ?,
        notas_adicionais = ?
        WHERE id = ?
    `;

	const params = [
		dadosAtualizados.nome_peca,
		dadosAtualizados.numero_referencia,
		dadosAtualizados.categoria,
		dadosAtualizados.fabricante,
		dadosAtualizados.modelo_compativel,
		dadosAtualizados.ano_fabricacao_compativel,
		dadosAtualizados.material,
		dadosAtualizados.peso,
		dadosAtualizados.dimensoes,
		dadosAtualizados.preco,
		dadosAtualizados.estoque_disponivel,
		dadosAtualizados.fornecedor,
		dadosAtualizados.data_aquisicao,
		dadosAtualizados.data_fabricacao,
		dadosAtualizados.data_vencimento,
		dadosAtualizados.notas_adicionais,
		produtoId,
	];

	mysql.getConnection((error, conn) => {
		if (error) {
			return res.status(500).send({ error: error });
		}

		conn.query(sql, params, (error) => {
			conn.release();
			if (error) {
				console.error("Erro ao atualizar o produto:", error);
				return res.status(500).send({
					error: error,
					response: null,
				});
			} else {
				res.status(201).send({
					mensagem: "Produto atualizado",
				});
			}
		});
	});
});

// http://localhost:3000/api.autopecas/produto-dao/delete/:id
router.delete("/delete/:id", (req, res, next) => {
	const produtoId = req.params.id;

	mysql.getConnection((error, conn) => {
		if (error) {
			return res.status(500).send({
				error: error,
				response: null,
			});
		}
		conn.query("DELETE FROM produto WHERE id = ?", produtoId, (error) => {
			conn.release();
			if (error) {
				return res.status(500).send({
					error: error,
					response: null,
				});
			}
			res.status(201).send({
				mensagem: "Produto excluído",
			});
		});
	});
});

module.exports = router; // Exportar módulo para uso
