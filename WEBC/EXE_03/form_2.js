const nome = document.getElementById("nome")
const registarBTN = document.getElementById("registarBTN")
const form = document.querySelector('.form')
registarBTN.disabled = true
 
function defineActions() {
    // // registar
    // registarBTN.addEventListener('click', function(e) {
    //     console.log(nome.value) // e.target.value
    // })
    // // input
    nome.addEventListener('input', function(e) {
        if(nome.value.length > 2) registarBTN.disabled = false
    })
 
    form.addEventListener('submit', function(e) {
        e.preventDefault()
        if(nome.value === '') {
            alert("Campo vazio")
            return
        }
        else {
            alert(`Nome: ${nome.value}`)
        }
    })
 
}
 
defineActions()