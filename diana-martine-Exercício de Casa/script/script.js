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
  },
];

// variáveis globais
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let date = document.querySelector("#date");
let pages = document.querySelector("#pages");
let button = document.querySelector(".button");
let containerTable = document.querySelector(".container-table");
let table = document.querySelector(".tbody");

// prevenção do botão submit (impede de recarregar a página)
button.addEventListener("click", function (event) {
  event.preventDefault();
});

// função de máscara pro ISBN
function isbnMask() {
  let isbn = document.querySelector("#isbn");

  if (
    isbn.value.length == 3 ||
    isbn.value.length == 5 ||
    isbn.value.length == 8 ||
    isbn.value.length == 15
  ) {
    isbn.value += "-";
  }
  return isbn;
}

// função de adicionar livro a tabela
function addBookToArray() {
  // percorrendo array books
  books.map((book) => {
    // tratando data do array
    const newDate = new Date(book.published).toLocaleDateString();
    // criando elementos de modo dinâmico
    let addTr = document.createElement("tr");
    let addTdTitle = document.createElement("td");
    let addTdAuthor = document.createElement("td");
    let addTdIsbn = document.createElement("td");
    let addTdDate = document.createElement("td");
    let addTdPages = document.createElement("td");
    let addRemove = document.createElement("td");

    // resolvendo bug de duplicar livros já existentes
    button.addEventListener("click", function () {
      addTr.remove();
    });

    // renderizando livros na tabela
    table.appendChild(addTr);
    addTdTitle.textContent = book.title;
    addTr.appendChild(addTdTitle);
    addTdAuthor.textContent = book.author;
    addTr.appendChild(addTdAuthor);
    addTdIsbn.textContent = book.isbn;
    addTr.appendChild(addTdIsbn);
    addTdDate.textContent = newDate;
    addTr.appendChild(addTdDate);

    // tratando erro de páginas
    if (book.pages == null) {
      addTdPages.innerHTML = "";
      addTr.appendChild(addTdPages);
    } else if (books.pages !== null) {
      addTdPages.innerHTML = book.pages;
      addTr.appendChild(addTdPages);
    }

    // adicionando função de remover livro
    addRemove.innerHTML = `<a><img src="https://freeiconshop.com/wp-content/uploads/edd/minus-flat.png" alt="remover livro" style="width: 1rem;"></a>`;
    addTr.appendChild(addRemove);
    addRemove.addEventListener("click", function () {
      addTr.remove();
    });

    // tornando a tabela visível
    containerTable.classList.add("on");
  });
}

// tratando erro de input
function addBook() {
  if (
    title.value === "" ||
    author.value === "" ||
    isbn.value === "" ||
    date.value === ""
  ) {
    alert("Erro, insira todos os dados nos campos");
  } else {
    // add dados no array
    books.push({
      title: title.value,
      author: author.value,
      isbn: isbn.value,
      published: date.value,
      pages: pages.value,
    });

    addBookToArray();
  }
}
