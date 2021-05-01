const countryList = [ "Argentina","Armenia","Australia","Azerbaijan","Bahamas","Brazil","Burkina Faso", "Costa Rica","Mauritania","St Vincent","Uganda","United Arab Emirates","Uruguay","Uzbekistan","Venezuela"];
const usuarios = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 }
]

countryList.splice(3,1,"Peru");
console.log(countryList);

usuarios.splice(3,1, {user:237, name:"Camila", idade: 29});
console.log(usuarios);