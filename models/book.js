const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  libraryId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  printYear: {
    type: Number,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("book", bookSchema);
