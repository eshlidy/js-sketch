function slidesPlugin(activeSlide = 1) {
    const slidesNode = document.querySelectorAll('.slide')

    slidesNode[activeSlide].classList.add('active')

    for (const slide of slidesNode) {
        slide.addEventListener('click', () => {
            clearActiveClasses()

            slide.classList.add('active')
        })
    
    }

    function clearActiveClasses() {
        slidesNode.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(3)