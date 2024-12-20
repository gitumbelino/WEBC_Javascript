function getData() {
    // variables
    const pessoas = []
    const form = document.querySelector(".form")
    const registarBTN = document.querySelector("#registarBTN")
    const resultado = document.querySelector("#resultado")
   
    function addPersonToResult() {
        resultado.innerHTML = ''
        pessoas.forEach((pessoa, index) => {
            resultado.innerHTML += `
            <div>
                <button onclick="">Remover</button>
                <span>${pessoa.nome}</span>
                <span>${pessoa.apelido}</span>
                <span>${pessoa.peso}</span>
                <span>${pessoa.altura}</span>
            </div>
            `
        })
    }
 
    function cleanInput() {
        form.querySelector("#nome").value = ''
        form.querySelector("#apelido").value = ''
        form.querySelector("#peso").value = ''
        form.querySelector("#altura").value = ''
    }
 
 
    function submitHandler(e) {
        e.preventDefault()
        const nome = document.querySelector("#nome").value
        const apelido = document.querySelector("#apelido").value
        const peso = document.querySelector("#peso").value
        const altura = document.querySelector("#altura").value
        if(nome && apelido && peso && altura) {
            pessoas.push({nome, apelido, peso, altura})
        }
        console.log(pessoas)
        cleanInput()
        addPersonToResult()
    }
 
    form.addEventListener('submit', submitHandler)
}
 
 
getData()