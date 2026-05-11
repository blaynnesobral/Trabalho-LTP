class Livro {
    constructor(titulo, autor, genero, anoPub, numPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.anoPub = anoPub;
        this.numPaginas = numPaginas;
    }

    getInfo() {
        return `${this.titulo} - ${this.autor} - ${this.genero} - ${this.anoPub} - ${this.numPaginas} páginas`;
    }
}

module.exports = Livro;
