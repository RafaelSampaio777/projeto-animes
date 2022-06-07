var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");

router.get("/ultimas/", function (req, res) {
    favoritoController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/", function (req, res) {
    favoritoController.buscarMedidasEmTempoReal(req, res);
})

router.post("/escolher_anime", function (req, res) {
    favoritoController.escolher_anime(req, res);
});

module.exports = router;