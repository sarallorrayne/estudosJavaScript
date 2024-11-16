/* O tipo Symbol é um do tipos primitivos do JS.
    - "Chave primária" para propriedades de objetos;
    - Representa um identificador único e imutável;
    - Frequentemente utilizados para criar propriedades únicas e que não interferem com outras propriedades existentes.
*/

const meuSimbolo = Symbol();

// Descrição opcional
const simboloComDescricao = Symbol('Descrição do meu Symbol');
console.log(simboloComDescricao);

// Symbols são únicos
const outroSimbolo = Symbol('Simbolo');
console.log(meuSimbolo === outroSimbolo); // false

// Symbols podem ser usados como chaves d propriedades de objetos
const obj = {
    [meuSimbolo]: 'valor_do_simbolo'
};

// Acessando a propriedade usando o símbolo como chave
console.log(obj[meuSimbolo]);