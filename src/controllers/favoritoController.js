var favoritoModel = require("../models/favoritoModel");

function escolher_anime(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fk_anime = req.body.fk_animeServer;
    var usuario = req.body.usuarioServer;

    // Faça as validações dos valores
    if (fk_anime == undefined) {
        res.status(400).send("Sua fk está undefined!");
    } else if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        favoritoModel.escolher_anime(fk_anime, usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    escolher_anime
}