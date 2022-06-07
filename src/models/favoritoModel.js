var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''

 if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `		SELECT animes.nome AS nome_anime, COUNT(usuario.FK_anime) AS Usuarios 
        FROM usuario
        JOIN animes ON animes.ID = usuario.FK_anime GROUP BY(FK_anime);`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `		SELECT animes.nome AS nome_anime, COUNT(usuario.FK_anime) AS Usuarios 
        FROM usuario
        JOIN animes ON animes.ID = usuario.FK_anime GROUP BY(FK_anime);`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function escolher_anime(fk_anime, usuario) {
    console.log("ACESSEI O FAVORITO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function escolher_anime():", fk_anime, usuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        UPDATE usuario SET FK_anime = ${fk_anime} WHERE ID = ${usuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    escolher_anime
};