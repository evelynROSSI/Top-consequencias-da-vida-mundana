const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Voce tem 50 centavos, e está morrendo de fome, mas precisa voltar pra casa, voce:",
        alternativas: [
            {
                texto: "pega um onibus",
                afirmacao: "voce pegou o onibus errado."
            },
            {
                texto: "compra uma goiaba",
                afirmacao: "roubaram a sua goiaba."
            }
        ]
    },
    {
        enunciado: "voce esta vendendo agua de coco em copacabana, e aparece um gringo falando em espanhol com voce, voce",
        alternativas: [
            {
                texto: "explica que no Brasil falamos em portugues",
                afirmacao: "o gringo desistiu de comprar agua de coco."
            },
            {
                texto: "Ignora isso e tenta vender a agua de coco por um preço a cima da media.",
                afirmacao: "Parabéns! o gringo te pagou 500 dolares por uma agua de coco!."
            }
        ]
    },
    {
        enunciado: "voce esta em um filme de terror. Voce:",
        alternativas: [
            {
                texto: "Banca o heroi e tenta salvar seus amigos do assassino.",
                afirmacao: "Voce esqueceu que é sedentário e acabou morrendo de uma forma ridícula."
            },
            {
                texto: "Pensa que é cada um por si e sai correndo.",
                afirmacao: "Voce sobreviveu, e conseguiu namorar a ex do seu amigo."
            }
        ]
    },
    {
        enunciado: "Voce tem 20 reais na sua conta, e precisa comprar um penal. Voce:",
        alternativas: [
            {
                texto: "Compra um penalde peixe.",
                afirmacao: "Voce é uma pessoa 10% mais feliz e de bem com a vida com o seu penal de peixe que chama Bob."
            },
            {
                texto: "Compra um penal aceito pela sociedade.",
                afirmacao: "Voce é triste porque nao tem um penal que chama bob"
            }
        ]
    },
    {
        enunciado: "É uma sexta-feira a noite e teu amigo te chama pra jogar league of legends, voce ",
        alternativas: [
            {
                texto: "aceita, afinal o que tem de mal em um jogo de videogame",
                afirmacao: "Voce caiu em um vicio enorme e agora a sociedade te ve como um perdedor"
            },
            {
                texto: "Nega, afinal sabe dos riscos que esse jogo trás a humanidade",
                afirmacao: "Voce teve uma vida repleta de felicidade, com uma carreira brilhante no mundo do trabalho"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();