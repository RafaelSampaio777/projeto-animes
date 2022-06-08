var quizModel = require("../models/quizModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    quizModel.buscarUltimasMedidas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    quizModel.buscarMedidasEmTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar_resposta(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontos = req.body.pontosServer;
    var usuario = req.body.usuarioServer;

    // Faça as validações dos valores
    if (pontos == undefined) {
        res.status(400).send("Sua fk está undefined!");
    } else if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar_resposta(pontos, usuario)
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
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    cadastrar_resposta
}