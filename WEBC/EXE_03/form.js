const nome = document.getElementById("nome")
const registarBTN = document.getElementById("registarBTN")

function defineActions() {

    registarBTN.addEventListener('click', function(e){
        console.log(nome.value)
    })

//input
nome.addEventListener('input', function(e) {
 if(nome.value.length > 2) registarBTN.disabled = false
})
}

defineActions()