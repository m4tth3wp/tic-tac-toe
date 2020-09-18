/*----- constants -----*/
const player1 = 'X'
const player2 = 'O'
const winningArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

/*----- app's state (variables) -----*/
const pickedboxes = []
let playerOneTurn= true
let playerTwoTurn = false
let gameFinished = false

/*----- cached element references -----*/
let cellElements = document.querySelectorAll('.boxes')
let playerOne = document.getElementById('player-one')
let playerTwo = document.getElementById('player-two')
let messageBox = document.getElementById('messages')
let resetGame = document.getElementById('reset-game')

/*----- event listeners -----*/
cellElements.forEach(function(cell) {
    cell.addEventListener('click', handleClick, {once: true})
})
resetGame.addEventListener('click', clearBoard)


/*----- functions -----*/
function handleClick(e) {
    // place choice
    const cell = e.target
    let playerTurn = playerOneTurn ? player1 : player2 
    e.preventDefault()
    placeChoice(cell, playerTurn)
    // check for win
    // check for draw 
    // switch turns
    switchTurns(playerTurn)
}

let placeChoice = function(cell, playerTurn) {
     if (playerTurn === player1) {
         cell.textContent = player1
         cell.classList.add('X')
     } else {
         cell.textContent = player2
         cell.classList.add('O')
     }
}

let switchTurns = function() {
   if (playerOneTurn) {
        playerOneTurn = false
        playerOne.style.backgroundColor = 'white'
        playerTwo.style.backgroundColor = 'yellow'
    return
   } else {
       playerOneTurn = true
       playerOne.style.backgroundColor = 'yellow'
       playerTwo.style.backgroundColor = 'white'
   }
}

function clearBoard(e) {
    e.preventDefault()
    document.querySelectorAll('.boxes').innerHTML = " ghvjh "
    console.log('hello')
}