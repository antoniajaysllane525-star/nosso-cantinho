function rolarPara(id) {
    const elemento = document.getElementById(id);

    if (elemento) {
        elemento.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// Contador do nosso tempo juntos

function atualizarContador() {

    const inicio = new Date("2026-03-01T00:00:00");
    const agora = new Date();

    let diferenca = agora - inicio;


    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);


    const anos = Math.floor(dias / 365);
    const meses = Math.floor((dias % 365) / 30);
    const diasRestantes = Math.floor((dias % 365) % 30);


    const horasRestantes = horas % 24;
    const minutosRestantes = minutos % 60;
    const segundosRestantes = segundos % 60;


    document.getElementById("contador").innerHTML =
        `${anos} anos, ${meses} meses, ${diasRestantes} dias<br>
        ${horasRestantes} horas, ${minutosRestantes} minutos e ${segundosRestantes} segundos`;
}


setInterval(atualizarContador, 1000);

atualizarContador();
