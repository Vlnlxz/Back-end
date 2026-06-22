let pessoa = {
    nome: "Vinicius",
    idade: 16,
    cidade: "Cascavel",
    curso: "Desenvolvimento de Sistemas"
};

console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);
console.log(`Cidade: ${pessoa.cidade}`);
console.log(`Curso: ${pessoa.curso}`);

pessoa.cidade = "Toledo";

console.log(`Nova cidade: ${pessoa.cidade}`);