
let books = [{
    titulo: "Fisica basica",
    autor: "desconhecido",
    isbn: "213563",
    dataPublicacao: "2014-12-14",
    paginas:'500'
},
{
    titulo: "Livro teste 2",
    autor: "Autor livro 2",
    isbn: "213563",
    dataPublicacao: "2019-11-05T",
    paginas:'850'
},
{
    titulo: "livro teste 3",
    autor: "Autor Livro 3",
    isbn: "213563",
    dataPublicacao: "2016-10-14",
    paginas:'350'
}
]


function lerLivros() {
 
    books.map((livro) => {
        document.getElementById('corpoTabela').innerHTML += `
        <tr >
            <td> ${livro.titulo}</td>
            <td> ${livro.autor}</td>
            <td> ${livro.isbn}</td>
            <td> ${livro.dataPublicacao}</td>
            <td> ${livro.paginas}</td>
            <td> <a href="#" class="delete">Delete</a> </td>
        </tr>
        `
    
    })
}

lerLivros()

function cadastrarDados(event) {
    event.preventDefault();
    
    let tituloForm = document.getElementById('titulo').value;
    let autorForm = document.getElementById('autor').value;
    let isbnForm = document.getElementById('isbn').value;
    let dataDePubicacaoForm = document.getElementById('dataDePubicacao').value;
    let paginasForm = document.getElementById('paginas').value;
    //let dataDeinsercao = new Date().toLocaleDateString('pt-br');
    let horario = new Date().toLocaleTimeString('pt-br');

    if (tituloForm === "") {
    alert ("O Campo Título não pode ficar vazio")
    }
    else if (autorForm === "") {
    alert ("O Campo Autor não pode ficar vazio")
    }
    else if (isbnForm === "") {
    alert ("O Campo ISBN não pode ficar vazio")
    }
    else if (dataDePubicacaoForm === "") {
    alert ("O Campo Data de Publicação não pode ficar vazio")
    }
    else if (paginasForm === "") {
    alert ("O Campo Páginas não pode ficar vazio")    
    }
    else {
    //alert (horario)
        books.push({
            titulo: tituloForm,
            autor: autorForm,
            isbn: isbnForm,
            dataPublicacao: dataDePubicacaoForm,
            paginas: paginasForm,
        });
    limparCampo();
    limparTabela()
    lerLivros();

    }
}

function limparTabela(){
    document.getElementById('corpoTabela').innerHTML = `
    <tr >
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    `

}

function limparCampo() {

    document.getElementById('titulo').value = "";
    document.getElementById('autor').value = "";
    document.getElementById('isbn').value = "";
    document.getElementById('dataDePubicacao').value = "";
    document.getElementById('paginas').value = "";

}

document.getElementById('corpoTabela').addEventListener('click', function removerLinha(event) {
    if (event.target.className === "delete") {
        let botao = event.target.parentElement;
        botao.parentElement.remove();
    }
})  












// let books = [
//     {
//         isbn: "9781593275846",
//         title: "Eloquent JavaScript, Second Edition",
//         subtitle: "A Modern Introduction to Programming",
//         author: "Marijn Haverbeke",
//         published: "2014-12-14T00:00:00.000Z",
//     },
//     {
//         isbn: "9781449331818",
//         title: "Learning JavaScript Design Patterns",
//         subtitle: "A JavaScript and jQuery Developer's Guide",
//         author: "Addy Osmani",
//         published: "2012-07-01T00:00:00.000Z",
//     },
//     {
//         isbn: "9781449365035",
//         title: "Speaking JavaScript",
//         subtitle: "An In-Depth Guide for Programmers",
//         author: "Axel Rauschmayer",
//         published: "2014-02-01T00:00:00.000Z",
//     },
//     {
//         isbn: "9781491950296",
//         title: "Programming JavaScript Applications",
//         subtitle: "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
//         author: "Eric Elliott",
//         published: "2014-07-01T00:00:00.000Z",
//     },
//     {
//         isbn: "9781593277574",
//         title: "Understanding ECMAScript 6",
//         subtitle: "The Definitive Guide for JavaScript Developers",
//         author: "Nicholas C. Zakas",
//         published: "2016-09-03T00:00:00.000Z",
//     },
//     {
//         isbn: "9781491904244",
//         title: "You Don't Know JS",
//         author: "Kyle Simpson",
//         published: "2015-12-27T00:00:00.000Z",
//     },
//     {
//         isbn: "9781449325862",
//         title: "Git Pocket Guide",
//         author: "Richard E. Silverman",
//         published: "2013-08-02T00:00:00.000Z",
//     },
//     {
//         isbn: "9781449337711",
//         title: "Designing Evolvable Web APIs with ASP.NET",
//         author: "Glenn Block, et al.",
//         published: "2014-04-07T00:00:00.000Z",
//     }
// ]