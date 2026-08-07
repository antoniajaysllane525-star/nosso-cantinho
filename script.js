// =========================
// CONTRATO DE ACESSO
// =========================

function verificarSenha() {

    const senha = document
        .getElementById("senha")
        .value
        .trim()
        .toLowerCase();


    if (senha === "coracao") {

        document.getElementById("login").style.display = "none";

        document.getElementById("contrato").style.display = "block";

        document.getElementById("contrato").scrollIntoView({
            behavior: "smooth"
        });


    } else {

        alert("Senha incorreta.");

        document.getElementById("senha").value = "";

    }

}

function assinarContrato() {

    const nome = document
        .getElementById("nomeContrato")
        .value
        .trim();

    const aceite = document
        .getElementById("aceiteContrato")
        .checked;


    if (nome === "" || !aceite) {

        alert("Preencha seu nome e aceite o contrato.");

        return;

    }


    document.getElementById("contrato").style.display = "none";

    document.getElementById("contratoAssinado").style.display = "block";


    document.getElementById("contratoAssinado").scrollIntoView({
        behavior: "smooth"
    });

}

function continuarSite() {

    document.getElementById("contratoAssinado").style.display = "none";

    document.getElementById("conteudoSite").style.display = "block";


    document.getElementById("conteudoSite").scrollIntoView({
        behavior: "smooth"
    });

}

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
// QUIZ - RENOVAÇÃO DE CONTRATO
// =========================

const perguntas = [

{
pergunta: "Conforme os registros oficiais desta história, qual foi a data do primeiro beijo entre as partes?",
alternativas: [
"22/02/2026",
"01/03/2026",
"11/04/2026",
"08/03/2026"
],
correta: 1
},

{
pergunta: "Qual foi o primeiro apelido oficialmente registrado pela contratante para se referir ao contratante?",
alternativas: [
"Amor",
"Coração",
"Mozão",
"Vida"
],
correta: 1
},

{
pergunta: "Qual cor consta como preferência em comum entre as partes?",
alternativas: [
"Azul",
"Preto",
"Vermelho"
],
correta: 1
},

{
pergunta: "Caso as partes estivessem em um restaurante e o garçom perguntasse o pedido sem apresentar o cardápio, qual suco provavelmente seria escolhido pela contratante?",
alternativas: [
"Acerola",
"Maracujá",
"Cajá",
"Goiaba"
],
correta: 2
},

{
pergunta: "Para demonstrar conhecimento acerca dos gostos da contratante, qual escolha teria maior chance de deixá-la feliz?",
alternativas: [
"Pipoca",
"Salgadinho",
"Petisco",
"Biscoito"
],
correta: 0
},

{
pergunta: "Qual foi o primeiro presente entregue pela contratante ao contratante?",
alternativas: [
"Meias",
"Chaveiro",
"Pulseira",
"Camisa"
],
correta: 1
},

{
pergunta: "Qual característica do contratante costuma ser mencionada primeiro pela contratante?",
alternativas: [
"Seu cheirinho",
"Seu cabelinho liso",
"Seus olhinhos puxados",
"Seu sorriso"
],
correta: 1
},

{
pergunta: "Qual foi a primeira ideia registrada durante a criação deste espaço virtual?",
alternativas: [
"O contrato",
"A carta",
"O vídeo",
"O quiz"
],
correta: 0
},

{
pergunta: "Caso alguém perguntasse qual é o personagem favorito da contratante, qual resposta deveria ser apresentada?",
alternativas: [
"Mickey",
"Angel",
"Stitch",
"Bob Esponja"
],
correta: 2
},

{
pergunta: "Após participar dos testes e desenvolvimento deste projeto, qual título foi oficialmente concedido ao contratante?",
alternativas: [
"Programador",
"Inspiração",
"Primeiro cobaia",
"Designer"
],
correta: 2
}

];


let perguntaAtual = 0;
let respostas = [];



// =========================
// CARREGAR PERGUNTA
// =========================

function carregarPergunta(){

const pergunta = perguntas[perguntaAtual];


document.getElementById("numeroPergunta").textContent =
`Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


document.getElementById("barraProgresso").style.width =
`${((perguntaAtual + 1) / perguntas.length) * 100}%`;


document.getElementById("pergunta").textContent =
pergunta.pergunta;


const alternativas =
document.getElementById("alternativas");


alternativas.innerHTML = "";


pergunta.alternativas.forEach((texto, indice)=>{


const botao = document.createElement("button");


botao.className = "opcao";

botao.textContent = texto;



if(respostas[perguntaAtual] === indice){

botao.classList.add("selecionada");

}



botao.onclick = function(){

respostas[perguntaAtual] = indice;

carregarPergunta();

};



alternativas.appendChild(botao);


});



document.getElementById("btnAnterior").style.display =
perguntaAtual === 0 ? "none" : "inline-block";



document.getElementById("btnProximo").textContent =
perguntaAtual === perguntas.length - 1
? "Finalizar avaliação"
: "Próxima ➡";


}



// =========================
// VOLTAR PERGUNTA
// =========================

function anteriorPergunta(){

if(perguntaAtual > 0){

perguntaAtual--;

carregarPergunta();

}

}



// =========================
// AVANÇAR PERGUNTA
// =========================

function proximaPergunta(){


if(respostas[perguntaAtual] == null){

alert("Escolha uma alternativa antes de continuar.");

return;

}



if(perguntaAtual < perguntas.length - 1){


perguntaAtual++;

carregarPergunta();


}else{


finalizarQuiz();


}


}



// =========================
// FINALIZAR QUIZ
// =========================

function finalizarQuiz(){


document.getElementById("pergunta").style.display="none";

document.getElementById("alternativas").style.display="none";

document.querySelector(".botoesQuiz").style.display="none";

document.querySelector(".progresso").style.display="none";



document.getElementById("assinaturaQuiz").style.display="block";


}



// =========================
// CONFIRMAR ASSINATURA
// =========================

function confirmarQuiz(){


const nome =
document.getElementById("nomeConfirmacao").value;



const aceite =
document.getElementById("confirmacaoRespostas").checked;



if(nome.trim()===""){

alert("Digite seu nome para confirmar.");

return;

}



if(!aceite){

alert("Confirme suas respostas antes de continuar.");

return;

}



document.getElementById("assinaturaQuiz").style.display="none";


document.getElementById("analiseProcesso").style.display="block";



setTimeout(()=>{


mostrarResultado(nome);


},2500);



}

// =========================
// RESULTADO DA AVALIAÇÃO
// =========================

function mostrarResultado(nome){

    let acertos = 0;

    perguntas.forEach((pergunta, index) => {

        if(respostas[index] === pergunta.correta){
            acertos++;
        }

    });


    // Esconde a análise processual
    document.getElementById("analiseProcesso").style.display = "none";


    // Mostra o resultado
    document.getElementById("resultadoFinal").style.display = "block";


    // Mostra a pontuação
    document.getElementById("pontuacaoFinal").textContent = acertos;


    const decisao = document.getElementById("decisaoFinal");


    // =========================
    // 10/10
    // =========================

    if(acertos === 10){

        decisao.innerHTML = `

            <h3>🏆 APROVADO COM EXCELÊNCIA</h3>

            <p>
                Consta nos autos elevado conhecimento acerca
                dos fatos, memórias e registros desta relação.
            </p>

            <p>
                <strong>Decisão:</strong><br>
                Aprovação integral.
            </p>

            <p>
                O contratante demonstrou domínio absoluto
                do processo afetivo.
            </p>

        `;

    }


    // =========================
    // 8–9/10
    // =========================

    else if(acertos >= 8){

        decisao.innerHTML = `

            <h3>❤️ APROVADO</h3>

            <p>
                Após análise dos autos, verifica-se conhecimento
                satisfatório da relação e de seus principais registros.
            </p>

            <p>
                <strong>Decisão:</strong><br>
                Pedido deferido.
            </p>

            <p>
                O conhecimento afetivo encontra-se
                devidamente atualizado.
            </p>

        `;

    }


    // =========================
    // 7/10
    // =========================

    else if(acertos === 7){

        decisao.innerHTML = `

            <h3>😂 APROVADO POR MARGEM MÍNIMA</h3>

            <p>
                Verifica-se que o contratante atingiu
                a pontuação mínima exigida para prosseguimento
                do processo.
            </p>

            <p>
                <strong>Decisão:</strong><br>
                Pedido deferido.
            </p>

            <p>
                Fica registrada, entretanto, a necessidade
                de maior atenção aos detalhes da relação. 🤨
            </p>

            <p>
                <strong>O contrato permanece válido.</strong>
            </p>

        `;

    }


    // =========================
    // 0–6/10
    // =========================

    else{

        decisao.innerHTML = `

            <h3>🤨 PROCESSO INCONCLUSIVO</h3>

            <p>
                Após análise das respostas apresentadas,
                não foi atingida a pontuação mínima necessária
                para conclusão do processo.
            </p>

            <p>
                <strong>Decisão:</strong><br>
                Pedido temporariamente indeferido.
            </p>

            <p>
                Fica concedido ao contratante o direito
                de realizar nova avaliação, a fim de sanar
                as inconsistências identificadas.
            </p>

            <p>
                <strong>O contrato permanece em análise.</strong>
            </p>

        `;

    }


    // =========================
    // APROVADO
    // =========================

    if(acertos >= 7){

        document.getElementById("renovacao").style.display = "block";

        document.getElementById("renovacao").querySelector(
            "#dadosContratante"
        ).textContent = `Contratante: ${nome}`;

        document.getElementById("renovacao").querySelector(
            "#resultadoContratante"
        ).textContent = `Resultado da avaliação: ${acertos}/10`;

    }


    // =========================
    // REPROVADO
    // =========================

    else{

        document.getElementById("novaTentativa").style.display = "block";

    }

}


// =========================
// REINICIAR QUIZ
// =========================

function reiniciarQuiz(){


perguntaAtual = 0;

respostas = [];


document.getElementById("novaTentativa").style.display="none";


document.getElementById("pergunta").style.display="block";

document.getElementById("alternativas").style.display="block";

document.querySelector(".botoesQuiz").style.display="flex";

document.querySelector(".progresso").style.display="block";


carregarPergunta();


}



// =========================
// MOSTRAR CERTIFICADO
// =========================

function mostrarCertificado(){

document.getElementById("renovacao").style.display="none";

document.getElementById("certificado").style.display="block";

}



// =========================
// MOSTRAR SURPRESA
// =========================

function mostrarSurpresa(){

document.getElementById("certificado").style.display="none";

document.getElementById("surpresaFinal").style.display="block";

}



// =========================
// MOSTRAR VÍDEO
// =========================

function mostrarVideo(){

document.getElementById("surpresaFinal").style.display="none";

document.getElementById("videoFinal").style.display="block";

}



// INICIAR QUIZ

carregarPergunta();
