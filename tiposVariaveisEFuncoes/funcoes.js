// IMPORTANTE:
    // parâmetros/argumentos - são os valores que a função recebe para executar
    // retorno - é o valor que a função devolve após

// A função tem dois momentos:
    // 1. Declaração da função
    // 2. Execução da função

function exibeNomeEstudante(nome, nota) {
    return `O estudante ${nome} tirou ${nota} na primeira prova.`;    // retorna o valor mas não utiliza a informação no console.log (o que faz a informação aparecer no console)
    // console.log(`O estudante ${nome} tirou ${nota} na primeira prova.`);
}

console.log(exibeNomeEstudante('Caroline', 10));
console.log(exibeNomeEstudante('Ana', 7));