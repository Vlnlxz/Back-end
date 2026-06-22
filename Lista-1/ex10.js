function contarLetra(texto, letra) {
    let total = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == letra) {
            total = total + 1;
        }
    }

    return total;
}

console.log(contarLetra("banana", "a"));