const startBtnNode = document.querySelector('.start');
const screensNode = document.querySelectorAll('.screen')
const timeListBtnNoed= document.querySelector('.time-list')
const timeElNode = document.querySelector('#time')
const boardNode = document.querySelector('.board')
const colors = ['#bd2e1e', '#bd2e1e', '#ba1ebd', '#1ebdbd', '#1ebd53', '#bd581e', '#dbc712', '#12db18']
let score = 0
let time = 0

startBtnNode.addEventListener('click', (event) => {
    event.preventDefault()
    screensNode[0].classList.add('up')
})

timeListBtnNoed.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screensNode[1].classList.add('up')
        startGame()
    }
})

boardNode.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current =  --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeElNode.innerHTML = `00:${value}`
}

function finishGame() {
    timeElNode.parentNode.classList.add('hide')
    boardNode.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 30)
    const {width, height} = boardNode.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    setColor(circle)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    boardNode.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}