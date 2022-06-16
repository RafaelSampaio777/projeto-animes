var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''

 if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT qtd_acertos AS metrica, COUNT(qtd_acertos) AS acertos 
        FROM resposta_quiz
        GROUP BY(qtd_acertos) ORDER BY qtd_acertos;
        `;
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
        instrucaoSql = `		
        SELECT qtd_acertos AS metrica, COUNT(qtd_acertos) AS acertos 
        FROM resposta_quiz
        GROUP BY(qtd_acertos) ORDER BY qtd_acertos DESC;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function cadastrar_resposta(pontos, usuario) {
    console.log("ACESSEI O FAVORITO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function escolher_anime():", pontos, usuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO resposta_quiz (qtd_acertos, FK_usuario) VALUES
        (${pontos}, ${usuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    cadastrar_resposta
};