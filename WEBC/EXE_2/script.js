







/*
n1 = parseInt.prompt(("insira o nr: "))
n2 = parseInt.prompt(("insira o segundo nr: "))

alert = (n1+n2)
*/


/*
let texto = "Vamos programar"
 
// índices 0 até N-1 (N n.º de elementos)
console.log(texto[0])
console.log(texto.charAt(texto.length - 1))
console.log(texto.indexOf('a'))

console.log(texto.slice(-3, -1))
*/

/*
*/


/*

const texto = "O Ministério Público acusou oito arguidos, entre eles um funcionário da AT em funções na Direção de Finanças de Coimbra, de diversos crimes económicos, como corrupção, branqueamento e fraude fiscal."
palavras = texto.split(" ")
console.log(palavras[1].toLowerCase())
console.log(palavras[2].toUpperCase())
console.log (palavras)

*/




/*
const text = "Eu gosto de JS"
const vowels = "aeiou"
 
function replaceVowels(text) {
    temp = ""
    for(let i=0; i < text.length; i++) {
        if(vowels.includes(text[i])) temp += text[i].toUpperCase()
        else temp += text[i]
    }
 
    return temp
}
 
console.log(replaceVowels(text))
*/

/*
nome = prompt("Nome: ")
document.body.innerHTML += `<p>Chamo-me <strong>${nome}</strong></p>`
document.body.innerHTML += `<p>O(a) ${nome} tem ${nome.length} letras</p>`
document.body.innerHTML += `<p>A segunda letra do meu nome é ${nome[1]}</p>`
document.body.innerHTML += `<p>O índice da letra "e" do meu nome é ${nome.indexOf("e")}</p>`
document.body.innerHTML += `<p>O último índice da letra "r" do meu nome é ${nome.lastIndexOf("r")}</p>`
document.body.innerHTML += `<p>As últimas 3 letras do meu nome são ${nome.slice(-3)}</p>`
document.body.innerHTML += `<p>As palavras do meu nome são ${nome.split(" ")}</p>`
document.body.innerHTML += `<p>Nome em mínusculas ${nome.toLowerCase()} e em maíusculas ${nome.toUpperCase()}</p>`

*/

//--------------------------------------------------------------------------------------------------------

//numero inserido 123
//raiz quadrada:
//123éinteirotrue
//123énanfalse
//arrendondado para baixo 123
//arredondado para cima 123
//com dias casa decimais 123.000


/*
let num = Number(prompt("Num1: "))
 
document.body.innerHTML += `<h2>Número inserido: ${num}</h2>`
document.body.innerHTML += `<p>Raiz quadrada: ${num ** 0.5} ${Math.pow(num, 0.5)}</p>`
document.body.innerHTML += `<p>${num} é inteiro? ${Number.isInteger(num)}</p>`
document.body.innerHTML += `<p>${num} é NaN? ${isNaN(num)}</p>`
document.body.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`
document.body.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p>`
document.body.innerHTML += `<p>Com 2 casas decimais: ${num.toFixed(2)}</p>`
*/

//----------------------------------------------------------------------------------

/*
const login = "xpto"
const password = "12345"
 
const sucess = login === "xpto" && password === "12345"
console.log(sucess)

*/
//----------------------------------------------------------------------------------
/*
// 0 - 9 MAU 10 - 14 Satisfatório > 15 Bom
const nota = 15
if(nota<10) console.log("MAU")
else if(nota<15) console.log("Satisfatório")
else console.log("Bom")
// operações ternárias
const val = 15
const ePar = val % 2 == 0 ? "Par" : "Impar"
console.log(ePar)
*/

//------------------------------------------------------------------------------------
/*

const prompt = require('prompt-sync')()
 
function menu() {
    while(true) {
        console.log("\nMenu:\n1 - Ler valores\n2 - Ver valores\n3 - Média\n4 - Máximo\n5 - Mínimo\n6 - Sair")
        op = parseInt(prompt("Opção: "))
        switch(op) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                console.log(`\nClicou na opção ${op}`)
                break
            case 6:
                return
            default:
                console.log("\nErro: opção inválida!\n")
        }
    }
}
 
menu()
 
*/


/*
function altera(val, vec) {
    // val é passado por cópia e vec por referência
    val+=1
    vec[0] = "Alterou?????"
}
 
let x = 3
const arr2 = ["Texto", 12, 13.34, true, [1,2,3,4]]
altera(x, arr2)
console.log(x)
console.log(arr2)





let texto = "Eu sou um texto"
// texto = "dfgdfgfdrg" - nova atribuição
const textoArray = texto.split("")
textoArray[0] = "X"
texto = textoArray.join("")
console.log(textoArray)
console.log(texto)







const arr2 = ["Texto", 12, 13.34, true, [1,2,3,4]]
// no fim
arr2.push("elem")
// no início
arr2.unshift("first")
 
const deleted = delete arr2[2]
console.log(deleted)
 
console.log(arr2.length)
console.log(arr2)
 


const arr2 = ["Texto", 12, 13.34, true, [1,2,3,4]]
// no fim
arr2.push("elem")
// no início
arr2.unshift("first")
 
const deleted = delete arr2[2]
console.log(deleted)
 
console.log(arr2.length)
console.log(arr2)


 

const arr2 = ["Texto", 12, 13.34, true, [1,2,3,4]]
 
// slices
const slice = arr2.slice(0,-1)
 
console.log(arr2 instanceof Object)


const pessoas = ["Ana", "Sofia", "Carlos", "Pedro", "Alberto"]
 
// for(let i=0; i < pessoas.length; i++) {
//     console.log(pessoas[i])
// }
 
// for(let i in pessoas) {
//     console.log(pessoas[i])
// }
 
for(let pessoa of pessoas) {
    console.log(pessoa)
}


// objeto pessoa
const pessoa = {
    nome : "Maria",
    idade : 44,
    salario : 1234.56,
    morada : {
        localidade : "Ovar",
        cod_postal : "3880-123",
        porta : 2
    }
}
// console.log(pessoa.nome)
// console.log(pessoa.morada.porta)
 
const arrPessoas = []
arrPessoas.push(pessoa)
console.log(arrPessoas)
 
 
// for(let key in pessoa) {
//     console.log(`índice: ${key} Valor: ${pessoa[key]}`)
// }    



---------------------------------------------------------------------------------------
Ciclo do while (array_desafio_1)
Utilizando o ciclo do … while insere valores até ser introduzido o valor 0 
(deverão ser numéricos, caso contrário deverá apresentar uma mensagem de erro). No final deverão ser apresentados os seguintes valores:
Listagem do vetor;
Máximo e mínimo do vetor;
Média dos valores introduzidos;
Número de elementos inseridos.
 
Nota: o valor 0 não deverá ser adicionado ao vetor





const prompt = require('prompt-sync')()
 
// globals
values = []
 
// define functions
function fillValues(vec) {
    console.log("\nIntroduza valores. Digite 0 para terminar\n")
    do {
        val = prompt("Valor: ")
        if(isNaN(val)) console.log("\nErro: valor inserido inválido!\n")
        else {
            if(val !== '0') values.push(Number(val))
        }
    } while (val !== '0')
}
 
function total(vec) {
    let sum = 0
    for (elem of vec) {
        sum += elem
    }
    return sum
}
 
function printData(vec) {
    console.log(`Conteúdo do vetor: ${vec}`)
    console.log(`Máximo: ${Math.max(...vec)} Mínimo: ${Math.min(...vec)}`)
    console.log(`Média: ${(total(vec)/vec.length).toFixed(2)}`)
    console.log(`N.º de elementos: ${vec.length}`)
}
 
// call functions
fillValues(values)
printData(values)


---------------------------------------------------------------------------------------


*/

