/* CARTA */

.carta {
    background: #fffaf5;
    border-radius: 25px;
    padding: 30px;
    text-align: left;
    box-shadow: inset 0 0 15px rgba(0,0,0,0.03);
}


.carta p {
    font-size: 19px;
    margin-bottom: 22px;
}


/* IMAGENS DOS SÍMBOLOS */

.card img {
    object-fit: cover;
}


/* CONTADOR */

#contador {
    font-family: "Cormorant Garamond", serif;
    font-size: 30px;
    font-weight: bold;
    color: #7b5038;
    margin: 25px 0;
    padding: 20px;
    background: #fff8f0;
    border-radius: 20px;
}


/* QUIZ */

.quiz {
    text-align: left;
}


.pergunta {
    background: #fffaf5;
    padding: 25px;
    border-radius: 22px;
    margin-bottom: 25px;
}


.pergunta p {
    font-family: "Cormorant Garamond", serif;
    font-size: 24px;
    font-weight: bold;
    color: #5a3928;
}


label {
    display: block;
    background: white;
    padding: 12px 15px;
    margin: 10px 0;
    border-radius: 15px;
    cursor: pointer;
    font-size: 17px;
    transition: 0.3s;
}


label:hover {
    transform: translateX(5px);
}


input[type="radio"] {
    margin-right: 10px;
}


/* RESULTADO DO QUIZ */

#resultado {
    margin-top: 25px;
    font-family: "Cormorant Garamond", serif;
    font-size: 26px;
    font-weight: bold;
    color: #7b5038;
}


/* SURPRESA */

#surpresa {
    margin-top: 25px;
    font-size: 22px;
    font-family: "Cormorant Garamond", serif;
    color: #5a3928;
}


/* ANIMAÇÃO SUAVE DOS CARDS */

.card {
    animation: aparecer 1s ease;
}


@keyframes aparecer

// QUIZ DO AMOR ❤️

function verResultado() {

    let acertos = 0;

    const respostas = [
        "q1",
        "q2",
        "q3",
        "q4",
        "q5",
        "q6",
        "q7",
        "q8",
        "q9",
        "q10"
    ];


    respostas.forEach(function(pergunta) {

        const resposta = document.querySelector(
            'input[name="' + pergunta + '"]:checked'
        );


        if (resposta && resposta.value === "certo") {
            acertos++;
        }

    });


    const resultado = document.getElementById("resultado");


    if (acertos === 10) {

        resultado.innerHTML =
        "Parabéns! ❤️<br><br>" +
        "Você acertou tudo!<br>" +
        "Mas a maior resposta da minha vida foi ter escolhido você.<br><br>" +
        "Você ganhou um xerooo! 💌";

    } else {

        resultado.innerHTML =
        "Você acertou " + acertos + " de 10 perguntas. ❤️<br><br>" +
        "Mesmo errando algumas respostas, " +
        "você continua sendo o meu acerto favorito.";

    }

}

// BOTÃO ENTRAR NO CANTINHO ❤️

function entrarNoCantinho() {

    window.scrollTo({
        top: document.querySelector(".card:nth-child(2)").offsetTop,
        behavior: "smooth"
    });

}



// SURPRESA FINAL 🎁

function mostrarSurpresa() {

    const surpresa = document.getElementById("surpresa");


    surpresa.innerHTML =
    "❤️ Meu maior presente é poder viver tudo isso ao seu lado.<br><br>" +
    "Obrigada por ser meu companheiro, " +
    "por cuidar de mim e por fazer parte da minha história.<br><br>" +
    "Eu te amo. 💌";

}
