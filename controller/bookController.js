const Book = require("../models/book");
const validator = require("../helpers/validation");

module.exports = {
  async getBook(req, res) {
    try {
      const book = await validator.checkIfItemExistsAndReturn(req.params.id, Book);
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  async postBook(req, res) {
    try {
      const book = await Book.create(req.body);
      res.status(200).json({ message: "Novo livro adicionado com sucesso!" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  async updateBook(req, res) {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id);
      res.status(200).json({ message: "Livro atualizado com sucesso!" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  async deleteBook(req, res) {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Livro excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ error: err });
    }
  },
  async getBooks(req, res) {
    try {
      const books = await Book.find({})
      res.status(200).json(books)
    } catch (err) {
      res.status(500).json({error: err})
    }
  }
};
