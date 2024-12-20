/*
Crie um programa de acordo com as seguintes instruções (ex_arrays_2):
Inicialize um vetor vazio de notas;
 
Adicione um menu com as opções:
1 – Visualizar / 2 – Inserir / 3 – Pesquisar / 4 – Remover / 5 – Estatísticas / 6 – Sair
Notas:
Não deverá inserir valores repetidos;
As opções 3,4,5 apenas estarão disponíveis caso existam elementos adicionados no vetor;
A função de pesquisa deverá retornar um valor lógico;
A implementação de cada menu deverá estar de acordo com a sua descrição.
 
Crie funções para todas as operações indicadas.*/ 


const prompt = require('prompt-sync')()
 
vecNotas = []
 
function notaExists(nota, vecNotas) {
    return vecNotas.includes(nota)
}
 
function insertNota(vecNotas) {
    while(true) {
        nota = Number(prompt("Nota: "))
        if(!isNaN(nota) && Number.isInteger(nota)) {
            if(notaExists(nota, vecNotas)) console.log("\nErro: nota já existe!\n")
            else return nota
        }
        else console.log("\nErro: nota inválida!\n")
    }
}
 
function menu(vecNotas) {
    while(true) {
        console.log("1 - Visualizar")
        console.log("2 - Inserir")
        if(vecNotas.length > 0) {
            console.log("3 - Pesquisar")
            console.log("4 - Remover")
            console.log("5 - Estatísticas")
        }
        console.log("6 - Sair")
        // ler opção
        op = Number(prompt("Opção: "))
        switch(op) {
            case 1:
                if(vecNotas.length > 0) console.log(vecNotas)
                else console.log("\nAinda não foram inseridas notas\n")
                break
            case 2:
                vecNotas.push(insertNota(vecNotas))
                break
            case 3:
                if(vecNotas.length > 0) {
                    if(notaExists(Number(prompt("Nota: ")), vecNotas)) console.log("A nota existe")
                    else console.log("A nota não existe")
                }
                else console.log("\nErro: não tem permissão para executar esta operação\n")
                break
            case 4:
                if(vecNotas.length > 0) {
                    nota = Number(prompt("Nota: "))
                    if(notaExists(nota, vecNotas)) {
                        const index = vecNotas.indexOf(nota)
                        vecNotas.splice(index, 1)
                        console.log("\nElemento removido!\n")
                    }
                    else console.log("\nErro: Elemento não encontrado!\n")
                }
                else console.log("\nErro: não tem permissão para executar esta operação\n")                
                break
            case 5:
                if(vecNotas.length > 0) {
                    console.log("Estatisticas")
                }
                else console.log("\nErro: não tem permissão para executar esta operação\n")                
                break
            case 6:
                return
            default:
                console.log("\nERRO!\n")
        }
 
    }
}
 
menu(vecNotas)