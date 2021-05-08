function onSubmit(event) {
  event.preventDefault();

  const autor = document.querySelector(".input_autor").value;
  const titulo = document.querySelector(".input_titulo").value;
  const isbn = document.querySelector(".input_isbn").value;
  const data = document.querySelector(".input_date").value;
  let dataInserção = new Date().toLocaleString("pt-br");
  let horarioInsercao = new Date().toLocaleTimeString("pt-br");

  const table = document.getElementById("resposta");

  if (autor === "" || titulo == "" || isbn === "" || data === "") {
    alert(
      "Poxa, os dados estão em brancos.  Por favor verificar e entrar novamente! 😔 "
    );
  } else {
    table.style = "display: block;";
    table.innerHTML += `
  <tr class="teste" id ="teste">

        <td class="borde"> ${autor}</td> 
        <td class="borde"> ${titulo}</td> 
        <td class="borde" > ${isbn} </td> 
        <td class="borde"> ${data} </td> 
        <td class="borde"> ${dataInserção} </td> 
        <td class="borde"> ${horarioInsercao} </td> 
        <td nowrap>
        <button id "apagar" class="apagar" onsubmit="removerElemento(event)">Apagar</button>
      </td>
      
  </tr>`;
  }
}

document
  .getElementById("resposta")
  .addEventListener("click", function removerElemento(event) {
    document.querySelector("#teste").remove();
  });
