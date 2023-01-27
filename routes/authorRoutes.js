const router = require("express").Router();

const AuthorController = require("../controller/authorController");

router.get("/:id", AuthorController.getAuthor);
router.post("/", AuthorController.postAuthor);
router.put("/:id", AuthorController.updateAuthor);
router.delete("/:id", AuthorController.deleteAuthor);
router.get("/",AuthorController.getAuthors);

module.exports = router;
