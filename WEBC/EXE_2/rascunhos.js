const readline = require('readline');

// Setup readline to read from stdin and write to stdout
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display the menu options
function displayMenu() {
    console.log("\nMenu:");
    console.log("1 - Visualizar");
    console.log("2 - Inserir");
    console.log("3 - Pesquisar");
    console.log("4 - Remover");
    console.log("5 - Estatísticas");
    console.log("6 - Sair");
    
    rl.question("Escolha uma opção: ", handleMenuChoice);
}

// Handle the user input for the menu
function handleMenuChoice(choice) {
    switch (choice) {
        case '1':
            visualizar();
            break;
        case '2':
            inserir();
            break;
        case '3':
            pesquisar();
            break;
        case '4':
            remover();
            break;
        case '5':
            estatisticas();
            break;
        case '6':
            sair();
            break;
        default:
            console.log("Opção inválida. Por favor, escolha uma opção válida.");
            displayMenu();
            break;
    }
}

// Menu option functions
function visualizar() {
    console.log("Visualizar selected");
    // Add your code here
    displayMenu();
}

function inserir() {
    console.log("Inserir selected");
    // Add your code here
    displayMenu();
}

function pesquisar() {
    console.log("Pesquisar selected");
    // Add your code here
    displayMenu();
}

function remover() {
    console.log("Remover selected");
    // Add your code here
    displayMenu();
}

function estatisticas() {
    console.log("Estatísticas selected");
    // Add your code here
    displayMenu();
}

function sair() {
    console.log("Saindo...");
    rl.close();
}

// Start the menu
displayMenu();
