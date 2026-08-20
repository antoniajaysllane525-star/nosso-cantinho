// =========================================================
// NOSSO CANTINHO ❤️
// SCRIPT PRINCIPAL
// PARTE 1 — ACESSO, CONTRATO E ENTRADA NO SITE
// =========================================================


// =========================================================
// VARIÁVEIS GERAIS
// =========================================================

let nomeContratante = "";

// =========================================================
// CONTRATO DE ACESSO
// =========================================================

function verificarSenha() {

    const campoSenha =
        document.getElementById("senha");


    // Verifica se o campo existe
    if (!campoSenha) {
        return;
    }


    const senha =
        campoSenha.value
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");


    // =====================================================
    // SENHA CORRETA
    // =====================================================

    if (senha === "coracao") {

        // Esconde tela de login
        document.getElementById("login").style.display =
            "none";


        // Mostra somente a titularidade validada
        document.getElementById("titularidadeValidada").style.display =
            "block";


        // Aguarda antes de revelar o contrato
        setTimeout(function () {

            document.getElementById("contrato").style.display =
                "block";


            // Leva até o contrato somente quando ele aparecer
            document.getElementById("contrato").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 3000);

    }


    // =====================================================
    // SENHA INCORRETA
    // =====================================================

    else {

        alert("Senha incorreta.");

        campoSenha.value = "";

        campoSenha.focus();

    }

}

// =========================================================
// PERMITIR ENTER NA SENHA
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const campoSenha =
        document.getElementById("senha");


    if (campoSenha) {

        campoSenha.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                verificarSenha();

            }

        });

    }

});


// =========================================================
// ASSINATURA DO CONTRATO
// =========================================================

function assinarContrato() {

    const campoNome =
        document.getElementById("nomeContrato");


    const aceite =
        document.getElementById("aceiteContrato");


    // Verifica se os elementos existem
    if (!campoNome || !aceite) {
        return;
    }


    const nome =
        campoNome.value.trim();


    // =====================================================
    // VALIDAÇÃO
    // =====================================================

    if (nome === "") {

        alert(
            "Digite seu nome para assinar o contrato."
        );

        campoNome.focus();

        return;

    }


    if (!aceite.checked) {

        alert(
            "Leia e aceite os termos do contrato para continuar."
        );

        return;

    }


    // Guarda o nome
    nomeContratante = nome;


    // =====================================================
    // ESCONDE CONTRATO
    // =====================================================

    document.getElementById("contrato").style.display =
        "none";


    // =====================================================
    // MOSTRA CONTRATO ASSINADO
    // =====================================================

    document.getElementById("contratoAssinado").style.display =
        "block";


    // =====================================================
    // SCROLL
    // =====================================================

    document.getElementById("contratoAssinado").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =========================================================
// CONTINUAR PARA O CONTEÚDO DO SITE
// =========================================================

function continuarSite() {

    // Esconde confirmação da assinatura
    document.getElementById("contratoAssinado").style.display =
        "none";


    // Mostra todo o conteúdo
    document.getElementById("conteudoSite").style.display =
        "block";


    // =====================================================
    // SCROLL PARA O COMEÇO DO SITE
    // =====================================================

    document.getElementById("conteudoSite").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =========================================================
// QUEM É MAIS?
// =========================================================

function responderCoracao(botao) {

    // Identifica a pergunta correspondente
    const pergunta =
        botao.closest(".pergunta-coracao");


    if (!pergunta) {
        return;
    }


    // =====================================================
    // REMOVE SELEÇÃO ANTERIOR
    // =====================================================

    const botoes =
        pergunta.querySelectorAll("button");


    botoes.forEach(function (btn) {

        btn.classList.remove("selecionada");

    });


    // =====================================================
    // MARCA RESPOSTA
    // =====================================================

    botao.classList.add("selecionada");


    // =====================================================
    // VERIFICA QUANTAS FORAM RESPONDIDAS
    // =====================================================

    const perguntas =
        document.querySelectorAll(".pergunta-coracao");


    let respondidas = 0;


    perguntas.forEach(function (item) {

        if (
            item.querySelector(".selecionada")
        ) {

            respondidas++;

        }

    });


    // =====================================================
    // TODAS RESPONDIDAS
    // =====================================================

    if (respondidas === perguntas.length) {

        const final =
            document.getElementById("fimQuemEMais");


        if (final) {

            final.style.display =
                "block";


            final.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    }

}


// =========================================================
// CONTADOR DO RELACIONAMENTO
// =========================================================

function atualizarContador() {

    // 09 de maio de 2026
    const inicio =
        new Date(2026, 4, 9, 0, 0, 0);


    const agora =
        new Date();


    // =====================================================
    // DIFERENÇA DE MESES E DIAS
    // =====================================================

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


        const ultimoDiaMesAnterior =
            new Date(
                agora.getFullYear(),
                agora.getMonth(),
                0
            ).getDate();


        dias +=
            ultimoDiaMesAnterior;

    }


    if (meses < 0) {

        anos--;

        meses += 12;

    }


    // =====================================================
    // HORAS, MINUTOS E SEGUNDOS
    // =====================================================

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
            (diferenca /
                1000) % 60
        );


    // =====================================================
    // ATUALIZA HTML
    // =====================================================

    const mesesElemento =
        document.getElementById("meses");


    const diasElemento =
        document.getElementById("dias");


    const horasElemento =
        document.getElementById("horas");


    const minutosElemento =
        document.getElementById("minutos");


    const segundosElemento =
        document.getElementById("segundos");


    if (mesesElemento) {

        mesesElemento.textContent =
            (anos * 12) + meses;

    }


    if (diasElemento) {

        diasElemento.textContent =
            dias;

    }


    if (horasElemento) {

        horasElemento.textContent =
            String(horas).padStart(2, "0");

    }


    if (minutosElemento) {

        minutosElemento.textContent =
            String(minutos).padStart(2, "0");

    }


    if (segundosElemento) {

        segundosElemento.textContent =
            String(segundos).padStart(2, "0");

    }

}

// =========================================================
// INICIAR CONTADOR
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    atualizarContador();


    setInterval(
        atualizarContador,
        1000
    );

});

/* =========================================================
   🫙 O POTE DAS DATAS — PARTE 1
========================================================= */

// =========================================================
// 🧪 MODO TESTE — POTE DAS DATAS
// =========================================================

const MODO_TESTE_POTE = true;
/* =========================================================
   📅 DATAS ESPECIAIS
========================================================= */

const datasPote = [

    {
        mes: 2,
        dia: 7,

        titulo: "🎂 Aniversário da Lana",

        frase:
            "Hoje é o aniversário da sua aliada.",

        tipo: "missao",

        missaoTitulo:
            "🎂 MISSÃO DO DIA",

        missaoFrase:
            "Hoje a missão é fazer sua aliada sorrir.",

        missaoConteudo:
            "Parabenize sua aliada de um jeito que ela não esqueça."
    },


    {
        mes: 3,
        dia: 1,

        titulo: "💋 Aniversário do primeiro beijo",

        frase:
            "O dia em que aconteceu aquele primeiro beijo.",

        tipo: "missao",

        missaoTitulo:
            "💋 MISSÃO DO DIA",

        missaoFrase:
            "Hoje merece um beijo especial.",

        missaoConteudo:
            "Dê um beijo na sua aliada e aproveitem o momento juntos."
    },


    {
        mes: 5,
        dia: 9,

        titulo: "❤️ Aniversário de namoro",

        frase:
            "Mais um ano desde que oficialmente viramos nós.",

        tipo: "missao",

        missaoTitulo:
            "❤️ MISSÃO OBRIGATÓRIA",

        missaoFrase:
            "Essa data não pode passar em branco.",

        missaoConteudo:
            "Faça alguma coisa especial com sua namorada para comemorar vocês."
    },


    {
        mes: 6,
        dia: 12,

        titulo: "💘 Dia dos Namorados",

        frase:
            "Hoje é oficialmente dia de vocês.",

        tipo: "missao",

        missaoTitulo:
            "💘 MISSÃO DO DIA",

        missaoFrase:
            "Hoje vocês têm um encontro marcado.",

        missaoConteudo:
            "Escolham alguma coisa para fazer juntos."
    },


    {
        mes: 7,
        dia: 26,

        titulo: "💍 Aniversário da aliança",

        frase:
            "O dia em que nosso compromisso ganhou um símbolo.",

        tipo: "missao",

        missaoTitulo:
            "💍 MISSÃO DO DIA",

        missaoFrase:
            "Hoje é dia de lembrar desse compromisso.",

        missaoConteudo:
            "Tire uma foto das alianças de vocês juntos e envie para sua aliada."
    },


    {
        mes: 9,
        dia: 8,

        titulo: "🎂 Aniversário do Nazareno",

        frase:
            "Hoje é o aniversário do dono deste sistema. 👀",

        tipo: "roleta"
    },


    {
        mes: 4,
        dia: 13,

        titulo: "💋 Dia do Beijo",

        frase:
            "Essa data praticamente se explica sozinha.",

        tipo: "missao",

        missaoTitulo:
            "💋 MISSÃO DO DIA",

        missaoFrase:
            "Sua missão é dar um beijo na sua aliada.",

        missaoConteudo:
            "A quantidade fica por sua conta. 👀"
    },


    {
        mes: 7,
        dia: 20,

        titulo: "🫂 Dia do Amigo",

        frase:
            "Antes de tudo, vocês também são amigos.",

        tipo: "missao",

        missaoTitulo:
            "🫂 MISSÃO DO DIA",

        missaoFrase:
            "Hoje é dia de lembrar a amizade entre vocês.",

        missaoConteudo:
            "Dê um abraço demorado na sua aliada."
    },


    {
        mes: 9,
        dia: 30,

        titulo: "💑 Dia do Casal",

        frase:
            "Uma data perfeitamente conveniente para vocês.",

        tipo: "missao",

        missaoTitulo:
            "💑 MISSÃO DO DIA",

        missaoFrase:
            "Hoje vocês precisam fazer alguma coisa juntos.",

        missaoConteudo:
            "Escolham alguma coisa simples para fazerem só vocês dois."
    },


    {
        mes: 10,
        dia: 31,

        titulo: "🎃 Halloween",

        frase:
            "Hoje a programação pode ficar um pouco suspeita. 👀",

        tipo: "missao",

        missaoTitulo:
            "🎃 DOCES OU TRAVESSURAS?",

        missaoFrase:
            "Escolha seu destino.",

        missaoConteudo:
            "🍬 DOCES — compre um doce e dê para sua aliada.\n\n" +
            "👻 TRAVESSURAS — dê um susto na sua aliada."
    }

];


/* =========================================================
   ❤️ MÊS-VERSÁRIO
   Todo dia 09
========================================================= */

function obterMesVersario(data) {

    const anoInicio = 2026;
    const mesInicio = 5;
    const diaInicio = 9;


    if (
        data.getFullYear() < anoInicio
    ) {
        return null;
    }


    if (
        data.getDate() !== diaInicio
    ) {
        return null;
    }


    const meses =
        (data.getFullYear() - anoInicio) * 12 +
        (
            data.getMonth() + 1 -
            mesInicio
        );


    if (meses < 1) {
        return null;
    }


    return meses;

}


/* =========================================================
   🔎 VERIFICAR DATA DE HOJE
========================================================= */

function obterDataEspecial() {

    const hoje = new Date();


    /* =====================================================
       ❤️ MÊS-VERSÁRIO
    ====================================================== */

    const meses =
        obterMesVersario(hoje);


    if (meses) {

        return {

            mes:
                hoje.getMonth() + 1,

            dia:
                hoje.getDate(),

            titulo:
                "❤️ Mês-versário",

            frase:
                `Hoje completamos ${meses} ${
                    meses === 1
                        ? "mês"
                        : "meses"
                } de nós.`,

            tipo:
                "mesversario",

            missaoTitulo:
                "❤️ MISSÃO DO MÊS",

            missaoFrase:
                "Mais um mês de nós.",

            missaoConteudo:
                "Faça alguma coisa especial com sua aliada para comemorar esse mês."

        };

    }


    /* =====================================================
       📅 DATAS FIXAS
    ====================================================== */

    const mes =
        hoje.getMonth() + 1;

    const dia =
        hoje.getDate();


    return datasPote.find(
        data =>
            data.mes === mes &&
            data.dia === dia
    ) || null;

}
/* =========================================================
   🫙 O POTE DAS DATAS — PARTE 2
========================================================= */


/* =========================================================
   🔓 ATUALIZAR ESTADO DO POTE
========================================================= */

function atualizarPote() {

    const pote =
        document.getElementById("potinhoDatas");

    const status =
        document.getElementById("statusPote");

    const botao =
        document.getElementById("botaoConsultarPote");


    if (!pote || !status || !botao) {
        return;
    }


    const dataEspecial =
        obterDataEspecial();


    if (dataEspecial) {

        pote.dataset.status =
            "desbloqueado";

        status.textContent =
            "🔓";

        botao.disabled =
            false;

    } else {

        pote.dataset.status =
            "bloqueado";

        status.textContent =
            "🔒";

        botao.disabled =
            true;

    }

}


/* =========================================================
   🫙 CONSULTAR O POTE
========================================================= */

function consultarPote() {

    const dataEspecial =
        obterDataEspecial();


    if (!dataEspecial) {
        return;
    }


    const pote =
        document.getElementById(
            "potinhoDatas"
        );

    const papel =
        document.getElementById(
            "papelRevelado"
        );

    const titulo =
        document.getElementById(
            "tituloDataPote"
        );

    const frase =
        document.getElementById(
            "fraseDataPote"
        );

    const conteudo =
        document.getElementById(
            "conteudoDataPote"
        );

    const botao =
        document.getElementById(
            "botaoAcaoPote"
        );

    const roleta =
        document.getElementById(
            "roletaAniversarioContainer"
        );


    /* =====================================================
       ✨ ANIMAÇÃO DO POTE
    ====================================================== */

    if (pote) {

        pote.classList.remove(
            "abrindo"
        );

        void pote.offsetWidth;

        pote.classList.add(
            "abrindo"
        );

    }


    /* =====================================================
       🎂 ANIVERSÁRIO DO NAZARENO
    ====================================================== */

    if (
        dataEspecial.tipo ===
        "roleta"
    ) {

        if (papel) {
            papel.style.display =
                "none";
        }


        if (roleta) {

            roleta.style.display =
                "block";

            roleta.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

        return;
    }


    /* =====================================================
       📅 DATA NORMAL
    ====================================================== */

    if (roleta) {

        roleta.style.display =
            "none";

    }


    if (papel) {

        papel.style.display =
            "block";

    }


    if (titulo) {

        titulo.textContent =
            dataEspecial.titulo;

    }


    if (frase) {

        frase.textContent =
            dataEspecial.frase;

    }


    if (conteudo) {

        conteudo.textContent =
            "Existe uma pequena missão esperando por você.";

    }


    if (botao) {

        botao.textContent =
            "ABRIR";

    }


    if (papel) {

        papel.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}


/* =========================================================
   🎯 ABRIR MISSÃO
========================================================= */

function abrirMissaoPote() {

    const dataEspecial =
        obterDataEspecial();


    if (!dataEspecial) {
        return;
    }


    const missao =
        document.getElementById(
            "missaoPote"
        );

    const titulo =
        document.getElementById(
            "tituloMissaoPote"
        );

    const frase =
        document.getElementById(
            "fraseMissaoPote"
        );

    const conteudo =
        document.getElementById(
            "conteudoMissaoPote"
        );


    if (!missao) {
        return;
    }


    titulo.textContent =
        dataEspecial.missaoTitulo ||
        "MISSÃO DO DIA";


    frase.textContent =
        dataEspecial.missaoFrase ||
        "";


    conteudo.textContent =
        dataEspecial.missaoConteudo ||
        "";


    missao.style.display =
        "block";


    missao.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   ✅ CONCLUIR MISSÃO
========================================================= */

function concluirMissaoPote() {

    const missao =
        document.getElementById(
            "missaoPote"
        );

    const pote =
        document.getElementById(
            "potinhoDatas"
        );


    if (missao) {

        missao.style.display =
            "none";

    }


    if (pote) {

        pote.dataset.status =
            "concluido";

    }

}


/* =========================================================
   🚀 INICIAR O POTE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        atualizarPote();

    }
);
/* =========================================================
   🎡 O POTE DAS DATAS — PARTE 3
   ROLETA DO ANIVERSÁRIO
========================================================= */


/* =========================================================
   🎁 PRÊMIOS
========================================================= */

const premiosRoleta = {

    1: {
        titulo: "🎬 ESCOLHER O FILME",

        descricao:
            "Você escolhe o filme que nós dois vamos assistir."
    },


    2: {
        titulo: "👫 ESCOLHER O LUGAR",

        descricao:
            "Você escolhe um lugar para nós dois irmos juntos."
    },


    3: {
        titulo: "💋 BEIJO À SUA ESCOLHA",

        descricao:
            "Você escolhe onde quer me beijar. 👀"
    },


    4: {
        titulo: "🍔 ESCOLHER O LANCHE",

        descricao:
            "Você escolhe o lanche. Eu pago."
    },


    5: {
        titulo: "🎁 VOCÊ ESCOLHE O MIMO",

        descricao:
            "Você escolhe alguma coisa que gostaria de ganhar da sua aliada."
    }

};


/* =========================================================
   🎡 CONTROLE
========================================================= */

let roletaGirando = false;

let rotacaoAtual = 0;


/* =========================================================
   🔒 VERIFICAR SE JÁ FOI FINALIZADA
========================================================= */

function roletaJaFinalizada() {

    return (
        localStorage.getItem(
            "roletaAniversario2026"
        ) !== null
    );

}


/* =========================================================
   🎡 GIRAR ROLETA
========================================================= */

function girarRoleta() {

    if (roletaGirando) {
        return;
    }


    /* Se já ganhou um prêmio, encerra */

    if (roletaJaFinalizada()) {

        alert(
            "Essa roleta já foi concluída. 👀"
        );

        return;
    }


    const roleta =
        document.getElementById(
            "roletaAniversario"
        );

    const botao =
        document.getElementById(
            "botaoGirarRoleta"
        );

    const resultado =
        document.getElementById(
            "resultadoRoleta"
        );


    if (
        !roleta ||
        !botao ||
        !resultado
    ) {
        return;
    }


    roletaGirando = true;

    botao.disabled = true;

    resultado.style.display = "none";


    /* =====================================================
       🎲 SORTEAR NÚMERO
    ====================================================== */

    const numeroSorteado =
        Math.floor(
            Math.random() * 6
        ) + 1;


    const grausPorNumero = 60;

    const voltas = 5;


    const destino =
        (numeroSorteado - 1) *
        grausPorNumero;


    const novaRotacao =
        rotacaoAtual +
        (voltas * 360) +
        (360 - destino);


    rotacaoAtual =
        novaRotacao;


    roleta.style.transform =
        `rotate(${novaRotacao}deg)`;


    /* =====================================================
       ⏳ ESPERAR A ROLETA PARAR
    ====================================================== */

    setTimeout(
        function () {

            roletaGirando = false;

            mostrarResultadoRoleta(
                numeroSorteado
            );

        },
        5000
    );

}


/* =========================================================
   🎁 MOSTRAR RESULTADO
========================================================= */

function mostrarResultadoRoleta(numero) {

    const resultado =
        document.getElementById(
            "resultadoRoleta"
        );

    const numeroElemento =
        document.getElementById(
            "numeroSorteado"
        );

    const titulo =
        document.getElementById(
            "tituloPremio"
        );

    const descricao =
        document.getElementById(
            "descricaoPremio"
        );

    const avisoPrint =
        document.getElementById(
            "avisoPrint"
        );

    const botao =
        document.getElementById(
            "botaoResultado"
        );


    if (!resultado) {
        return;
    }


    numeroElemento.textContent =
        numero;


    /* =====================================================
       👀 Nº 6 — PEGADINHA
    ====================================================== */

    if (numero === 6) {

        titulo.textContent =
            "👀 TENTE NOVAMENTE";


        descricao.textContent =
            "A sorte resolveu brincar com você. 😂";


        avisoPrint.style.display =
            "none";


        botao.textContent =
            "🎡 TENTAR NOVAMENTE";


        botao.onclick =
            function () {

                resultado.style.display =
                    "none";


                const botaoGirar =
                    document.getElementById(
                        "botaoGirarRoleta"
                    );


                if (botaoGirar) {

                    botaoGirar.disabled =
                        false;

                }


                girarRoleta();

            };

    }


    /* =====================================================
       🏆 Nº 1–5 — PRÊMIO DEFINITIVO
    ====================================================== */

    else {

        const premio =
            premiosRoleta[numero];


        titulo.textContent =
            premio.titulo;


        descricao.textContent =
            premio.descricao;


        avisoPrint.style.display =
            "block";


        /*
           Só os números 1–5
           encerram a roleta.
        */

        localStorage.setItem(
            "roletaAniversario2026",
            numero
        );


        botao.textContent =
            "ENTENDI";


        botao.onclick =
            function () {

                fecharResultadoRoleta();

            };

    }


    resultado.style.display =
        "block";


    resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================================================
   ❌ FECHAR RESULTADO
========================================================= */

function fecharResultadoRoleta() {

    const resultado =
        document.getElementById(
            "resultadoRoleta"
        );


    if (resultado) {

        resultado.style.display =
            "none";

    }

}

// =========================================================
// FIM DA PARTE 1
// =========================================================

// =========================================================
// ADITIVO AO CONTRATO
// =========================================================

function aceitarAditivo() {

    const ciencia =
        document.getElementById("cienciaAditivo");

    const aceite =
        document.getElementById("aceiteAditivo");

    const consulta =
        document.getElementById("consultaAditivo");


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


    // Esconde o aditivo
    document.getElementById("aditivoContrato").style.display =
        "none";


    // Mostra a avaliação
    document.getElementById("interrogatorioContrato").style.display =
        "block";


    // Mostra o quiz
    document.getElementById("quiz").style.display =
        "block";


    // Carrega a primeira pergunta
    carregarPergunta();


    // Vai para a avaliação
    document.getElementById("interrogatorioContrato").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =========================================================
// QUIZ — RENOVAÇÃO DO CONTRATO
// =========================================================

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


// =========================================================
// VARIÁVEIS DO QUIZ
// =========================================================

let perguntaAtual = 0;

let respostas = [];

let respostasPistas = {
    pista1: "",
    pista2: "",
    pista3: "",
    pista4: ""
};

let codigoGerado = "";


// =========================================================
// CARREGAR PERGUNTA
// =========================================================

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


    pergunta.alternativas.forEach(function (texto, indice) {

        const botao =
            document.createElement("button");


        botao.className =
            "opcao";


        botao.textContent =
            texto;


        if (
            respostas[perguntaAtual] === indice
        ) {

            botao.classList.add("selecionada");

        }


        botao.onclick = function () {

            respostas[perguntaAtual] =
                indice;


            carregarPergunta();

        };


        alternativas.appendChild(botao);

    });


    // Botão anterior
    document.getElementById("btnAnterior").style.display =
        perguntaAtual === 0
            ? "none"
            : "inline-block";


    // Botão próximo
    document.getElementById("btnProximo").textContent =
        perguntaAtual === perguntas.length - 1
            ? "Finalizar avaliação"
            : "Próxima ➡";

}


// =========================================================
// PERGUNTA ANTERIOR
// =========================================================

function anteriorPergunta() {

    if (perguntaAtual > 0) {

        perguntaAtual--;

        carregarPergunta();

    }

}


// =========================================================
// PRÓXIMA PERGUNTA
// =========================================================

function proximaPergunta() {

    if (
        respostas[perguntaAtual] == null
    ) {

        alert(
            "Escolha uma alternativa antes de continuar."
        );

        return;

    }


    if (
        perguntaAtual <
        perguntas.length - 1
    ) {

        perguntaAtual++;

        carregarPergunta();

    }

    else {

        finalizarQuiz();

    }

}


// =========================================================
// FINALIZAR AS 10 QUESTÕES
// =========================================================

function finalizarQuiz() {

    document.getElementById("pergunta").style.display =
        "none";


    document.getElementById("alternativas").style.display =
        "none";


    document.querySelector(".botoesQuiz").style.display =
        "none";


    document.querySelector(".progresso").style.display =
        "none";


    document.getElementById("etapaFinalQuiz").style.display =
        "block";


    document.getElementById("etapaFinalQuiz").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =========================================================
// VERIFICAR PISTAS
// =========================================================

function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


function verificarPistas() {

    const resposta1 =
        normalizarTexto(
            document.getElementById("respostaPista1").value
        );


    const resposta2 =
        normalizarTexto(
            document.getElementById("respostaPista4").value
        );


    const resposta3 =
        normalizarTexto(
            document.getElementById("respostaPista2").value
        );


    const resposta4 =
        normalizarTexto(
            document.getElementById("respostaPista3").value
        );


    const resposta5 =
        normalizarTexto(
            document.getElementById("respostaPista5").value
        );


    const correta1 =
        resposta1 === "vela" ||
        resposta1 === "velas";


    const correta2 =
        resposta2 === "coracao";


    const correta3 =
        resposta3 === "pulseira";


    const correta4 =
        resposta4 === "alianca" ||
        resposta4 === "aliancas";


    const correta5 =
        resposta5 === "igreja";


    return {

        correta1: correta1,
        correta2: correta2,
        correta3: correta3,
        correta4: correta4,
        correta5: correta5,

        todasCorretas:
            correta1 &&
            correta2 &&
            correta3 &&
            correta4 &&
            correta5

    };

}


// =========================================================
// PROSSEGUIR COM A ANÁLISE
// =========================================================

function prosseguirAnalise() {

    const pistas =
        verificarPistas();


    if (!pistas.todasCorretas) {

        alert(
            "Existem informações que não correspondem aos registros do sistema. Revise as seções do site e tente novamente."
        );

        return;

    }


    // Guarda respostas
    respostasPistas.pista1 =
        document.getElementById("respostaPista1").value.trim();

    respostasPistas.pista2 =
        document.getElementById("respostaPista2").value.trim();

    respostasPistas.pista3 =
        document.getElementById("respostaPista3").value.trim();

    respostasPistas.pista4 =
        document.getElementById("respostaPista4").value.trim();

    respostasPistas.pista5 =
        document.getElementById("respostaPista5").value.trim();


    // Esconde pistas
    document.getElementById("etapaFinalQuiz").style.display =
        "none";


    // Mostra confirmação
    document.getElementById("assinaturaQuiz").style.display =
        "block";


    document.getElementById("assinaturaQuiz").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

// =========================================================
// CONFIRMAR RESPOSTAS
// =========================================================

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


    if (nome === "") {

        alert(
            "Digite seu nome para confirmar."
        );

        document.getElementById("nomeConfirmacao").focus();

        return;

    }


    if (!aceite) {

        alert(
            "Confirme suas respostas antes de continuar."
        );

        return;

    }


    nomeContratante =
        nome;


    document.getElementById("assinaturaQuiz").style.display =
        "none";


    document.getElementById("analiseProcesso").style.display =
        "block";


    document.getElementById("analiseProcesso").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    setTimeout(function () {

        mostrarResultado();

    }, 2500);

}


// =========================================================
// FIM DA PARTE 2
// =========================================================

// =========================
// ETAPA 5 — PISTAS
// =========================

function verificarPistas() {

    const resposta1 = normalizarTexto(
        document.getElementById("respostaPista1").value
    );

    const resposta2 = normalizarTexto(
        document.getElementById("respostaPista4").value
    );

    const resposta3 = normalizarTexto(
        document.getElementById("respostaPista2").value
    );

    const resposta4 = normalizarTexto(
        document.getElementById("respostaPista3").value
    );

    const resposta5 = normalizarTexto(
        document.getElementById("respostaPista5").value
    );


    return {

        correta1:
            resposta1 === "vela" ||
            resposta1 === "velas",

        correta2:
            resposta2 === "coracao",

        correta3:
            resposta3 === "pulseira",

        correta4:
            resposta4 === "alianca" ||
            resposta4 === "aliancas",

        correta5:
            resposta5 === "igreja",


        todasCorretas:
            (
                (resposta1 === "vela" || resposta1 === "velas") &&
                resposta2 === "coracao" &&
                resposta3 === "pulseira" &&
                (resposta4 === "alianca" || resposta4 === "aliancas") &&
                resposta5 === "igreja"
            )

    };

}


// =========================
// PROSSEGUIR COM A ANÁLISE
// =========================

function prosseguirAnalise() {

    const pistas = verificarPistas();


    if (!pistas.todasCorretas) {

        alert(
            "Existem informações que não correspondem aos registros do sistema. Revise as seções do site e tente novamente."
        );

        return;

    }


    respostasPistas.pista1 =
        document.getElementById("respostaPista1").value.trim();

    respostasPistas.pista2 =
        document.getElementById("respostaPista4").value.trim();

    respostasPistas.pista3 =
        document.getElementById("respostaPista2").value.trim();

    respostasPistas.pista4 =
        document.getElementById("respostaPista3").value.trim();

    respostasPistas.pista5 =
        document.getElementById("respostaPista5").value.trim();


    document.getElementById("etapaFinalQuiz").style.display =
        "none";


    document.getElementById("assinaturaQuiz").style.display =
        "block";


    document.getElementById("assinaturaQuiz").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

// =========================
// CONFIRMAR RESPOSTAS
// =========================

function confirmarQuiz() {

    const nome = document
        .getElementById("nomeConfirmacao")
        .value
        .trim();

    const aceite = document
        .getElementById("confirmacaoRespostas")
        .checked;

    if (nome === "") {

        alert("Digite seu nome para confirmar.");

        return;
    }

    if (!aceite) {

        alert(
            "Confirme suas respostas antes de continuar."
        );

        return;
    }

    nomeContratante = nome;

    document.getElementById("assinaturaQuiz").style.display =
        "none";

    document.getElementById("analiseProcesso").style.display =
        "block";

    document.getElementById("analiseProcesso").scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(function () {

        mostrarResultado();

    }, 2500);
}


// =========================
// CALCULAR NOTA
// =========================

function calcularNota() {

    let acertos = 0;

    perguntas.forEach(function (pergunta, index) {

        if (respostas[index] === pergunta.correta) {
            acertos++;
        }

    });

    return acertos;
}


// =========================
// GERAR CÓDIGO
// =========================

function gerarCodigo() {

    return (
        respostasPistas.pista1.length +
        "" +
        respostasPistas.pista2.length +
        "" +
        respostasPistas.pista3.length +
        "" +
        respostasPistas.pista4.length +
        "" +
        respostasPistas.pista5.length
    );
}


// =========================
// MOSTRAR RESULTADO
// =========================

function mostrarResultado() {

    const acertos = calcularNota();
    const pistas = verificarPistas();

    document.getElementById("analiseProcesso").style.display =
        "none";

    document.getElementById("resultadoFinal").style.display =
        "block";

    document.getElementById("pontuacaoFinal").textContent =
        acertos;

    document.getElementById("statusAvaliacao").textContent =
        acertos >= 7
            ? "Aprovado"
            : "Não aprovado";

    document.getElementById("statusEtapaFinal").textContent =
        pistas.todasCorretas
            ? "Concluída"
            : "Pendente";

    document.getElementById("statusConfirmacao").textContent =
        "Confirmada";

    const decisao =
        document.getElementById("decisaoFinal");

    const codigoArea =
        document.getElementById("codigoGerado");

    const novaTentativa =
        document.getElementById("novaTentativa");

    // =========================
    // APROVADO
    // =========================

    if (acertos >= 7 && pistas.todasCorretas) {

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

        } else if (acertos >= 8) {

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

        } else {

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

        codigoGerado = gerarCodigo();

        document.getElementById("codigoAcesso").textContent =
            codigoGerado;

        codigoArea.style.display = "block";

        novaTentativa.style.display = "none";

        // =========================
        // RENOVAÇÃO APROVADA
        // =========================

        document.getElementById("renovacao").style.display =
            "block";

        document.getElementById("dadosContratante").textContent =
            `Contratante: ${nomeContratante}`;

        document.getElementById("resultadoContratante").textContent =
            `Resultado da avaliação: ${acertos}/10`;

    }

    // =========================
    // NÃO APROVADO
    // =========================

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

        codigoArea.style.display = "none";

        novaTentativa.style.display = "block";

        document.getElementById("novaTentativa").scrollIntoView({
            behavior: "smooth"
        });
    }
}


// =========================
// COPIAR CÓDIGO
// =========================

function copiarCodigo() {

    if (!codigoGerado) {
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
                "Não foi possível copiar automaticamente. Código: " +
                codigoGerado
            );

        });
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
    // ESCONDER ETAPAS
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

    document.getElementById("analiseProcesso").style.display =
        "none";

    // =========================
    // LIMPAR CAMPOS
    // =========================

    document.getElementById("respostaPista1").value = "";
    document.getElementById("respostaPista2").value = "";
    document.getElementById("respostaPista3").value = "";
    document.getElementById("respostaPista4").value = "";

    document.getElementById("nomeConfirmacao").value = "";

    document.getElementById("confirmacaoRespostas").checked =
        false;

    // =========================
    // RESTAURAR QUIZ
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
        behavior: "smooth",
        block: "start"
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
        behavior: "smooth",
        block: "start"
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
        behavior: "smooth",
        block: "start"
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


// =========================
// VALIDAR CÓDIGO DA SURPRESA
// =========================

function validarCodigoSurpresa() {

    const codigoDigitado =
        document.getElementById("codigoSurpresa")
        .value
        .trim();

    const acesso =
        document.getElementById("acessoAutorizado");

    const erro =
        document.getElementById("codigoInvalido");

    acesso.style.display = "none";
    erro.style.display = "none";

    if (
        codigoDigitado === codigoGerado &&
        codigoGerado !== ""
    ) {

        acesso.style.display =
            "block";

        document.getElementById("codigoSurpresa").style.border =
            "2px solid #8b5e3c";

    } else {

        erro.style.display =
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
        behavior: "smooth",
        block: "start"
    });
}


// =========================
// FINAL DO PROCESSO
// =========================

function encerrarProcesso() {

    document.getElementById("videoFinal").style.display =
        "none";

    document.getElementById("disposicaoFinal").style.display =
        "block";

    document.getElementById("disposicaoFinal").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// =========================
// INICIALIZAÇÃO FINAL
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // Inicializa o contador
    atualizarContador();

    // Inicializa o quiz
    if (
        document.getElementById("quiz") &&
        document.getElementById("pergunta")
    ) {

        carregarPergunta();

    }

});

// =========================
// CONTROLE DE EXIBIÇÃO
// =========================

function esconderTodasEtapasFinais() {

    const etapas = [
        "resultadoFinal",
        "novaTentativa",
        "renovacao",
        "certificado",
        "surpresaFinal",
        "videoFinal"
    ];

    etapas.forEach(function (id) {

        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.style.display = "none";
        }

    });
}

// =========================
// GARANTIR ESTADO INICIAL
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ELEMENTOS FINAIS
    // =========================

    const etapasOcultas = [
        "titularidadeValidada",
        "contrato",
        "contratoAssinado",
        "interrogatorioContrato",
        "etapaFinalQuiz",
        "assinaturaQuiz",
        "analiseProcesso",
        "resultadoFinal",
        "novaTentativa",
        "renovacao",
        "certificado",
        "surpresaFinal",
        "videoFinal"
    ];

    etapasOcultas.forEach(function (id) {

        const elemento =
            document.getElementById(id);

        if (elemento) {
            elemento.style.display = "none";
        }

    });

    // =========================
    // CONTEÚDO DO SITE
    // =========================

    const conteudo =
        document.getElementById("conteudoSite");

    if (conteudo) {
        conteudo.style.display = "none";
    }


    // =========================
    // LOGIN
    // =========================

    const login =
        document.getElementById("login");

    if (login) {
        login.style.display = "block";
    }


    // =========================
    // INICIALIZAR QUIZ
    // =========================

    if (
        document.getElementById("quiz") &&
        document.getElementById("pergunta")
    ) {

        carregarPergunta();

    }


    // =========================
    // INICIALIZAR CONTADOR
    // =========================

    atualizarContador();

});
