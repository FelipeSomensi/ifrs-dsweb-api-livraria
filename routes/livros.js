const express = require("express");
const router = express.Router();
const livroController = require("../Controllers/livroController");
// Rota GET /livros - lista todos os livros
router.get("/", livroController.listar);
// Rota GET /livros/completo - lista livros com editoras
router.get("/completo", livroController.listarComEditoras);
// Rota GET /livros/:id - busca livro por ID
router.get("/:id", livroController.buscarPorId); 
// Rota POST /livros - adiciona novo livro
router.post("/", livroController.adicionar);
// Rota PUT /livros/:id - atualiza um livro
router.put("/:id", livroController.atualizar);
// Rota DELETE /livros/:id - remove um livro
router.delete("/:id", livroController.deletar);
module.exports = router;
const connection = require("../config/db");
// Retorna todas as editoras cadastradas
exports.buscarTodos = (callback) => {
    connection.query("SELECT * FROM editoras", callback);
};
// Retorna uma editora específica pelo ID
exports.buscarPorId = (id, callback) => {
    connection.query("SELECT * FROM editoras WHERE id = ?", [id], callback);
};
// Insere uma nova editora no banco de dados
exports.inserir = ({ nome, cidade }, callback) => {
    const sql = "INSERT INTO editoras (nome, cidade) VALUES (?, ?)";
    connection.query(sql, [nome, cidade], callback);
};
// Atualiza os dados de uma editora pelo ID
exports.atualizar = (id, { nome, cidade }, callback) => {
    const sql = "UPDATE editoras SET nome = ?, cidade = ? WHERE id = ?";
    connection.query(sql, [nome, cidade, id], callback);
};
// Exclui uma editora com base no ID
exports.deletar = (id, callback) => {
    connection.query("DELETE FROM editoras WHERE id = ?", [id], callback);
};