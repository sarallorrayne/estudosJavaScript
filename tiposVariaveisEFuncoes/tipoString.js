const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "Nosso lema é 'Estudar bastante!'";
const citacao = `Ju diz: "Nosso lema é 'Estudar bastante!'"`;

console.log(cumprimento);
console.log(citacao);

console.log('Olá, ' + estudante + '!'); // Concatenação
console.log(`Olá, ${estudante}!`); // Template string

const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);