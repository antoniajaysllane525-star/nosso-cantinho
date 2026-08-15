// =========================
// CONTRATO DE ACESSO
// =========================

function verificarSenha() {

    const campo = document.getElementById("senha");

    const senha = campo.value
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    if (senha === "coracao") {

        document.getElementById("login").style.display = "none";

        document.getElementById("titularidadeValidada").style.display = "block";

    } else {

        alert("Senha incorreta.");

        campo.value = "";

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
// QUEM É MAIS?
// =========================

function responderCoracao(botao) {

    // Encontra somente a pergunta
    // onde o botão foi clicado
    const pergunta = botao.parentElement;

    // Remove a seleção dos dois botões
    const botoes = pergunta.querySelectorAll("button");

    botoes.forEach(function(btn) {
        btn.classList.remove("selecionada");
    });

    // Marca a escolha feita
    botao.classList.add("selecionada");

    // Verifica quantas perguntas já foram respondidas
    const perguntas = document.querySelectorAll(".pergunta-coracao");

    let respondidas = 0;

    perguntas.forEach(function(item) {

        if (item.querySelector(".selecionada")) {
            respondidas++;
        }

    });

    // Quando todas forem respondidas,
    // libera a mensagem final
    if (respondidas === perguntas.length) {

        document.getElementById("fimQuemEMais").style.display = "block";

    }

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
// ADITIVO AO CONTRATO
// =========================

function aceitarAditivo() {

    const ciencia = document.getElementById("cienciaAditivo");
    const aceite = document.getElementById("aceiteAditivo");
    const consulta = document.getElementById("consultaAditivo");

    if (!ciencia.checked || !aceite.checked || !consulta.checked) {

        alert("Para prosseguir, é necessário declarar ciência e aceitar integralmente o presente Aditivo.");

        return;
    }

    // Esconde o Aditivo
    document.getElementById("aditivoContrato").style.display = "none";

    // Libera o Quiz
    const quiz = document.getElementById("quizContrato");
    quiz.style.display = "block";

    // Leva o usuário até o Quiz
    quiz.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

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

document.addEventListener("DOMContentLoaded", function () {

    if (document.getElementById("quizContrato")) {
        carregarPergunta();
    }

});

// =========================
// NORMALIZAR TEXTO
// =========================

function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


// =========================
// VERIFICAR PISTAS
// =========================

function verificarPistas() {

    const respostas1 =
        normalizarTexto(
            document.getElementById("respostaPista1").value
        );

    const resposta2 =
        normalizarTexto(
            document.getElementById("respostaPista2").value
        );

    const resposta3 =
        normalizarTexto(
            document.getElementById("respostaPista3").value
        );

    const resposta4 =
        normalizarTexto(
            document.getElementById("respostaPista4").value
        );


    const correta1 =
        resposta1 === "vela" ||
        resposta1 === "velas";


    const correta2 =
        resposta2 === "pulseira";


    const correta3 =
        resposta3 === "alianca" ||
        resposta3 === "aliancas";


    const correta4 =
        resposta4 === "oracao";


    return {

        correta1,
        correta2,
        correta3,
        correta4,

        todasCorretas:
            correta1 &&
            correta2 &&
            correta3 &&
            correta4

    };

}

// =========================
// PROSSEGUIR COM A ANÁLISE
// =========================

function prosseguirAnalise() {

    const pistas = verificarPistas();


    // =========================
    // VERIFICAR AS 4 PISTAS
    // =========================

    if (!pistas.todasCorretas) {

        alert(
            "Existem informações que não correspondem aos registros do sistema. Revise as seções do site e tente novamente."
        );

        return;

    }


    // =========================
    // GUARDAR RESPOSTAS
    // =========================

    respostasPistas.pista1 =
        document
            .getElementById("respostaPista1")
            .value
            .trim();


    respostasPistas.pista2 =
        document
            .getElementById("respostaPista2")
            .value
            .trim();


    respostasPistas.pista3 =
        document
            .getElementById("respostaPista3")
            .value
            .trim();


    respostasPistas.pista4 =
        document
            .getElementById("respostaPista4")
            .value
            .trim();


    // =========================
    // ESCONDER ETAPA DAS PISTAS
    // =========================

    document.getElementById("etapaFinalQuiz").style.display =
        "none";


    // =========================
    // MOSTRAR ASSINATURA
    // =========================

    document.getElementById("assinaturaQuiz").style.display =
        "block";


    // =========================
    // IR PARA A ASSINATURA
    // =========================

    document.getElementById("assinaturaQuiz").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

// =========================
// CONFIRMAR RESPOSTAS
// =========================

function confirmarQuiz() {

    const nome =
        document
            .getElementById("nomeConfirmacao")
            .value
            .trim();


    const aceite =
        document
            .getElementById("confirmacaoRespostas")
            .checked;


    // =========================
    // VERIFICAR NOME
    // =========================

    if (nome === "") {

        alert(
            "Digite seu nome para confirmar."
        );

        return;

    }


    // =========================
    // VERIFICAR ACEITE
    // =========================

    if (!aceite) {

        alert(
            "Confirme suas respostas antes de continuar."
        );

        return;

    }


    // Guarda o nome utilizado
    // nesta etapa final

    nomeContratante =
        nome;


    // =========================
    // ESCONDER CONFIRMAÇÃO
    // =========================

    document.getElementById("assinaturaQuiz").style.display =
        "none";


    // =========================
    // MOSTRAR ANÁLISE
    // =========================

    document.getElementById("analiseProcesso").style.display =
        "block";


    document.getElementById("analiseProcesso").scrollIntoView({
        behavior: "smooth"
    });


    // Pequena espera para dar
    // sensação de análise do processo

    setTimeout(() => {

        mostrarResultado();

    }, 2500);

}

// =========================
// CALCULAR PONTUAÇÃO
// =========================

function calcularNota() {

    let acertos = 0;


    perguntas.forEach(
        (pergunta, index) => {

            if (
                respostas[index] ===
                pergunta.correta
            ) {

                acertos++;

            }

        }
    );


    return acertos;

}


// =========================
// GERAR CÓDIGO DA SURPRESA
// =========================

function gerarCodigo() {

    /*
        O código é formado automaticamente
        pela quantidade de letras das quatro
        respostas encontradas no site.

        VELAS       = 5
        PULSEIRA    = 8
        ALIANÇAS    = 8
        ORAÇÃO      = 6

        Resultado: 5886
    */


    const codigo =
        respostasPistas.pista1.length +
        "" +
        respostasPistas.pista2.length +
        "" +
        respostasPistas.pista3.length +
        "" +
        respostasPistas.pista4.length;


    return codigo;

}


// =========================
// MOSTRAR RESULTADO
// =========================

function mostrarResultado() {

    const acertos =
        calcularNota();


    const pistas =
        verificarPistas();


    // =========================
    // ESCONDER ANÁLISE
    // =========================

    document.getElementById("analiseProcesso").style.display =
        "none";


    // =========================
    // MOSTRAR RESULTADO
    // =========================

    document.getElementById("resultadoFinal").style.display =
        "block";


    // =========================
    // MOSTRAR PONTUAÇÃO
    // =========================

    document.getElementById("pontuacaoFinal").textContent =
        acertos;


    // =========================
    // STATUS DA AVALIAÇÃO
    // =========================

    document.getElementById("statusAvaliacao").textContent =
        acertos >= 7
            ? "Aprovado"
            : "Não aprovado";


    // =========================
    // STATUS DAS PISTAS
    // =========================

    document.getElementById("statusEtapaFinal").textContent =
        pistas.todasCorretas
            ? "Concluída"
            : "Pendente";


    // =========================
    // STATUS DA CONFIRMAÇÃO
    // =========================

    document.getElementById("statusConfirmacao").textContent =
        "Confirmada";


    const decisao =
        document.getElementById("decisaoFinal");


    // =================================================
    // APROVADO
    // MÍNIMO: 7/10
    // =================================================

    if (
        acertos >= 7 &&
        pistas.todasCorretas
    ) {


        // =========================
        // 10/10
        // =========================

        if (acertos === 10) {

            decisao.innerHTML = `

                <h3>APROVADO COM EXCELÊNCIA</h3>

                <p>
                    O contratante demonstrou elevado conhecimento
                    acerca dos fatos, memórias e registros desta relação.
                </p>

                <p>
                    <strong>Decisão:</strong><br>
                    Aprovação integral.
                </p>

            `;

        }


        // =========================
        // 8–9/10
        // =========================

        else if (acertos >= 8) {

            decisao.innerHTML = `

                <h3>APROVADO</h3>

                <p>
                    Verifica-se conhecimento satisfatório
                    da relação e de seus principais registros.
                </p>

                <p>
                    <strong>Decisão:</strong><br>
                    Pedido deferido.
                </p>

            `;

        }


        // =========================
        // 7/10
        // =========================

        else {

            decisao.innerHTML = `

                <h3>APROVADO POR MARGEM MÍNIMA</h3>

                <p>
                    O contratante atingiu a pontuação mínima
                    exigida para prosseguimento do processo.
                </p>

                <p>
                    <strong>Decisão:</strong><br>
                    Pedido deferido.
                </p>

                <p>
                    Fica registrada a necessidade de maior atenção
                    aos detalhes da relação.
                </p>

            `;

        }


        // =========================
        // GERAR CÓDIGO
        // =========================

        codigoGerado =
            gerarCodigo();


        document.getElementById("codigoAcesso").textContent =
            codigoGerado;


        document.getElementById("codigoGerado").style.display =
            "block";


        // Libera o botão para continuar

        document.getElementById("btnContinuarResultado").style.display =
            "inline-block";

    }


    // =================================================
    // NÃO APROVADO
    // ABAIXO DE 7/10
    // =================================================

    else {

        decisao.innerHTML = `

            <h3>PROCESSO INCONCLUSIVO</h3>

            <p>
                Após análise das informações apresentadas,
                não foi atingida a pontuação mínima necessária
                para conclusão do processo.
            </p>

            <p>
                <strong>Decisão:</strong><br>
                Pedido temporariamente indeferido.
            </p>

            <p>
                Uma nova tentativa será concedida ao contratante.
            </p>

        `;


        // Não mostra código

        document.getElementById("codigoGerado").style.display =
            "none";


        // Não libera continuação

        document.getElementById("btnContinuarResultado").style.display =
            "none";


        // Mostra botão de nova tentativa

        document.getElementById("novaTentativa").style.display =
            "block";

    }

}


// =========================
// COPIAR CÓDIGO
// =========================

function copiarCodigo() {

    navigator.clipboard.writeText(
        codigoGerado
    );


    document.getElementById("mensagemCopiado").style.display =
        "block";


    setTimeout(() => {

        document.getElementById("mensagemCopiado").style.display =
            "none";

    }, 2500);

}


// =========================
// CONTINUAR APÓS O RESULTADO
// =========================

function continuarResultado() {

    const resultado = document.getElementById("resultadoFinal");
    const renovacao = document.getElementById("renovacao");

    if (resultado) {
        resultado.style.display = "none";
    }

    if (renovacao) {
        renovacao.style.display = "block";

        renovacao.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

}

    // =========================
    // APROVADO
    // =========================

    if (
        acertos >= 7 &&
        pistas.todasCorretas
    ) {

        document.getElementById("renovacao").style.display =
            "block";


        document.getElementById("dadosContratante").textContent =
            `Contratante: ${nomeContratante}`;


        document.getElementById("resultadoContratante").textContent =
            `Resultado da avaliação: ${acertos}/10`;


        document.getElementById("renovacao").scrollIntoView({
            behavior: "smooth"
        });

    }

}

// =========================
// NOVA TENTATIVA
// =========================

function reiniciarQuiz() {

    perguntaAtual = 0;

    respostas = [];

    respostasPistas = {

        pista1: "",
        pista2: "",
        pista3: "",
        pista4: ""

    };

    codigoGerado = "";


    // =========================
    // ESCONDER ETAPAS ANTERIORES
    // =========================

    document.getElementById("resultadoFinal").style.display =
        "none";

    document.getElementById("novaTentativa").style.display =
        "none";

    document.getElementById("renovacao").style.display =
        "none";

    document.getElementById("certificado").style.display =
        "none";

    document.getElementById("surpresaFinal").style.display =
        "none";

    document.getElementById("videoFinal").style.display =
        "none";

    document.getElementById("etapaFinalQuiz").style.display =
        "none";

    document.getElementById("assinaturaQuiz").style.display =
        "none";


    // =========================
    // LIMPAR CAMPOS
    // =========================

    document.getElementById("respostaPista1").value =
        "";

    document.getElementById("respostaPista2").value =
        "";

    document.getElementById("respostaPista3").value =
        "";

    document.getElementById("respostaPista4").value =
        "";

    document.getElementById("nomeConfirmacao").value =
        "";

    document.getElementById("confirmacaoRespostas").checked =
        false;


    // =========================
    // RESETAR QUIZ
    // =========================

    document.getElementById("pergunta").style.display =
        "block";

    document.getElementById("alternativas").style.display =
        "block";

    document.querySelector(".botoesQuiz").style.display =
        "flex";

    document.querySelector(".progresso").style.display =
        "block";


    carregarPergunta();


    document.getElementById("quiz").scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// MOSTRAR RENOVAÇÃO
// =========================

function mostrarRenovacao() {

    document.getElementById("resultadoFinal").style.display =
        "none";

    document.getElementById("renovacao").style.display =
        "block";


    document.getElementById("dadosContratante").textContent =
        `Contratante: ${nomeContratante}`;


    document.getElementById("resultadoContratante").textContent =
        `Resultado da avaliação: ${calcularNota()}/10`;


    document.getElementById("renovacao").scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// MOSTRAR CERTIFICADO
// =========================

function mostrarCertificado() {

    document.getElementById("renovacao").style.display =
        "none";


    document.getElementById("certificado").style.display =
        "block";


    document.getElementById("surpresaFinal").style.display =
        "none";


    document.getElementById("videoFinal").style.display =
        "none";


    document.getElementById("certificado").scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// MOSTRAR SURPRESA
// =========================

function mostrarSurpresa() {

    document.getElementById("certificado").style.display =
        "none";


    document.getElementById("surpresaFinal").style.display =
        "block";


    document.getElementById("videoFinal").style.display =
        "none";


    // Limpa mensagens anteriores

    document.getElementById("codigoSurpresa").value =
        "";

    document.getElementById("acessoAutorizado").style.display =
        "none";

    document.getElementById("codigoInvalido").style.display =
        "none";


    document.getElementById("surpresaFinal").scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// VALIDAR CÓDIGO DA SURPRESA
// =========================

function validarCodigoSurpresa() {

    const codigoDigitado =
        document
            .getElementById("codigoSurpresa")
            .value
            .trim();


    const mensagemAcesso =
        document.getElementById("acessoAutorizado");


    const mensagemErro =
        document.getElementById("codigoInvalido");


    // Esconde mensagens anteriores

    mensagemAcesso.style.display =
        "none";

    mensagemErro.style.display =
        "none";


    // =========================
    // CÓDIGO CORRETO
    // =========================

    if (
        codigoDigitado === codigoGerado &&
        codigoGerado !== ""
    ) {

        mensagemAcesso.style.display =
            "block";


        document.getElementById("codigoSurpresa").style.border =
            "2px solid #8b5e3c";


    }


    // =========================
    // CÓDIGO ERRADO
    // =========================

    else {

        mensagemErro.style.display =
            "block";


        document.getElementById("codigoSurpresa").style.border =
            "";

    }

}


// =========================
// MOSTRAR VÍDEO FINAL
// =========================

function mostrarVideo() {

    document.getElementById("surpresaFinal").style.display =
        "none";


    document.getElementById("videoFinal").style.display =
        "block";


    document.getElementById("videoFinal").scrollIntoView({
        behavior: "smooth"
    });

}


// =========================
// FINAL DO PROCESSO
// =========================
