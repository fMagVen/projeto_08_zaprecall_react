const RJS =
[
    {
        number: 1,
        total: 8,
        question: 'O que é JSX?',
        answer: 'Uma extensão de linguagem do JavaScript'
    },
    {
        number: 2,
        total: 8,
        question: 'O React é __',
        answer: 'uma biblioteca JavaScript para construção de interfaces'
    },
    {
        number: 3,
        total: 8,
        question: 'Componentes devem iniciar com __',
        answer: 'letra maiúscula'
    },
    {
        number: 4,
        total: 8,
        question: 'Podemos colocar __ dentro do JSX',
        answer: 'expressões'
    },
    {
        number: 5,
        total: 8,
        question: 'O ReactDOM nos ajuda __',
        answer: 'interagindo com a DOM para colocar componentes React na mesma'
    },
    {
        number: 6,
        total: 8,
        question: 'Usamos o npm para __',
        answer: 'gerenciar os pacotes necessários e suas dependências'
    },
    {
        number: 7,
        total: 8,
        question: 'Usamos props para __',
        answer: 'passar diferentes informações para componentes'
    },
    {
        number: 8,
        total: 8,
        question: 'Usamos estado (state) para __',
        answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
    }
]

const HTML =
[
    {
        number: 1,
        total: 8,
        question: 'Qual o papel do HTML na construção de um site?',
        answer: 'Ele traz o conteúdo e a semântica dos elementos de um site'
    },
    {
        number: 2,
        total: 8,
        question: 'O que são, por exemplo, <body, <p>, <strong>?',
        answer: 'Tags'
    },
    {
        number: 3,
        total: 8,
        question: 'O que são, por exemplo, class="...", href="...", src="..."?',
        answer: 'Atributos'
    },
    {
        number: 4,
        total: 8,
        question: 'O que está errado na construção <A HREF=www.google.com>Link</a>',
        answer: 'A e HREF deveriam estar em minúsculo, www.google.com deveria estar entre aspas, está faltando o http://'
    },
    {
        number: 5,
        total: 8,
        question: 'O que é indentação?',
        answer: 'Organizar os elementos filhos deslocados com espaços ou tabs pra direita em relação ao elemento pai'
    },
    {
        number: 6,
        total: 8,
        question: 'Qual a versão do HTML que usamos hoje no mercado',
        answer: 'HTML 5'
    },
    {
        number: 7,
        total: 8,
        question: 'Que tags não precisam ser fechadas?',
        answer: '<br>, <img>, <meta>, <link>'
    },
    {
        number: 8,
        total: 8,
        question: 'Por que foram criadas tags como <article>, <aside>, <header>, <menu>, etc?',
        answer: 'Para trazer mais semântica para os elementos e evitar uso excessivo de <div>'
    }
]

const CSS =
[
    {
        number: 1,
        total: 12,
        question: `No código abaixo, o que são os trechos fora das chaves?
        body {
            text align: center;
        }
        
        div a {
            font-weight: bold;
        }
        
        .caixa {
            display: flex;
        }`,
        answer: 'Seletores'
    },
    {
        number: 2,
        total: 12,
        question: `No mesmo código, o que são os trechos dentro das chaves?
        body {
            text align: center;
        }
        
        div a {
            font-weight: bold;
        }
        
        .caixa {
            display: flex;
        }`,
        answer: 'Propriedades CSS'
    },
    {
        number: 3,
        total: 12,
        question: `Sobre o uso de classes no CSS, é correto afirmar:
        • Utilizamos classes para reaproveitar estilos entre elementos
        • Utilizamos classes para aplicar estilos em um grupo de elementos específicos
        • Um elemento pode ter mais de uma classe
        • Uma classe pode ser aplicada a múltiplos elementos
        • O seletor para uma classe é .nome-da-classe`,
        answer: 'Todas as alternativas'
    },
    {
        number: 4,
        total: 12,
        question: 'Qual seletor devo usar para aplicar um estilo em todos os parágrafos da página?',
        answer: 'p'
    },
    {
        number: 5,
        total: 12,
        question: 'Qual seletor devo usar para aplicar um estilo em todos os links que estiverem dentro de um li?',
        answer: 'li a'
    },
    {
        number: 6,
        total: 12,
        question: 'Qual seletor devo usar para aplicar um estilo em um button com o cursor posicionado acima?',
        answer: 'button:hover'
    },
    {
        number: 7,
        total: 12,
        question: `Supondo uma <div> contendo um <p> com a classe texto, dentro os seletores abaixo, qual o mais específico (e portanto, aquele que vai ser aplicado)?
        • p
        • .texto
        • div .texto
        • *`,
        answer: 'div .texto'
    },
    {
        number: 8,
        total: 12,
        question: `Supondo uma div contendo um <p> com a classe texto, dado o código abaixo, com que cor o <p> ficará no final?
        p {
            color: blue;
            font-weight: bold;
        }

        div .texto {
            color: green;
        }

        .texto {
            color: red;
            font-weight: normal;
        }`,
        answer: 'Cor verde e sem negrito'
    },
    {
        number: 9,
        total: 12,
        question: 'O que é CSS Reset?',
        answer: 'É uma técnica onde resetamos os estilos padrões que o browser adiciona nos elementos'
    },
    {
        number: 10,
        total: 12,
        question: 'O que é box model?',
        answer: 'É o modelo utilizado no CSS para representar os elementos, contendo largura, altura, margens, paddings e bordas'
    },
    {
        number: 11,
        total: 12,
        question: `Quando um elemento tem width: 200px; e padding: 0 20px 0; qual será a largura final do elemento?
        • Será sempre 240px
        • Será sempre 200px
        • Se o elemento tiver box-sizing: border-box; , será 240px
        • Se o elemento tiver box-sizing: border-box; , será 200px`,
        answer: 'Se o elemento tiver box-sizing: border-box, será 200px'
    },
    {
        number: 12,
        total: 12,
        question: `Sobre responsividade, é correto afirmar que:
        • Um layout responsivo é um layout que se adequa ao tamanho de tela do usuário
        • A tag <meta name="viewport" ... serve para configurar o zoom inicial que o navegador mobile aplicará ao renderizar o site
        • Chamamos de Media Queries a técnica do CSS para aplicar estilos somente em tamanhos de tela específicos
        • Um layout responsivo pode ter vários breakpoints, ou seja, vários layouts diferentes para vários tamanhos de tela`,
        answer: 'Todas as alternativas'
    }
]

const JS =
[
    {
        number: 1,
        total: 16,
        question: 'Qual o papel do JavaScript na construção de um site?',
        answer: 'Nos permite criar sites mais interativos, reagindo ao comportamento do usuário'
    },
    {
        number: 2,
        total: 16,
        question: 'O que é a árvore DOM?',
        answer: 'É a árvore de elementos do HTML representada como objetos no JavaScript'
    },
    {
        number: 3,
        total: 16,
        question: `No código abaixo, o que será impresso no console?
        function mensagem() {
            const texto = "Olá!";
            return texto;
        }
        
        console.log(texto);`,
        answer: 'Nada, o código dá um erro'
    },
    {
        number: 4,
        total: 16,
        question: 'O que são Higher-Order Functions?',
        answer: 'São funções que recebem outras funções como parâmetro'
    },
    {
        number: 5,
        total: 16,
        question: 'Se eu quero a partir de um array de números, gerar um novo array com o mesmo tamanho da original, porém com os valores duplicados, qual a melhor função de array para esse propósito?',
        answer: 'Função map'
    },
    {
        number: 6,
        total: 16,
        question: 'Se eu quero a partir de uma array de números, gerar uma array contendo somente os números ímpares da array original, qual a melhor função de array para esse propósito?',
        answer: 'Função filter'
    },
    {
        number: 7,
        total: 16,
        question: 'Qual a melhor maneira de alterar estilos CSS através do JavaScript?',
        answer: 'Adicionando ou removendo classes conforme necessidade'
    },
    {
        number: 8,
        total: 16,
        question: 'O que é um evento no JavaScript?',
        answer: 'Ações ou ocorrências que acontecem nos elementos acarretadas pelo usuário'
    },
    {
        number: 9,
        total: 16,
        question: 'O que são promises?',
        answer: 'Uma variável que guarda uma promessa que depois de um tempo se tornará um valor ou um erro'
    },
    {
        number: 10,
        total: 16,
        question: 'Por que usar promises/assincronismo?',
        answer: 'Para não travar a execução do código'
    },
    {
        number: 11,
        total: 16,
        question: `O que imprime no console?
        setTimeout(function () {
            console.log("Olá");
        }, 1000);
        
        console.log("Mundo!!");`,
        answer: "Mundo!!, Olá"
    },
    {
        number: 12,
        total: 16,
        question: 'Qual a principal diferença entre let e const?',
        answer: 'let podem ser redefinidas, const não'
    },
    {
        number: 13,
        total: 16,
        question: 'Qual o tipo dos seguintes valores: "Driven", 2021, { nome: "JavaScript", versao: "ECMA2016" }',
        answer: 'String, Number, Object'
    },
    {
        number: 14,
        total: 16,
        question: 'Qual o retorno da expressão "banana" * 3?',
        answer: 'NaN'
    },
    {
        number: 15,
        total: 16,
        question: 'Qual diferença de requisições GET e POST?',
        answer: 'GET para pegar informações e POST para enviar informações'
    },
    {
        number: 16,
        total: 16,
        question: 'O que são status Codes?',
        answer: 'Códigos para dar mais informações sobre uma requisição (sucesso/erro de cliente/erro de servidor)'
    }
]

const Data = {RJS, HTML, CSS, JS}

export default Data