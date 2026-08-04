// ===== CONTADOR =====

function atualizarContador() {

    const inicio = new Date(2026, 4, 9, 0, 0, 0); 
    const agora = new Date();

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    let dias = agora.getDate() - inicio.getDate();

    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoMes;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    const diferenca = agora - inicio;

    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("meses").innerHTML = (anos * 12) + meses;
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;
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
