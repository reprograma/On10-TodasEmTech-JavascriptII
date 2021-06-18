const countryList = [ "Argentina","Armenia","Australia","Azerbaijan","Bahamas","Brazil","Burkina Faso", "Costa Rica","Mauritania","St Vincent","Uganda","United Arab Emirates","Uruguay","Uzbekistan","Venezuela"];

const paisesLista = countryList.splice (0,3, 'Japão');
console.log(countryList);
console.log(paisesLista);

//PRINCIPAL USO É A REMOÇÃO DE ITENS

const usuarios = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 }
]
const listaUsuarios = usuarios.splice (0,3, 'Yasmim');
console.log(listaUsuarios);
console.log(usuarios);

usuarios.splice(0,1,{
    user:233,
    name:'Yasmim',
    idade:26,
})

console.log(usuarios);