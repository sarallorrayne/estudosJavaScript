const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = Number.parseInt('5');

const total = notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi; // parseint(notaQuartoBi) ou Number.parseInt('5') ou parseInt('5') ou parseInt(notaQuartoBi)
const media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

console.log(total);

console.log(`A média é ${media.toFixed(2)}`);