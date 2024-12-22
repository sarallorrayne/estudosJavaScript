const valor = 50;
const texto = valor > 50 ? 'Valor insuficiente' : 'Valor suficiente';
console.log(texto);

// sintaxe
// Se a condição for verdadeira, o valor antes dos dois pontos é retornado. Caso contrário, o valor após os dois pontos é retornado
// O operador ternário é uma forma mais enxuta de escrever um if/else
// condição ? caso 'true' : caso 'false'
// const texto = valor > 50 ? 'Valor insuficiente' : 'Valor suficiente';

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let matriculaAtiva = true;

function verificarStatus() {
    if (matriculaAtiva === true) {
        return 'Matrícula ativa no sistema.';
    } else {
        return 'Matrícula inativa no sistema.';
    }
}

console.log(verificarStatus());

// mesma função, utilizando operador ternário
matriculaAtiva = false;

function verificarStatus() {
    return matriculaAtiva ? 'Matrícula ativa no sistema.' : 'Matrícula inativa no sistema.';
}

console.log(verificarStatus());

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let idadeEstudante = 16;
let precisaDeAutorizacao;

if (idadeEstudante < 18) {
    precisaDeAutorizacao = true;
} else {
    precisaDeAutorizacao = false;
}

console.log(precisaDeAutorizacao);

// mesma função, utilizando operador ternário
idadeEstudante = 19;

precisaDeAutorizacao = idadeEstudante < 18 ? true : false;

console.log(precisaDeAutorizacao);