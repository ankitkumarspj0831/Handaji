const express = require("express");

const router = express.Router();

const addNewController = require("../controllers/addNew");

router.post("/create-new", addNewController.addCompany);

module.exports = router;
