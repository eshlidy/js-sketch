const boardNode = document.querySelector('#board');
const colors = ['#bd2e1e', '#bd2e1e', '#ba1ebd', '#1ebdbd', '#1ebd53', '#bd581e', '#dbc712', '#12db18']
const SQUARES_NUMBER = 1800;

for ( let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => 
        setColor(square))

    square.addEventListener('mouseleave', () => 
        removeColor(square))

    boardNode.append(square);
}


function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000 `
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}