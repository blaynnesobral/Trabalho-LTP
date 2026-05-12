const prompt = require('prompt-sync')();
const Livro = require('./Livro');

const livros = [];

let opcao;

while (opcao !== 0) {

    console.log("\n--- BIBLIOTECA ---");
    console.log("1 - Cadastrar livro");
    console.log("2 - Listar livros");
    console.log("3 - Alterar livro");
    console.log("4 - Estatísticas");
    console.log("0 - Sair");

    opcao = parseInt(prompt("Escolha: "));

    if (isNaN(opcao)) {
        console.log("Digite um número válido.");
        continue;
    }

    switch(opcao) {

        case 1:
            console.log("Cadastrar");
            break;

        case 2:
            console.log("Listar");
            break;

        case 3:
            console.log("Alterar");
            break;

        case 4:
            console.log("Estatísticas");
            break;

        case 0:
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida.");
    }
}
