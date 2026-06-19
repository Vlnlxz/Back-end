const input = require('readline-sync')

let celsius = input.questionFloat("Digite o valor em celsius: ");
let fahrenheit = celsius * 1.8 + 32

console.log(`A temperatura em ${celsius} C convertido é de ${fahrenheit} F`);