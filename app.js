console.log('app.js is connected!')

// Variables list
let choice = document.getElementById('top-left')

// array for choices
const answers = []

choice.addEventListener('click', function(e) {
    e.preventDefault()
    choice.innerHTML = 'X'
    answers.push(choice)
    console.log(answers)
})