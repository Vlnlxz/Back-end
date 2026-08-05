const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req , res) => {
res.json({ mensagem: " Meu servidor esta no ar!" });
});

const produtos = [
    { id: 1, nome: "Teclado", preço: 250 },
    { id: 2, nome: "Mouse", preço: 150 },
    { id: 3, nome: "Monitor", preço: 450 },
    { id: 4, nome: "Cadeira", preço: 400 }
]
app.get('/produtos', (req , res)=>{
    res.json(produtos);
});

res.get('/status', (req , res)=> {
    res.status(200).json({online:true, mensagem: "API funcionando"});
}

app.listen(3000, () => {
console.log(" Servidor rodando em http://localhost:3000 ");
});