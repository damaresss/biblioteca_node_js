const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AuthorSchema = new Schema({
  name: String,
  birth: Date,
  nationality: String
});

module.exports = mongoose.model("Author", AuthorSchema);
