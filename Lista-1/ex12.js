const readline = require("readline-sync");

function calcular(a, b, operacao) {
    return operacao(a, b);
}

let num1 = readline.questionInt("Digite o primeiro numero: ");
let num2 = readline.questionInt("Digite o segundo numero: ");

let soma = calcular(num1, num2, (a, b) => a + b);
let subtracao = calcular(num1, num2, (a, b) => a - b);
let multiplicacao = calcular(num1, num2, (a, b) => a * b);

console.log("Soma: " + soma);
console.log("Subtracao: " + subtracao);
console.log("Multiplicacao: " + multiplicacao);