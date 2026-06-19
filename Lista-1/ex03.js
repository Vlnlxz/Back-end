const input = require('readline-sync')

let numero = Number(input.question("Digite um numero: "));
let resultado = numero %2===0?"Par" : "Impar"

console.log(`O numero digitado é ${resultado}`);