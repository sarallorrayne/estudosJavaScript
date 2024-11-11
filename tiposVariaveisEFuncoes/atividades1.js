const string = 'Olá, mundo!';
const numero = 11;
const booleano = true;

console.log(typeof string);
console.log(typeof numero);
console.log(typeof booleano);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const nome = 'Sara';
const sobrenome = 'Souza';

const nomeCompleto = nome + " " + sobrenome;

const nomeCompletoString = (`${nome} ${sobrenome}`);

console.log(nomeCompleto);
console.log(nomeCompletoString);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const frase = (`A frase "${string}" tem ${numero} caracteres.`);

console.log(frase);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let mudar = 'mudar';
console.log(mudar);

mudar = 10;


console.log(mudar);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var teste1 = 'teste1';

if (1 > 0) {
    var teste2 = 'teste2';
    console.log(teste1);
    console.log(teste2);
}

console.log(teste1);
console.log(teste2);

// let teste3 = 'teste3';

// if (1 > 0) {
//     let teste4 = 'teste4';
//     console.log(teste3);
//     console.log(teste4);
// }

// console.log(teste3);
// console.log(teste4);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const chuva = true;

if (chuva == true) {
    console.log('Hoje está chovendo! Leve um guarda-chuva.');
} else {
    console.log('Hoje não está chovendo! Não precisa de guarda-chuva.');
}