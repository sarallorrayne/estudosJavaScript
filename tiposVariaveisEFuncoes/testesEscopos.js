// Escopo global
// const nome = 'Camila';

// function cumprimentar () {
//     console.log(`Olá ${nome}`);
// }

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Escopo de bloco
// cumprimentar(); // Olá Camila

// if (1 >0 ) {
//     let nome = 'Ana';
//     console.log(nome);
// }

// console.log(nome); // ReferenceError: nome is not defined


// if (1 > 0) {
//     var nome = 'Ana'; // var não respeita o escopo de bloco, é uma variável de escopo global
//     console.log(nome);
// }

// console.log(nome); // Ana

// a falta de "controle" do escopo é um dos motivos pelo qual o uso de var foi abandonado e as boas práticas atuais recomendam o uso apenas de let e const.


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Escopo de função
// variáveis declaradas dentro de uma função sçao consideradas "locais", ou seja, o oposto de globais. Elas só podem ser acessadas dentro da função onde foram declaradas.
// function cumprimentar () {
//     const nome = 'Camila';
//     const cumprimento = 'Olá';
//     console.log(`${cumprimento}, ${nome}!`);
// }

// console.log(`${cumprimento}, ${nome}!`); // ReferenceError: cumprimento is not defined