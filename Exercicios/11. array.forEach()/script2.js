const usuarios = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 },
    {user:240, name:"Camila", idade: 29}
]

let somaIdades = 0;
usuarios.forEach(function(itens) {
    somaIdades += itens.idade;

})

console.log(somaIdades);