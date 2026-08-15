// =====================================================
// NOSSO CANTINHO ❤️
// SCRIPT PRINCIPAL
// PARTE 1 — ACESSO, CONTRATO INICIAL, QUEM É MAIS E CONTADOR
// =====================================================


// =====================================================
// VARIÁVEIS GERAIS
// =====================================================

let nomeContratante = "";


// =====================================================
// CONTRATO DE ACESSO
// =====================================================

function verificarSenha() {

    const campoSenha =
        document.getElementById("senha");

    const senha =
        campoSenha.value
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");


    // Senha correta
    if (senha === "coracao") {

        // Esconde a tela de login
        document.getElementById("login").style.display =
            "none";


        // Mostra a titularidade validada
        const titularidade =
            document.getElementById("titularidadeValidada");

        titularidade.style.display =
            "block";


        // Leva o usuário para a próxima etapa
        titularidade.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    // Senha incorreta
    else {

        alert("Senha incorreta.");

        campoSenha.value = "";

        campoSenha.focus();

    }

}


// =====================================================
// ASSINATURA DO CONTRATO DO NOSSO CANTINHO
// =====================================================

function assinarContrato() {

    const campoNome =
        document.getElementById("nomeContrato");

    const aceite =
        document.getElementById("aceiteContrato");


    const nome =
        campoNome.value.trim();


    // Verifica o nome
    if (nome === "") {

        alert(
            "Digite seu nome para assinar o contrato."
        );

        campoNome.focus();

        return;

    }


    // Verifica o aceite
    if (!aceite.checked) {

        alert(
            "Leia e aceite os termos do contrato para continuar."
        );

        return;

    }


    // Guarda o nome do contratante
    nomeContratante =
        nome;


    // Esconde o contrato
    document.getElementById("contrato").style.display =
        "none";


    // Mostra a confirmação da assinatura
    const contratoAssinado =
        document.getElementById("contratoAssinado");

    contratoAssinado.style.display =
        "block";


    contratoAssinado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =====================================================
// CONTINUAR APÓS A ASSINATURA
// =====================================================

function continuarSite() {

    // Esconde a confirmação
    document.getElementById("contratoAssinado").style.display =
        "none";


    // Mostra todo o conteúdo
    const conteudo =
        document.getElementById("conteudoSite");

    conteudo.style.display =
        "block";


    // Vai para o início do conteúdo
    conteudo.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =====================================================
// QUEM É MAIS?
// =====================================================

function responderCoracao(botao) {

    // Localiza somente a pergunta
    // em que o botão foi clicado
    const pergunta =
        botao.closest(".pergunta-coracao");


    if (!pergunta) {
        return;
    }


    // Localiza os dois botões daquela pergunta
    const botoes =
        pergunta.querySelectorAll("button");


    // Remove a seleção anterior
    botoes.forEach(function(btn) {

        btn.classList.remove("selecionada");

    });


    // Marca a resposta escolhida
    botao.classList.add("selecionada");


    // Verifica todas as perguntas
    const perguntas =
        document.querySelectorAll(".pergunta-coracao");


    let respondidas = 0;


    perguntas.forEach(function(item) {

        if (
            item.querySelector(".selecionada")
        ) {

            respondidas++;

        }

    });


    // Quando todas forem respondidas,
    // libera a mensagem final
    if (
        respondidas === perguntas.length
    ) {

        const final =
            document.getElementById("fimQuemEMais");

        final.style.display =
            "block";


        final.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}


// =====================================================
// CONTADOR DO NOSSO RELACIONAMENTO
// =====================================================

function atualizarContador() {

    // 09 de maio de 2026
    const inicio =
        new Date(
            2026,
            4,
            9,
            0,
            0,
            0
        );


    const agora =
        new Date();


    // ---------------------------------------------
    // MESES E DIAS
    // ---------------------------------------------

    let anos =
        agora.getFullYear() -
        inicio.getFullYear();


    let meses =
        agora.getMonth() -
        inicio.getMonth();


    let dias =
        agora.getDate() -
        inicio.getDate();


    // Ajuste dos dias
    if (dias < 0) {

        meses--;


        const ultimoDiaMesAnterior =
            new Date(
                agora.getFullYear(),
                agora.getMonth(),
                0
            ).getDate();


        dias +=
            ultimoDiaMesAnterior;

    }


    // Ajuste dos meses
    if (meses < 0) {

        anos--;

        meses += 12;

    }


    // ---------------------------------------------
    // HORAS, MINUTOS E SEGUNDOS
    // ---------------------------------------------

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


    // ---------------------------------------------
    // ATUALIZA OS ELEMENTOS DO HTML
    // ---------------------------------------------

    const elementoMeses =
        document.getElementById("meses");


    const elementoDias =
        document.getElementById("dias");


    const elementoHoras =
        document.getElementById("horas");


    const elementoMinutos =
        document.getElementById("minutos");


    const elementoSegundos =
        document.getElementById("segundos");


    if (elementoMeses) {

        elementoMeses.textContent =
            (anos * 12) + meses;

    }


    if (elementoDias) {

        elementoDias.textContent =
            dias;

    }


    if (elementoHoras) {

        elementoHoras.textContent =
            horas;

    }


    if (elementoMinutos) {

        elementoMinutos.textContent =
            minutos;

    }


    if (elementoSegundos) {

        elementoSegundos.textContent =
            segundos;

    }

}


// =====================================================
// INICIALIZAÇÃO DO CONTADOR
// =====================================================

atualizarContador();


setInterval(
    atualizarContador,
    1000
);

// =====================================================
// PARTE 2 — ADITIVO E AVALIAÇÃO
// =====================================================


// =====================================================
// ADITIVO AO CONTRATO
// =====================================================

function aceitarAditivo() {

    const ciencia =
        document.getElementById("cienciaAditivo");

    const aceite =
        document.getElementById("aceiteAditivo");

    const consulta =
        document.getElementById("consultaAditivo");


    // Verifica se as três declarações foram marcadas
    if (
        !ciencia.checked ||
        !aceite.checked ||
        !consulta.checked
    ) {

        alert(
            "Para prosseguir, é necessário declarar ciência e aceitar integralmente o presente Aditivo."
        );

        return;
    }


    // Esconde o Aditivo
    document.getElementById("aditivoContrato").style.display =
        "none";


    // Mostra a avaliação
    const avaliacao =
        document.getElementById("interrogatorioContrato");

    avaliacao.style.display =
        "block";


    // Vai para a avaliação
    avaliacao.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    // Carrega a primeira pergunta
    carregarPergunta();

}


// =====================================================
// PERGUNTAS DO QUIZ
// =====================================================

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


// =====================================================
// VARIÁVEIS DO QUIZ
// =====================================================

let perguntaAtual = 0;

let respostas = [];


// =====================================================
// CARREGAR PERGUNTA
// =====================================================

function carregarPergunta() {

    const pergunta =
        perguntas[perguntaAtual];


    // ---------------------------------------------
    // NÚMERO DA PERGUNTA
    // ---------------------------------------------

    document.getElementById("numeroPergunta").textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


    // ---------------------------------------------
    // BARRA DE PROGRESSO
    // ---------------------------------------------

    const porcentagem =
        ((perguntaAtual + 1) /
            perguntas.length) * 100;


    document.getElementById("barraProgresso").style.width =
        `${porcentagem}%`;


    // ---------------------------------------------
    // TEXTO DA PERGUNTA
    // ---------------------------------------------

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;


    // ---------------------------------------------
    // ALTERNATIVAS
    // ---------------------------------------------

    const alternativas =
        document.getElementById("alternativas");


    alternativas.innerHTML = "";


    pergunta.alternativas.forEach(
        function(texto, indice) {

            const botao =
                document.createElement("button");


            botao.className =
                "opcao";


            botao.textContent =
                texto;


            // Se já havia uma resposta,
            // mantém a seleção
            if (
                respostas[perguntaAtual] === indice
            ) {

                botao.classList.add(
                    "selecionada"
                );

            }


            // Ao clicar
            botao.onclick =
                function() {

                    respostas[perguntaAtual] =
                        indice;


                    carregarPergunta();

                };


            alternativas.appendChild(
                botao
            );

        }
    );


    // ---------------------------------------------
    // BOTÃO ANTERIOR
    // ---------------------------------------------

    const btnAnterior =
        document.getElementById("btnAnterior");


    if (perguntaAtual === 0) {

        btnAnterior.style.display =
            "none";

    } else {

        btnAnterior.style.display =
            "inline-block";

    }


    // ---------------------------------------------
    // BOTÃO PRÓXIMO
    // ---------------------------------------------

    const btnProximo =
        document.getElementById("btnProximo");


    if (
        perguntaAtual ===
        perguntas.length - 1
    ) {

        btnProximo.textContent =
            "Finalizar avaliação";

    } else {

        btnProximo.textContent =
            "Próxima ➡";

    }

}


// =====================================================
// PERGUNTA ANTERIOR
// =====================================================

function anteriorPergunta() {

    if (perguntaAtual > 0) {

        perguntaAtual--;

        carregarPergunta();


        document
            .getElementById("quiz")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    }

}


// =====================================================
// PRÓXIMA PERGUNTA
// =====================================================

function proximaPergunta() {

    // Não permite avançar sem responder
    if (
        respostas[perguntaAtual] === undefined
    ) {

        alert(
            "Escolha uma alternativa antes de continuar."
        );

        return;

    }


    // Ainda existem perguntas
    if (
        perguntaAtual <
        perguntas.length - 1
    ) {

        perguntaAtual++;

        carregarPergunta();


        document
            .getElementById("quiz")
            .scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


        return;

    }


    // Última pergunta
    finalizarQuiz();

}


// =====================================================
// FINALIZAR AS 10 QUESTÕES
// =====================================================

function finalizarQuiz() {

    // Esconde a pergunta
    document.getElementById("pergunta").style.display =
        "none";


    // Esconde as alternativas
    document.getElementById("alternativas").style.display =
        "none";


    // Esconde os botões anterior/próxima
    document.querySelector(".botoesQuiz").style.display =
        "none";


    // Esconde a barra de progresso
    document.querySelector(".progresso").style.display =
        "none";


    // Mostra a Etapa Final
    const etapaFinal =
        document.getElementById("etapaFinalQuiz");


    etapaFinal.style.display =
        "block";


    etapaFinal.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =====================================================
// CALCULAR PONTUAÇÃO
// =====================================================

function calcularNota() {

    let acertos = 0;


    perguntas.forEach(
        function(pergunta, indice) {

            if (
                respostas[indice] ===
                pergunta.correta
            ) {

                acertos++;

            }

        }
    );


    return acertos;

}

// =====================================================
// PARTE 3 — ETAPA FINAL, CONFIRMAÇÃO E RESULTADO
// =====================================================


// =====================================================
// VARIÁVEIS DA ETAPA FINAL
// =====================================================

let respostasPistas = {

    pista1: "",
    pista2: "",
    pista3: "",
    pista4: ""

};


let codigoGerado = "";


// =====================================================
// NORMALIZAR TEXTO
// =====================================================

function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


// =====================================================
// VERIFICAR AS 4 PISTAS
// =====================================================

function verificarPistas() {

    const resposta1 =
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


    // ---------------------------------------------
    // PISTA 1 — ANTES DE TUDO
    // ---------------------------------------------

    const correta1 =
        resposta1 === "vela" ||
        resposta1 === "velas";


    // ---------------------------------------------
    // PISTA 2 — NOSSO AMULETO
    // ---------------------------------------------

    const correta2 =
        resposta2 === "pulseira";


    // ---------------------------------------------
    // PISTA 3 — NOSSO COMPROMISSO
    // ---------------------------------------------

    const correta3 =
        resposta3 === "alianca" ||
        resposta3 === "aliancas";


    // ---------------------------------------------
    // PISTA 4 — NOSSA BÊNÇÃO
    // ---------------------------------------------

    const correta4 =
        resposta4 === "oracao";


    return {

        correta1: correta1,

        correta2: correta2,

        correta3: correta3,

        correta4: correta4,

        todasCorretas:
            correta1 &&
            correta2 &&
            correta3 &&
            correta4

    };

}


// =====================================================
// PROSSEGUIR COM A ANÁLISE
// =====================================================

function prosseguirAnalise() {

    const pistas =
        verificarPistas();


    // ---------------------------------------------
    // VERIFICA AS QUATRO RESPOSTAS
    // ---------------------------------------------

    if (!pistas.todasCorretas) {

        alert(
            "Existem informações que não correspondem aos registros do sistema. Revise as seções do site e tente novamente."
        );

        return;

    }


    // ---------------------------------------------
    // GUARDA AS RESPOSTAS
    // ---------------------------------------------

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


    // ---------------------------------------------
    // ESCONDE A ETAPA DAS PISTAS
    // ---------------------------------------------

    document.getElementById("etapaFinalQuiz").style.display =
        "none";


    // ---------------------------------------------
    // MOSTRA A CONFIRMAÇÃO
    // ---------------------------------------------

    const assinatura =
        document.getElementById("assinaturaQuiz");


    assinatura.style.display =
        "block";


    assinatura.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =====================================================
// CONFIRMAR RESPOSTAS
// =====================================================

function confirmarQuiz() {

    const campoNome =
        document.getElementById("nomeConfirmacao");


    const aceite =
        document.getElementById("confirmacaoRespostas");


    const nome =
        campoNome.value.trim();


    // ---------------------------------------------
    // VERIFICA O NOME
    // ---------------------------------------------

    if (nome === "") {

        alert(
            "Digite seu nome para confirmar."
        );

        campoNome.focus();

        return;

    }


    // ---------------------------------------------
    // VERIFICA O CHECKBOX
    // ---------------------------------------------

    if (!aceite.checked) {

        alert(
            "Confirme suas respostas antes de continuar."
        );

        return;

    }


    // Guarda o nome utilizado na confirmação
    nomeContratante =
        nome;


    // ---------------------------------------------
    // ESCONDE A CONFIRMAÇÃO
    // ---------------------------------------------

    document.getElementById("assinaturaQuiz").style.display =
        "none";


    // ---------------------------------------------
    // MOSTRA A ANÁLISE
    // ---------------------------------------------

    const analise =
        document.getElementById("analiseProcesso");


    analise.style.display =
        "block";


    analise.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    // ---------------------------------------------
    // SIMULAÇÃO DE ANÁLISE
    // ---------------------------------------------

    setTimeout(
        function() {

            mostrarResultado();

        },
        2500
    );

}


// =====================================================
// GERAR CÓDIGO DA SURPRESA
// =====================================================

function gerarCodigo() {

    /*
        O código é formado pela quantidade
        de letras das quatro respostas.

        VELAS    = 5
        PULSEIRA = 8
        ALIANÇAS = 8
        ORAÇÃO   = 6

        Resultado esperado:
        5886
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


// =====================================================
// MOSTRAR RESULTADO
// =====================================================

function mostrarResultado() {

    const acertos =
        calcularNota();


    const pistas =
        verificarPistas();


    // ---------------------------------------------
    // ESCONDE A ANÁLISE
    // ---------------------------------------------

    document.getElementById("analiseProcesso").style.display =
        "none";


    // ---------------------------------------------
    // MOSTRA O RESULTADO
    // ---------------------------------------------

    const resultado =
        document.getElementById("resultadoFinal");


    resultado.style.display =
        "block";


    resultado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    // ---------------------------------------------
    // PONTUAÇÃO
    // ---------------------------------------------

    document.getElementById("pontuacaoFinal").textContent =
        acertos;


    // ---------------------------------------------
    // STATUS DA AVALIAÇÃO
    // ---------------------------------------------

    document.getElementById("statusAvaliacao").textContent =
        acertos >= 7
            ? "Aprovado"
            : "Não aprovado";


    // ---------------------------------------------
    // STATUS DAS PISTAS
    // ---------------------------------------------

    document.getElementById("statusEtapaFinal").textContent =
        pistas.todasCorretas
            ? "Concluída"
            : "Pendente";


    // ---------------------------------------------
    // STATUS DA CONFIRMAÇÃO
    // ---------------------------------------------

    document.getElementById("statusConfirmacao").textContent =
        "Confirmada";


    const decisao =
        document.getElementById("decisaoFinal");


    // =================================================
    // APROVADO
    // =================================================

    if (
        acertos >= 7 &&
        pistas.todasCorretas
    ) {


        // ---------------------------------------------
        // 10/10
        // ---------------------------------------------

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


        // ---------------------------------------------
        // 8 OU 9
        // ---------------------------------------------

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


        // ---------------------------------------------
        // 7/10
        // ---------------------------------------------

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


        // ---------------------------------------------
        // GERA O CÓDIGO
        // ---------------------------------------------

        codigoGerado =
            gerarCodigo();


        document.getElementById("codigoAcesso").textContent =
            codigoGerado;


        document.getElementById("codigoGerado").style.display =
            "block";

    }


// =========================================================
// NÃO APROVADO
// =========================================================

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


    // Não mostra o código
    document.getElementById("codigoGerado").style.display =
        "none";


    // Mostra a opção de nova tentativa
    document.getElementById("novaTentativa").style.display =
        "block";


    document.getElementById("novaTentativa").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =========================================================
// COPIAR CÓDIGO
// =========================================================

function copiarCodigo() {

    if (codigoGerado === "") {
        return;
    }

    navigator.clipboard.writeText(codigoGerado)
        .then(function () {

            document.getElementById("mensagemCopiado").style.display =
                "block";

            setTimeout(function () {

                document.getElementById("mensagemCopiado").style.display =
                    "none";

            }, 2500);

        })
        .catch(function () {

            alert(
                "Não foi possível copiar automaticamente. Código: "
                + codigoGerado
            );

        });

}


// =========================================================
// NOVA TENTATIVA
// =========================================================

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


    // Esconde etapas anteriores

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

    document.getElementById("analiseProcesso").style.display =
        "none";


    // Limpa respostas das pistas

    document.getElementById("respostaPista1").value = "";

    document.getElementById("respostaPista2").value = "";

    document.getElementById("respostaPista3").value = "";

    document.getElementById("respostaPista4").value = "";


    // Limpa confirmação

    document.getElementById("nomeConfirmacao").value = "";

    document.getElementById("confirmacaoRespostas").checked =
        false;


    // Mostra novamente o quiz

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
        behavior: "smooth",
        block: "start"
    });

}


// =========================================================
// MOSTRAR CERTIFICADO
// =========================================================

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
        behavior: "smooth",
        block: "start"
    });

}


// =========================================================
// MOSTRAR SURPRESA
// =========================================================

function mostrarSurpresa() {

    document.getElementById("certificado").style.display =
        "none";

    document.getElementById("surpresaFinal").style.display =
        "block";

    document.getElementById("videoFinal").style.display =
        "none";


    document.getElementById("codigoSurpresa").value =
        "";

    document.getElementById("acessoAutorizado").style.display =
        "none";

    document.getElementById("codigoInvalido").style.display =
        "none";

    document.getElementById("codigoSurpresa").style.border =
        "";


    document.getElementById("surpresaFinal").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =========================================================
// VALIDAR CÓDIGO DA SURPRESA
// =========================================================

function validarCodigoSurpresa() {

    const codigoDigitado =
        document
            .getElementById("codigoSurpresa")
            .value
            .trim();


    const acesso =
        document.getElementById("acessoAutorizado");

    const erro =
        document.getElementById("codigoInvalido");


    acesso.style.display =
        "none";

    erro.style.display =
        "none";


    // Código correto

    if (
        codigoDigitado === codigoGerado &&
        codigoGerado !== ""
    ) {

        acesso.style.display =
            "block";


        document.getElementById("codigoSurpresa").style.border =
            "2px solid #8b5e3c";


        acesso.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }


    // Código incorreto

    else {

        erro.style.display =
            "block";


        document.getElementById("codigoSurpresa").style.border =
            "2px solid #a33";

    }

}


// =========================================================
// MOSTRAR VÍDEO FINAL
// =========================================================

function mostrarVideo() {

    document.getElementById("surpresaFinal").style.display =
        "none";

    document.getElementById("videoFinal").style.display =
        "block";


    document.getElementById("videoFinal").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =========================================================
// FIM DO PROCESSO
// =========================================================
