console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array (
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

const idadeComprador = 15;
const estaAcompanhada = true;
const passagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade.");
//     listaDeDestinos.splice(1, 1); // Removendo item
// } else if (estaAcompanhada) { // if (estaAcompanhada == true) -> não é necessário colocar a condição pois estaAcompanhada já está retornando true
//         // Menor de idade
//         console.log("Comprador menor de idade com acompanhante.");
//         listaDeDestinos.splice(1, 1); // Removendo item
// } else {
//         console.log("Comprador menor de idade sem acompanhante.");
// }

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa viagem!\n");
    listaDeDestinos.splice(1, 1); // Removendo item
} else {
    console.log("Comprador menor de idade sem acompanhante.\n");
}

console.log("Embarque:");
if (idadeComprador >= 18 && passagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar.");
}


console.log("Destinos restante:");
console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
// console.log(idadeComprador != 18);