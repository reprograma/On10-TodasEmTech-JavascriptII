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
/*Exibindo na tabela, assim que carrega a página, os dados do array books*/
function exibirArrayBooks(){
    for (let book of books) {
        /*Tratando as datas de publicação vindas no array books*/
       let data = new Date(book.published);
       let dia = data.setDate(data.getDate()+1);
       let dataFormatada = data.toLocaleDateString("pt-br");
       /*Exibindo no HTML os elementos do array books, inclusive a data já formatada*/
        document.getElementById("corpo-tabela").innerHTML += `
                <tr id="tr-tabela">
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td>${dataFormatada}</td>
                    <td><button id='botao-tabela' class='botao-tabela'></button></td> 
                </tr>
            `
    }
}
exibirArrayBooks();

/*Exibindo os livros que forem sendo adicionados por meio do formulário*/
function exibirDadosTabela(event){
    event.preventDefault();
    
    /*Adiciona os dados do formulário, dentro de um único objeto, no último elemento do array books*/
    books.push({
        isbn: document.getElementById('isbnDoLivro').value,
        title: document.getElementById('tituloDoLivro').value,
        author: document.getElementById('autorDoLivro').value,
        published: document.getElementById('dataDePublicacaoDoLivro').value,
    })

    /*Verifica esse último elemento, cujo índice é length-1, do array books*/
    for(let book = books.length-1; book <= books.length-1; book++){
        if(books[book].isbn === "" || books[book].title === "" || books[book].author ==="" || books[book].published ==="") {
            alert("Os dados não foram inseridos corretamente. Tente novamente!")
            books.pop(); /*Se os dados desse último elemento forem vazios, ele é retirado do arrey books*/
        }else{
            /*Se os dados desse último elemento não forem vazios, ele continua sendo o último elemento do arrey books*/
            /*Antes de ser exibido no html, a data desse último elemento passa por um tratamento*/
            let dataPublicacao = new Date(books[book].published);
            let dia = dataPublicacao.setDate(dataPublicacao.getDate()+1);
            let dataPublicacaoFormatada = dataPublicacao.toLocaleDateString("pt-br");

            /*Depois da data ser tratada, os valores desse último elemento do array, que foram os inseridos no formulário, são, finalmente, exibidos no html*/
            document.getElementById("corpo-tabela").innerHTML += `
            <tr id="tr-tabela">
                <td>${books[book].title}</td>
                <td>${books[book].author}</td>
                <td>${books[book].isbn}</td>
                <td>${dataPublicacaoFormatada}</td>
                <td><button id='botao-tabela' class='botao-tabela'></button></td> 
            </tr>
        `
        }
    }
}
/*Função que permite a remoção dos elementos por meio do botão*/
document.getElementById('corpo-tabela').addEventListener('click', function removerLinhaLivro(event) {
    if (event.target.className === "botao-tabela") {
        let botao = event.target.parentElement;
        botao.parentElement.remove();
    }
})