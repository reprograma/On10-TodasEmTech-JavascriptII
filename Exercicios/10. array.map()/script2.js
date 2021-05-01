const winners = [
    {
        nome: 'Equipe Maravilinda',
        pais: 'Canadá',
    },
    {
        nome: 'Liga da Justiça',
        pais: 'EUA',
    },
    {
        nome: 'Mega Grupo',
        pais: 'Brasil',
    },
];

const vencedores = winners.map((equipe) => {
    return equipe.nome;
});

console.log(vencedores);