var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");

router.post("/escolher_anime", function (req, res) {
    favoritoController.escolher_anime(req, res);
});

module.exports = router;