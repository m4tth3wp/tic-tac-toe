console.log('app.js is connected!')

// Variables list
let choice = document.getElementById('1')

// Player name cached
let playerOne = document.getElementById('player-one')
let playerTwo = document.getElementById('player-two')

// Winning Message 
let messageBox = document.getElementById('messages')
// array for choices
const answers = []

choice.addEventListener('click', function(e) {
    e.preventDefault()
    e.target.textContent = 'X'
    answers.push(choice)
    console.log(e)
})

// Highlights a player's name to indicate it is their turn
const playerHighlight = (player1, player2) => {
    player1.style.backgroundColor = 'yellow'
    player2.style.backgroundColor = 'white'
}

playerHighlight(playerOne, playerTwo)


