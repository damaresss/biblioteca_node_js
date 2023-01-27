const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let LivroSchema = new Schema({
  title: String,
  author: [
    {
      type: Schema.Types.ObjectId,
      ref: "Author",
    },
  ],
  publishing_company: [
    {
      type: Schema.Types.ObjectId,
      ref: "PublishingCompany",
    },
  ],
  summary: String,
  publication_date: Date,
});

module.exports = mongoose.model("Livro", LivroSchema);
