// Coerção: conversão automática e implícita de um tipo de dado para outro durante operações.

let valorString1 = '10';
let valorNumero1 = 5;

let resultado = valorString1 + valorNumero1;
console.log(resultado); // Resultado: 105. O número 5 foi convertido para string e concatenado com a string '10'

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Conversão: transformação explícita de um tipo de dado em outro.

let valorString2 = '20';
let valorNumero2 = parseInt(valorString2);

console.log(valorNumero2); // Resultado: 20. A string '20' foi convertida para número

// Exemplos de funções para conversão de tipos: parseInt(), parseFloat(), Number(), String(), Boolean()

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ATIVIDADES DE CONVERSÃO

// Number()
console.log(Number("1"));
console.log(Number("Sara"));
console.log(Number(true));
console.log(Number(undefined));
console.log(Number(null));

// parseInt()
console.log(parseInt("10"));
console.log(parseInt("10.5"));

console.log(parseFloat("10"));
console.log(parseFloat("10.5"));
console.log(parseFloat("10.5anos"));

// Coerção de tipos utilizando o operador unário "+"
console.log(+"10");
console.log(+true);

console.log(typeof +"10");
console.log(typeof +true);

// String()
console.log(String(10));
console.log(String(undefined));
console.log(String(true));
console.log(String(null));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// includes(): determina se um conjunto de caracteres pode ser encontrado dentro de uma string. Retorna true ou false.
console.log('Estudando JavaScript'.includes('Java'));

// valor a ser convertido dentro de uma variável
const texto = 'Estudando JavaScript';
console.log(texto.includes('Java'));


// toLowerCase e toUpperCase: converte a string para minúsculas e maiúsculas, respectivamente.
console.log('POR FAVOR NÃO GRITE'.toLowerCase());

// valor a ser convertido dentro de uma variável
const maiusculasParaMinusculas = 'POR FAVOR NÃO GRITE';
console.log(maiusculasParaMinusculas.toLowerCase());

console.log('por favor, fale mais alto'.toUpperCase());

// valor a ser convertido dentro de uma variável
const minusculasParaMaiusculas = 'por favor, fale mais alto';
console.log(minusculasParaMaiusculas.toUpperCase());