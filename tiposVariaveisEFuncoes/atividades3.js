let saldo = 1000;
let deposito = 500;
let saque = 100;

let operacao = saldo + deposito - saque;

console.log(operacao);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const valor = 10;

const parImpar = valor % 2 === 0 ? true : false;

console.log(parImpar);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let usuarioLogado = true;
let permissaoAdministrador = false;

const podeEntrar = usuarioLogado && permissaoAdministrador ? true : false;

console.log(podeEntrar);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const verdadeiro = true;
const falso = false;

const resultado = verdadeiro || falso ? true : false;

console.log(resultado);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let idadeUsuario = 22;
let idadeMinima = 16;

if (idadeUsuario >= idadeMinima) {
    console.log('Compra realizada com sucesso!');
} else {
    console.log('Compra não realizada: usuário não atende a idade mínima.');
}