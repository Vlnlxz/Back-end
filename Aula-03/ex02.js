let produtos = [
    { id: 1, nome: "Mouse", preco: 50 },
    { id: 2, nome: "Teclado", preco: 80 },
    { id: 3, nome: "Monitor", preco: 500 },
    { id: 4, nome: "Fone", preco: 120 }
];

for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}

produtos.push({
    id: 5,
    nome: "Webcam",
    preco: 150
});

console.log("Novo tamanho do array: " + produtos.length);