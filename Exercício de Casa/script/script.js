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
        title: "Speaking JavaScript",
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
        const parsePages = !book.pages ? "-" : book.pages;
        const parseData = new Date(book.published);
        const data = parseData.setDate(parseData.getDate() + 1);
        const dataFormatada = parseData.toLocaleDateString('pt-br');
 
        document.getElementById('corpoTabela').innerHTML +=
            `
        <tr >
        <td> ${book.title} </td>
        <td> ${book.author}</td>
        <td> ${book.isbn}</td>
        <td> ${book.data}</td>
        <td> ${dataFormatada}</td>
        <td> ${parsePages}</td>
        <td><button class="delete"></button></td>
        </tr>
        `
    })
}
                                                                                                                      

addLivros();
 
 
 function exibirDados(event) {
    event.preventDefault();
 
    let pegaTitle = document.getElementById('title').value;
    let pegaAuthor = document.getElementById('author').value;
    let pegaIsbn = document.getElementById('isbn').value;
    let pegaDate = document.getElementById('date').value;
    let pegaPages = document.getElementById('pages').value;
 
  
    if (pegaTitle === "" || pegaAuthor === "" || pegaIsbn === "" || pegaDate === "" || pegaPages === "") {
        alert("Campo obrigatório não preenchido")
    } else {
        books.push({
            title: pegaTitle,
            author: pegaAuthor,
            isbn: pegaIsbn,
            published: pegaDate,
            pages: pegaPages,
        });
        limparCampo();
        addLivros();
    }
 
}
 
function limparCampo() {
 
    document.getElementById('titulo').value = "";
    document.getElementById('subTitulo').value = "";
    document.getElementById('isbn').value = "";
    document.getElementById('autor').value = "";
    document.getElementById('paginas').value = "";
    document.getElementById('dataDePublicacao').value = "";
    document.getElementById('dataDeInsercao').value = "";
 
}
 
document.getElementById('corpoTabela').addEventListener('click', function removerLinha(event) {
    if (event.target.className === "delete") {
        let botao = event.target.parentElement;
        botao.parentElement.remove();
    }
});

                                                                                                                      