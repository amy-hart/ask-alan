// MODELS

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: String,
});

module.exports = mongoose.model('Question', questionSchema);
