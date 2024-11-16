let frase = "Esta é uma variável contendo uma frase";
console.log(frase.length);
console.log(frase.toUpperCase());

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let nulo = null;
let indefinido;

console.log(nulo);
console.log(indefinido);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let nome = 'Sara';
let idade = 22;
let booleano = true;

console.log(`É ${booleano} que ${nome} tem ${idade} anos.`);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let numero = 10;
let string = '10';

console.log(typeof String(numero));
console.log(typeof Number(string));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let manipulacao = 'Utilizando métodos de manipulação de strings';

console.log(manipulacao.includes('métodos'));
console.log(manipulacao.toLowerCase());
console.log(manipulacao.toUpperCase());
console.log(manipulacao.length);
console.log(manipulacao.split(' '));
console.log(manipulacao.replace('strings', 'números'));
console.log(manipulacao.slice(0, 18));
console.log(manipulacao.slice(30, 44));
console.log(manipulacao.indexOf('manipulação'));