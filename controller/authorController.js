const Author = require("../models/author");
const validator = require("../helpers/validation");

module.exports = {
  async getAuthor(req, res) {
    try {
      const author = await validator.checkIfItemExistsAndReturn(req.params.id, Author);
      res.status(200).json(author);
    } catch (err) {
      req.status(500).json({ error: err });
    }
  },
  async postAuthor(req, res) {
    try {
      const author = await Author.create(req.body);
      res.status(200).json({ message: "Novo autor adicionado com sucesso!" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  async updateAuthor(req, res) {
    try {
      const author = await Author.findByIdAndUpdate(req.params.id);
      res.status(200).json({ message: "Autor atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: err });
    }
  },
  async deleteAuthor(req, res) {
    try {
      const author = await Author.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Autor deletado com sucesso!" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  async getAuthors(req, res) {
    try {
      const authors = await Author.find({});
      res.status(200).json(authors);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
};
