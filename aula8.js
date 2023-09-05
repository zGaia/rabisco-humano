const readline = require('readline-sync')

const aluno1 = {
    matriucla: 1,
    nome: "Filomeno",
    notas: [8, 7, 6],
}

const aluno2 = {
    matricula: 2,
    nome: 'Azogado',
    notas: [10, 5.5, 6]
}
const alunos = [aluno1, aluno2]

console.log('=== CADASTRO DE ALUNOS ===')
console.log('========== MENU ==========')
console.log('0 - Sair do sistema')
console.log('1 -Listar todos os alunos')
console.log('============================')
console.log('2 - Cadastrar um novo Aluno')
console.log('3 - Buscar Aluno');
console.log('4 - Alterar um Aluno')
console.log('============================')
let loop = true



while (loop) {
    let opcao = readline.questionInt('Escolha uma opção: ')
    switch (opcao) {
        case 1:
            console.log('Listando todos os alunos');
            console.log('------------------------')
            for (const a of alunos) {
                console.log(`Nome: ${a.nome}`);
                for (let i = 0; i < a.notas.length; i++) {
                    console.log(`\t- Nota ${i + 1}: ${a.notas[i]}`);
                }
            }
            break;
        case 3:
            

        case 0:
            console.log('Saindo do sistema e Calculando média.');
            loop = false
            break



        default:
            console.log('Opção invalida!');

            break;
    }

}

 let media = 0
for (let i = 0; i < alunos[0].notas.length; i++) {
    console.log(alunos[0].notas[i])
    media += alunos[0].notas[i]
}
media /= alunos[0].notas.length

console.log(`A media é: ${media}`);

let media1 = 0
for (let i = 0; i < alunos[1].notas.length; i++) {
    console.log(alunos[1].notas[i])
    media1 += alunos[1].notas[i]
}
media1 /= alunos[1].notas.length
console.log(`A media é: ${media1}`);

if (media >= 7) {
    console.log(`Aprovado ${alunos[0].nome}!`);
} else {
    console.log(`Reprovado ${alunos[0].nome}!`);
}

if (media1 >= 7) {
    console.log(`Aprovado ${alunos[1].nome}!`);
} else {
    console.log(`Reprovado ${alunos[1].nome}!`)
}