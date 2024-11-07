console.log("\nTrabalhando com Condicionais");

const listaDeDestinos = new Array (
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)

const idadeComprador = 15;
const estaAcompanhada = true;
let  passagemComprada = false;
const destino = "Salvador";

console.log(`\nDestino escolhido: ${destino}`);

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;

// while (contador < 3) {
//     if (listaDeDestinos[contador] == destino) {
//         console.log("\nPassagem comprada.");
//         passagemComprada = true;
//         break;
//     } else {
//         console.log("\nDestino não disponível.");
//         break;
//     }
//     contador += 1;
// }

for (let i = 0; i < 3; i++) {
    if (listaDeDestinos[i] == destino) {
        console.log("\nPassagem comprada.");
        passagemComprada = true;
        break;
    } else {
        console.log("\nDestino não disponível.");
        break;
    }
}

if (podeComprar && passagemComprada == true) {
    console.log("\nBoa viagem!");
} else {
    console.log("\nErro na compra.");
}
