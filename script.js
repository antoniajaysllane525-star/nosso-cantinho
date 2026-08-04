// ===============================
// ENTRADA DO SITE
// Capa desaparece e mostra a mensagem inicial
// ===============================

function entrar(){

    const capa = document.getElementById("capa");
    const video = document.getElementById("inicio-video");


    capa.classList.add("esconder");


    setTimeout(()=>{

        capa.style.display = "none";


        video.scrollIntoView({

            behavior:"smooth"

        });


    },1500);

}

// ===============================
// REVELAÇÃO DA FOTO
// Quebra-cabeça 5x5
// ===============================

const foto = document.getElementById("foto");
const coracao = document.getElementById("coracao");

if(foto){

    const linhas = 5;
    const colunas = 5;

    let pecas = [];


    // Criar os pedaços da foto

    for(let linha = 0; linha < linhas; linha++){

        for(let coluna = 0; coluna < colunas; coluna++){


            const peca = document.createElement("div");

            peca.classList.add("pedaco");


            peca.style.backgroundPosition =
            `${coluna * 25}% ${linha * 25}%`;


            pecas.push(peca);

        }

    }



    // Misturar a ordem das peças

    pecas.sort(()=> Math.random() - 0.5);



    // Colocar no site

    pecas.forEach(peca => {

        foto.appendChild(peca);

    });



    // Revelar uma por uma

    pecas.forEach((peca, index)=>{


        setTimeout(()=>{


            peca.style.animation =
            "revelar 0.9s ease forwards";


        }, index * 180);



    });



    // Final da montagem

    setTimeout(()=>{


        foto.classList.add("final");


    }, pecas.length * 180 + 800);



    // Coração aparecendo

    setTimeout(()=>{


        if(coracao){

            coracao.style.animation =
            "amor 2s ease forwards";

        }


    }, pecas.length * 180 + 1500);



}

// ===============================
// CONTADOR
// Desde 09/05/2026
// ===============================

function atualizarContador(){

    const inicio = new Date("2026-05-09T00:00:00");
    const agora = new Date();


    let diferenca = agora - inicio;


    const segundos = Math.floor(diferenca / 1000);

    const minutos = Math.floor(segundos / 60);

    const horas = Math.floor(minutos / 60);

    const dias = Math.floor(horas / 24);


    const meses = Math.floor(dias / 30);


    document.getElementById("meses").innerHTML = meses;

    document.getElementById("dias").innerHTML = dias % 30;

    document.getElementById("horas").innerHTML = horas % 24;

    document.getElementById("minutos").innerHTML = minutos % 60;

    document.getElementById("segundos").innerHTML = segundos % 60;

}


setInterval(atualizarContador,1000);

atualizarContador();



// ===============================
// QUIZ
// ===============================

let pontos = 0;


function resposta(botao,certa){


    if(certa){

        botao.style.background = "#8bc34a";

        pontos++;

    }else{

        botao.style.background = "#e57373";

    }


    botao.disabled = true;


}



function finalizarQuiz(){


    if(pontos >= 4){

        alert(
        "Você acertou tudo! ❤️\n\n" +
        "Mas a maior resposta da minha vida foi ter escolhido você."
        );


    }else{


        alert(
        "Você acertou " + pontos +
        " perguntas. ❤️\n\n" +
        "Mas continua sendo a minha melhor escolha."
        );


    }


}



// ===============================
// SURPRESA FINAL
// ===============================

function mostrarVideo(){


    const video = document.getElementById("videoFinal");


    if(video){

        video.style.display="block";


        video.scrollIntoView({

            behavior:"smooth"

        });

    }


}
