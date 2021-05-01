
let books = [
    {
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Second Edition",
        author: "Marijn Haverbeke",
        published: "2014-12-14T00:00:00.000Z",
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        published: "2012-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781449365035",
        title: "Speaking JavaScript";
        author: "Axel Rauschmayer",
        published: "2014-02-01T00:00:00.000Z",
    },
    {
        isbn: "9781491950296",
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        published: "2014-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        published: "2016-09-03T00:00:00.000Z",
    },
    {
        isbn: "9781491904244",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        published: "2015-12-27T00:00:00.000Z",
    },
    {
        isbn: "9781449325862",
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        published: "2013-08-02T00:00:00.000Z",
    },
    {
        isbn: "9781449337711",
        title: "Designing Evolvable Web APIs with ASP.NET",
        author: "Glenn Block, et al.",
        published: "2014-04-07T00:00:00.000Z",
    }
]

function addLivros() {

 books.map((book) => {
     const parsePagina = !book.pagina ? " - " : book.pagina;
     const parseData = new Date(book.published);
     const data = parseData.setDate(parseData.getDate() +1);
     const dataFormatada - parseData.toLocaleDateString('pt-br');

     document.getElementById('corpo-tabela').innerHTML += `
     
     <tr>
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td>${dataFormatada}</td>
     <td>${parsePagina}</td>
     <td>${dataFormatada}</td>
     <td><button class="delete">Remover</button></td>
     </tr>
     `

    })
}

addLivros();

function exibirDados(event) {
     event.preventDefault();
    
    let pegaTitulo = document.getElementById('title').value; 
    let pegaAuthor = document.getElementById('author').value;
    let pegaIsbn = document.getElementById('isbn').value;
    let pegaPagina = document.getElementById('pagina').value;
    let pegadate = document.getElementById('date').value;

    if (pegaTitulo ==="" || pegaAuthor ==="" || pegaIsbn ==="" || pegaPagina ==="" || pegadate ===""){
        alert("Campo obrigatório não preenchido")

    }else {
        books.push({
            title: pegaTitulo,
            author: pegaAuthor,
            isbn: pegaIsbn,
            pagina: pegaPagina,
            published: pegadate,


        });
        limpaCampo();
        addLivros()

    }
}


function limparCampo() {

    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pagina').value = "";
    document.getElementById('date').value = "";
    document.getElementById('isbn').value = "";

}

     document.getElementById('corpo-tabela').addEventListener('click', function removerLinha(event) {
       if (event.target.className === "delete") {
        let botao = event.target.parentElement;
        botao.parentElement.remove();
}
})
