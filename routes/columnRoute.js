const express = require("express");
const router = express.Router();
const columnController = require("../controllers/columnController");

router.route("/list").get(columnController.getAll);
router.route("/list").post(columnController.createColumn);
router.route("/list/arrange/:id").post(columnController.updateColumnArrangements);
router.route("/list/:id").get(columnController.getColumn);
router.route("/list/:id").delete(columnController.removeColumn);
router.route("/list/:id").put(columnController.updateColumn);

module.exports = router;
