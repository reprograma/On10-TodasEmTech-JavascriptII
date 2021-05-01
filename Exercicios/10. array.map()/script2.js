const vencedores = [
{  
    nome : "Equipe Super",
    pais : "Brasil"

},

{
    nome: "Time Maximo",
    pais: "EUA"
},
{

    nome: "Mega Grupo",
    pais: "Canadá"

}
];

const winners = vencedores.map((item) => {
    return item.nome;


});

const paises = vencedores.map((item) => {
    return item.pais

})


console.log(winners, paises);
    
