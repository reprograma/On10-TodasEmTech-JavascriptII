function exibirDados (event){
    event.preventDefault();
    
    let autor = document.getElementById("nomeDoAutor").value;
    let titulo = document.getElementById("tituloDoLivro").value;
    let isbn = document.getElementById("isbnDoLivro").value;
    let dataPublicacao = document.getElementById("dataDaPublicacao").value;
    let paginas = document.getElementById("numeroDePaginas").value;
    let dataInsercao = new Date().toLocaleDateString("pt-br");
    let horarioInsercao = new Date().toLocaleTimeString("pt-br");

    if (autor === "" || titulo === "" || isbn === "" || dataPublicacao === "") {
            alert("Preencha as informações obrigatórias faltantes")    }
    else{
        
    document.getElementById("resposta").innerHTML += `

    <tr>
            <td>${autor}</td>
            <td>${titulo}</td>
            <td>${isbn}</td>
            <td>${dataPublicacao}</td>
            <td>${paginas}</td>
            <td>${dataInsercao},${horarioInsercao}</td>
            <td><button class="delete"> Remover </button></td>
    </tr>
    `
    limparDados();
}
function limparDados() {
    document.getElementById("nomeDoAutor").value = "";
    document.getElementById("tituloDoLivro").value = "";
    document.getElementById("isbnDoLivro").value = "";
    document.getElementById("dataDaPublicacao").value = "";
    document.getElementById("numeroDePaginas").value = "";

}

document.getElementById('resposta').addEventListener('click', function(event) {
    if (event.target.className === "delete") {
        let botao = event.target.parentElement;
        botao.parentElement.remove();
    }
})

}
