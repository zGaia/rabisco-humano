/*()
require('readline-sync').questionInt
try {
    let num = require('readline-sync').questionInt('Digite um número: ')
    let input = 0;
    if (num/0 === Infinity){
        throw 'Erro: valor incorreto'
    }
  let resultado = 1 / input  
} catch (error) {
    console.log(`[Erro:]Divisão por zero ${error}`);
}


try {
    let text = require('readline-sync').question('Digite um texto: ')
    parseInt(text)
    text = parseInt(text)
    console.log(typeof text)
    if (typeof text != "number"){
        throw 'Erro: são diferentes.'
    }  
} catch (error) {
    console.log(`[Erro:]Diferente ${error}`);
}
*/