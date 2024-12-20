/* 

const prompt = require('prompt-sync')()
 
const numeros = [3,9,1,2,7,4,2,6,8,9,45,3,12,4]
// filter pares
const pares = numeros.filter((val) => val%2 == 0)
 
// filter valores > 10
const maiores10 = numeros.filter((val) => val > 10)
console.log(maiores10)
 
const pessoas = [
    {nome: "Pedro", idade: 23},
    {nome: "Afonseca", idade: 41},
    {nome: "Ana", idade: 19}
]

*/

//filter
//todas as pessoas com idade inferior a 30 anos
//todas as pessoas cujo nome tem menos de 4 caracteres
//todas as pessoas cujo nome começa pela letra A

const pessoas = [
    {nome: "Pedro", idade: 23},
    {nome: "Afonseca", idade: 41},
    {nome: "Ana", idade: 19}
]


// filter
// 1 - Todas as pessoas com idade inferior a 30 anos
const ageLess30 = pessoas.filter((person) => person.idade < 30)
//console.log(ageLess30)
// 2 - Todas as pessoas cujo nome tem menos que 4 carateres
const name4char = pessoas.filter((person) => person.nome.length < 4)
//console.log(name4char)
// 3 - Todas as pessoas cujo nome começa pela letra a
const nameStartA = pessoas.filter((person) => person.nome.toLowerCase().startsWith('a'))
console.log(nameStartA)


//caso não exista a chave job na primeira pessoa defini-la com o valor de formador


const prompt = require('prompt-sync')()
 
const pessoa = {
    name : "Maria",
    job : "Secretary",
    city : "Coimbra",
    salary : 3220.89,
    print() {
        console.log(`${this.name} ganha ${this.salary}€!`)
    }
}
pessoa.print()

