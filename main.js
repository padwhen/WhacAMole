const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
let score = document.getElementById('score');
let timeleft = document.getElementById('time-left');
let result = 0;
let currentTime = 60;
let hitPosition;
let timerId;
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')

    return hitPosition = randomSquare.id;
}
squares.forEach(square => {
    square.addEventListener('mousedown',() => {
        if (square.id == hitPosition) {
            result++;
            score.innerHTML = result;
            hitPosition = null;
        } else {
            result--;
            score.innerHTML = result;
        }
    })
})
function randomInteger(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}
function moveMole() {
    timerId = setInterval(randomSquare,randomInteger(150,700));
}

moveMole();
function countDown() {
    console.log(currentTime)
    currentTime = currentTime - 1;
    timeleft.textContent = currentTime;
    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result)
    }
}
let countDownTimerId = setInterval(countDown, 1000);