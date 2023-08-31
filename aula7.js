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


/*
 Q5
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
/* 
 Q7

let ano = 2023, mes = 8, dia = 29, dia2 = 30;
let hora = require('readline-sync').questionInt("Digite a hora: ")
let minutos = require('readline-sync').questionInt("Digite os minutos: ")
let segundos = require('readline-sync').questionInt("Digite os segundos: ")
let horarioIncio = new Date(ano, mes, dia, hora, minutos, segundos);
let horaTermino = require('readline-sync').questionInt("Digite a hora do termino: ")
let minutosTermino = require('readline-sync').questionInt("Digite os minutos do termino: ")
let segundosTermino = require('readline-sync').questionInt("Digite os segundos do termino: ")
let horarioTermino = new Date(ano, mes, dia2, horaTermino, minutosTermino, segundosTermino);
let diff = Math.abs(horarioIncio.getTime() - horarioTermino.getTime());
let diffSeg =  Math.ceil(diff/1000%60);
let diffMin = Math.floor(diff/1000/60%60);
let diffHora = Math.floor(diff/1000/60/600%24);
console.log(`${diffHora}:${diffMin}:${diffSeg}`);
 */

/* // Q8

let horaNormal = require('readline-sync').questionInt("Digite a quantidade de horas trabalhadas por dia:")
let horaExtra = require ('readline-sync').questionInt("Digite a quantidade de horas extras trabalhadas: ")
let salario = (horaNormal*10.00*24*12) + (horaExtra*15);
console.log(salario)
 */

/* // Q9

let numeros = Array(3);
for (let i=0; i < numeros.length; i++){
    numeros[i] = require('readline-sync').questionInt("Digite um numero: ")
}
numeros.sort((a,b)=>a-b);
console.log(numeros);
 */


/* // Q10

let temperatura = require('readline-sync').questionFloat("Digite a temperatura: ")
let opcao = require('readline-sync').questionInt("1.de Celsius para Fahrenheit.\n2.dr Celsius paraKelvin. \n3. de Fahrenheit para Celsius.\n4.de Fahrenheit para Kelvin.\n5.de Kelvin para Celsius.\n6.de Kelvin para Fahrenheit:\n ")
switch (opcao) {
    case 1: 
    temperatura = temperatura * 1.8 + 32
    break;
    case 2: 
    temperatura += 273
    break;
    case 3:
    temperatura = (temperatura-32)/1.8;
    break
    case 4:
    temperatura = (temperatura-32)*5/9 + 273
    break
    case 5:
    temperatura -= 273;
    break
    case 6: 
    temperatura = (temperatura-273)*1.8 + 32
    break
    default:
        console.log("Número errado");
        break    
}
 */
/* 
// Q11

function mesAno(mes,ano) {

    switch(ms){
        case 1:
            return 31;
        case 2:
            if (ano % 4 === 0 && ano % 100 !==0 || ano % 400===0){
                return 29;
            }
        return 28;
        case 3: 
        return 31;
        case 4:
        return 30;
        case 5:
        return 31;
        case 6:
        return 30;
        case 7: 
        return 31;
        case 8:
        return 31;
        case 9:
        return 30;
        case 10:
        return 31;
        case 11:
        return 30;
        case 12:
        return 31;
        default: 
        console.log("Mês incorreto");
    }
}
let numero = mesAno(2,2000);
consolelog(numero); */

/* // Q12

function saberHora(começo,fim){
    let start = começo.split(':');
    let end = fim.split(':');
    if (start [0]>23 || end [0]> 23 || start [1]>59 || end [1] > 59){
        return "Datas Incorretas";
    }
    start = start[0]*60 + Number(start[1]);
    end = end[0]*60 + Number(end[1]);
    if (start<end) {
        return start-end;
    }else{
        end += 1440;
        return  end - start
    }
}
let hora1 = saberHora("23:00", "04:10")
let hora2 = saberHora("20:00", "23:69")
console.log(hora1);
console.log(hora2);
 */


/* Q13 

function fibonacci(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
} */