// =========================
// CONTADOR
// =========================

function atualizarContador() {

    const dataInicial = new Date(2026, 4, 9, 0, 0, 0);
    const agora = new Date();

    const diferenca = agora - dataInicial;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    const contador = document.getElementById("contador");

    if (contador) {
        contador.innerHTML =
            dias + " dias<br>" +
            horas + " horas • " +
            minutos + " minutos • " +
            segundos + " segundos ❤️";
    }
}

setInterval(atualizarContador, 1000);
atualizarContador();


// =========================
// QUIZ
// =========================

function verResultado() {

    let acertos = 0;

    const perguntas = [
        "q1", "q2", "q3", "q4", "q5",
        "q6", "q7", "q8", "q9", "q10"
    ];

    perguntas.forEach(function(pergunta) {

        const resposta = document.querySelector(
            'input[name="' + pergunta + '"]:checked'
        );

        if (resposta && resposta.value === "certo") {
            acertos++;
        }

    });

    const resultado = document.getElementById("resultado");

    if (!resultado) return;

    if (acertos === 10) {

        resultado.innerHTML =
            "🎉 Parabéns! ❤️<br><br>" +
            "Você acertou tudo!<br>" +
            "Mas a maior resposta da minha vida foi ter escolhido você.<br><br>" +
            "Você ganhou um xerooo! 💌";

    } else {

        resultado.innerHTML =
            "Você acertou " + acertos + " de 10 perguntas. ❤️<br><br>" +
            "Mesmo errando algumas respostas, você continua sendo o meu acerto favorito.";

    }

}


// =========================
// BOTÃO ENTRAR
// =========================

function entrarNoCantinho() {

    const destino = document.querySelectorAll(".card")[1];

    if (destino) {

        destino.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// =========================
// SURPRESA FINAL
// =========================

function mostrarSurpresa() {

    const surpresa = document.getElementById("surpresa");

    if (surpresa) {

        surpresa.innerHTML =
            "❤️ Meu maior presente é poder viver tudo isso ao seu lado.<br><br>" +
            "Obrigada por ser meu companheiro, por cuidar de mim e por fazer parte da minha história.<br><br>" +
            "Eu te amo infinitamente. 💌";

    }

}
