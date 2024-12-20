const prompt = require('prompt-sync')()
 
function mensagem(msg="hello") {
    console.log(msg)
}
 
function soma(val1, val2) {
    return val1+val2
}
 
function ePar(val1) {
    return val1 % 2 == 0
}
 
function multiplos() {
    const val1 = 3
    const val2 = 5
    return [val1, val2]
}
 
// destruturação
const [n1,n2] = multiplos()
//console.log(n1)
mensagem("sdfsfsdfsdfsdf")