// Botão "Entrar"

function entrar() {

    const pulseira = document.getElementById("pulseira");

    if (pulseira) {

        pulseira.scrollIntoView({
            behavior: "smooth"
        });

    }

}



// Contador do nosso tempo juntos

function atualizarContador() {

    const inicio = new Date("2026-03-01T00:00:00");

    const agora = new Date();


    const diferenca = agora - inicio;


    const segundosTotal = Math.floor(diferenca / 1000);

    const minutosTotal = Math.floor(segundosTotal / 60);

    const horasTotal = Math.floor(minutosTotal / 60);

    const diasTotal = Math.floor(horasTotal / 24);



    const anos = Math.floor(diasTotal / 365);

    const meses = Math.floor((diasTotal % 365) / 30);

    const dias = Math.floor((diasTotal % 365) % 30);



    const horas = horasTotal % 24;

    const minutos = minutosTotal % 60;

    const segundos = segundosTotal % 60;



    const contador = document.getElementById("contador");


    if (contador) {

        contador.innerHTML = 
        `${anos} anos, ${meses} meses e ${dias} dias<br>
        ${horas} horas, ${minutos} minutos e ${segundos} segundos`;

    }

}



setInterval(atualizarContador, 1000);

atualizarContador();

// Mostrar o vídeo final

function mostrarVideo() {

    const videoFinal = document.getElementById("videoFinal");

    if (videoFinal) {

        videoFinal.classList.remove("oculto");

        videoFinal.scrollIntoView({
            behavior: "smooth"
        });

    }

}



// Efeito quando o vídeo terminar

const teVivo = document.getElementById("teVivo");


if (teVivo) {

    teVivo.addEventListener("ended", function() {

        const final = document.getElementById("final");

        if (final) {

            final.style.transition = "3s";
            final.style.opacity = "1";

            final.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}
