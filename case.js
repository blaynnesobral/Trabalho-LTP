const prompt = require('prompt-sync')();
const Livro = require('./Livro');


case1:{

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

    console.log("Livro cadastrado!");

    break;
}

case2: {

    if (livros.length === 0) {
        console.log("Nenhum livro cadastrado.");
    } else {

        livros.forEach((livro, index) => {
            console.log(`${index} - ${livro.getInfo()}`);
        });

    }

    break;
}

case3:{

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
}
