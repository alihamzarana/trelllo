const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

router.route("/").post(cardController.createCard);
router.route("/").get(cardController.getAllCards);
router.route("/detail/:id").get(cardController.getCard);
router.route("/:id").delete(cardController.removeCard);
router.route("/:id").put(cardController.updateCard);

module.exports = router;
