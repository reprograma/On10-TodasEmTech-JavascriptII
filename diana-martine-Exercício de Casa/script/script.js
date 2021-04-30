// variáveis
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let date = document.querySelector("#date");
let pages = document.querySelector("#pages");
let button = document.querySelector(".button");

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
}

// função de add livro
function addBook() {
  let containerTable = document.querySelector(".container-table");
  let table = document.querySelector(".tbody");
  let addTr = document.createElement("tr");
  addTr.classList.add("tr-on");
  let addTdTitle = document.createElement("td");
  let addTdAuthor = document.createElement("td");
  let addTdIsbn = document.createElement("td");
  let addTdDate = document.createElement("td");
  let addTdPages = document.createElement("td");
  let addTdDateI = document.createElement("td");
  let addRemove = document.createElement("td");

  if (
    title.value === "" ||
    author.value === "" ||
    isbn.value === "" ||
    date.value === ""
  ) {
    alert("Erro, insira todos os dados nos campos");
  } else {
    // add dados na tabela
    table.appendChild(addTr);
    addTdTitle.textContent = title.value;
    addTr.appendChild(addTdTitle);
    addTdAuthor.textContent = author.value;
    addTr.appendChild(addTdAuthor);
    addTdIsbn.textContent = isbn.value;
    addTr.appendChild(addTdIsbn);
    addTdDate.textContent = date.value;
    addTr.appendChild(addTdDate);
    addTdPages.innerHTML = pages.value;
    addTr.appendChild(addTdPages);

    // data de inserção
    addTdDateI.innerHTML = new Date();
    addTr.appendChild(addTdDateI);

    // remover livro
    addRemove.innerHTML = `<a href="#"><img src="https://freeiconshop.com/wp-content/uploads/edd/minus-flat.png" alt="remover livro" style="width: 1rem;"></a>`;
    addTr.appendChild(addRemove);
    addRemove.addEventListener("click", function () {
      addTr.remove();
    });

    containerTable.classList.add("on");
  }
}
