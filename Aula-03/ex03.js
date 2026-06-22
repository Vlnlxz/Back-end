let produtos = [
    { id: 1, nome: "Mouse", preco: 50 },
    { id: 2, nome: "Teclado", preco: 80 },
    { id: 3, nome: "Monitor", preco: 500 },
    { id: 4, nome: "Fone", preco: 120 }
];

let produto = produtos.find(function(item) {
    return item.id === 3;
});

console.log("Nome do produto:");
console.log(produto.nome);

let caros = produtos.filter(function(item) {
    return item.preco > 50;
});

console.log("Produtos acima de R$ 50,00:");
console.log(caros);