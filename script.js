function entrar() {
  document.querySelector(".bloco").scrollIntoView({
    behavior: "smooth"
  });
}


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
