console.log('app.js is connected!')

// ********Variables list***********
let winningArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]

// array for choices
const answers = []

// ********cached element references **********

let playerOne = document.getElementById('player-one')
let playerTwo = document.getElementById('player-two')
let messageBox = document.getElementById('messages')
let choice = document.getElementById('1')


// *******Event listeners***********

choice.addEventListener('click', pushChoice)


// ******FUNCTIONS******

//push a choice to an array
const pushChoice = (e) => {
    e.preventDefault()
    e.target.textContent = 'X'
    answers.push(choice)
    console.log(e)
}

// Highlights a player's name to indicate it is their turn
const playerHighlight = (player1, player2) => {
    player1.style.backgroundColor = 'yellow'
    player2.style.backgroundColor = 'white'
}

//clears game board
const clearBoard = (choice) => {
    for (let choices = 0; choice.textContent; choices++) {
        choice.innerHTML = ''
    }
}

// Renders the game board
function gameRender() {
    clearBoard()
    clearMessage()
}

gameRender()