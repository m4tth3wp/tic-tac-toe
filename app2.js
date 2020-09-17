/*----- constants -----*/
const player1 = 'X'
const player2 = 'O'

/*----- app's state (variables) -----*/
const pickedboxes = []
let playerOneTurn= true
let playerTwoTurn = false
let gameFinished = false

/*----- cached element references -----*/
const cellElements = document.querySelectorAll('.boxes')
let playerOne = document.getElementById('player-one')
let playerTwo = document.getElementById('player-two')
let messageBox = document.getElementById('messages')

/*----- event listeners -----*/
cellElements.forEach(function(cell) {
    cell.addEventListener('click', handleClick, {once: true})

})


/*----- functions -----*/
function handleClick(e) {
    // place choice
    const cell = e.target
    let playerTurn = playerOneTurn ? player1 : player2 
    console.log(playerTurn)
    e.preventDefault()
    placeChoice(cell, playerTurn)
    // check for win
    // check for draw 
    // switch turns
    switchTurns(playerTurn)
}

const playerHighlight = (player1, player2) => {
    player1.style.backgroundColor = 'yellow'
    player2.style.backgroundColor = 'white'
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
    return
   } else {
       playerOneTurn = true
   }
}