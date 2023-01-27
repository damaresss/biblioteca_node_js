const router = require("express").Router();

const BookController = require("../controller/bookController");

router.get("/:id", BookController.getBook);
router.post("/", BookController.postBook);
router.put("/:id", BookController.updateBook);
router.delete("/:id", BookController.deleteBook);
router.get("/", BookController.getBooks);

module.exports = router;
