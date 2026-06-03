const input   = require("readline-sync")
let num1 = input.questionInt(`digite o primeiro numero:`)
let num2 = input.questionInt(`digite o segundo numero:`)
function somar(num1, num2){
    return num1 + num2
}
function subtração(num1, num2){
    return num1 - num2;
}
function multiplicação(num1, num2){
    return num1 * num2;
}
function divisão(num1, num2){
    return num1 / num2;
}
if(num2===0){
    console.log(`Erro: divisao por zero`)
}
console.log(`os resultados são: `)
console.log(somar(num1, num2))
console.log(subtração(num1, num2))
console.log(multiplicação(num1, num2))
console.log(divisão(num1, num2))