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

let vitrineDeProdutos = [
    {
        id: 1,
        nome: "produtoX",
        cor: "amarelo",
        preco: 1.40
    },
    {
        id: 2,
        nome: "produtoY",
        cor: "vermelho",
        preco: 2.50
    },
];

console.log(vitrineDeProdutos[1].preco.toFixed(2));

function adicionarProdutos(novoProduto){
    vitrineDeProdutos.push(novoProduto);
};

let produtoZ = {
    id: 3,
    nome: "ProdutoZ",
    cor: "Laranja",
    preco: 5.50
};

console.log(vitrineDeProdutos);
console.log("---\n");

adicionarProdutos(produtoZ);
console.log(vitrineDeProdutos);
console.log(vitrineDeProdutos[1]);