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
   🫙 POTE DAS DATAS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       ELEMENTOS
    ================================================= */

    const poteSection = document.getElementById("pote-section");
    const btnAbrirPote = document.getElementById("btn-abrir-pote");
    const statusPote = document.getElementById("status-pote");

    const bilhete1 = document.getElementById("bilhete-1");
    const bilhete2 = document.getElementById("bilhete-2");

    const btnDescobrir = document.getElementById("btn-descobrir");
    const btnConfirmar = document.getElementById("btn-confirmar");
    const btnSeguir = document.getElementById("btn-seguir-caminho");

    const conclusao = document.getElementById("conclusao");

    const mapa = document.getElementById("mapa-section");

    const porcentagem = document.getElementById("porcentagem");
    const preenchimento = document.getElementById("preenchimento-coracao");

    const estrelasMapa = document.getElementById("estrelas-mapa");

    const chaveFinal = document.getElementById("chave-final");
    const cadeadoFinal = document.getElementById("cadeado-final");

    const finalAniversario =
        document.getElementById("final-aniversario");

    const btnDadiva =
        document.getElementById("btn-dadiva");

    const dadiva =
        document.getElementById("dadiva");

    const roleta =
        document.getElementById("roleta");


    /* =================================================
       ELEMENTOS DOS BILHETES
    ================================================= */

    const bilheteEmoji =
        document.getElementById("bilhete-emoji");

    const bilheteData =
        document.getElementById("bilhete-data");

    const bilheteTitulo =
        document.getElementById("bilhete-titulo");

    const bilheteFrase =
        document.getElementById("bilhete-frase");

    const bilheteMissao =
        document.getElementById("bilhete-missao");

    const elementoEspecial =
        document.getElementById("elemento-especial");

    const acaoConteudo =
        document.getElementById("acao-conteudo");

    const areaEscolha =
        document.getElementById("area-escolha");

    const campoEscolha =
        document.getElementById("campo-escolha");


    /* =================================================
       🎡 ELEMENTOS DA ROLETA
    ================================================= */

    const roletaCirculo =
        document.getElementById("roleta-circulo");

    const btnGirar =
        document.getElementById("btn-girar-roleta");

    const btnMostrarResultado =
        document.getElementById("btn-mostrar-resultado");

    const resultadoRoleta =
        document.getElementById("resultado-roleta");

    const numeroPremio =
        document.getElementById("numero-premio");

    const nomePremio =
        document.getElementById("nome-premio");

    const descricaoPremio =
        document.getElementById("descricao-premio");

    const btnTentarNovamente =
        document.getElementById("btn-tentar-novamente");


    /* =================================================
       🧪 TESTES
    ================================================= */

    const testeNormal =
        document.getElementById("teste-normal");

    const testeFinal =
        document.getElementById("teste-final");

    const testeReset =
        document.getElementById("teste-reset");


    /* =================================================
       📌 ESTADO DO SISTEMA
    ================================================= */

    let progressoAtual = 0;

    let roletaGirando = false;

    let numeroSorteado = null;

    let roletaRotacao = 0;


    /* =================================================
       💌 CONFIGURAÇÃO DOS BILHETES
    ================================================= */

    const bilhetes = [

        {
            emoji: "🎂",
            data: "08/09",
            titulo: "Aniversário dele",

            frase:
                "Hoje o sistema é todo seu.",

            missao:
                "Fica determinada a missão especial de aniversário.",

            especial:
                "Hoje começa um caminho diferente. Cada etapa vai aproximar você da sua surpresa."
        },


        {
            emoji: "💌",
            data: "ETAPA 02",

            titulo:
                "Uma escolha sua",

            frase:
                "Agora é você quem decide.",

            missao:
                "Escolha alguma coisa que você gostaria de fazer comigo.",

            especial:
                "Pode ser um filme, um lugar, um lanche ou qualquer outra coisa que faça você sorrir."
        }

    ];


    /* =================================================
       🫙 ABRIR POTE
    ================================================= */

    if (btnAbrirPote) {

        btnAbrirPote.addEventListener("click", () => {

            poteSection.classList.add("aberto");

            statusPote.textContent =
                "Um bilhete foi liberado.";

            mostrarBilhete1();

        });

    }


    /* =================================================
       💌 MOSTRAR BILHETE 1
    ================================================= */

    function mostrarBilhete1() {

        if (!bilhete1) return;

        bilhete1.classList.remove("oculto");

        const b = bilhetes[0];

        if (bilheteEmoji)
            bilheteEmoji.textContent = b.emoji;

        if (bilheteData)
            bilheteData.textContent = b.data;

        if (bilheteTitulo)
            bilheteTitulo.textContent = b.titulo;

        if (bilheteFrase)
            bilheteFrase.textContent = b.frase;

        if (bilheteMissao)
            bilheteMissao.textContent = b.missao;

        if (elementoEspecial)
            elementoEspecial.textContent = b.especial;

        bilhete1.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }


    /* =================================================
       💌 DESCOBRIR BILHETE 1
    ================================================= */

    if (btnDescobrir) {

        btnDescobrir.addEventListener("click", () => {

            btnDescobrir.style.display = "none";

            if (elementoEspecial) {

                elementoEspecial.innerHTML = `
                    <strong>✨ ETAPA LIBERADA</strong>
                    <p>
                        O primeiro registro foi concluído.
                    </p>
                `;

            }

            if (bilhete2) {

                setTimeout(() => {

                    bilhete2.classList.remove("oculto");

                    bilhete2.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    prepararBilhete2();

                }, 700);

            }

        });

    }


    /* =================================================
       💌 PREPARAR BILHETE 2
    ================================================= */

    function prepararBilhete2() {

        if (acaoConteudo) {

            acaoConteudo.innerHTML = `
                <h3>🎯 SEGUNDA ETAPA</h3>

                <p>
                    Agora deixe registrado aqui
                    algo que você escolheria para nós dois.
                </p>
            `;

        }

    }


    /* =================================================
       💌 CONFIRMAR BILHETE 2
    ================================================= */

    if (btnConfirmar) {

        btnConfirmar.addEventListener("click", () => {

            const escolha =
                campoEscolha ?
                campoEscolha.value.trim() :
                "";

            if (!escolha) {

                alert(
                    "Antes de continuar, faça a sua escolha. ❤️"
                );

                return;
            }


            if (areaEscolha)
                areaEscolha.style.display = "none";

            btnConfirmar.style.display = "none";


            if (conclusao)
                conclusao.classList.remove("oculto");


            setTimeout(() => {

                if (btnSeguir)
                    btnSeguir.classList.remove("oculto");

            }, 600);

        });

    }


    /* =================================================
       🌌 SEGUIR PARA O CAMINHO
    ================================================= */

    if (btnSeguir) {

        btnSeguir.addEventListener("click", () => {

            if (bilhete2)
                bilhete2.classList.add("oculto");

            if (mapa)
                mapa.classList.remove("oculto");


            criarEstrelas();


            mapa.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });


            iniciarProgresso();

        });

    }


    /* =================================================
       🌌 CRIAR ESTRELAS
    ================================================= */

    function criarEstrelas() {

        if (!estrelasMapa) return;

        estrelasMapa.innerHTML = "";

        for (let i = 0; i < 18; i++) {

            const estrela =
                document.createElement("span");

            estrela.className = "estrela-real";

            estrela.textContent =
                Math.random() > 0.5 ? "✦" : "✧";

            estrela.style.left =
                Math.random() * 90 + "%";

            estrela.style.top =
                Math.random() * 85 + "%";

            estrela.style.animationDelay =
                Math.random() * 2 + "s";

            estrelasMapa.appendChild(estrela);

        }

    }


    /* =================================================
       ❤️ PROGRESSO DO CORAÇÃO
    ================================================= */

    function atualizarCoracao(valor) {

        progressoAtual = Math.max(
            0,
            Math.min(100, valor)
        );


        if (porcentagem)
            porcentagem.textContent =
                progressoAtual + "%";


        if (preenchimento) {

            /*
             * O coração é preenchido de baixo
             * para cima.
             */

            const altura =
                180 * (progressoAtual / 100);

            const y =
                180 - altura;

            preenchimento.setAttribute(
                "y",
                y
            );

            preenchimento.setAttribute(
                "height",
                altura
            );

        }

    }


    /* =================================================
       ❤️ PROGRESSO AUTOMÁTICO
    ================================================= */

    function iniciarProgresso() {

        atualizarCoracao(0);

        /*
         * Para o teste, o coração avança
         * gradualmente.
         */

        let valor = 0;

        const intervalo =
            setInterval(() => {

                valor += 10;

                atualizarCoracao(valor);


                if (valor >= 100) {

                    clearInterval(intervalo);

                    liberarFinal();

                }

            }, 450);

    }


    /* =================================================
       🔑 FINAL DO CAMINHO
    ================================================= */

    function liberarFinal() {

        if (chaveFinal)
            chaveFinal.classList.remove("oculto");


        if (cadeadoFinal)
            cadeadoFinal.classList.remove("oculto");


        /*
         * IMPORTANTE:
         * Ao completar 100%, o sistema NÃO abre
         * automaticamente a Dádiva.
         *
         * O usuário permanece na galáxia,
         * onde verá a chave e o cadeado.
         */

        if (mapa) {

            mapa.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }


    /* =================================================
       🎁 ABRIR DÁDIVA
    ================================================= */

    if (btnDadiva) {

        btnDadiva.addEventListener("click", () => {

            if (finalAniversario)
                finalAniversario.classList.add("oculto");


            if (dadiva)
                dadiva.classList.remove("oculto");


            if (dadiva) {

                dadiva.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }


            /*
             * Depois da Dádiva, libera a roleta.
             */

            setTimeout(() => {

                if (roleta)
                    roleta.classList.remove("oculto");


                if (roleta) {

                    roleta.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }, 1200);

        });

    }


    /* =====================================================
       🎡 PREMIAÇÕES
    ====================================================== */

    const premios = {

        1: {

            nome:
                "ESCOLHA O FILME",

            descricao:
                "Hoje você escolhe o filme que nós vamos assistir juntos. 🎬"

        },


        2: {

            nome:
                "ESCOLHA O LUGAR",

            descricao:
                "Hoje você escolhe para onde nós vamos juntos. 📍"

        },


        3: {

            nome:
                "ESCOLHA O BEIJO",

            descricao:
                "Você ganhou o direito de escolher o beijo. 💋"

        },


        4: {

            nome:
                "ESCOLHA O LANCHE",

            descricao:
                "Hoje o lanche fica por sua conta. Você escolhe. 🍫"

        },


        5: {

            nome:
                "ESCOLHA PECULIAR",

            descricao:
                "Você ganhou uma escolha peculiar. Use esse poder com responsabilidade. 👀"

        },


        6: {

            nome:
                "TENTE NOVAMENTE",

            descricao:
                "KKKKKKK a sorte resolveu brincar com você. Gire novamente. 🔄"

        }

    };


    /* =================================================
       🎡 GIRAR ROLETA
    ================================================= */

    if (btnGirar) {

        btnGirar.addEventListener(
            "click",
            girarRoleta
        );

    }


    function girarRoleta() {

        if (roletaGirando)
            return;


        roletaGirando = true;

        numeroSorteado = null;


        /*
         * Esconde resultado anterior.
         */

        if (resultadoRoleta)
            resultadoRoleta.classList.add("oculto");


        if (btnMostrarResultado)
            btnMostrarResultado.classList.add("oculto");


        if (btnTentarNovamente)
            btnTentarNovamente.classList.add("oculto");


        /*
         * Bloqueia botão enquanto gira.
         */

        btnGirar.disabled = true;


        /*
         * Sorteia número de 1 a 6.
         */

        numeroSorteado =
            Math.floor(Math.random() * 6) + 1;


        /*
         * Cada número ocupa aproximadamente
         * 60 graus.
         */

        const grausPorNumero = 60;


        /*
         * Faz várias voltas antes de parar.
         */

        const voltas =
            5 + Math.floor(Math.random() * 3);


        const ajuste =
            (numeroSorteado - 1) *
            grausPorNumero;


        roletaRotacao +=
            voltas * 360 +
            (360 - ajuste);


        if (roletaCirculo) {

            roletaCirculo.style.transform =
                `rotate(${roletaRotacao}deg)`;

        }


        /*
         * Aguarda a roleta parar.
         */

        setTimeout(() => {

            roletaGirando = false;

            /*
             * Só agora aparece:
             * MOSTRAR RESULTADO
             */

            if (btnMostrarResultado)
                btnMostrarResultado.classList.remove(
                    "oculto"
                );

        }, 4500);

    }


    /* =================================================
       🎡 MOSTRAR RESULTADO
    ================================================= */

    if (btnMostrarResultado) {

        btnMostrarResultado.addEventListener(
            "click",
            mostrarResultado
        );

    }


    function mostrarResultado() {

        if (!numeroSorteado)
            return;


        const premio =
            premios[numeroSorteado];


        if (numeroPremio)
            numeroPremio.textContent =
                numeroSorteado;


        if (nomePremio)
            nomePremio.textContent =
                premio.nome;


        if (descricaoPremio)
            descricaoPremio.textContent =
                premio.descricao;


        if (resultadoRoleta)
            resultadoRoleta.classList.remove("oculto");


        btnMostrarResultado.classList.add(
            "oculto"
        );


        /*
         * =================================================
         * 🎁 PRÊMIOS 1 A 5
         * =================================================
         *
         * Se cair de 1 a 5,
         * o prêmio é definitivo.
         */

        if (
            numeroSorteado >= 1 &&
            numeroSorteado <= 5
        ) {

            if (btnTentarNovamente)
                btnTentarNovamente.classList.add(
                    "oculto"
                );

        }


        /*
         * =================================================
         * 🔄 NÚMERO 6
         * =================================================
         *
         * O número 6 permite uma nova tentativa.
         *
         * Pode acontecer quantas vezes forem necessárias.
         */

        if (numeroSorteado === 6) {

            if (btnTentarNovamente)
                btnTentarNovamente.classList.remove(
                    "oculto"
                );

        }


        resultadoRoleta.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }


    /* =================================================
       🔄 TENTAR NOVAMENTE
    ================================================= */

    if (btnTentarNovamente) {

        btnTentarNovamente.addEventListener(
            "click",
            () => {

                /*
                 * Só permite tentar novamente
                 * se o resultado anterior foi 6.
                 */

                if (numeroSorteado !== 6)
                    return;


                /*
                 * Esconde o resultado anterior.
                 */

                if (resultadoRoleta)
                    resultadoRoleta.classList.add(
                        "oculto"
                    );


                /*
                 * Esconde o botão enquanto
                 * a nova rodada acontece.
                 */

                btnTentarNovamente.classList.add(
                    "oculto"
                );


                /*
                 * Limpa o resultado anterior.
                 */

                numeroSorteado = null;


                /*
                 * Libera a roleta novamente.
                 */

                btnGirar.disabled = false;


                roleta.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }
        );

    }


    /* =====================================================
       🧪 TESTE NORMAL
    ====================================================== */

    if (testeNormal) {

        testeNormal.addEventListener(
            "click",
            () => {

                mostrarBilhete1();

                if (statusPote)
                    statusPote.textContent =
                        "🧪 MODO DE TESTE — data liberada.";

            }
            /* =====================================================
       🧪 TESTE FINAL
    ====================================================== */

    if (testeFinal) {

        testeFinal.addEventListener(
            "click",
            () => {

                if (mapa)
                    mapa.classList.remove("oculto");


                criarEstrelas();


                atualizarCoracao(100);


                liberarFinal();


                mapa.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    }


    /* =====================================================
       🔄 RESET DO TESTE
    ====================================================== */

    if (testeReset) {

        testeReset.addEventListener(
            "click",
            () => {

                location.reload();

            }
        );

    }


    /* =====================================================
       ESTADO INICIAL
    ===================================================== */

    atualizarCoracao(0);

});

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
