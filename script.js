// ===============================
// NOSSO CANTINHO ❤️
// script.js - Parte 1
// ===============================

// -------------------------------
// BOTÃO ENTRAR
// -------------------------------

function entrar() {

    document.getElementById("entrada").style.display = "none";

    document.getElementById("conteudo").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// -------------------------------
// CONTADOR
// Data: 09/05/2026
// -------------------------------

const dataInicial = new Date("2026-05-09T00:00:00");

function atualizarContador() {

    const agora = new Date();

    let anos = agora.getFullYear() - dataInicial.getFullYear();
    let meses = agora.getMonth() - dataInicial.getMonth();
    let dias = agora.getDate() - dataInicial.getDate();

    if (dias < 0) {

        meses--;

        const ultimoDiaMes = new Date(
            agora.getFullYear(),
            agora.getMonth(),

            // ===============================
// QUIZ + SURPRESA FINAL
// script.js - Parte 2
// ===============================

function corrigirQuiz() {

    let pontos = 0;

    const respostas = [
        "q1", "q2", "q3", "q4", "q5",
        "q6", "q7", "q8", "q9", "q10"
    ];

    respostas.forEach(function(pergunta) {

        const marcada = document.querySelector(
            'input[name="' + pergunta + '"]:checked'
        );

        if (marcada && marcada.value === "1") {
            pontos++;
        }

    });

    const resultado = document.getElementById("resultado");

    if (pontos === 10) {

        resultado.innerHTML = `
            <h3>🎉 Parabéns! ❤️</h3>

            <p>
            Você acertou tudo!
            </p>

            <p>
            Mas a maior resposta da minha vida foi ter escolhido você.
            </p>

            <p>
            Você ganhou um xerooo! 💌
            </p>
        `;

    } else {

        resultado.innerHTML = `
            <h3>❤️</h3>

            <p>
            Mesmo errando algumas respostas,
            você continua sendo o meu acerto favorito.
            </p>
        `;

    }

}

// ===============================
// SURPRESA FINAL
// ===============================

function mostrarSurpresa() {

    document.getElementById("surpresa").style.display = "block";

    document.getElementById("surpresa").scrollIntoView({
        behavior: "smooth"
    });

}
