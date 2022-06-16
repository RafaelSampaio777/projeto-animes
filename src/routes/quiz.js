var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/ultimas/", function (req, res) {
    quizController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/", function (req, res) {
    quizController.buscarMedidasEmTempoReal(req, res);
})

router.post("/cadastrar_resposta", function (req, res) {
    quizController.cadastrar_resposta(req, res);
});

module.exports = router;