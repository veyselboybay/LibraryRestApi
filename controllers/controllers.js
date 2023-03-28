const libraryModel = require("../models/library");
const bookModel = require("../models/book");
// GET all libraries
const getLibraries = async (req, res) => {
  const libraryCollection = await libraryModel.find();
  //return libraryCollection;
  return res.json(libraryCollection);
};

// Create a new library
const createLibrary = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json("There is no value to save!");
  }
  const newLibrary = await libraryModel({
    name: name,
  });

  try {
    const savedLibrary = await newLibrary.save();
    return res.status(200).json(savedLibrary);
  } catch (err) {
    return res.json(err);
  }
};

// GET all books
const getAllBooks = async (req, res) => {
  const books = await bookModel.find();
  return res.status(200).json(books);
};

// Create a book for a library
const createBook = async (req, res) => {
  const { libraryId } = req.params;
  if (!libraryId) {
    return res.status(400).json("There is no library id");
  }
  try {
    const newBook = bookModel(req.body);
    const savedBook = await newBook.save();
    return res.status(200).json(savedBook);
  } catch (err) {
    return res.json(err);
  }
};

// GET a specific library book
const getLibraryBook = async (req, res) => {
  const { libraryId } = req.params;
  if (!libraryId) {
    return res.status(400).json("There is no library id");
  }

  try {
    const books = await bookModel.find({ libraryId: libraryId });
    // if (books.length == 0) {
    //   return res.json("There is no book to show!");
    // }
    return res.status(200).json(books);
  } catch (err) {
    return res.json(err);
  }
};

// UPDATE the book
const updateBook = async (req, res) => {
  const { libraryId, bookId } = req.params;
  if (libraryId == null || bookId == null) {
    return res.status(400).json("There is no required id");
  }
  const book = req.body;
  try {
    const updatedBook = await bookModel.findOneAndUpdate({ _id: bookId }, book);
    return res.status(200).json(updatedBook);
  } catch (error) {
    return res.json(error);
  }
};

// DELETE the book
const deleteBook = async (req, res) => {
  const { libraryId, bookId } = req.params;
  if (libraryId == null || bookId == null) {
    return res.status(400).json("There is no required id");
  }
  try {
    const deletedBook = await bookModel.findOneAndDelete({ _id: bookId });
    return res.status(200).json(deletedBook);
  } catch (error) {
    return res.json(error);
  }
};

module.exports = {
  getLibraries,
  createLibrary,
  getAllBooks,
  createBook,
  getLibraryBook,
  updateBook,
  deleteBook,
};
