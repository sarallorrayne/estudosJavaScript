const notaFinal = 7;
const faltas = 3;
const advertencias = 0;

if (notaFinal < 7 || faltas > 4) { // Uma ou outra condição precisa ser verdadeira
    console.log('Aluno reprovado');
} else {
    console.log('Aluno aprovado');
}

if (notaFinal < 7 && faltas > 4) { // As duas condições precisam ser verdadeiras
    console.log('Aluno reprovado');
} else {
    console.log('Aluno aprovado');
}

if (faltas <= 2 && !advertencias) {
    console.log('Recebeu bônus por assiduidade');
} else {
    console.log('Não recebeu bônus por assiduidade');
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Operador lógico && (e): só retorna true se as duas condições forem verdadeiras

// Operador lógico || (ou): retorna true se pelo menos uma das condições for verdadeira. Retonra falso apenas se as duas condições forem falsas

// Operador lógico ! (negação): inverte o valor da expressão. Exemplo: !true = false, !false = true
const chuva = false;

if (!chuva) {
    console.log('Não está chovendo. Pode sair de casa');
} else {
    console.log('Está chovendo. Melhor ficar em casa');
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Valor avaliado como falso o verdadeiro em JavaScript:

    - Toda comparação é avaliada em booleano (true ou false);
    - Valores avaliados como falso: false, 0, '', "", ``, null, undefined, NaN;
    - Valores avaliados como verdadeiro: todos os outros valores.
*/