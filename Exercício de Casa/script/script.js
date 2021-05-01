let books = [
    {
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Second Edition",
        subtitle: "A Modern Introduction to Programming",
        author: "Marijn Haverbeke",
        published: "2014-12-14T00:00:00.000Z",
        pages: 121,
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        subtitle: "A JavaScript and jQuery Developer's Guide",
        author: "Addy Osmani",
        published: "2012-07-01T00:00:00.000Z",
        pages: 12,
    },
    {
        isbn: "9781449365035",
        title: "Speaking JavaScript",
        subtitle: "An In-Depth Guide for Programmers",
        author: "Axel Rauschmayer",
        published: "2014-02-01T00:00:00.000Z",
        pages: 20,
    },
    {
        isbn: "9781491950296",
        title: "Programming JavaScript Applications",
        subtitle: "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
        author: "Eric Elliott",
        published: "2014-07-01T00:00:00.000Z",
        pages: 14,
    },
    {
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        subtitle: "The Definitive Guide for JavaScript Developers",
        author: "Nicholas C. Zakas",
        published: "2016-09-03T00:00:00.000Z",
        pages: 32,
    },
    {
        isbn: "9781491904244",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        published: "2015-12-27T00:00:00.000Z",
        pages: 35,
    },
    {
        isbn: "9781449325862",
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        published: "2013-08-02T00:00:00.000Z",
        pages: 43,
    },
    {
        isbn: "9781449337711",
        title: "Designing Evolvable Web APIs with ASP.NET",
        author: "Glenn Block, et al.",
        published: "2014-04-07T00:00:00.000Z",
        pages: 55,
    }
]

function exibirDados (event){
    event.preventDefault();
    
    let author = document.getElementById("nomeDoAutor").value;
    let title = document.getElementById("tituloDoLivro").value;
    let isbn = document.getElementById("isbnDoLivro").value;
    let published = new Date(document.getElementById("dataDaPublicacao").value);
    let pages = document.getElementById("numeroDePaginas").value;
    let parseDataPublicacao = dataPublicacao.setDate(dataPublicacao.getDate() +1);
    console.log(dataPublicacao, parseDataPublicaacao);

    if (author === "" || title === "" || isbn === "" || published === "") {
            alert("Preencha as informações obrigatórias faltantes")    }
    else{
     books.push({
         author: autor,
         titulo: titulo,
         isbn: isbn,
         published: dataDaPublicacao,
         pages: paginas
     });

function addBooks() {

    const resultList = document.getElementById("resposta");

    books.forEach((book) => {
        const parseDate = new Date(book.published);
        const getData = parseDate.toLocaleDateString("pt-br");

        resultList.innerHTML += `
        <ul>
        const parsePaginas = !book.paginas ? "---" : book.paginas;
            <li><strong>Autor: </strong> ${book.autor}, <strong>Título: </strong> ${book.titulo}, <strong>Isbn: <strong> ${book.isbn}, <strong>Data da Publicação: </strong>${book.dataPublicacao}, <strong>Páginas: </strong>${book.paginas}
            <a href="#" class="delete">Deletar Publicação</a>
        </ul> 
        
        
        `


    })



}
addBooks();
