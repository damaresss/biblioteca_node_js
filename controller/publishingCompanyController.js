const PublishingCompany = require("../models/publishingCompany");
const validator = require("../helpers/validation");

module.exports = {
  async getPublishingCompany(req, res) {
    try {
      const publishingCompany = await validator.checkIfItemExistsAndReturn(req.params.id, PublishingCompany);
      res.status(200).json(publishingCompany);
    } catch (err) {
      res.status(err.statusCode).json({message: err.message});
    }
  },
  async postPublishingCompany(req, res) {
    try {
      const publishingCompany = await PublishingCompany.create(req.body);
      res.status(200).json({ message: "Editora adicionada com sucesso" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  async updatePublishingCompany(req, res) {
    try {
      const publishingCompany = await PublishingCompany.findByIdAndUpdate(
        req.params.id
      );
      res.status(200).json({ message: "Editora atualizada com sucesso!" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  async deletePublishingCompany(req, res) {
    try {
      const publishingCompany = await PublishingCompany.findByIdAndDelete(
        req.params.id
      );
      res.status(200).json({ message: "Editora deletada com sucesso!" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  async getPublishingCompanys(req, res) {
    try {
      const publishingCompanys = await PublishingCompany.find({});
      res.status(200).json(publishingCompanys);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
};
