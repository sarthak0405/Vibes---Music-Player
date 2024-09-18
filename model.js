const mongoose = require("mongoose");

const schema = mongoose.Schema({
  usrnm: String,
  pwrd: String,
  mail: String,
  playlist: {
    name: String,
  },
});

const model = mongoose.model("Data", schema);
module.exports = model;
