// ===============================
// ENTRAR NO SITE
// ===============================


function entrar(){

    const capa = document.getElementById("capa");

    const video = document.getElementById("inicio-video");


    capa.style.transition = "1.5s";


    capa.style.opacity = "0";


    setTimeout(()=>{


        capa.style.display = "none";


        video.scrollIntoView({

            behavior:"smooth"

        });


    },1500);


}





// ===============================
// CONTADOR
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
// REVELAÇÃO DA FOTO
// ===============================


const foto = document.getElementById("foto");


if(foto){


    const linhas = 5;

    const colunas = 5;


    for(let i = 0; i < linhas; i++){


        for(let j = 0; j < colunas; j++){


            const pedaco = document.createElement("div");


            pedaco.classList.add("pedaco");


            pedaco.style.width = (100 / colunas) + "%";


            pedaco.style.height = (100 / linhas) + "%";



            pedaco.style.left = (j * (100 / colunas)) + "%";


            pedaco.style.top = (i * (100 / linhas)) + "%";



            pedaco.style.backgroundPosition = 
            `${(j * 100 / (colunas - 1))}% ${(i * 100 / (linhas - 1))}%`;



            pedaco.style.animationDelay = 
            `${(i + j) * 0.15}s`;



            foto.appendChild(pedaco);


        }

    }


}

// ===============================
// QUIZ
// ===============================


let acertos = 0;



function resposta(botao, correto){


    const botoes = botao.parentElement.querySelectorAll("button");


    botoes.forEach(btn => {

        btn.disabled = true;

    });



    if(correto){


        botao.style.background = "#198754";


        acertos++;


    }else{


        botao.style.background = "#b11226";


    }


}





function finalizarQuiz(){


    if(acertos === 10){


        alert(

        "Parabéns! ❤️ Você acertou tudo!\n\n" +

        "Mas a maior resposta da minha vida foi ter escolhido você.\n\n" +

        "Você ganhou um xerooo! 💌"

        );


    }else{


        alert(

        "Mesmo errando algumas respostas,\n\n" +

        "você continua sendo o meu acerto favorito. ❤️"

        );


    }


}





// ===============================
// SURPRESA FINAL
// ===============================


function mostrarVideo(){


    const video = document.getElementById("videoFinal");


    video.style.display = "flex";


    video.scrollIntoView({

        behavior:"smooth"

    });


}
