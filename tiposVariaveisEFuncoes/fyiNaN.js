console.log(5 * 'a'); // NaN
console.log(5 * '5');

console.log(parseInt('texto')); // NaN
console.log(parseInt('5'));

console.log(Number('texto')); // NaN
console.log(Number('5'));

console.log(parseInt(true)); // NaN
console.log(parseInt(false)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Math.sqrt(-1)); // NaN
console.log(Math.sqrt(9)); // 3

console.log(Infinity / Infinity); // NaN
console.log(5 / 0); // Infinity

const numero = 10;
const texto = 'texto';

console.log('Number.isNaN()'); // retorna true apenas se o valor passado for efetivamente NaN
console.log(Number.isNaN(numero)); // false
console.log(Number.isNaN(texto)); // false
console.log(Number.isNaN(NaN)); // true

console.log('isNaN()'); // retorna true inclusive quando o valor pode ser avaliado com NaN se tentar ser convertido para número
console.log(isNaN(numero)); // false
console.log(isNaN(texto)); // true
console.log(isNaN(NaN)); // true