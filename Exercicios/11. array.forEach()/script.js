const numbers = [65, 44, 12, 4, 68];

/* let sum = 0;

numbers.forEach((numero) => {
    sum += numero;
})

console.log(sum); */


const usuarios = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 }
]

/* const somaIdades = [];

usuarios.forEach(function(itens) {
    somaIdades.push(itens.idade);
}) */

let somarIdade = 0;

usuarios.forEach((usuario) => {
    somarIdade += usuario.idade;
})

console.log(somarIdade);