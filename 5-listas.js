console.log("Trabalhando com Listas");

// const salvador = "Salvador";
// const saoPaulo = "São Paulo";
// const rioDeJaneiro = "Rio de Janeiro";

const listaDeDestinos = new Array (
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

listaDeDestinos.push("Curitiba"); // Adicionando um item na lista

console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // Removendo um item da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); // Acessando um item da lista