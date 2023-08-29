/* Q1
const readline = require('readline-sync');
const nomeAluno = readline.question('Digite seu nome: ');
const nota1 = Number(readline.question('Digite sua primeira nota: '));
const nota2 = Number(readline.question('Digite sua segunda nota: '));
const nota3 = Number(readline.question('Digite sua terceiranota: '));
const media = (nota1 + nota2 + nota3) / 3

console.log(media)

if (media >= 7) {
    console.log('Parabens, aprovado!')
} else {
    console.log('RECUPERAÇÃO!!!')
}

*/
/*  Q2
const readline = require ('readline-sync');
const ano = readline.question('Digite o ano para verificação: ');
if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))){
    console.log(`É um ano bissexto ${ano}`)
} else {
    console.log('Não é bissexto')
}
*/
/* 
// Q3
const readline = require('readline-sync');
let valor = Number(readline.question('Infome o valor: '));
const estado = readline.question('Informe o estado:')

switch (estado) {
    case 'MG':
        valor *= 1.07
        console.log(valor.toFixed(2))
        break;
    case 'SP':
        valor *= 1.07
        console.log(valor.toFixed(2))
        break;
    case 'RJ':
        valor *= 1.07
        console.log(valor.toFixed(2))
        break;
    case 'MS':
        valor *= 1.07
        console.log(valor.toFixed(2))
        break;
    default:
        console.log('informação não encontrada.')
        break;
}
 */

// Q4

/* let cont = 0;
while (cont <= 50) {
    let resto = cont % 2;
    if (resto == 0) {
        console.log(`Par ${cont}`);
    }
    cont = cont + 1;
}

for (let i = 2 ; i <= 50; i+= 1 ){
    const par = i % 2 === 0 ? 'par' : 'impar'
        console.log(par, i)
}
    
 
let cont = 0
do {
    let resto = cont % 2;
    if (resto == 0) {
        console.log(`Par ${cont}`);
    }
    cont = cont + 1;
} while (cont <= 50); 
 */

// Q5

/*
 const readline = require('readline-sync');
const num = Number(readline.question('Digite um número: '));
for (let i = 0 ; i <= num; i ++ ){
    if (i % 2 != 0)
        console.log(i)
} 
*/

/* 
Q6

const readline = require('readline-sync');
let numeroTrabalhados = require('readline-sync').questionInt("Digite a quantidade de dias trabalhados: ")
let salarioLiquido = (numeroTrabalhados*30)*0.92;
console.log(`Dias: ${numeroTrabalhados} = Salario: ${salarioLiquido} R$`); 
*/
