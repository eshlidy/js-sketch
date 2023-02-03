const upButtonNode = document.querySelector('.up-button')
const downButtonNode = document.querySelector('.down-button')
const sidebarNode = document.querySelector('.sidebar')
const containerNode = document.querySelector('.container')
const mainSlideNode = document.querySelector('.main-slide')
const slidesCountNode = mainSlideNode.querySelectorAll('div').length

let activeSildeIndex = 0

sidebarNode.style.top = `-${(slidesCountNode - 1) * 100}vh`

upButtonNode.addEventListener('click', () => {
    changeSlide('up')
})

downButtonNode.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSildeIndex++
        if (activeSildeIndex === slidesCountNode) {
                activeSildeIndex = 0
        }
    } else if (direction === 'down') {
        activeSildeIndex--
        if (activeSildeIndex < 0) {
                activeSildeIndex = slidesCountNode -1
        }
    }

    const height = containerNode.clientHeight

    mainSlideNode.style.transform = `translateY(-${activeSildeIndex * height}px)`

    sidebarNode.style.transform = `translateY(${activeSildeIndex * height}px)`
}