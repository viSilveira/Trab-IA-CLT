const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Um trabalhador CLT descobre uma nova tecnologia capaz de responder dúvidas e criar conteúdos hiper-realistas. No caminho para casa, ele reflete se isso é ameaça ou oportunidade, concluindo que aprender a usá-la pode ser a chave para se destacar no emprego.",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, fiquei com medo do que a inteligência artificial pode causar. Para quem trabalha com CLT, ela ameaça mudar tudo: automatizar tarefas, cortar empregos e transformar profissões. Ver máquinas fazendo o trabalho de humanos tão rapidamente realmente assusta — é um sinal claro de que precisamos nos adaptar o quanto antes. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Assim que descobriu o poder da inteligência artificial, quis saber como usá-la no dia a dia. Ver como ela pode facilitar tarefas, economizar tempo e ajudar na produtividade foi surpreendente. É uma ferramenta poderosa — e acessível. Isso é maravilhoso!"
            }
        ]
    },
    {
        enunciado: "Um CLT recebe a tarefa de escrever sobre o uso da IA em sala de aula e decide mostrar como ela pode otimizar o aprendizado, facilitar treinamentos e preparar melhor profissionais para o mercado, destacando que dominar a tecnologia é vantagem competitiva.",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que emprega Inteligência Artificial para localizar informações relevantes para o trabalho, apresentando-as de forma clara e fácil de entender.",
                afirmacao: "Conseguiu usar a IA para encontrar e compreender informações úteis para a atividade."
            },
            {
                texto: "Produz o trabalho a partir de trocas de ideias com colegas, consultas a fontes online e aplicação de seus próprios conhecimentos sobre o assunto.",
                afirmacao: "Percebeu maior facilidade ao usar seus próprios recursos e experiências para elaborar o trabalho."
            }
        ]
    },
    {
        enunciado: "No debate, destaquei que a IA vai mudar o trabalho CLT, automatizando tarefas e exigindo novas habilidades. Defendi que, em vez de temer a tecnologia, devemos nos preparar com educação e requalificação. A IA pode ser uma aliada, desde que usada com responsabilidade e com apoio aos trabalhadores.",      alternativas: [
            {
                texto: "Defende que a IA pode gerar novas vagas de emprego e fortalecer as competências dos trabalhadores CLT..",
                afirmacao: "Incentiva a inovação na aplicação da IA no ambiente de trabalho e busca ampliar as oportunidades profissionais para quem atua sob o regime CLT."
            },
            {
                texto: "Preocupa-se com os trabalhadores que podem perder seus empregos para a automação e defende a proteção dos direitos dos funcionários CLT.",
                afirmacao: "Sua preocupação levou à criação de um grupo de trabalhadores para estudar e discutir o uso ético da IA no ambiente de trabalho."
            }
        ]
    },
    {
        enunciado: "Depois do debate sobre como a inteligência artificial afeta os empregos sob o regime CLT, você deve produzir uma imagem digital que simbolize seu ponto de vista sobre o uso da IA no trabalho. O que você faz?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Percebeu que muitos colegas ainda não dominam essas ferramentas básicas e decidiu ajudar, compartilhando seu conhecimento em design digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Utilizou ferramentas de geração de imagens por inteligência artificial para acelerar a produção do trabalho e agora orienta colegas com dificuldade em desenhar a usar essas tecnologias."
            }
        ]
    },
    {
        enunciado: "você está trabalhando em um projeto em grupo com prazo para entrega na próxima semana, mas o progresso está atrasado. Um colega decidiu usar a IA para ajudar, porém o trabalho final ficou idêntico ao conteúdo gerado pela ferramenta. Como você age? ",
        alternativas: [
            {
                texto: "Usar comandos para a IA é uma maneira válida de colaborar no projeto, então não vê problema em utilizar o conteúdo gerado integralmente.",
                afirmacao: "Com o tempo, passou a depender totalmente da IA para realizar suas atividades, sentindo-se incapaz de trabalhar sem ela."
            },
            {
                texto: "Digitar instruções para a IA é uma forma legítima de colaborar no projeto, por isso não considera errado utilizar o conteúdo completo gerado pela ferramenta.",
                afirmacao: "Acabou confiando totalmente na IA para executar todas as suas atividades, sentindo-se incapaz de trabalhar sem ela. "
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