const input = require("readline-sync")
const senha = input.question(`senha: `)
if(senha.length >= 8){
    console.log(`senha valida`)
} else {
    console.log(`senha invalida - minimo de 8 caracteres`)
}
