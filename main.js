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

    const titulo = prompt("Título: ");
    const autor = prompt("Autor: ");
    const genero = prompt("Gênero: ");
    const anoPub = parseInt(prompt("Ano: "));
    const numPaginas = parseInt(prompt("Páginas: "));

    const novoLivro = new Livro(
        titulo,
        autor,
        genero,
        anoPub,
        numPaginas
    );
               
            livros.push(novoLivro);
            
            console.log("Cadastrar");
            
            break;

        case 2:
              if (livros.length === 0) {
        console.log("Nenhum livro cadastrado.");
    } else {

        livros.forEach((livro, index) => {
            console.log(`${index} - ${livro.getInfo()}`);
        });

    }

            console.log("Listar");
            break;

        case 3:
             if (livros.length === 0) {
        console.log("Nenhum livro cadastrado.");
        break;
    }

    livros.forEach((livro, index) => {
        console.log(`${index} - ${livro.getInfo()}`);
    });

    const indice = parseInt(prompt("Índice do livro: "));

    if (isNaN(indice) || indice < 0 || indice >= livros.length) {
        console.log("Índice inválido.");
        break;
    }

    let novoTitulo = prompt("Novo título: ").trim();
    let novoAutor = prompt("Novo autor: ").trim();
    let novoGenero = prompt("Novo gênero: ").trim();

    let novoAno = prompt("Novo ano: ").trim();
    let novasPaginas = prompt("Novas páginas: ").trim();

    if (novoTitulo !== "") livros[indice].titulo = novoTitulo;
    if (novoAutor !== "") livros[indice].autor = novoAutor;
    if (novoGenero !== "") livros[indice].genero = novoGenero;

    if (novoAno !== "") livros[indice].anoPub = parseInt(novoAno);
    if (novasPaginas !== "") livros[indice].numPaginas = parseInt(novasPaginas);

    console.log("Livro atualizado!");

    break;

    
        case 4: opcao = 4;
             if (livros.length === 0) {
        console.log("Nenhum livro cadastrado.");
        break;
    }

    let totalPaginas = 0;
    let generos = {};

    livros.forEach(livro => {

        totalPaginas += livro.numPaginas;

        if (generos[livro.genero]) {
            generos[livro.genero]++;
        } else {
            generos[livro.genero] = 1;
        }

    });

    console.log("Média de páginas:",
        totalPaginas / livros.length);

    console.log("Livros por gênero:");

    for (let genero in generos) {
        console.log(`${genero}: ${generos[genero]}`);
    }

            console.log("Estatísticas");
            break;

        case 0:
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida.");

            break;
    }
}
