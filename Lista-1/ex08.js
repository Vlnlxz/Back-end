const readlineSync = require('readline-sync');

const tam = Number(readlineSync.question('Qual o tamanho do tabulero: '));

let tabulero = '';

for (let linha = 0; linha < tam; linha++) {
  for (let coluna = 0; coluna < tam; coluna++) {
    
    if ((linha + coluna) % 2 === 0) {
      tabulero += '#'; 
    } else {
      tabulero += '@'; 
    }

  }
  tabulero += '\n';
}

console.log(tabulero);