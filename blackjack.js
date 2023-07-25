let carta1 = 10
let carta2 = 12
var soma = carta1 + carta2

/*
if (soma > 21) {
    console.log ("You Lose :(");
}   else {
    console.log ("You Win :)")
}

if (soma > 21) {
    console.log("You Lose :(");
} else if (soma == 21 ) {
    console.log("Consgratulations, u win :)")
} else {
    console.log("Will continue?")
}
*/

if (soma1 > 21 && soma2 > 21) {
    console.log("Perdeu");
} else if (soma1 == 21 && soma2 == 21 ) {
    console.log("Ganhou")
} else if (soma1 < 21 && soma2 < 21 ) {
    console.log("Vai Continuar?")
} else  {
    console.log(`O vencedor é ${soma1 || soma2}`)
}