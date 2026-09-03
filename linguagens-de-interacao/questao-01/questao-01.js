/*
QUESTÃO 01:
---
Imagine que você está planejando a criação de uma funcionalidade para um site de e-commerce. A tarefa é organizar as informações de uma vitrine de produtos e descrever como funcionaria a consulta de estoque. Inicialmente, um colega de equipe sugeriu que, para cada produto, fosse criada uma descrição separada e um texto de verificação de estoque individual. Você, no entanto, acredita que uma abordagem mais estruturada, baseada nos conceitos de Funções, Objetos e Arrays, seria muito mais eficiente.
---

Com base neste cenário, elabore uma resposta que contemple os seguintes pontos:
Repetir a mesma lógica várias vezes pode tornar um projeto complexo e difícil de manter. Explique, com suas palavras, por que a abordagem de criar uma função (um bloco de código reutilizável) é superior a simplesmente repetir a mesma lógica para cada produto.
---

Um objeto em JavaScript permite agrupar várias características (propriedades) sobre um mesmo item, como um carro que tem cor e portas. Um array é uma lista que pode guardar vários desses itens, como uma concessionária que tem uma lista de carros. Descreva em formato de texto ou lista como você organizaria as informações de três produtos diferentes, onde cada produto é um item com as seguintes propriedades: id (número de identificação), nome, cor e preço. Não é preciso escrever código. A ideia é mostrar como você agruparia os dados de forma lógica.
---

Uma função recebe dados (parâmetros), executa uma tarefa e pode devolver um resultado com o comando return. Descreva, em um passo a passo lógico (sem usar código), como uma função chamada verificaEstoque deveria funcionar. Sua descrição deve explicar que a função recebe um id como entrada e, usando uma estrutura de controle de fluxo, ela deve verificar se o número do id é par ou ímpar para decidir qual das seguintes mensagens será retornada: "Produto disponível em estoque." ou "Produto indisponível no momento.". 
*/

//Bah! Eu sei que é só pra escrever em forma de texto, mas quis criar o programa XD
//Objetivo: Passar do node.js para o ambiente html ^^

let vitrineDeProdutos = [    //cria um array, com objetos.
    {
        id: 1,
        nome: "produtoX",
        cor: "amarelo",
        descricao: "",
        preco: 1.40,
        estoque: 50
    },
    {
        id: 2,
        nome: "produtoY",
        cor: "vermelho",
        descricao: "",
        preco: 2.50,
        estoque: 25
    },
];

console.log(vitrineDeProdutos[1].preco.toFixed(2)); //mostra o preço com 2 casas.

function adicionarProdutos(novoProduto){  //função para adicionar novos produtos
    vitrineDeProdutos.push(novoProduto);
};

let produtoZ = {  //cria um produto novo
    id: 3,
    nome: "ProdutoZ",
    cor: "Laranja",
    preco: 5.50
};

console.log(vitrineDeProdutos); //mostra o array
console.log("---\n");

adicionarProdutos(produtoZ);  //usa a função para adicionar o produto novo
console.log(vitrineDeProdutos);
console.log(vitrineDeProdutos[1]);

console.log("---Produto Adicionado---\n");
let produtoA = {  //cria um novo objeto
    id: 4,
    nome: "ProdutoA",
    cor: "Verde",
    descricao: "",
    preco: 4.00,
    estoque: 2
}
adicionarProdutos(produtoA);
console.log(vitrineDeProdutos);
console.log("---\n");
console.log("O tamanho do array é: " + vitrineDeProdutos.length);
console.log(vitrineDeProdutos[2]);
console.log("---\n");
console.log("--- Atualizar as informações do ProdutoZ---\n");
vitrineDeProdutos[2].descricao = "Produto Oficial"; //adiciona descrição ao produtoZ
vitrineDeProdutos[2].estoque = 10; //adiciona quantidade de estoque ao produtoZ
console.log(vitrineDeProdutos[2]); //exibe o produtoZ já atualizado com as 2 novas informações

console.log("---\n");
console.log("---SEPARADOR---\n");
console.log("---\n");

console.log(vitrineDeProdutos); //exibe o array completo com todas as modificações

console.log("---\n");
console.log("---SEPARADOR---\n");
console.log("---\n");

//cria a função para verificar estoque, mas ao invés de procurar pelo ID, vou provurar pelo atributo estoque de cada item.

function verificarEstoque(){};

console.log(vitrineDeProdutos[0].estoque);