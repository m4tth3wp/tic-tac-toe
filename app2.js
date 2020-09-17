/*----- constants -----*/
let gameFinished = false

/*----- app's state (variables) -----*/
const pickedboxes = []

/*----- cached element references -----*/
const cellElements = document.querySelectorAll('.boxes')
let playerOne = document.getElementById('player-one')
let playerTwo = document.getElementById('player-two')
let messageBox = document.getElementById('messages')

/*----- event listeners -----*/
cellElements.forEach(function(cell) {
    cell.addEventListener('click', handleClick)

})


/*----- functions -----*/
function handleClick(e) {
    e.preventDefault()
    e.target.textContent = 'X'
    pickedboxes.push(e.target)
    console.log('clicked')
}

const playerHighlight = (player1, player2) => {
    player1.style.backgroundColor = 'yellow'
    player2.style.backgroundColor = 'white'
}

