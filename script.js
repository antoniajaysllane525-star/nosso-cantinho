function entrar() {
  document.querySelector(".bloco").scrollIntoView({
    behavior: "smooth"
  });
}

// ===============================
// CONFIGURAÇÕES
// ===============================

const foto = document.getElementById("foto");
const container = document.getElementById("foto-container");
const coracao = document.getElementById("coracao");
const particulas = document.getElementById("particulas");

const linhas = 5;
const colunas = 5;


// ===============================
// CRIA OS 25 PEDAÇOS
// ===============================

let pecas = [];

for (let y = 0; y < linhas; y++) {

    for (let x = 0; x < colunas; x++) {

        const div = document.createElement("div");

        div.className = "pedaco";

        div.style.backgroundPosition =
            `${x * 25}% ${y * 25}%`;

        pecas.push(div);

    }

}


// ===============================
// EMBARALHA A ORDEM
// ===============================

pecas.sort(() => Math.random() - 0.5);


// ===============================
// ADICIONA NO HTML
// ===============================

pecas.forEach(p => foto.appendChild(p));


// ===============================
// ANIMA CADA PEDAÇO
// ===============================

pecas.forEach((p, i) => {

    setTimeout(() => {

        p.style.animation =
            "revelar .9s ease forwards";

    }, i * 220);

});


// ===============================
// BRILHO + ZOOM
// ===============================

setTimeout(() => {

    container.classList.add("final");

}, pecas.length * 220 + 800);


// ===============================
// CORAÇÃO
// ===============================

setTimeout(() => {

    coracao.style.animation =
        "amor 2s ease forwards";

}, pecas.length * 220 + 1500);


// ===============================
// PARTÍCULAS
// ===============================

for (let i = 0; i < 40; i++) {

    const estrela = document.createElement("div");

    estrela.style.position = "absolute";
    estrela.style.width = "4px";
    estrela.style.height = "4px";
    estrela.style.borderRadius = "50%";
    estrela.style.background = "white";

    estrela.style.left = Math.random() * 100 + "%";
    estrela.style.top = Math.random() * 100 + "%";

    estrela.style.opacity = Math.random();

    estrela.style.animation =
        `piscar ${2 + Math.random() * 4}s infinite`;

    particulas.appendChild(estrela);

}


// ===============================
// ANIMAÇÃO DAS PARTÍCULAS
// ===============================

const style = document.createElement("style");

style.innerHTML = `

@keyframes piscar{

0%{
opacity:.2;
transform:scale(.5);
}

50%{
opacity:1;
transform:scale(1.5);
}

100%{
opacity:.2;
transform:scale(.5);
}

}

`;

document.head.appendChild(style);

// Contador desde 01/03/2026
function atualizarContador() {

    const inicio = new Date("2026-05-09T00:00:00");
    const agora = new Date();

    let diferenca = agora - inicio;

    const segundosTotal = Math.floor(diferenca / 1000);

    const segundos = segundosTotal % 60;
    const minutosTotal = Math.floor(segundosTotal / 60);

    const minutos = minutosTotal % 60;
    const horasTotal = Math.floor(minutosTotal / 60);

    const horas = horasTotal % 24;
    const diasTotal = Math.floor(horasTotal / 24);

    const dias = diasTotal % 30;
    const meses = Math.floor(diasTotal / 30);


    document.getElementById("meses").innerHTML = meses;
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;
}


setInterval(atualizarContador, 1000);

atualizarContador();


// Mostrar vídeo final
function mostrarVideo() {

    const video = document.getElementById("videoFinal");

    video.style.display = "block";

    video.scrollIntoView({
        behavior: "smooth"
    });

}
