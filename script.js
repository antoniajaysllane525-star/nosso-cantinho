// =========================================================
// NOSSO CANTINHO ❤️
// SCRIPT PRINCIPAL
// PARTE 1 — ACESSO, CONTRATO E ENTRADA NO SITE
// =========================================================


// =========================================================
// VARIÁVEIS GERAIS
// =========================================================

let nomeContratante = "";

// =========================================================
// CONTRATO DE ACESSO
// =========================================================

function verificarSenha() {

    const campoSenha =
        document.getElementById("senha");


    // Verifica se o campo existe
    if (!campoSenha) {
        return;
    }


    const senha =
        campoSenha.value
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");


    // =====================================================
    // SENHA CORRETA
    // =====================================================

    if (senha === "coracao") {

        // Esconde tela de login
        document.getElementById("login").style.display =
            "none";


        // Mostra somente a titularidade validada
        document.getElementById("titularidadeValidada").style.display =
            "block";


        // Aguarda antes de revelar o contrato
        setTimeout(function () {

            document.getElementById("contrato").style.display =
                "block";


            // Leva até o contrato somente quando ele aparecer
            document.getElementById("contrato").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 3000);

    }


    // =====================================================
    // SENHA INCORRETA
    // =====================================================

    else {

        alert("Senha incorreta.");

        campoSenha.value = "";

        campoSenha.focus();

    }

}

// =========================================================
// PERMITIR ENTER NA SENHA
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const campoSenha =
        document.getElementById("senha");


    if (campoSenha) {

        campoSenha.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {

                verificarSenha();

            }

        });

    }

});


// =========================================================
// ASSINATURA DO CONTRATO
// =========================================================

function assinarContrato() {

    const campoNome =
        document.getElementById("nomeContrato");


    const aceite =
        document.getElementById("aceiteContrato");


    // Verifica se os elementos existem
    if (!campoNome || !aceite) {
        return;
    }


    const nome =
        campoNome.value.trim();


    // =====================================================
    // VALIDAÇÃO
    // =====================================================

    if (nome === "") {

        alert(
            "Digite seu nome para assinar o contrato."
        );

        campoNome.focus();

        return;

    }


    if (!aceite.checked) {

        alert(
            "Leia e aceite os termos do contrato para continuar."
        );

        return;

    }


    // Guarda o nome
    nomeContratante = nome;


    // =====================================================
    // ESCONDE CONTRATO
    // =====================================================

    document.getElementById("contrato").style.display =
        "none";


    // =====================================================
    // MOSTRA CONTRATO ASSINADO
    // =====================================================

    document.getElementById("contratoAssinado").style.display =
        "block";


    // =====================================================
    // SCROLL
    // =====================================================

    document.getElementById("contratoAssinado").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =========================================================
// CONTINUAR PARA O CONTEÚDO DO SITE
// =========================================================

function continuarSite() {

    // Esconde confirmação da assinatura
    document.getElementById("contratoAssinado").style.display =
        "none";


    // Mostra todo o conteúdo
    document.getElementById("conteudoSite").style.display =
        "block";


    // =====================================================
    // SCROLL PARA O COMEÇO DO SITE
    // =====================================================

    document.getElementById("conteudoSite").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =========================================================
// QUEM É MAIS?
// =========================================================

function responderCoracao(botao) {

    // Identifica a pergunta correspondente
    const pergunta =
        botao.closest(".pergunta-coracao");


    if (!pergunta) {
        return;
    }


    // =====================================================
    // REMOVE SELEÇÃO ANTERIOR
    // =====================================================

    const botoes =
        pergunta.querySelectorAll("button");


    botoes.forEach(function (btn) {

        btn.classList.remove("selecionada");

    });


    // =====================================================
    // MARCA RESPOSTA
    // =====================================================

    botao.classList.add("selecionada");


    // =====================================================
    // VERIFICA QUANTAS FORAM RESPONDIDAS
    // =====================================================

    const perguntas =
        document.querySelectorAll(".pergunta-coracao");


    let respondidas = 0;


    perguntas.forEach(function (item) {

        if (
            item.querySelector(".selecionada")
        ) {

            respondidas++;

        }

    });


    // =====================================================
    // TODAS RESPONDIDAS
    // =====================================================

    if (respondidas === perguntas.length) {

        const final =
            document.getElementById("fimQuemEMais");


        if (final) {

            final.style.display =
                "block";


            final.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    }

}


// =========================================================
// CONTADOR DO RELACIONAMENTO
// =========================================================

function atualizarContador() {

    // 09 de maio de 2026
    const inicio =
        new Date(2026, 4, 9, 0, 0, 0);


    const agora =
        new Date();


    // =====================================================
    // DIFERENÇA DE MESES E DIAS
    // =====================================================

    let anos =
        agora.getFullYear() -
        inicio.getFullYear();


    let meses =
        agora.getMonth() -
        inicio.getMonth();


    let dias =
        agora.getDate() -
        inicio.getDate();


    if (dias < 0) {

        meses--;


        const ultimoDiaMesAnterior =
            new Date(
                agora.getFullYear(),
                agora.getMonth(),
                0
            ).getDate();


        dias +=
            ultimoDiaMesAnterior;

    }


    if (meses < 0) {

        anos--;

        meses += 12;

    }


    // =====================================================
    // HORAS, MINUTOS E SEGUNDOS
    // =====================================================

    const diferenca =
        agora - inicio;


    const horas =
        Math.floor(
            (diferenca /
                (1000 * 60 * 60)) % 24
        );


    const minutos =
        Math.floor(
            (diferenca /
                (1000 * 60)) % 60
        );


    const segundos =
        Math.floor(
            (diferenca /
                1000) % 60
        );


    // =====================================================
    // ATUALIZA HTML
    // =====================================================

    const mesesElemento =
        document.getElementById("meses");


    const diasElemento =
        document.getElementById("dias");


    const horasElemento =
        document.getElementById("horas");


    const minutosElemento =
        document.getElementById("minutos");


    const segundosElemento =
        document.getElementById("segundos");


    if (mesesElemento) {

        mesesElemento.textContent =
            (anos * 12) + meses;

    }


    if (diasElemento) {

        diasElemento.textContent =
            dias;

    }


    if (horasElemento) {

        horasElemento.textContent =
            String(horas).padStart(2, "0");

    }


    if (minutosElemento) {

        minutosElemento.textContent =
            String(minutos).padStart(2, "0");

    }


    if (segundosElemento) {

        segundosElemento.textContent =
            String(segundos).padStart(2, "0");

    }

}

// =========================
// 365 MOTIVOS PARA CELEBRAR VOCÊ
// =========================

const motivosNazareno = [
    "Porque você tem um coração bonito.",
    "Porque você se importa com quem ama.",
    "Porque você sempre tenta ajudar.",
    "Porque você é paciente comigo.",
    "Porque você sabe me fazer rir.",
    "Porque sua presença me faz bem.",
    "Porque você gosta de estar por perto.",
    "Porque você é meu companheiro.",
    "Porque você acredita nas minhas ideias.",
    "Porque você apoia minhas loucuras.",

    "Porque você comemora minhas conquistas.",
    "Porque você se importa com o que eu sinto.",
    "Porque você sabe ouvir.",
    "Porque você tem um jeito só seu de cuidar.",
    "Porque você é carinhoso nos detalhes.",
    "Porque você não mede esforços por quem ama.",
    "Porque você tem paciência para me entender.",
    "Porque você consegue me acalmar.",
    "Porque você me incentiva.",
    "Porque você quer me ver bem.",

    "Porque você é sincero.",
    "Porque você é leal.",
    "Porque você é dedicado.",
    "Porque você é responsável.",
    "Porque você tenta fazer o melhor que pode.",
    "Porque você não desiste fácil.",
    "Porque você sabe reconhecer seus erros.",
    "Porque você está sempre aprendendo.",
    "Porque você quer crescer.",
    "Porque você tem sonhos.",

    "Porque você corre atrás do que quer.",
    "Porque você tem força para continuar.",
    "Porque você respeita quem está ao seu lado.",
    "Porque você valoriza as pessoas que ama.",
    "Porque você tem humildade.",
    "Porque você sabe ser gentil.",
    "Porque você é educado.",
    "Porque você tem um jeito tranquilo.",
    "Porque você consegue deixar tudo mais leve.",
    "Porque você tem um senso de humor único.",

    "Porque sua risada é impossível de não reconhecer.",
    "Porque seu sorriso muda seu rosto inteiro.",
    "Porque seu olhar entrega quando você está feliz.",
    "Porque seu abraço é um dos meus lugares favoritos.",
    "Porque seu cheiro me traz uma sensação boa.",
    "Porque seu cafuné é especial.",
    "Porque você gosta de ficar pertinho.",
    "Porque você gosta de segurar minha mão.",
    "Porque sua mão na minha transmite segurança.",
    "Porque ao seu lado eu me sinto protegida.",

    "Porque você é meu chaveirinho oficial.",
    "Porque você sempre quer saber o que estou fazendo.",
    "Porque você sempre encontra um jeito de estar comigo.",
    "Porque você me acompanha nas minhas ideias.",
    "Porque você não foge das minhas invenções.",
    "Porque você já faz parte das minhas pequenas conquistas.",
    "Porque você torce por mim.",
    "Porque você acredita em mim até quando eu duvido.",
    "Porque você me lembra que eu consigo.",
    "Porque você gosta de participar da minha vida.",

    "Porque você faz questão da minha companhia.",
    "Porque você gosta de dividir as coisas comigo.",
    "Porque você transforma momentos simples em lembranças.",
    "Porque você consegue me fazer sorrir sem tentar muito.",
    "Porque nossas conversas nunca são apenas conversas.",
    "Porque nossas provocações são parte da diversão.",
    "Porque nossas besteiras também são especiais.",
    "Porque você entende algumas coisas só pelo meu olhar.",
    "Porque você conhece alguns dos meus jeitinhos.",
    "Porque você sabe quando alguma coisa não está bem comigo.",

    "Porque você presta atenção nos detalhes.",
    "Porque você lembra de pequenas coisas.",
    "Porque você tenta me agradar.",
    "Porque você se preocupa comigo.",
    "Porque você pergunta se eu estou bem.",
    "Porque você quer me ver feliz.",
    "Porque você sabe quando preciso de carinho.",
    "Porque você me dá motivos para sorrir.",
    "Porque você faz companhia até nas coisas mais bobas.",
    "Porque você é aquele tipo de pessoa que eu quero por perto.",

    "Porque nossas roupas parecem combinar sozinhas.",
    "Porque até nisso nossa conexão aparece.",
    "Porque a gente combina sem combinar.",
    "Porque temos nossas próprias piadas.",
    "Porque temos nossos próprios jeitos de demonstrar carinho.",
    "Porque existem coisas que só fazem sentido para nós dois.",
    "Porque nossa história começou de um jeito inesperado.",
    "Porque um simples olhar acabou significando tanto.",
    "Porque uma mensagem mudou muita coisa.",
    "Porque aquele primeiro encontro virou parte da minha história.",

    "Porque aquele primeiro beijo virou uma lembrança inesquecível.",
    "Porque você chegou sem avisar e ficou.",
    "Porque você se tornou importante sem eu perceber.",
    "Porque você virou parte da minha rotina.",
    "Porque você virou parte dos meus planos.",
    "Porque você virou parte dos meus pensamentos.",
    "Porque você virou parte dos meus sorrisos.",
    "Porque você virou meu companheiro.",
    "Porque você virou meu coração fora de mim.",
    "Porque a nossa história é nossa.",

    "Porque você me respeita.",
    "Porque você respeita meus limites.",
    "Porque você respeita minhas escolhas.",
    "Porque você sabe conversar.",
    "Porque você tenta resolver as coisas.",
    "Porque você sabe reconhecer quando precisa mudar.",
    "Porque você procura melhorar.",
    "Porque você se esforça pelas pessoas importantes para você.",
    "Porque você leva a sério aquilo que importa.",
    "Porque você sabe ser amigo.",

    "Porque você sabe ser carinhoso.",
    "Porque você sabe demonstrar preocupação.",
    "Porque você sabe estar presente.",
    "Porque você sabe fazer companhia.",
    "Porque você sabe dividir.",
    "Porque você sabe acolher.",
    "Porque você sabe cuidar.",
    "Porque você tem um coração generoso.",
    "Porque você não pensa apenas em si.",
    "Porque você gosta de ver os outros bem.",

    "Porque você oferece ajuda.",
    "Porque você sabe agradecer.",
    "Porque você reconhece quem está ao seu lado.",
    "Porque você valoriza carinho.",
    "Porque você valoriza presença.",
    "Porque você valoriza pequenos gestos.",
    "Porque você consegue dizer muito com atitudes.",
    "Porque seu cuidado aparece nos detalhes.",
    "Porque seu carinho aparece sem precisar ser anunciado.",
    "Porque você faz questão.",

    "Porque você tenta.",
    "Porque você se importa.",
    "Porque você permanece.",
    "Porque você está presente.",
    "Porque você me faz sentir importante.",
    "Porque você me faz sentir querida.",
    "Porque você me faz sentir acolhida.",
    "Porque você me faz sentir segura.",
    "Porque você me faz sentir acompanhada.",
    "Porque você me faz sentir apoiada.",

    "Porque você me faz sentir compreendida.",
    "Porque você me faz sentir especial.",
    "Porque você me faz sorrir nos dias comuns.",
    "Porque você transforma momentos simples em algo nosso.",
    "Porque eu gosto de ouvir você falar.",
    "Porque gosto das nossas conversas.",
    "Porque gosto das nossas brincadeiras.",
    "Porque gosto das nossas provocações.",
    "Porque gosto dos nossos abraços demorados.",
    "Porque gosto de andar ao seu lado.",

    "Porque gosto de ter sua mão na minha.",
    "Porque gosto quando você fica pertinho.",
    "Porque gosto quando você me procura.",
    "Porque gosto quando você quer participar das minhas coisas.",
    "Porque gosto quando você demonstra preocupação.",
    "Porque gosto quando você tenta me tranquilizar.",
    "Porque gosto quando você comemora comigo.",
    "Porque gosto quando você me apoia.",
    "Porque gosto quando você acredita em mim.",
    "Porque gosto quando você simplesmente está ali.",

    "Porque gosto da nossa cumplicidade.",
    "Porque gosto da nossa liberdade para sermos nós mesmos.",
    "Porque gosto de dividir a vida com você.",
    "Porque gosto de ter você na minha vida.",
    "Porque você tem um sorriso bonito.",
    "Porque você tem um olhar marcante.",
    "Porque você tem seu próprio jeitinho.",
    "Porque seu jeito tímido é fofo.",
    "Porque suas risadas bobas são contagiosas.",
    "Porque você consegue ser engraçado sem perceber.",

    "Porque suas brincadeiras têm a sua cara.",
    "Porque você tem manias que já reconheço de longe.",
    "Porque seu jeito de falar é só seu.",
    "Porque seu jeito de olhar para mim diz muita coisa.",
    "Porque seu jeito de me abraçar é só seu.",
    "Porque seu jeito de segurar minha mão é só seu.",
    "Porque seu jeito de cuidar de mim é só seu.",
    "Porque seu jeito de me apoiar é só seu.",
    "Porque seu jeito de estar comigo é só seu.",
    "Porque ninguém é exatamente como você.",

    "Porque você não precisa ser igual a ninguém.",
    "Porque sua personalidade é única.",
    "Porque você tem seu próprio jeito de fazer as coisas.",
    "Porque eu reconheceria seu jeitinho em qualquer lugar.",
    "Porque você me acompanha.",
    "Porque você me incentiva.",
    "Porque você me escuta.",
    "Porque você me entende.",
    "Porque você me tranquiliza.",
    "Porque você me diverte.",

    "Porque você me surpreende.",
    "Porque você me faz companhia.",
    "Porque você me apoia.",
    "Porque você simplesmente está comigo.",
    "Porque você não precisa fazer muito para deixar meu dia melhor.",
    "Porque uma mensagem sua já pode mudar meu humor.",
    "Porque uma risada sua pode me fazer rir também.",
    "Porque um abraço seu pode melhorar um dia ruim.",
    "Porque sua mão segurando a minha me acalma.",
    "Porque sua presença traz uma sensação boa.",

    "Porque você sabe ser meu porto seguro nos pequenos momentos.",
    "Porque você está nos meus momentos felizes.",
    "Porque você também está quando as coisas não estão tão boas.",
    "Porque você não aparece só quando tudo está perfeito.",
    "Porque você fica.",
    "Porque você não deixa de demonstrar carinho.",
    "Porque você faz questão de nós.",
    "Porque você cuida do que estamos construindo.",
    "Porque você valoriza nossa história.",
    "Porque você faz parte dela.",

    "Porque você é uma das melhores partes dela.",
    "Porque você é você.",
    "Porque você me apoia até nas ideias que surgem do nada.",
    "Porque você já se acostumou com minhas invenções.",
    "Porque você provavelmente ainda vai participar de muitas delas.",
    "Porque você é meu parceiro de aventuras.",
    "Porque você é meu parceiro de momentos aleatórios.",
    "Porque você é meu acompanhante oficial.",
    "Porque você é meu chaveirinho para praticamente tudo.",
    "Porque você sempre quer estar por perto.",

    "Porque você gosta de fazer parte das coisas.",
    "Porque sua companhia nunca parece demais.",
    "Porque até o silêncio ao seu lado é confortável.",
    "Porque não precisamos estar fazendo algo especial para ser bom.",
    "Porque estar com você já é uma coisa especial.",
    "Porque a gente consegue se divertir com pouco.",
    "Porque nossos momentos simples ficam guardados.",
    "Porque nossas lembranças têm nosso jeito.",
    "Porque nossa história tem detalhes que ninguém mais tem.",
    "Porque só nós sabemos de certas coisas.",

    "Porque só nós entendemos algumas piadas.",
    "Porque isso faz nossa conexão ser nossa.",
    "Porque você tem sonhos.",
    "Porque você tem planos.",
    "Porque você tem coisas que ainda quer conquistar.",
    "Porque ainda existem muitos lugares para você conhecer.",
    "Porque ainda existem muitos momentos para viver.",
    "Porque ainda existem muitos aniversários para comemorar.",
    "Porque ainda existem muitos sonhos esperando por você.",
    "Porque você ainda tem muito para descobrir sobre si mesmo.",

    "Porque você está crescendo.",
    "Porque você está construindo seu caminho.",
    "Porque você não precisa ter tudo resolvido agora.",
    "Porque você pode aprender no caminho.",
    "Porque você pode recomeçar.",
    "Porque você pode tentar novamente.",
    "Porque você merece comemorar suas próprias conquistas.",
    "Porque você merece reconhecer o quanto já caminhou.",
    "Porque você merece se orgulhar de si.",
    "Porque sua vida tem muito pela frente.",

    "Porque seu futuro ainda guarda coisas bonitas.",
    "Porque você tem coragem para enfrentar seus desafios.",
    "Porque você consegue continuar mesmo cansado.",
    "Porque você tenta encontrar soluções.",
    "Porque você não precisa acertar sempre.",
    "Porque seus erros não diminuem seu valor.",
    "Porque suas dificuldades não definem quem você é.",
    "Porque você aprende com o que vive.",
    "Porque você amadurece com o tempo.",
    "Porque você procura fazer melhor.",

    "Porque você não precisa ser perfeito para ser incrível.",
    "Porque você merece reconhecer suas próprias qualidades.",
    "Porque você tem muito mais valor do que imagina.",
    "Porque você faz diferença na vida de quem ama.",
    "Porque sua presença é importante.",
    "Porque sua existência é motivo de gratidão.",
    "Porque existem pessoas felizes por ter você por perto.",
    "Porque você é lembrado com carinho.",
    "Porque você é querido.",
    "Porque você é importante.",

    "Porque você merece ser celebrado.",
    "Porque você sabe me fazer companhia.",
    "Porque você gosta de ficar do meu lado.",
    "Porque você me inclui nos seus momentos.",
    "Porque você compartilha coisas comigo.",
    "Porque você gosta de saber das minhas coisas.",
    "Porque você participa dos meus planos.",
    "Porque você me incentiva a continuar.",
    "Porque você me lembra dos meus motivos para seguir.",
    "Porque você acredita que eu consigo.",

    "Porque você comemora quando eu consigo.",
    "Porque você fica feliz com minha felicidade.",
    "Porque você respeita meus sonhos.",
    "Porque você não diminui minhas ideias.",
    "Porque você me dá coragem.",
    "Porque você me lembra que eu não estou sozinha.",
    "Porque você está disposto a caminhar comigo.",
    "Porque você gosta de estar presente.",
    "Porque você faz questão de nós.",
    "Porque você me escolhe também nas pequenas coisas.",

    "Porque você faz parte dos meus dias.",
    "Porque até nossas roupas entram na brincadeira.",
    "Porque a gente combina sem combinar.",
    "Porque nossa conexão aparece nos detalhes.",
    "Porque seu jeito de segurar minha mão me encanta.",
    "Porque sua mão na minha traz segurança.",
    "Porque você me faz sentir protegida.",
    "Porque você me faz sentir cuidada.",
    "Porque você me faz sentir acompanhada.",
    "Porque você é meu parceiro para tudo.",

    "Porque você é meu chaveirinho.",
    "Porque você sempre quer estar por perto.",
    "Porque você torna meus planos mais divertidos.",
    "Porque você faz parte das minhas ideias.",
    "Porque você já faz parte de tantas lembranças minhas.",
    "Porque você está presente em tantos dos meus sorrisos.",
    "Porque você já virou parte da minha rotina.",
    "Porque você já virou parte dos meus planos.",
    "Porque você já virou parte da minha história.",
    "Porque você já virou parte de mim.",

    "Porque você merece ouvir coisas boas sobre si.",
    "Porque você merece lembrar das suas qualidades.",
    "Porque você merece se enxergar com carinho.",
    "Porque você merece celebrar cada conquista.",
    "Porque você merece comemorar cada novo ano.",
    "Porque você merece acreditar no seu potencial.",
    "Porque você merece realizar seus sonhos.",
    "Porque você merece ser feliz.",
    "Porque você merece ter pessoas que torçam por você.",
    "Porque você merece ser amado pelo que é.",

    "Porque você não precisa mudar quem é para ser especial.",
    "Porque sua essência é bonita.",
    "Porque seu jeito tem valor.",
    "Porque sua história tem valor.",
    "Porque seus sonhos têm valor.",
    "Porque seus esforços têm valor.",
    "Porque suas pequenas conquistas também importam.",
    "Porque seus dias comuns também merecem ser vividos.",
    "Porque você não precisa de uma ocasião especial para ser celebrado.",
    "Porque simplesmente existir já torna possível tudo que ainda vamos viver.",

    "Porque você foi uma surpresa bonita na minha vida.",
    "Porque eu não estava procurando e encontrei você.",
    "Porque aquele encontro mudou meus planos.",
    "Porque nossa história começou de um jeito inesperado.",
    "Porque um olhar acabou levando a uma história inteira.",
    "Porque uma mensagem acabou aproximando dois corações.",
    "Porque aquele primeiro encontro ficou guardado.",
    "Porque aquele primeiro beijo virou memória.",
    "Porque tantas pequenas coisas nos trouxeram até aqui.",
    "Porque ainda temos tantas pequenas coisas para viver.",

    "Porque eu quero continuar vendo você crescer.",
    "Porque quero continuar torcendo por você.",
    "Porque quero continuar comemorando suas conquistas.",
    "Porque quero continuar ouvindo suas histórias.",
    "Porque quero continuar rindo das nossas besteiras.",
    "Porque quero continuar segurando sua mão.",
    "Porque quero continuar tendo você por perto.",
    "Porque quero continuar descobrindo novos lados seus.",
    "Porque ainda existem muitos motivos para agradecer pela sua vida.",
    "Porque ainda existem muitos aniversários para celebrar você.",

    "Porque sua vida merece muitos brindes, abraços e sorrisos.",
    "Porque você merece lembrar todos os dias que é especial.",
    "Porque sempre haverá algo bonito para encontrar em você.",
    "Porque, entre tantas pessoas no mundo, a vida me permitiu encontrar você.",
    "Porque ser você já é um motivo para celebrar."
];

let motivosDisponiveis = [...motivosNazareno];

function tirarPapel() {

    const papel = document.getElementById("papelRevelado");
    const frase = document.getElementById("frasePapel");

    if (!papel || !frase) return;

    // Quando todos os papéis forem retirados
    if (motivosDisponiveis.length === 0) {

        frase.textContent =
            "Você abriu todos os 365 papéis. Mas ainda não acabou: sua vida continua criando novos motivos para ser celebrada. ❤️";

        papel.style.display = "block";

        return;
    }

    // Escolhe um papel aleatório
    const indice = Math.floor(
        Math.random() * motivosDisponiveis.length
    );

    // Remove o papel escolhido para não repetir
    const motivo = motivosDisponiveis.splice(indice, 1)[0];

    frase.textContent = motivo;

    papel.style.display = "block";
}

// =========================================================
// INICIAR CONTADOR
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    atualizarContador();


    setInterval(
        atualizarContador,
        1000
    );

});


// =========================================================
// FIM DA PARTE 1
// =========================================================

// =========================================================
// ADITIVO AO CONTRATO
// =========================================================

function aceitarAditivo() {

    const ciencia =
        document.getElementById("cienciaAditivo");

    const aceite =
        document.getElementById("aceiteAditivo");

    const consulta =
        document.getElementById("consultaAditivo");


    if (
        !ciencia.checked ||
        !aceite.checked ||
        !consulta.checked
    ) {

        alert(
            "Para prosseguir, é necessário declarar ciência e aceitar integralmente o presente Aditivo."
        );

        return;
    }


    // Esconde o aditivo
    document.getElementById("aditivoContrato").style.display =
        "none";


    // Mostra a avaliação
    document.getElementById("interrogatorioContrato").style.display =
        "block";


    // Mostra o quiz
    document.getElementById("quiz").style.display =
        "block";


    // Carrega a primeira pergunta
    carregarPergunta();


    // Vai para a avaliação
    document.getElementById("interrogatorioContrato").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =========================================================
// QUIZ — RENOVAÇÃO DO CONTRATO
// =========================================================

const perguntas = [

    {
        pergunta:
            "Conforme os registros oficiais desta história, qual foi a data do primeiro beijo entre as partes?",

        alternativas: [
            "22/02/2026",
            "01/03/2026",
            "11/04/2026",
            "08/03/2026"
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual foi o primeiro apelido oficialmente registrado pela contratante para se referir ao contratante?",

        alternativas: [
            "Amor",
            "Coração",
            "Mozão",
            "Vida"
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual cor consta como preferência em comum entre as partes?",

        alternativas: [
            "Azul",
            "Preto",
            "Vermelho"
        ],

        correta: 1
    },


    {
        pergunta:
            "Caso as partes estivessem em um restaurante e o garçom perguntasse o pedido sem apresentar o cardápio, qual suco provavelmente seria escolhido pela contratante?",

        alternativas: [
            "Acerola",
            "Maracujá",
            "Cajá",
            "Goiaba"
        ],

        correta: 2
    },


    {
        pergunta:
            "Para demonstrar conhecimento acerca dos gostos da contratante, qual escolha teria maior chance de deixá-la feliz?",

        alternativas: [
            "Pipoca",
            "Salgadinho",
            "Petisco",
            "Biscoito"
        ],

        correta: 0
    },


    {
        pergunta:
            "Qual foi o primeiro presente entregue pela contratante ao contratante?",

        alternativas: [
            "Meias",
            "Chaveiro",
            "Pulseira",
            "Camisa"
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual característica do contratante costuma ser mencionada primeiro pela contratante?",

        alternativas: [
            "Seu cheirinho",
            "Seu cabelinho liso",
            "Seus olhinhos puxados",
            "Seu sorriso"
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual foi a primeira ideia registrada durante a criação deste espaço virtual?",

        alternativas: [
            "O contrato",
            "A carta",
            "O vídeo",
            "O quiz"
        ],

        correta: 0
    },


    {
        pergunta:
            "Caso alguém perguntasse qual é o personagem favorito da contratante, qual resposta deveria ser apresentada?",

        alternativas: [
            "Mickey",
            "Angel",
            "Stitch",
            "Bob Esponja"
        ],

        correta: 2
    },


    {
        pergunta:
            "Após participar dos testes e desenvolvimento deste projeto, qual título foi oficialmente concedido ao contratante?",

        alternativas: [
            "Programador",
            "Inspiração",
            "Primeiro cobaia",
            "Designer"
        ],

        correta: 2
    }

];


// =========================================================
// VARIÁVEIS DO QUIZ
// =========================================================

let perguntaAtual = 0;

let respostas = [];

let respostasPistas = {
    pista1: "",
    pista2: "",
    pista3: "",
    pista4: ""
};

let codigoGerado = "";


// =========================================================
// CARREGAR PERGUNTA
// =========================================================

function carregarPergunta() {

    const pergunta =
        perguntas[perguntaAtual];


    document.getElementById("numeroPergunta").textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


    document.getElementById("barraProgresso").style.width =
        `${((perguntaAtual + 1) / perguntas.length) * 100}%`;


    document.getElementById("pergunta").textContent =
        pergunta.pergunta;


    const alternativas =
        document.getElementById("alternativas");


    alternativas.innerHTML = "";


    pergunta.alternativas.forEach(function (texto, indice) {

        const botao =
            document.createElement("button");


        botao.className =
            "opcao";


        botao.textContent =
            texto;


        if (
            respostas[perguntaAtual] === indice
        ) {

            botao.classList.add("selecionada");

        }


        botao.onclick = function () {

            respostas[perguntaAtual] =
                indice;


            carregarPergunta();

        };


        alternativas.appendChild(botao);

    });


    // Botão anterior
    document.getElementById("btnAnterior").style.display =
        perguntaAtual === 0
            ? "none"
            : "inline-block";


    // Botão próximo
    document.getElementById("btnProximo").textContent =
        perguntaAtual === perguntas.length - 1
            ? "Finalizar avaliação"
            : "Próxima ➡";

}


// =========================================================
// PERGUNTA ANTERIOR
// =========================================================

function anteriorPergunta() {

    if (perguntaAtual > 0) {

        perguntaAtual--;

        carregarPergunta();

    }

}


// =========================================================
// PRÓXIMA PERGUNTA
// =========================================================

function proximaPergunta() {

    if (
        respostas[perguntaAtual] == null
    ) {

        alert(
            "Escolha uma alternativa antes de continuar."
        );

        return;

    }


    if (
        perguntaAtual <
        perguntas.length - 1
    ) {

        perguntaAtual++;

        carregarPergunta();

    }

    else {

        finalizarQuiz();

    }

}


// =========================================================
// FINALIZAR AS 10 QUESTÕES
// =========================================================

function finalizarQuiz() {

    document.getElementById("pergunta").style.display =
        "none";


    document.getElementById("alternativas").style.display =
        "none";


    document.querySelector(".botoesQuiz").style.display =
        "none";


    document.querySelector(".progresso").style.display =
        "none";


    document.getElementById("etapaFinalQuiz").style.display =
        "block";


    document.getElementById("etapaFinalQuiz").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// =========================================================
// VERIFICAR PISTAS
// =========================================================

function normalizarTexto(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


function verificarPistas() {

    const resposta1 =
        normalizarTexto(
            document.getElementById("respostaPista1").value
        );


    const resposta2 =
        normalizarTexto(
            document.getElementById("respostaPista4").value
        );


    const resposta3 =
        normalizarTexto(
            document.getElementById("respostaPista2").value
        );


    const resposta4 =
        normalizarTexto(
            document.getElementById("respostaPista3").value
        );


    const resposta5 =
        normalizarTexto(
            document.getElementById("respostaPista5").value
        );


    const correta1 =
        resposta1 === "vela" ||
        resposta1 === "velas";


    const correta2 =
        resposta2 === "coracao";


    const correta3 =
        resposta3 === "pulseira";


    const correta4 =
        resposta4 === "alianca" ||
        resposta4 === "aliancas";


    const correta5 =
        resposta5 === "igreja";


    return {

        correta1: correta1,
        correta2: correta2,
        correta3: correta3,
        correta4: correta4,
        correta5: correta5,

        todasCorretas:
            correta1 &&
            correta2 &&
            correta3 &&
            correta4 &&
            correta5

    };

}


// =========================================================
// PROSSEGUIR COM A ANÁLISE
// =========================================================

function prosseguirAnalise() {

    const pistas =
        verificarPistas();


    if (!pistas.todasCorretas) {

        alert(
            "Existem informações que não correspondem aos registros do sistema. Revise as seções do site e tente novamente."
        );

        return;

    }


    // Guarda respostas
    respostasPistas.pista1 =
        document.getElementById("respostaPista1").value.trim();

    respostasPistas.pista2 =
        document.getElementById("respostaPista2").value.trim();

    respostasPistas.pista3 =
        document.getElementById("respostaPista3").value.trim();

    respostasPistas.pista4 =
        document.getElementById("respostaPista4").value.trim();

    respostasPistas.pista5 =
        document.getElementById("respostaPista5").value.trim();


    // Esconde pistas
    document.getElementById("etapaFinalQuiz").style.display =
        "none";


    // Mostra confirmação
    document.getElementById("assinaturaQuiz").style.display =
        "block";


    document.getElementById("assinaturaQuiz").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

// =========================================================
// CONFIRMAR RESPOSTAS
// =========================================================

function confirmarQuiz() {

    const nome =
        document
            .getElementById("nomeConfirmacao")
            .value
            .trim();


    const aceite =
        document
            .getElementById("confirmacaoRespostas")
            .checked;


    if (nome === "") {

        alert(
            "Digite seu nome para confirmar."
        );

        document.getElementById("nomeConfirmacao").focus();

        return;

    }


    if (!aceite) {

        alert(
            "Confirme suas respostas antes de continuar."
        );

        return;

    }


    nomeContratante =
        nome;


    document.getElementById("assinaturaQuiz").style.display =
        "none";


    document.getElementById("analiseProcesso").style.display =
        "block";


    document.getElementById("analiseProcesso").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    setTimeout(function () {

        mostrarResultado();

    }, 2500);

}


// =========================================================
// FIM DA PARTE 2
// =========================================================

// =========================
// ETAPA 5 — PISTAS
// =========================

function verificarPistas() {

    const resposta1 = normalizarTexto(
        document.getElementById("respostaPista1").value
    );

    const resposta2 = normalizarTexto(
        document.getElementById("respostaPista4").value
    );

    const resposta3 = normalizarTexto(
        document.getElementById("respostaPista2").value
    );

    const resposta4 = normalizarTexto(
        document.getElementById("respostaPista3").value
    );

    const resposta5 = normalizarTexto(
        document.getElementById("respostaPista5").value
    );


    return {

        correta1:
            resposta1 === "vela" ||
            resposta1 === "velas",

        correta2:
            resposta2 === "coracao",

        correta3:
            resposta3 === "pulseira",

        correta4:
            resposta4 === "alianca" ||
            resposta4 === "aliancas",

        correta5:
            resposta5 === "igreja",


        todasCorretas:
            (
                (resposta1 === "vela" || resposta1 === "velas") &&
                resposta2 === "coracao" &&
                resposta3 === "pulseira" &&
                (resposta4 === "alianca" || resposta4 === "aliancas") &&
                resposta5 === "igreja"
            )

    };

}


// =========================
// PROSSEGUIR COM A ANÁLISE
// =========================

function prosseguirAnalise() {

    const pistas = verificarPistas();


    if (!pistas.todasCorretas) {

        alert(
            "Existem informações que não correspondem aos registros do sistema. Revise as seções do site e tente novamente."
        );

        return;

    }


    respostasPistas.pista1 =
        document.getElementById("respostaPista1").value.trim();

    respostasPistas.pista2 =
        document.getElementById("respostaPista4").value.trim();

    respostasPistas.pista3 =
        document.getElementById("respostaPista2").value.trim();

    respostasPistas.pista4 =
        document.getElementById("respostaPista3").value.trim();

    respostasPistas.pista5 =
        document.getElementById("respostaPista5").value.trim();


    document.getElementById("etapaFinalQuiz").style.display =
        "none";


    document.getElementById("assinaturaQuiz").style.display =
        "block";


    document.getElementById("assinaturaQuiz").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

// =========================
// CONFIRMAR RESPOSTAS
// =========================

function confirmarQuiz() {

    const nome = document
        .getElementById("nomeConfirmacao")
        .value
        .trim();

    const aceite = document
        .getElementById("confirmacaoRespostas")
        .checked;

    if (nome === "") {

        alert("Digite seu nome para confirmar.");

        return;
    }

    if (!aceite) {

        alert(
            "Confirme suas respostas antes de continuar."
        );

        return;
    }

    nomeContratante = nome;

    document.getElementById("assinaturaQuiz").style.display =
        "none";

    document.getElementById("analiseProcesso").style.display =
        "block";

    document.getElementById("analiseProcesso").scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(function () {

        mostrarResultado();

    }, 2500);
}


// =========================
// CALCULAR NOTA
// =========================

function calcularNota() {

    let acertos = 0;

    perguntas.forEach(function (pergunta, index) {

        if (respostas[index] === pergunta.correta) {
            acertos++;
        }

    });

    return acertos;
}


// =========================
// GERAR CÓDIGO
// =========================

function gerarCodigo() {

    return (
        respostasPistas.pista1.length +
        "" +
        respostasPistas.pista2.length +
        "" +
        respostasPistas.pista3.length +
        "" +
        respostasPistas.pista4.length +
        "" +
        respostasPistas.pista5.length
    );
}


// =========================
// MOSTRAR RESULTADO
// =========================

function mostrarResultado() {

    const acertos = calcularNota();
    const pistas = verificarPistas();

    document.getElementById("analiseProcesso").style.display =
        "none";

    document.getElementById("resultadoFinal").style.display =
        "block";

    document.getElementById("pontuacaoFinal").textContent =
        acertos;

    document.getElementById("statusAvaliacao").textContent =
        acertos >= 7
            ? "Aprovado"
            : "Não aprovado";

    document.getElementById("statusEtapaFinal").textContent =
        pistas.todasCorretas
            ? "Concluída"
            : "Pendente";

    document.getElementById("statusConfirmacao").textContent =
        "Confirmada";

    const decisao =
        document.getElementById("decisaoFinal");

    const codigoArea =
        document.getElementById("codigoGerado");

    const novaTentativa =
        document.getElementById("novaTentativa");

    // =========================
    // APROVADO
    // =========================

    if (acertos >= 7 && pistas.todasCorretas) {

        if (acertos === 10) {

            decisao.innerHTML = `
                <h3>APROVADO COM EXCELÊNCIA</h3>

                <p>
                    O contratante demonstrou elevado conhecimento
                    acerca dos fatos, memórias e registros desta relação.
                </p>

                <p>
                    <strong>Decisão:</strong><br>
                    Aprovação integral.
                </p>
            `;

        } else if (acertos >= 8) {

            decisao.innerHTML = `
                <h3>APROVADO</h3>

                <p>
                    Verifica-se conhecimento satisfatório
                    da relação e de seus principais registros.
                </p>

                <p>
                    <strong>Decisão:</strong><br>
                    Pedido deferido.
                </p>
            `;

        } else {

            decisao.innerHTML = `
                <h3>APROVADO POR MARGEM MÍNIMA</h3>

                <p>
                    O contratante atingiu a pontuação mínima
                    exigida para prosseguimento do processo.
                </p>

                <p>
                    <strong>Decisão:</strong><br>
                    Pedido deferido.
                </p>

                <p>
                    Fica registrada a necessidade de maior atenção
                    aos detalhes da relação.
                </p>
            `;
        }

        codigoGerado = gerarCodigo();

        document.getElementById("codigoAcesso").textContent =
            codigoGerado;

        codigoArea.style.display = "block";

        novaTentativa.style.display = "none";

        // =========================
        // RENOVAÇÃO APROVADA
        // =========================

        document.getElementById("renovacao").style.display =
            "block";

        document.getElementById("dadosContratante").textContent =
            `Contratante: ${nomeContratante}`;

        document.getElementById("resultadoContratante").textContent =
            `Resultado da avaliação: ${acertos}/10`;

    }

    // =========================
    // NÃO APROVADO
    // =========================

    else {

        decisao.innerHTML = `
            <h3>PROCESSO INCONCLUSIVO</h3>

            <p>
                Após análise das informações apresentadas,
                não foi atingida a pontuação mínima necessária
                para conclusão do processo.
            </p>

            <p>
                <strong>Decisão:</strong><br>
                Pedido temporariamente indeferido.
            </p>

            <p>
                Uma nova tentativa será concedida ao contratante.
            </p>
        `;

        codigoArea.style.display = "none";

        novaTentativa.style.display = "block";

        document.getElementById("novaTentativa").scrollIntoView({
            behavior: "smooth"
        });
    }
}


// =========================
// COPIAR CÓDIGO
// =========================

function copiarCodigo() {

    if (!codigoGerado) {
        return;
    }

    navigator.clipboard.writeText(codigoGerado)
        .then(function () {

            document.getElementById("mensagemCopiado").style.display =
                "block";

            setTimeout(function () {

                document.getElementById("mensagemCopiado").style.display =
                    "none";

            }, 2500);

        })
        .catch(function () {

            alert(
                "Não foi possível copiar automaticamente. Código: " +
                codigoGerado
            );

        });
}

// =========================
// NOVA TENTATIVA
// =========================

function reiniciarQuiz() {

    perguntaAtual = 0;
    respostas = [];

    respostasPistas = {
        pista1: "",
        pista2: "",
        pista3: "",
        pista4: ""
    };

    codigoGerado = "";

    // =========================
    // ESCONDER ETAPAS
    // =========================

    document.getElementById("resultadoFinal").style.display =
        "none";

    document.getElementById("novaTentativa").style.display =
        "none";

    document.getElementById("renovacao").style.display =
        "none";

    document.getElementById("certificado").style.display =
        "none";

    document.getElementById("surpresaFinal").style.display =
        "none";

    document.getElementById("videoFinal").style.display =
        "none";

    document.getElementById("etapaFinalQuiz").style.display =
        "none";

    document.getElementById("assinaturaQuiz").style.display =
        "none";

    document.getElementById("analiseProcesso").style.display =
        "none";

    // =========================
    // LIMPAR CAMPOS
    // =========================

    document.getElementById("respostaPista1").value = "";
    document.getElementById("respostaPista2").value = "";
    document.getElementById("respostaPista3").value = "";
    document.getElementById("respostaPista4").value = "";

    document.getElementById("nomeConfirmacao").value = "";

    document.getElementById("confirmacaoRespostas").checked =
        false;

    // =========================
    // RESTAURAR QUIZ
    // =========================

    document.getElementById("pergunta").style.display =
        "block";

    document.getElementById("alternativas").style.display =
        "block";

    document.querySelector(".botoesQuiz").style.display =
        "flex";

    document.querySelector(".progresso").style.display =
        "block";

    carregarPergunta();

    document.getElementById("quiz").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// =========================
// MOSTRAR RENOVAÇÃO
// =========================

function mostrarRenovacao() {

    document.getElementById("resultadoFinal").style.display =
        "none";

    document.getElementById("renovacao").style.display =
        "block";

    document.getElementById("dadosContratante").textContent =
        `Contratante: ${nomeContratante}`;

    document.getElementById("resultadoContratante").textContent =
        `Resultado da avaliação: ${calcularNota()}/10`;

    document.getElementById("renovacao").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// =========================
// MOSTRAR CERTIFICADO
// =========================

function mostrarCertificado() {

    document.getElementById("renovacao").style.display =
        "none";

    document.getElementById("certificado").style.display =
        "block";

    document.getElementById("surpresaFinal").style.display =
        "none";

    document.getElementById("videoFinal").style.display =
        "none";

    document.getElementById("certificado").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// =========================
// MOSTRAR SURPRESA
// =========================

function mostrarSurpresa() {

    document.getElementById("certificado").style.display =
        "none";

    document.getElementById("surpresaFinal").style.display =
        "block";

    document.getElementById("videoFinal").style.display =
        "none";

    document.getElementById("codigoSurpresa").value =
        "";

    document.getElementById("acessoAutorizado").style.display =
        "none";

    document.getElementById("codigoInvalido").style.display =
        "none";

    document.getElementById("codigoSurpresa").style.border =
        "";

    document.getElementById("surpresaFinal").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// =========================
// VALIDAR CÓDIGO DA SURPRESA
// =========================

function validarCodigoSurpresa() {

    const codigoDigitado =
        document.getElementById("codigoSurpresa")
        .value
        .trim();

    const acesso =
        document.getElementById("acessoAutorizado");

    const erro =
        document.getElementById("codigoInvalido");

    acesso.style.display = "none";
    erro.style.display = "none";

    if (
        codigoDigitado === codigoGerado &&
        codigoGerado !== ""
    ) {

        acesso.style.display =
            "block";

        document.getElementById("codigoSurpresa").style.border =
            "2px solid #8b5e3c";

    } else {

        erro.style.display =
            "block";

        document.getElementById("codigoSurpresa").style.border =
            "";
    }
}


// =========================
// MOSTRAR VÍDEO FINAL
// =========================

function mostrarVideo() {

    document.getElementById("surpresaFinal").style.display =
        "none";

    document.getElementById("videoFinal").style.display =
        "block";

    document.getElementById("videoFinal").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// =========================
// FINAL DO PROCESSO
// =========================

function encerrarProcesso() {

    document.getElementById("videoFinal").style.display =
        "none";

    document.getElementById("disposicaoFinal").style.display =
        "block";

    document.getElementById("disposicaoFinal").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// =========================
// INICIALIZAÇÃO FINAL
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // Inicializa o contador
    atualizarContador();

    // Inicializa o quiz
    if (
        document.getElementById("quiz") &&
        document.getElementById("pergunta")
    ) {

        carregarPergunta();

    }

});

// =========================
// CONTROLE DE EXIBIÇÃO
// =========================

function esconderTodasEtapasFinais() {

    const etapas = [
        "resultadoFinal",
        "novaTentativa",
        "renovacao",
        "certificado",
        "surpresaFinal",
        "videoFinal"
    ];

    etapas.forEach(function (id) {

        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.style.display = "none";
        }

    });
}

// =========================
// GARANTIR ESTADO INICIAL
// =========================

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // ELEMENTOS FINAIS
    // =========================

    const etapasOcultas = [
        "titularidadeValidada",
        "contrato",
        "contratoAssinado",
        "interrogatorioContrato",
        "etapaFinalQuiz",
        "assinaturaQuiz",
        "analiseProcesso",
        "resultadoFinal",
        "novaTentativa",
        "renovacao",
        "certificado",
        "surpresaFinal",
        "videoFinal"
    ];

    etapasOcultas.forEach(function (id) {

        const elemento =
            document.getElementById(id);

        if (elemento) {
            elemento.style.display = "none";
        }

    });

    // =========================
    // CONTEÚDO DO SITE
    // =========================

    const conteudo =
        document.getElementById("conteudoSite");

    if (conteudo) {
        conteudo.style.display = "none";
    }


    // =========================
    // LOGIN
    // =========================

    const login =
        document.getElementById("login");

    if (login) {
        login.style.display = "block";
    }


    // =========================
    // INICIALIZAR QUIZ
    // =========================

    if (
        document.getElementById("quiz") &&
        document.getElementById("pergunta")
    ) {

        carregarPergunta();

    }


    // =========================
    // INICIALIZAR CONTADOR
    // =========================

    atualizarContador();

});
