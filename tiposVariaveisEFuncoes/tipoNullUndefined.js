let nomeEstudante;
const professora = 'Ana';

console.log(nomeEstudante); // Diz que o valor da variável é undefined
console.log(typeof nomeEstudante); // Informa o tipo de dado que tem a variável
console.log(typeof professora);

let telefoneEstudante = null; // Não existe nenhum valor na variável telefoneEstudante
console.log(telefoneEstudante); // Diz que o valor da variável é null

console.log(typeof telefoneEstudante); // Por erro do JavaScript, null é considerado um objeto. É preciso contornar esse erro.

console.log(telefoneEstudante + 3); // Null representa 0
console.log(nomeEstudante + 3); // Undefined não representa um número, NaN (Not a Number)

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Diferença entre null e undefined

// Null é a ausência intencional de valor.
// Undefined é quando uma variável não está associada a um valor no momento em que foi criada, posteriormente pode ser associada. Também pode ser que o código esteja tentando encontrar  um valor que não esteja acessível naquele momento ou é o resultado que não tem return.