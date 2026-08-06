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
// QUIZ INTERATIVO
// =========================

const perguntas = [

{
pergunta: "1. Qual foi o dia do nosso primeiro beijo?",
alternativas: [
"22 de fevereiro de 2026",
"01 de março de 2026",
"11 de abril de 2026",
"08 de março de 2026"
],
correta: 1
},

{
pergunta: "2. Qual presente se tornou um símbolo da nossa união?",
alternativas: [
"Uma pulseira dos 7 nós",
"Uma camisa de time",
"Um chaveiro"
],
correta: 0
},

{
pergunta: "3. Qual time mora no seu coração?",
alternativas: [
"Palmeiras",
"Corinthians",
"Flamengo"
],
correta: 1
},

{
pergunta: "4. Qual apelido foi o primeiro que usei para demonstrar que você era especial para mim?",
alternativas: [
"Amor",
"Coração",
"Mozão",
"Vida"
],
correta: 1
},

{
pergunta: "5. Qual é a nossa cor favorita em comum?",
alternativas: [
"Azul",
"Preto",
"Vermelho"
],
correta: 1
},

{
pergunta: "6. Se fôssemos a um restaurante, qual suco você pediria sem me perguntar?",
alternativas: [
"Acerola",
"Maracujá",
"Cajá",
"Goiaba"
],
correta: 2
},

{
pergunta: "7. Se fosse para me fazer feliz com um lanchinho, o que você escolheria para mim?",
alternativas: [
"Pipoca",
"Salgadinho",
"Petisco",
"Biscoito"
],
correta: 0
},

{
pergunta: "8. Qual foi o primeiro presente que eu te dei?",
alternativas: [
"Par de meias",
"Chaveiro",
"Pulseira dos 7 nós",
"Camisa"
],
correta: 1
},

{
pergunta: "9. Complete a frase: 'Você é o meu...'",
alternativas: [
"Melhor amigo",
"Coração fora do meu peito",
"Maior sonho",
"Companheiro de aventuras"
],
correta: 1
},

{
pergunta: "10. O que eu sempre digo que amo em você?",
alternativas: [
"Seu cheirinho",
"Seu cabelinho liso",
"Seus olhinhos puxados",
"Todas as alternativas"
],
correta: 3
}

];


let perguntaAtual = 0;
let respostas = [];


function carregarPergunta() {

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


    pergunta.alternativas.forEach((texto, indice) => {


        const botao = document.createElement("button");


        botao.className = "opcao";

        botao.innerHTML = texto;


        if (respostas[perguntaAtual] === indice) {

            botao.classList.add("selecionada");

        }


        botao.onclick = function () {

            respostas[perguntaAtual] = indice;

            carregarPergunta();

        };


        alternativas.appendChild(botao);


    });


    document.getElementById("btnAnterior").style.display =
        perguntaAtual === 0 ? "none" : "inline-block";


    document.getElementById("btnProximo").textContent =
        perguntaAtual === perguntas.length - 1
        ? "Finalizar"
        : "Próxima ➡";

}



function anteriorPergunta() {

    if (perguntaAtual > 0) {

        perguntaAtual--;

        carregarPergunta();

    }

}



function proximaPergunta() {


    if (respostas[perguntaAtual] == null) {

        alert("Escolha uma alternativa antes de continuar.");

        return;

    }


    if (perguntaAtual < perguntas.length - 1) {


        perguntaAtual++;

        carregarPergunta();


    } else {


        mostrarResultado();


    }

}



function mostrarResultado() {


    let acertos = 0;


    perguntas.forEach((pergunta, indice) => {


        if (respostas[indice] === pergunta.correta) {

            acertos++;

        }


    });


    document.getElementById("pergunta").style.display = "none";

    document.getElementById("alternativas").style.display = "none";

    document.querySelector(".botoesQuiz").style.display = "none";

    document.querySelector(".progresso").style.display = "none";


    const resultado =
        document.getElementById("resultadoQuiz");


    resultado.style.display = "block";


    resultado.innerHTML = `

resultado.innerHTML = `

<h2>⚖️ Renovação concluída</h2>

<h3>Sessão de Renovação do Contrato de Amor</h3>

<p>
Resultado da avaliação:
<strong>${acertos} de ${perguntas.length} respostas corretas.</strong>
</p>

<p>
Todos os requisitos para a renovação do contrato foram cumpridos.
</p>

<p>
Após a análise das respostas apresentadas e da confirmação do contratante, fica oficialmente reconhecida a continuidade do vínculo afetivo firmado entre:
</p>

<p><strong>Lanaj ❤️ Nazareno</strong></p>

<h3>DECISÃO</h3>

<p>
Fica <strong>DEFERIDA</strong> a renovação do <strong>Contrato de Amor Perpétuo</strong>, permanecendo válidas todas as cláusulas anteriormente estabelecidas.
</p>

<p>
Como comprovação oficial deste compromisso renovado, fica autorizado o recebimento do <strong>Certificado de Renovação do Contrato de Amor</strong>.
</p>

<p><strong>Status:</strong> ✅ Renovado com sucesso.</p>

<p><strong>Validade:</strong> ♾️ Por tempo indeterminado.</p>

<p><strong>Publique-se. Registre-se. Cumpra-se. </strong></p>

<button onclick="mostrarCertificado()">
    📜 Emitir meu certificado
</button>

`;
    
}

function mostrarCertificado() {

    const certificado = document.getElementById("certificado");

    if (certificado) {

        certificado.style.display = "block";

        certificado.scrollIntoView({
            behavior: "smooth"
        });

    }

}

carregarPergunta();

// =========================
// MOSTRAR SURPRESA FINAL
// =========================

function mostrarSurpresa() {

    const surpresa = document.getElementById("surpresaFinal");

    if (surpresa) {

        surpresa.style.display = "block";

        surpresa.scrollIntoView({
            behavior: "smooth"
        });

    }

}

// =========================
// SURPRESA FINAL - VÍDEO
// =========================

function mostrarVideo() {

    const video = document.getElementById("videoFinal");

    if (video) {

        video.style.display = "block";

        video.scrollIntoView({
            behavior: "smooth"
        });

    }

}
