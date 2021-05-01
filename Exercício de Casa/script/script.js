document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#botaoAdicionar").addEventListener("click", function livrosAdicionar(event) {
        event.preventDefault();
        
        let bancoLivros = {
            isbn: document.getElementById("livroISBN"),
            title: document.getElementById("livroTitulo"),
            subtitle: document.getElementById("livroSubtitulo"),
            author: document.getElementById("livroAutor"),
            published: document.getElementById("livroData"),
        }

        /* let livroTitulo = document.getElementById("livroTitulo").value;
        let livroAutor = document.getElementById("livroAutor").value;
        let livroISBN = document.getElementById("livroISBN").value;
        let livroData = document.getElementById("livroData").value;
        let livroPaginas = document.getElementById("livroPaginas").value;
        let dataInsercao = new Date().toLocaleDateString("pt-br");
        let horaInsercao = new Date ().toLocaleTimeString("pt-br"); */

        let exibeResposta = document.getElementById("resposta");
        let exibeLista = document.getElementById("addLivros");


        if (bancoLivros.isbn === "" || bancoLivros.title === "" || bancoLivros.author === "" || bancoLivros.published === "") {
            exibeResposta.innerHTML = "Por favor, preencha todos os campos."
        } else {
            exibeResposta.innerHTML = (`O livro "${livroTitulo}" do autor ${livroAutor} foi adicionado à Biblioteca às ${horaInsercao} do dia ${dataInsercao}.`)
            exibeLista.push("bancoLivros") = `<tr>
                <td>${livroTitulo}</td>
                <td>${livroAutor}</td>
                <td>${livroISBN}</td>
                <td>${livroData}</td>
                <td>${livroPaginas}</td>
                <td>${dataInsercao} às ${horaInsercao}</td>
            </tr>`

        }

})})
