const winners = [
    {
    nome: 'Equipe Marvel',
    pais: 'Canadá',
    },
    {
        nome: 'DCU',
        pais: 'EUA',
    },
    {
        nome: 'Batman',
        pais: 'GotamCity',
    },
];
const vencedores = winners.map((equipe) => {
    return equipe.nome;
});

const paises = winners.map(function (local) {
    return local.pais
});

console.log(paises);