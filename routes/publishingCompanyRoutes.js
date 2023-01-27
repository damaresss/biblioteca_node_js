const router = require("express").Router();

const PublishingCompanyController = require("../controller/publishingCompanyController");

router.get("/:id", PublishingCompanyController.getPublishingCompany);
router.post("/", PublishingCompanyController.postPublishingCompany);
router.put("/:id", PublishingCompanyController.updatePublishingCompany);
router.delete("/:id", PublishingCompanyController.deletePublishingCompany);
router.get("/", PublishingCompanyController.getPublishingCompanys);

module.exports = router;
