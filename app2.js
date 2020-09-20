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
    winnerCheck()
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
        playerOne.style.backgroundColor = 'wheat'
        playerTwo.style.backgroundColor = 'grey'
    return
   } else {
       playerOneTurn = true
       playerOne.style.backgroundColor = 'grey'
       playerTwo.style.backgroundColor = 'wheat'
   }
}

function boardArray() {
    let positions = Array.from(cellElements)
    console.log(positions)
}

function winnerCheck() {
    let winner = false
    let positions = Array.from(cellElements)
    winningArrays.forEach(function(winner) {
        const pos0InnterText = positions[winner[0]].innerText
        const pos1InnterText = positions[winner[1]].innerText
        const pos2InnterText = positions[winner[2]].innerText
        const isWinningCombo = pos0InnterText !== '' && pos0InnterText === pos1InnterText && pos1InnterText === pos2InnterText
    
    if (isWinningCombo) {
        let winner = true
        messageBox.textContent = `Player ${pos0InnterText} is the winner!`
        cellElements.forEach(function(cell) {
            cell.removeEventListener('click', handleClick, {once: true})
        })
    }
    }) 
}

function clearBoard(e) {
    e.preventDefault()
    cellElements.forEach(function(cell) {
        cell.innerHTML = ' '
        cell.classList.remove('X')
        cell.classList.remove('O')
        playerOne.style.backgroundColor = 'wheat'
        playerTwo.style.backgroundColor = 'wheat'
        messageBox.textContent = ''
        location.reload()
    })
}