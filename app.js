const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll(".mole")
const timeLeft = document.querySelector('#time-left')

let score = document.querySelector("#score")
let currentTime = timeLeft.textContent

let result = 0

function squareSelector() {
    square.forEach(className => {
        className.classList.remove("mole")
    })

    let randomSquare = square[Math.floor(Math.random() * 9)]
    randomSquare.classList.add("mole")

    // assigning the randomSquare id to hitposition

    hitposition = randomSquare.id
}

// Score increaser

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitposition) {
            result = result + 1;
            score.textContent = result;
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(squareSelector, 500)
}

moveMole();

function timecounter () {
    currentTime --
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerId)
        alert("Game Over!  Your final score is "+result);
    }
}

timerId = setInterval(timecounter, 1000)