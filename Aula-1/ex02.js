const input   = require("readline-sync")
let num1 = input.questionInt(`digite o primeiro numero:`)
let num2 = input.questionInt(`digite o segundo numero:nod`)
console.log(`${num1+num2}`)
console.log(`${num1-num2}`)
console.log(`${num1*num2}`)
console.log(`${num1/num2}`)
if(num2===0){
    console.log(`Erro: divisao por zero`)
}
console.log(`os resultados são: ${num1+num2}, ${num1-num2}, ${num1*num2}, ${num1/num2}`)
