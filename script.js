// =========================
// CONTRATO DE ACESSO
// =========================

function verificarSenha() {

    const senha = document
        .getElementById("senha")
        .value
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");


    if (senha === "coracao") {

        document.getElementById("login").style.display =
            "none";

        document.getElementById("contrato").style.display =
            "block";

        document.getElementById("contrato").scrollIntoView({
            behavior: "smooth"
        });


    } else {

        alert("Senha incorreta.");

        document.getElementById("senha").value = "";

    }

}


// =========================
// ASSINATURA DO CONTRATO
// =========================

function assinarContrato() {

    const nome = document
        .getElementById("nomeContrato")
        .value
        .trim();

    const aceite = document
        .getElementById("aceiteContrato")
        .checked;


    if (nome === "" || !aceite) {

        alert(
            "Preencha seu nome e aceite o contrato."
        );

        return;

    }


    // Guarda o nome para utilizar
    // posteriormente no processo

    nomeContratante = nome;


    document.getElementById("contrato").style.display =
        "none";

    document.getElementById("contratoAssinado").style.display =
        "block";


    document.getElementById("contratoAssinado").scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// CONTINUAR SITE
// =========================

function continuarSite() {

    document.getElementById("contratoAssinado").style.display =
        "none";

    document.getElementById("conteudoSite").style.display =
        "block";


    document.getElementById("conteudoSite").scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// CONTADOR
// =========================

function atualizarContador() {

    // 09/05/2026
    const inicio =
        new Date(2026, 4, 9, 0, 0, 0);

    const agora =
        new Date();


    let anos =
        agora.getFullYear() -
        inicio.getFullYear();


    let meses =
        agora.getMonth() -
        inicio.getMonth();


    let dias =
        agora.getDate() -
        inicio.getDate();


    if (dias < 0) {

        meses--;

        const ultimoMes =
            new Date(
                agora.getFullYear(),
                agora.getMonth(),
                0
            ).getDate();

        dias += ultimoMes;

    }


    if (meses < 0) {

        anos--;

        meses += 12;

    }


    const diferenca =
        agora - inicio;


    const horas =
        Math.floor(
            (diferenca /
                (1000 * 60 * 60)) % 24
        );


    const minutos =
        Math.floor(
            (diferenca /
                (1000 * 60)) % 60
        );


    const segundos =
        Math.floor(
            (diferenca / 1000) % 60
        );


    document.getElementById("meses").textContent =
        (anos * 12) + meses;


    document.getElementById("dias").textContent =
        dias;


    document.getElementById("horas").textContent =
        horas;


    document.getElementById("minutos").textContent =
        minutos;


    document.getElementById("segundos").textContent =
        segundos;

}


// Atualiza o contador

setInterval(
    atualizarContador,
    1000
);


atualizarContador();

// =========================
// QUIZ - RENOVAÇÃO DO CONTRATO
// =========================

const perguntas = [

    {
        pergunta:
            "Conforme os registros oficiais desta história, qual foi a data do primeiro beijo entre as partes?",

        alternativas: [
            "22/02/2026",
            "01/03/2026",
            "11/04/2026",
            "08/03/2026"
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual foi o primeiro apelido oficialmente registrado pela contratante para se referir ao contratante?",

        alternativas: [
            "Amor",
            "Coração",
            "Mozão",
            "Vida"
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual cor consta como preferência em comum entre as partes?",

        alternativas: [
            "Azul",
            "Preto",
            "Vermelho"
        ],

        correta: 1
    },


    {
        pergunta:
            "Caso as partes estivessem em um restaurante e o garçom perguntasse o pedido sem apresentar o cardápio, qual suco provavelmente seria escolhido pela contratante?",

        alternativas: [
            "Acerola",
            "Maracujá",
            "Cajá",
            "Goiaba"
        ],

        correta: 2
    },


    {
        pergunta:
            "Para demonstrar conhecimento acerca dos gostos da contratante, qual escolha teria maior chance de deixá-la feliz?",

        alternativas: [
            "Pipoca",
            "Salgadinho",
            "Petisco",
            "Biscoito"
        ],

        correta: 0
    },


    {
        pergunta:
            "Qual foi o primeiro presente entregue pela contratante ao contratante?",

        alternativas: [
            "Meias",
            "Chaveiro",
            "Pulseira",
            "Camisa"
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual característica do contratante costuma ser mencionada primeiro pela contratante?",

        alternativas: [
            "Seu cheirinho",
            "Seu cabelinho liso",
            "Seus olhinhos puxados",
            "Seu sorriso"
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual foi a primeira ideia registrada durante a criação deste espaço virtual?",

        alternativas: [
            "O contrato",
            "A carta",
            "O vídeo",
            "O quiz"
        ],

        correta: 0
    },


    {
        pergunta:
            "Caso alguém perguntasse qual é o personagem favorito da contratante, qual resposta deveria ser apresentada?",

        alternativas: [
            "Mickey",
            "Angel",
            "Stitch",
            "Bob Esponja"
        ],

        correta: 2
    },


    {
        pergunta:
            "Após participar dos testes e desenvolvimento deste projeto, qual título foi oficialmente concedido ao contratante?",

        alternativas: [
            "Programador",
            "Inspiração",
            "Primeiro cobaia",
            "Designer"
        ],

        correta: 2
    }

];


// =========================
// VARIÁVEIS DO QUIZ
// =========================

let perguntaAtual = 0;

let respostas = [];

let respostasPistas = {

    pista1: "",
    pista2: "",
    pista3: "",
    pista4: ""

};

let codigoGerado = "";


// =========================
// CARREGAR PERGUNTA
// =========================

function carregarPergunta() {

    const pergunta =
        perguntas[perguntaAtual];


    document.getElementById("numeroPergunta").textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


    document.getElementById("barraProgresso").style.width =
        `${((perguntaAtual + 1) / perguntas.length) * 100}%`;


    document.getElementById("pergunta").textContent =
        pergunta.pergunta;


    const alternativas =
        document.getElementById("alternativas");


    alternativas.innerHTML = "";


    pergunta.alternativas.forEach(
        (texto, indice) => {

            const botao =
                document.createElement("button");


            botao.className =
                "opcao";


            botao.textContent =
                texto;


            // Mantém marcada a alternativa
            // caso ele volte para a pergunta

            if (
                respostas[perguntaAtual] === indice
            ) {

                botao.classList.add(
                    "selecionada"
                );

            }


            botao.onclick = function () {

                respostas[perguntaAtual] =
                    indice;


                carregarPergunta();

            };


            alternativas.appendChild(
                botao
            );

        }
    );


    // =========================
    // BOTÃO ANTERIOR
    // =========================

    document.getElementById("btnAnterior").style.display =
        perguntaAtual === 0
            ? "none"
            : "inline-block";


    // =========================
    // BOTÃO PRÓXIMO
    // =========================

    document.getElementById("btnProximo").textContent =
        perguntaAtual === perguntas.length - 1
            ? "Finalizar avaliação"
            : "Próxima ➡";

}


// =========================
// VOLTAR PERGUNTA
// =========================

function anteriorPergunta() {

    if (perguntaAtual > 0) {

        perguntaAtual--;

        carregarPergunta();

    }

}


// =========================
// AVANÇAR PERGUNTA
// =========================

function proximaPergunta() {

    // Não permite avançar
    // sem escolher uma alternativa

    if (
        respostas[perguntaAtual] == null
    ) {

        alert(
            "Escolha uma alternativa antes de continuar."
        );

        return;

    }


    // Próxima pergunta

    if (
        perguntaAtual <
        perguntas.length - 1
    ) {

        perguntaAtual++;

        carregarPergunta();

    }


    // Última pergunta

    else {

        finalizarQuiz();

    }

}


// =========================
// FINALIZAR AS 10 QUESTÕES
// =========================

function finalizarQuiz() {

    // Esconde perguntas

    document.getElementById("pergunta").style.display =
        "none";


    document.getElementById("alternativas").style.display =
        "none";


    document.querySelector(".botoesQuiz").style.display =
        "none";


    document.querySelector(".progresso").style.display =
        "none";


    // Agora começa a parte
    // de investigação das pistas

    document.getElementById("etapaFinalQuiz").style.display =
        "block";


    document.getElementById("etapaFinalQuiz").scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// INICIAR QUIZ
// =========================

carregarPergunta();
