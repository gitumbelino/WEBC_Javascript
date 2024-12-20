
/* 
Crie um programa (utilizando funções) que gere 5 números entre 1 e 50 que sejam múltiplos de 5 e que guarde num array. 
Finalmente imprime o conteúdo do array usando um for à sua escolha. (function_ex1)
 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
 
Crie uma nova função para introduzir 5 valores inteiros válidos entre 1 e 30 e guarde num array.

*/


const prompt = require('prompt-sync')()
 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
 
function generateNumbers(vec, min, max, count) {
    while(vec.length < count) {
        num = randomNumber(min,max)
        if(num%5 == 0) vec.push(num)
    }
}
 
function insertNumbers(vec, min, max, count) {
    while(vec.length < count) {
        num = Number(prompt(`Valor inteiro entre ${min} e ${max}: `))
        if(Number.isInteger(num)) {
            if(num<min || num>max) console.log("\nErro: valor inválido\n")
            else vec.push(num)
        }
        else console.log("\nErro: introduza um valor inteiro!\n")
    }
}
 
vecGen = []
vecIns = []
 
//generateNumbers(vecGen, 1, 50, 5)
//console.log(vecGen)
insertNumbers(vecIns, 1, 30, 5)
console.log(vecIns)