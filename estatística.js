case4:{

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

    break;
}
