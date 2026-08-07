const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req , res) => {
res.json({ mensagem: " Meu servidor esta no ar!" });
});

const produtos = [
    { id: 1, nome: "Teclado", preco: 250 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Monitor", preco: 450 },
    { id: 4, nome: "Cadeira", preco: 400 }
]
app.get('/produtos', (req , res)=>{
    res.json(produtos);
});

app.get('/status', (req , res)=> {
    res.status(200).json({online:"true", mensagem: "API funcionando"});
})

app.get('/produtos/caros', (req, res) => {
    const produtoscaros = produtos.filter(p => p.preco > 100);
    res.json(produtoscaros);
})

app.listen(3000, () => {
console.log(" Servidor rodando em http://localhost:3000 ");
});