console.log('app.js is connected!')

// Variables list
let choice = document.getElementById('1')

// Player name cached
let playerOne = document.getElementById('player-one')
let playerTwo = document.getElementById('player-two')

// Winning Message 
let messageBox = document.getElementById('messages')

//winning arrays
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

// ******FUNCTIONS******

//push a choice to an array

const pushChoice = (e) => {
    e.preventDefault()
    e.target.textContent = 'X'
    answers.push(choice)
    console.log(e)
}

choice.addEventListener('click', pushChoice)

// Highlights a player's name to indicate it is their turn
const playerHighlight = (player1, player2) => {
    player1.style.backgroundColor = 'yellow'
    player2.style.backgroundColor = 'white'
}

playerHighlight(playerOne, playerTwo)

//clears game board

const clearBoard = (choice) => {
    for (let choices = 0; choice.textContent; choices++) {
        choice.innerHTML = ''
    }
}

clearBoard(choice)

playerOne.addEventListener('click', clearBoard)

// Renders the game board
function gameRender() {
    clearBoard()
    clearMessage()
}