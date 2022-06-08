var titulo = document.querySelector('h1')
var instrucoes = document.querySelector('#instrucoes')
var aviso = document.querySelector('#aviso')
var progresso = document.querySelector('#progresso')
var pontos = 0
var placar = 0

var numQuestao = document.querySelector('#numQuestao')
var pergunta = document.querySelector('#pergunta')

var a = document.querySelector('#a')
var b = document.querySelector('#b')
var c = document.querySelector('#c')
var d = document.querySelector('#d')

var divQuestoes = document.querySelector('.questoes')
var alternativas = document.querySelector('#alternativas')
var divBotaoRefazer = document.querySelector('.botao')
var divTela = document.querySelector('.conteudos')

var q0 = {
    numQuestao: 0,
    pergunta: "Pergunta",
    alternativaA: "Alternativa A",
    alternativaB: "Alternativa B",
    alternativaC: "Alternativa C",
    alternativaD: "Alternativa D",
    correta: "0",
}
var q1 = {
    numQuestao: 1,
    pergunta: "Qual é o nome do lugar onde moram as almas e os Shinigamis?",
    alternativaA: "Hueco Mundo",
    alternativaB: "Karakura",
    alternativaC: "Las notches",
    alternativaD: "Soul Socieiety",
    correta: "Soul Socieiety",
}
var q2 = {
    numQuestao: 2,
    pergunta: "Quem foi o primeiro companheiro de Luffy",
    alternativaA: "Sanji",
    alternativaB: "Zoro",
    alternativaC: "Nami",
    alternativaD: "Jimbe",
    correta: "Zoro",
}
var q3 = {
    numQuestao: 3,
    pergunta: "Quantas Jinchuurikis existem",
    alternativaA: "10",
    alternativaB: "8",
    alternativaC: "15",
    alternativaD: "9",
    correta: "9",
}
var q4 = {
    numQuestao: 4,
    pergunta: "Qual é o local onde os Shinigamis vivem?",
    alternativaA: "Sereitei",
    alternativaB: "Sekaimon",
    alternativaC: "Sekaitei",
    alternativaD: "Soul Society",
    correta: "Sereitei",
}
var q5 = {
    numQuestao: 5,
    pergunta: "Qual é o nome da organização criminosa de Naruto",
    alternativaA: "Hokage",
    alternativaB: "Akatsuki",
    alternativaC: "mugiwaras",
    alternativaD: "Akakusuki",
    correta: "Akatsuki",
}
var q6 = {
    numQuestao: 6,
    pergunta: "Quem fez o corte na barriga do zoro?",
    alternativaA: "Mihawk",
    alternativaB: "Shanks",
    alternativaC: "Sanji",
    alternativaD: "Fujitora",
    correta: "Mihawk",
}
var q7 = {
    numQuestao: 7,
    pergunta: "Quantos capitães tem na sociedade das almas?",
    alternativaA: "10",
    alternativaB: "12",
    alternativaC: "13",
    alternativaD: "11",
    correta: "13",
}
var q8 = {
    numQuestao: 8,
    pergunta: "Quem é o líder da Vila da Folha?",
    alternativaA: "Kazekage",
    alternativaB: "Hokage",
    alternativaC: "mizukage",
    alternativaD: "Raikage",
    correta: "Hokage",
}
var q9 = {
    numQuestao: 9,
    pergunta: "Quem foi o rei dos piratas?",
    alternativaA: "Shanks",
    alternativaB: "Gol D. Roger",
    alternativaC: "Kaidou",
    alternativaD: "Barba Branca",
    correta: "Gol D. Roger",
}
var q10 = {
    numQuestao: 10,
    pergunta: "Quem fez o corte na barriga do Luffy?",
    alternativaA: "Barba negra",
    alternativaB: "Zoro",
    alternativaC: "Buggy",
    alternativaD: "Akainu",
    correta: "Akainu",
}

var questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]
var imgs = ["bleach1.png", "usopp.webp", "naruto1.webp", "bleach2.jpg", "luffy.webp", "naruto2.jpg", "bleach3.jpg", "O_MAIOR_DE_TODOS.jpg", "naruto3.jpg", "chopper.jpg"]

var numero = document.querySelector('#numero')
var total = document.querySelector('#total')

numero.textContent = q1.numQuestao

var totalDeQuestoes = (questoes.length) - 1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao + 'A')
    b.setAttribute('value', nQuestao + 'B')
    c.setAttribute('value', nQuestao + 'C')
    d.setAttribute('value', nQuestao + 'D')
    progresso.value = parseInt(progresso.value) + 1
    for (contador = 0; contador < nQuestao; contador++) {
        divTela.style.backgroundImage = `url(../CSS/style/IMG/site/${imgs[contador]})`
        divTela.style.backgroundSize = "cover"
    }
}

alternativas.addEventListener('dblclick', () => {
    pontos -= 1
    if (numQuestao.value == 1 && pontos == 11) { pontos = 10 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    var numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    var respostaEscolhida = resposta.textContent

    var certa = questoes[numeroDaQuestao].correta

    if (respostaEscolhida == certa) {
        pontos += 1
        if (nQuestao.value == 1 && pontos == 2) { pontos = 1 }
    } else {
    }
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    bloquearAlternativas()

    setTimeout(function () {

        proxima = numeroDaQuestao + 1

        if (proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    instrucoes.textContent = "Fim de Jogo! Você acertou " + pontos + "/10"

    instrucoes.classList.add('placar')

    divQuestoes.style.display = 'none'

    divBotaoRefazer.style.display = "flex"

    divBotaoRefazer.innerHTML = `<button onclick="rezetar()">Refazer quiz</button><br>
    <button onclick="cadastrar_resposta()">Armazenar resposta</button>`

}

function rezetar() {
    pontos = 0
    instrucoes.classList.remove('placar')

    divBotaoRefazer.style.display = "none"

    divQuestoes.style.display = 'block'
    proximaQuestao(1)
    instrucoes.textContent = 'Leia a questão e clique na resposta correta'
}

function cadastrar_resposta() {
    var pontosVar = pontos;
    var usuarioVar = sessionStorage.ID_USUARIO;

    obterDadosGrafico()

    fetch("/quiz/cadastrar_resposta", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            pontosServer: pontosVar,
            usuarioServer: usuarioVar,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;


}

var zero = 0;
var um = 0;
var dois = 0;
var tres = 0;
var quatro = 0;
var cinco = 0;
var seis = 0;
var sete = 0;
var oito = 0;
var nove = 0;
var dez = 0;

let proximaAtualizacao;

// O gráfico é construído com três funções:
// 1. obterDadosGrafico -> Traz dados do Banco de Dados para montar o gráfico da primeira vez
// 2. plotarGrafico -> Monta o gráfico com os dados trazidos e exibe em tela

function obterDadosGrafico() {

    divTela.innerHTML = `<div id="div_grafico"><canvas id="canvas_grafico"></canvas></div>`


    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/quiz/ultimas/`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                zero = resposta[0].acertos;
                um = resposta[1].acertos;
                dois = resposta[2].acertos;
                tres = resposta[3].acertos;
                quatro = resposta[4].acertos;
                cinco = resposta[5].acertos;
                seis = resposta[6].acertos;
                sete = resposta[7].acertos;
                oito = resposta[8].acertos;
                nove = resposta[9].acertos;
                dez = resposta[10].acertos

                plotarGrafico(resposta);

            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
function plotarGrafico(resposta) {

    console.log('iniciando plotagem do gráfico...');

    var nome_label = [
        'Nota dos usuarios'
    ];

    // const data = {
    //     labels: nome_label,
    //     datasets: [{
    //         label: `${resposta[0].metrica}`,
    //         backgroundColor: '#1559B3',
    //         borderColor: 'rgba(0,0,0,0.5)',
    //         data: [zero],
    //     },

    //     {
    //         label: `${resposta[1].metrica}`,
    //         backgroundColor: '#f77f00',
    //         borderColor: 'rgba(0,0,0,0.5)',
    //         data: [um],
    //     },

    //     {
    //         label: `${resposta[2].metrica}`,
    //         backgroundColor: '#000000',
    //         borderColor: 'rgba(0,0,0,0.5)',
    //         data: [dois],
    //     },
   
    //     {
    //         label: `${resposta[3].metrica}`,
    //         backgroundColor: '#000000',
    //         borderColor: 'rgba(0,0,0,0.5)',
    //         data: [tres],
    //     },
   
    //     {
    //         label: `${resposta[4].metrica}`,
    //         backgroundColor: '#000000',
    //         borderColor: 'rgba(0,0,0,0.5)',
    //         data: [quatro],
    //     },
   
    //     {
    //         label: `${resposta[5].metrica}`,
    //         backgroundColor: '#000000',
    //         borderColor: 'rgba(0,0,0,0.5)',
    //         data: [cinco],
    //     },
   
    //     {
    //         label: `${resposta[6].metrica}`,
    //         backgroundColor: '#000000',
    //         borderColor: 'rgba(0,0,0,0.5)',
    //         data: [seis],
    //     },
   
    //     {
    //         label: `${resposta[7].metrica}`,
    //         backgroundColor: '#000000',
    //         borderColor: 'rgba(0,0,0,0.5)',
    //         data: [sete],
    //     },
   
    //     {
    //         label: `${resposta[8].metrica}`,
    //         backgroundColor: '#000000',
    //         borderColor: 'rgba(0,0,0,0.5)',
    //         data: [oito],
    //     },
   
    //     {
    //         label: `${resposta[9].metrica}`,
    //         backgroundColor: '#000000',
    //         borderColor: 'rgba(0,0,0,0.5)',
    //         data: [nove],
    //     },
   
    //     {
    //         label: `${resposta[10].metrica}`,
    //         backgroundColor: '#000000',
    //         borderColor: 'rgba(0,0,0,0.5)',
    //         data: [dez],
    //     }

    //     ]
    // };
    
    // const config = {
    //     type: 'bar',
    //     data: data,
    //     options: {
    //       scales: {
    //         y: {
    //           beginAtZero: true
    //         }
    //       }
    //     },
    //   };
    
    //   const grafico = new Chart(
    //     document.getElementById('canvas_grafico'),
    //     config
    // );

    const ctx = document.getElementById('canvas_grafico').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [resposta[0].metrica, resposta[1].metrica, resposta[2].metrica, resposta[3].metrica, resposta[4].metrica, resposta[5].metrica, resposta[6].metrica, resposta[7].metrica, resposta[8].metrica, resposta[9].metrica, resposta[10].metrica],
        datasets: [{
            label: nome_label,
            data: [zero, um, dois, tres, quatro, cinco, seis, sete, oito, nove, dez],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

}