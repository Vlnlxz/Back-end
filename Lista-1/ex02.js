const input = require('readline-sync')

let base = input.questionFloat("Qual a medida da base do retangulo: ");
let altura = input.questionFloat("Qual a medida da altura do retangulo: ");

let area = base * altura;
let perimetro = 2 * (base + altura);

console.log(`A area do retangulo é de ${area}`);
console.log(`O perimetro do retangulo é de ${perimetro}`)