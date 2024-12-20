/*

//-------------------------------------------------------------------------------------

// destruturação
const arr = [1,2,3,4,5]
const [n1, n2, ...n3] = arr
console.log(n3)
 
const pessoa = {
    nome : 'Paula',
    idade : 23,
    morada: {
        rua : 'Rua qq coisa',
        localidade : 'Porto'
    }
}
 
const {nome, idade, morada: {localidade}} = pessoa
console.log(localidade)

//-------------------------------------------------------------------------------------

const val = 3
try {
    console.log(val/0)
}
catch (error){
    console.log(error)
}
finally {
    console.log("Terminou")
}

//-------------------------------------------------------------------------------------

// timer
let count = 0
 
const timer = setInterval(() => {
    count++;
    console.log(count)
}, 1000)
 
setTimeout(() => {
    clearInterval(timer)
    console.log("Terminei!!!")
}, 6000)

//-------------------------------------------------------------------------------------

// funções avançadas
 
function multiple() { // qd utilizamos a keyword function
    console.log(arguments[2])
}
 
const multipleV2 = (...args) => {
    for(val of args) {
        console.log(val)
    }
}
 
//multiple(1,2,3,4,5,6)
multipleV2(1,2,3,4,5,6)

//-------------------------------------------------------------------------------------

function sendMessage(msg, time) {
    setTimeout(() => {
        console.log(msg)
    }, time)
}
 
sendMessage("Hello", 2000)
sendMessage("All Good?", 1500)
sendMessage("Byeeee", 800)
 

Promise
    resolve (resposta) -> then / async  
    reject (erro) -> catch


//-------------------------------------------------------------------------------------

// fetch
 
// Seleciona o endpoint da documentação https://dummyjson.com/docs/products
 
const id = 24
fetch(`https://dummyjson.com/products/${id}`)
    .then(response => {
        if(response.ok) {
            return response.json()
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(`Erro: ${error}`))

//-------------------------------------------------------------------------------------
// Desafio API: Retornar todos os utilizadores que tenham um determinado nome (prompt). 
//No máximo deverá retornar 5 utilizadores


nome = prompt("Name: ")

fetch(`https://dummyjson.com/users/search?q=${nome}&limit=5`)
    .then(response => {
        if(response.ok) {
            return response.json()
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(`Erro: ${error}`))
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------

versão do prof:

const loadBTN = document.getElementById("loadBTN")
const recepyDIV = document.getElementById("recepyDIV")
 
const addReceipe = (data) => {
    // image (deverá ser apresentada a imagem)
    recepyDIV.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Cuisine:</strong> ${data.cuisine}</p>
        <p><strong>Difficulty:</strong> ${data.difficulty}</p>
        <p><strong>Cook Time:</strong> ${data.cookTimeMinutes} minutos</p>
        <p>
            <strong>Ingredients:</strong>
            <ul>
                ${data.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </p>
        <p>
            <strong>Instructions:</strong>
            <ul>
                ${data.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ul>
        </p>
        <p><img src='${data.image}' alt='Image of ${data.name}'></p>
       
    `  
}
 
function defineActions() {
    loadBTN.addEventListener('click', function(e) {
        fetch('https://dummyjson.com/recipes/1')
            .then(res => res.json())
            .then(data => {
                addReceipe(data)
            })
            .catch(error => {
                console.log(`Erroe fetching API DATA: ${error}`)
            })
    })
}
 
defineActions()

//-------------------------------------------------------------------------------------
esafio 1
Pretende-se popular uma página web com uma receita que será obtida através do endpoint: https://dummyjson.com/recipes/1
 
A página inicial deverá ter o seguinte aspeto visual:
 
Quando clicamos no botão a receita deverá ser impressa num DIV por baixo do botão. 
Deverão ser visualizadas as seguintes informações: name, ingredients, instructions, 
cookTimeMinutes, difficulty, cuisine e image (deverá ser apresentada a imagem)


single recipe:

document.getElementById('fetch-recipe-btn').addEventListener('click', fetchRecipe);
function fetchRecipe() { 
    fetch('https://dummyjson.com/recipes/1')
    .then(response => response.json())
    .then(data => displayRecipe(data))
    .catch(error => console.error('Error fetching recipe:', error)); 
}

function displayRecipe(recipe) { 
    document.getElementById('recipe-name').textContent = recipe.name; 
    document.getElementById('recipe-ingredients').textContent = recipe.ingredients.join(', '); 
    document.getElementById('recipe-instructions').textContent = recipe.instructions; 
    document.getElementById('recipe-cook-time').textContent = recipe.cookTimeMinutes; 
    document.getElementById('recipe-difficulty').textContent = recipe.difficulty; 
    document.getElementById('recipe-cuisine').textContent = recipe.cuisine; 
    document.getElementById('recipe-image').src = recipe.image; 
    document.getElementById('recipe-container').style.display = 'block'; 
}


//-------------------------------------------------------------------------------------

versão do prof:

const loadBTN = document.getElementById("loadBTN")
const recepyDIV = document.getElementById("recepyDIV")
 
const addReceipe = (data) => {
    // image (deverá ser apresentada a imagem)
    recepyDIV.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Cuisine:</strong> ${data.cuisine}</p>
        <p><strong>Difficulty:</strong> ${data.difficulty}</p>
        <p><strong>Cook Time:</strong> ${data.cookTimeMinutes} minutos</p>
        <p>
            <strong>Ingredients:</strong>
            <ul>
                ${data.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </p>
        <p>
            <strong>Instructions:</strong>
            <ul>
                ${data.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ul>
        </p>
        <p><img src='${data.image}' alt='Image of ${data.name}'></p>
       
    `  
}
 
function defineActions() {
    loadBTN.addEventListener('click', function(e) {
        fetch('https://dummyjson.com/recipes/1')
            .then(res => res.json())
            .then(data => {
                addReceipe(data)
            })
            .catch(error => {
                console.log(`Erroe fetching API DATA: ${error}`)
            })
    })
}
 
defineActions()

//-------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------


*/




// Add event listener to the button
document.getElementById('fetch-recipe-btn').addEventListener('click', fetchRecipe);

// Function to generate a random ID between a specified range
function getRandomId(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to fetch a random recipe
function fetchRecipe() {
    const randomId = getRandomId(1, 10); // Random ID between 1 and 10
    fetch(`https://dummyjson.com/recipes/${randomId}`)
        .then(response => response.json())
        .then(data => displayRecipe(data))
        .catch(error => console.error('Error fetching recipe:', error));
}

// Function to display the recipe details in the HTML
function displayRecipe(recipe) {
    document.getElementById('recipe-name').textContent = recipe.name;
    document.getElementById('recipe-ingredients').textContent = recipe.ingredients.join(', ');
    document.getElementById('recipe-instructions').textContent = recipe.instructions;
    document.getElementById('recipe-cook-time').textContent = recipe.cookTimeMinutes;
    document.getElementById('recipe-difficulty').textContent = recipe.difficulty;
    document.getElementById('recipe-cuisine').textContent = recipe.cuisine;
    document.getElementById('recipe-image').src = recipe.image;

    document.getElementById('recipe-container').style.display = 'block'; // Make the container visible
}






