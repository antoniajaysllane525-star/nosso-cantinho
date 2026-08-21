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

/* =====================================================
   🧪 MODO DE TESTE
===================================================== */

let modoTeste = false;
let testeFinal = false;


/* =====================================================
   🫙 ELEMENTOS DO POTE
===================================================== */

const pote =
    document.querySelector(".pote");

const statusPote =
    document.getElementById("status-pote");

const btnAbrirPote =
    document.getElementById("btn-abrir-pote");

const bilhete1 =
    document.getElementById("bilhete-1");

const bilhete2 =
    document.getElementById("bilhete-2");

const mapaSection =
    document.getElementById("mapa-section");


/* =====================================================
   ❤️ ELEMENTOS DO CORAÇÃO
===================================================== */

const preenchimentoCoracao =
    document.getElementById("preenchimento-coracao");

const porcentagem =
    document.getElementById("porcentagem");


/* =====================================================
   🌌 ELEMENTOS DO UNIVERSO
===================================================== */

const estrelasMapa =
    document.getElementById("estrelas-mapa");

const chaveFinal =
    document.getElementById("chave-final");

const cadeadoFinal =
    document.getElementById("cadeado-final");


/* =====================================================
   🎁 ELEMENTOS DO FINAL
===================================================== */

const finalAniversario =
    document.getElementById("final-aniversario");

const dadiva =
    document.getElementById("dadiva");

const roleta =
    document.getElementById("roleta");


/* =====================================================
   🫙 ESTADO DO POTE
===================================================== */

let poteAberto = false;
let bilheteAtual = 0;


/* =====================================================
   ❤️ ESTADO DO CAMINHO
===================================================== */

let caminhoIniciado = false;
let finalDesbloqueado = false;


/* =====================================================
   🎡 ESTADO DA ROLETA
===================================================== */

let roletaGirou = false;
let podeGirarNovamente = false;
let numeroResultado = null;
let grausRoleta = 0;


/* =====================================================
   🎁 PREMIAÇÕES DA ROLETA
===================================================== */

const premios = {

    1: {
        emoji: "🎬",
        titulo: "Escolher o filme",
        descricao:
            "Hoje quem escolhe o filme é você."
    },

    2: {
        emoji: "📍",
        titulo: "Escolher o lugar",
        descricao:
            "Hoje você escolhe para onde vamos."
    },

    3: {
        emoji: "💋",
        titulo: "Escolher o beijo",
        descricao:
            "Você ganhou o direito de escolher o beijo."
    },

    4: {
        emoji: "🍫",
        titulo: "Escolher o lanche",
        descricao:
            "Hoje você escolhe o nosso lanchinho."
    },

    5: {
        emoji: "👀",
        titulo: "Escolha peculiar",
        descricao:
            "Você ganhou uma escolha peculiar. Agora quero ver o que vai inventar."
    },

    6: {
        emoji: "🔄",
        titulo: "TENTE NOVAMENTE",
        descricao:
            "A roleta decidiu que você merece mais uma chance."
    }

};


/* =====================================================
   🫙 ABRIR POTE
===================================================== */

if (btnAbrirPote) {

    btnAbrirPote.addEventListener(
        "click",
        () => {

            if (poteAberto) {
                return;
            }

            poteAberto = true;


            if (pote) {

                pote.classList.add(
                    "aberto"
                );

            }


            statusPote.textContent =
                "O pote foi aberto. Existe um bilhete esperando por você.";


            btnAbrirPote.textContent =
                "VER BILHETE";


            btnAbrirPote.onclick =
                mostrarBilhete1;

        }
    );

}


/* =====================================================
   💌 MOSTRAR BILHETE 1
===================================================== */

function mostrarBilhete1() {

    bilhete1.classList.remove(
        "oculto"
    );


    bilhete1.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });


    preencherBilheteDoDia();

}


/* =====================================================
   📅 PREENCHER BILHETE DE ACORDO COM A DATA
===================================================== */

function preencherBilheteDoDia() {

    const agora =
        new Date();


    let mes =
        agora.getMonth() + 1;

    let dia =
        agora.getDate();


    /*
       🧪 MODO TESTE
    */

    if (modoTeste) {

        mes = 8;
        dia = 8;

    }


    const emoji =
        document.getElementById(
            "bilhete-emoji"
        );

    const data =
        document.getElementById(
            "bilhete-data"
        );

    const titulo =
        document.getElementById(
            "bilhete-titulo"
        );

    const frase =
        document.getElementById(
            "bilhete-frase"
        );

    const missao =
        document.getElementById(
            "bilhete-missao"
        );


    /* =================================================
       🎂 ANIVERSÁRIO DO NAZARENO
    ================================================= */

    if (
        mes === 8 &&
        dia === 8
    ) {

        emoji.textContent =
            "🎂";

        data.textContent =
            "08/09";

        titulo.textContent =
            "Aniversário dele";

        frase.textContent =
            "Hoje o sistema é todo seu.";

        missao.textContent =
            "A missão de hoje começa aqui. Existe um caminho esperando para ser descoberto.";

        return;

    }


    /* =================================================
       ❤️ NOSSO ANIVERSÁRIO
    ================================================= */

    if (
        mes === 5 &&
        dia === 9
    ) {

        emoji.textContent =
            "❤️";

        data.textContent =
            "09/05";

        titulo.textContent =
            "Nosso aniversário";

        frase.textContent =
            "Mais um capítulo da nossa história.";

        missao.textContent =
            "Hoje é dia de continuar escrevendo a nossa história.";

        return;

    }


    /* =================================================
       💌 DATA COMUM
    ================================================= */

    emoji.textContent =
        "💌";

    data.textContent =
        String(dia).padStart(2, "0") +
        "/" +
        String(mes).padStart(2, "0");

    titulo.textContent =
        "Um bilhete para você";

    frase.textContent =
        "Algumas coisas só aparecem quando chega a hora.";

    missao.textContent =
        "Hoje existe uma pequena descoberta esperando por você.";

}
/* =====================================================
   💌 BOTÃO DESCOBRIR — BILHETE 1
===================================================== */

const btnDescobrir =
    document.getElementById("btn-descobrir");


if (btnDescobrir) {

    btnDescobrir.addEventListener(
        "click",
        () => {

            bilhete2.classList.remove(
                "oculto"
            );


            bilhete2.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });


            carregarBilhete2();

        }
    );

}


/* =====================================================
   💌 CONTEÚDO DO BILHETE 2
===================================================== */

function carregarBilhete2() {

    const conteudo =
        document.getElementById(
            "acao-conteudo"
        );


    if (!conteudo) {
        return;
    }


    conteudo.innerHTML = `

        <h3>
            Uma pequena escolha.
        </h3>

        <p>
            Antes de continuar, existe uma decisão
            que precisa ser registrada.
        </p>

        <p>
            Escreva abaixo aquilo que o sistema
            está pedindo.
        </p>

    `;

}


/* =====================================================
   💌 CONFIRMAR ESCOLHA
===================================================== */

const btnConfirmar =
    document.getElementById("btn-confirmar");


if (btnConfirmar) {

    btnConfirmar.addEventListener(
        "click",
        () => {

            const campo =
                document.getElementById(
                    "campo-escolha"
                );


            if (
                !campo ||
                campo.value.trim() === ""
            ) {

                alert(
                    "Preencha a sua escolha antes de continuar."
                );

                return;

            }


            const conclusao =
                document.getElementById(
                    "conclusao"
                );


            conclusao.classList.remove(
                "oculto"
            );


            btnConfirmar.style.display =
                "none";


            const btnSeguir =
                document.getElementById(
                    "btn-seguir-caminho"
                );


            btnSeguir.classList.remove(
                "oculto"
            );

        }
    );

}


/* =====================================================
   🌌 SEGUIR O CAMINHO
===================================================== */

const btnSeguir =
    document.getElementById(
        "btn-seguir-caminho"
    );


if (btnSeguir) {

    btnSeguir.addEventListener(
        "click",
        () => {

            mapaSection.classList.remove(
                "oculto"
            );


            mapaSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


            iniciarCaminho();

        }
    );

}


/* =====================================================
   🌌 INICIAR CAMINHO
===================================================== */

function iniciarCaminho() {

    if (caminhoIniciado) {
        return;
    }


    caminhoIniciado = true;


    criarEstrelas();


    atualizarCoracao();

}


/* =====================================================
   ✦ CRIAR ESTRELAS
===================================================== */

function criarEstrelas() {

    if (!estrelasMapa) {
        return;
    }


    estrelasMapa.innerHTML = "";


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const estrela =
            document.createElement(
                "span"
            );


        estrela.className =
            "estrela-real";


        estrela.textContent =
            Math.random() > 0.5
                ? "✦"
                : "·";


        estrela.style.left =
            Math.random() * 95 + "%";


        estrela.style.top =
            Math.random() * 90 + "%";


        estrela.style.animationDelay =
            Math.random() * 2 + "s";


        estrelasMapa.appendChild(
            estrela
        );

    }

}


/* =====================================================
   ❤️ CALCULAR PORCENTAGEM DO CORAÇÃO
===================================================== */

function calcularProgresso() {

    /*
       🧪 TESTE FINAL
       Força o coração para 100%.
    */

    if (testeFinal) {
        return 100;
    }


    /*
       📅 INÍCIO DO RELACIONAMENTO
    */

    const inicio =
        new Date(
            2026,
            4,
            9
        );


    const agora =
        new Date();


    /*
       🎂 ANIVERSÁRIO DO NAZARENO
       08/09/2026
    */

    const aniversario =
        new Date(
            agora.getFullYear(),
            8,
            8
        );


    /*
       Se já chegou ao aniversário,
       o coração fica completo.
    */

    if (
        agora >= aniversario
    ) {

        return 100;

    }


    const total =
        aniversario.getTime() -
        inicio.getTime();


    const passado =
        agora.getTime() -
        inicio.getTime();


    let valor =
        (passado / total) * 100;


    valor =
        Math.max(
            0,
            Math.min(
                100,
                valor
            )
        );


    return valor;

}


/* =====================================================
   ❤️ ATUALIZAR CORAÇÃO
===================================================== */

function atualizarCoracao() {

    let valor =
        calcularProgresso();


    valor =
        Math.round(valor);


    /*
       PORCENTAGEM
    */

    if (porcentagem) {

        porcentagem.innerHTML = `

            <strong>
                ${valor}%
            </strong>

            <span>
                do caminho
            </span>

        `;

    }


    /*
       PREENCHIMENTO DO SANGUE
    */

    if (preenchimentoCoracao) {

        const altura =
            180 * (valor / 100);


        const y =
            180 - altura;


        preenchimentoCoracao.setAttribute(
            "y",
            y
        );


        preenchimentoCoracao.setAttribute(
            "height",
            altura
        );

    }


    /*
       ❤️ CHEGOU A 100%
    */

    if (
        valor >= 100
    ) {

        desbloquearFinal();

    }

}
/* =====================================================
   🔑 DESBLOQUEAR CHAVE + CADEADO
===================================================== */

function desbloquearFinal() {

    /*
       Evita executar essa função várias vezes.
    */

    if (finalDesbloqueado) {
        return;
    }


    finalDesbloqueado = true;


    /*
       🔑 A CHAVE APARECE
    */

    if (chaveFinal) {

        chaveFinal.classList.remove(
            "oculto"
        );

    }


    /*
       🔒 O CADEADO APARECE
    */

    if (cadeadoFinal) {

        cadeadoFinal.classList.remove(
            "oculto"
        );

    }


    /*
       ⚠️ IMPORTANTE

       O coração chegou a 100%, mas NÃO abre
       a Dádiva automaticamente.

       Ele precisa deslizar a tela e encontrar
       a chave + o cadeado.
    */

    if (finalAniversario) {

        finalAniversario.classList.add(
            "oculto"
        );

    }


    /*
       Leva suavemente até o universo,
       onde estão a chave e o cadeado.
    */

    setTimeout(
        () => {

            const universo =
                document.getElementById(
                    "universo"
                );


            if (universo) {

                universo.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        },
        700
    );

}


/* =====================================================
   🔑 CLICAR NA CHAVE
===================================================== */

if (chaveFinal) {

    chaveFinal.addEventListener(
        "click",
        () => {

            /*
               A chave não abre nada sozinha.
               Ela apenas registra que foi encontrada.
            */

            chaveFinal.classList.add(
                "usando-chave"
            );


            alert(
                "🔑 Chave encontrada. Agora descubra onde ela deve ser usada."
            );

        }
    );

}


/* =====================================================
   🔒 CLICAR NO CADEADO
===================================================== */

if (cadeadoFinal) {

    cadeadoFinal.addEventListener(
        "click",
        () => {

            /*
               O cadeado só funciona depois
               que o caminho chegou a 100%.
            */

            if (!finalDesbloqueado) {
                return;
            }


            cadeadoFinal.classList.add(
                "cadeado-aberto"
            );


            /*
               Só depois de usar o cadeado
               aparece a parte final.
            */

            setTimeout(
                () => {

                    if (finalAniversario) {

                        finalAniversario.classList.remove(
                            "oculto"
                        );


                        finalAniversario.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    }

                },
                700
            );

        }
    );

}


/* =====================================================
   🎁 ABRIR DÁDIVA
===================================================== */

const btnDadiva =
    document.getElementById(
        "btn-dadiva"
    );


if (btnDadiva) {

    btnDadiva.addEventListener(
        "click",
        () => {

            if (!dadiva) {
                return;
            }


            dadiva.classList.remove(
                "oculto"
            );


            dadiva.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

}


/* =====================================================
   🎡 PREPARAR ROLETA
===================================================== */

function prepararRoleta() {

    if (!roleta) {
        return;
    }


    const opcoes =
        roleta.querySelector(
            ".opcoes-roleta"
        );


    if (!opcoes) {
        return;
    }


    /*
       Limpa os botões antigos
       para criar a roleta verdadeira.
    */

    opcoes.innerHTML = "";


    /*
       CONTAINER
    */

    const container =
        document.createElement(
            "div"
        );


    container.className =
        "roleta-container";


    /*
       SETA
    */

    const seta =
        document.createElement(
            "div"
        );


    seta.className =
        "seta-roleta";


    seta.textContent =
        "▼";


    /*
       CÍRCULO
    */

    const circulo =
        document.createElement(
            "div"
        );


    circulo.className =
        "roleta-circulo";


    circulo.id =
        "roleta-circulo";


    /*
       NÚMEROS 1 A 6
    */

    for (
        let i = 1;
        i <= 6;
        i++
    ) {

        const numero =
            document.createElement(
                "div"
            );


        numero.className =
            `numero-roleta numero-${i}`;


        numero.textContent =
            i;


        circulo.appendChild(
            numero
        );

    }


    /*
       CENTRO
    */

    const centro =
        document.createElement(
            "div"
        );


    centro.className =
        "centro-roleta";


    centro.textContent =
        "❤️";


    circulo.appendChild(
        centro
    );


    /*
       MONTA A ROLETA
    */

    container.appendChild(
        seta
    );


    container.appendChild(
        circulo
    );


    opcoes.appendChild(
        container
    );


    /*
       BOTÃO GIRAR
    */

    const btnGirar =
        document.createElement(
            "button"
        );


    btnGirar.type =
        "button";


    btnGirar.className =
        "botao-principal";


    btnGirar.id =
        "btn-girar-roleta";


    btnGirar.textContent =
        "🎡 GIRAR ROLETA";


    opcoes.appendChild(
        btnGirar
    );


    /*
       ÁREA DO RESULTADO
    */

    const resultado =
        document.createElement(
            "div"
        );


    resultado.id =
        "resultado-roleta";


    resultado.className =
        "resultado-roleta oculto";


    opcoes.appendChild(
        resultado
    );


    /*
       CLIQUE PARA GIRAR
    */

    btnGirar.addEventListener(
        "click",
        girarRoleta
    );

}


/* =====================================================
   🎡 GIRAR ROLETA
===================================================== */

function girarRoleta() {

    /*
       Não deixa girar várias vezes.

       A única exceção é quando o resultado
       anterior foi o número 6.
    */

    if (
        roletaGirou &&
        !podeGirarNovamente
    ) {

        return;

    }


    /*
       Se foi liberada uma nova tentativa,
       consome essa tentativa agora.
    */

    if (podeGirarNovamente) {

        podeGirarNovamente = false;

    } else {

        roletaGirou = true;

    }


    const circulo =
        document.getElementById(
            "roleta-circulo"
        );


    const btn =
        document.getElementById(
            "btn-girar-roleta"
        );


    if (
        !circulo ||
        !btn
    ) {

        return;

    }


    /*
       Bloqueia o botão enquanto gira.
    */

    btn.disabled =
        true;


    /*
       🎲 SORTEIA 1 A 6
    */

    numeroResultado =
        Math.floor(
            Math.random() * 6
        ) + 1;


    /*
       Cada número ocupa 60°.

       A seta fica no topo.
    */

    const centroNumero =
        (numeroResultado - 1) *
        60 +
        30;


    /*
       Várias voltas antes de parar.
    */

    const voltas =
        5 * 360;


    const destino =
        grausRoleta +
        voltas +
        (360 - centroNumero);


    grausRoleta =
        destino;


    /*
       ANIMAÇÃO
    */

    circulo.style.transform =
        `rotate(${destino}deg)`;


    /*
       Só depois que a roleta parar
       aparece o botão para revelar.
    */

    setTimeout(
        () => {

            mostrarBotaoResultado();

        },
        4700
    );

}


/* =====================================================
   🎁 BOTÃO "MOSTRAR RESULTADO"
===================================================== */

function mostrarBotaoResultado() {

    const btnGirar =
        document.getElementById(
            "btn-girar-roleta"
        );


    if (btnGirar) {

        btnGirar.style.display =
            "none";

    }


    const resultado =
        document.getElementById(
            "resultado-roleta"
        );


    if (!resultado) {
        return;
    }


    resultado.classList.remove(
        "oculto"
    );


    resultado.innerHTML = `

        <button
            id="btn-mostrar-premio"
            class="botao-principal"
            type="button"
        >
            🎁 MOSTRAR RESULTADO
        </button>

    `;


    document
        .getElementById(
            "btn-mostrar-premio"
        )
        .addEventListener(
            "click",
            mostrarResultadoRoleta
        );

}
/* =====================================================
   🎁 MOSTRAR RESULTADO DA ROLETA
===================================================== */

function mostrarResultadoRoleta() {

    const resultado =
        document.getElementById(
            "resultado-roleta"
        );


    if (!resultado) {
        return;
    }


    const premio =
        premios[numeroResultado];


    /*
       ==================================================
       🎁 RESULTADOS 1 A 5
       ==================================================
    */

    if (
        numeroResultado >= 1 &&
        numeroResultado <= 5
    ) {

        resultado.innerHTML = `

            <div class="resultado-icone">
                ${premio.emoji}
            </div>


            <h2>
                RESULTADO DA ROLETA
            </h2>


            <div class="numero-premio">
                ${numeroResultado}
            </div>


            <h3 class="nome-premio">
                ${premio.titulo}
            </h3>


            <p>
                ${premio.descricao}
            </p>


            <div class="print-premio">

                <strong>
                    📸 REGISTRO DO PRÊMIO
                </strong>

                <p>
                    Tire um print desta tela
                    e me envie.
                </p>

                <p>
                    Quero saber qual presente
                    a roleta escolheu para você. 🤭
                </p>

            </div>

        `;


        /*
           🚫 NÃO EXISTE OUTRA TENTATIVA
           DEPOIS DE UM PRÊMIO.
        */

        roletaGirou = true;

        podeGirarNovamente = false;


        return;
    }


    /*
       ==================================================
       🔄 RESULTADO 6
       ==================================================
    */

    if (
        numeroResultado === 6
    ) {

        resultado.innerHTML = `

            <div class="resultado-icone">
                🔄
            </div>


            <h2>
                TENTE NOVAMENTE
            </h2>


            <p>
                A roleta decidiu que você
                merece mais uma chance.
            </p>


            <p>
                Dessa vez o sistema não
                entregou um prêmio.
            </p>


            <button
                id="btn-tentar-novamente"
                class="botao-principal"
                type="button"
            >
                🔄 GIRAR NOVAMENTE
            </button>

        `;


        /*
           O número 6 é a ÚNICA situação
           que permite uma nova rodada.
        */

        podeGirarNovamente = true;


        const btnTentarNovamente =
            document.getElementById(
                "btn-tentar-novamente"
            );


        if (btnTentarNovamente) {

            btnTentarNovamente.addEventListener(
                "click",
                () => {

                    /*
                       Esconde o resultado do 6.
                    */

                    resultado.classList.add(
                        "oculto"
                    );


                    /*
                       Libera o botão da roleta.
                    */

                    const btnGirar =
                        document.getElementById(
                            "btn-girar-roleta"
                        );


                    if (btnGirar) {

                        btnGirar.style.display =
                            "inline-block";


                        btnGirar.disabled =
                            false;

                    }

                }
            );

        }

    }

}


/* =====================================================
   🎡 ABRIR ROLETA
===================================================== */

function abrirRoleta() {

    if (!roleta) {
        return;
    }


    roleta.classList.remove(
        "oculto"
    );


    /*
       Cria a roleta somente
       quando ela for aberta.
    */

    prepararRoleta();


    roleta.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =====================================================
   🧪 TESTE NORMAL
===================================================== */

const testeNormal =
    document.getElementById(
        "teste-normal"
    );


if (testeNormal) {

    testeNormal.addEventListener(
        "click",
        () => {

            modoTeste = true;

            testeFinal = false;


            /*
               Reseta estados.
            */

            poteAberto = false;

            caminhoIniciado = false;

            finalDesbloqueado = false;


            /*
               Esconde etapas anteriores.
            */

            if (bilhete1) {

                bilhete1.classList.add(
                    "oculto"
                );

            }


            if (bilhete2) {

                bilhete2.classList.add(
                    "oculto"
                );

            }


            if (mapaSection) {

                mapaSection.classList.add(
                    "oculto"
                );

            }


            /*
               Volta o pote ao estado inicial.
            */

            if (pote) {

                pote.classList.remove(
                    "aberto"
                );

            }


            if (statusPote) {

                statusPote.textContent =
                    "TESTE: data especial detectada.";

            }


            if (btnAbrirPote) {

                btnAbrirPote.textContent =
                    "ABRIR POTE";


                btnAbrirPote.onclick =
                    () => {

                        poteAberto = true;


                        if (pote) {

                            pote.classList.add(
                                "aberto"
                            );

                        }


                        mostrarBilhete1();

                    };

            }


            /*
               Leva o usuário até o pote.
            */

            if (statusPote) {

                statusPote.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        }
    );

}


/* =====================================================
   🧪 TESTE FINAL — 100%
===================================================== */

const testeFinalBtn =
    document.getElementById(
        "teste-final"
    );


if (testeFinalBtn) {

    testeFinalBtn.addEventListener(
        "click",
        () => {

            modoTeste = true;

            testeFinal = true;


            /*
               Mostra o caminho.
            */

            if (mapaSection) {

                mapaSection.classList.remove(
                    "oculto"
                );

            }


            criarEstrelas();


            /*
               Força o coração a 100%.
            */

            atualizarCoracao();


            /*
               Leva diretamente para
               o coração/universo.
            */

            if (mapaSection) {

                mapaSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );

}


/* =====================================================
   🔄 REINICIAR TESTE
===================================================== */

const testeReset =
    document.getElementById(
        "teste-reset"
    );


if (testeReset) {

    testeReset.addEventListener(
        "click",
        () => {

            location.reload();

        }
    );

}


/* =====================================================
   🎡 INICIALIZAÇÃO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "🫙 Pote das Datas carregado."
        );

    }
);
   

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
