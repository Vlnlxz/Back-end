const readline = require("readline-sync");

function podeVotar(idade) {
    if (idade >= 16) {
        return true;
    }

    return false;
}

let idade;

idade = readline.questionInt("Digite sua idade: ");

if (podeVotar(idade) == true) {
    console.log("Liberada votar no mito");
} else {
    console.log("Ainda não prematuro");
}