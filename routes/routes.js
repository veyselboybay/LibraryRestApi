const router = require("express").Router();

// controllers
const {
  getLibraries,
  createLibrary,
  getAllBooks,
  createBook,
  getLibraryBook,
  updateBook,
  deleteBook,
} = require("../controllers/controllers");

// GET All libraries & Create a library
router.route("/library").get(getLibraries).post(createLibrary);

// Get all the books
router.route("/books").get(getAllBooks);

// Create a book for a library
router.route("/books/:libraryId").post(createBook).get(getLibraryBook);
// Update the book
router.route("/books/:libraryId/update/:bookId").post(updateBook);
// Delete the book
router.route("/books/:libraryId/delete/:bookId").post(deleteBook);

module.exports = router;
