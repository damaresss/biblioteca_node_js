const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PublishingCompanySchema = new Schema({
  name: String,
  creation_date: Date,
  story: String
});

module.exports = mongoose.model("PublisingCompany", PublishingCompanySchema);
