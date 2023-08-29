(function () {
    const sliders = [...document.querySelectorAll (".slider-body")];
    console.log(sliders)
    const selector = document.querySelector ('.slider-prev-next-control')
    console.log (selector)

    selector.addEventListener('click', ()=>changePosition(1))


})()
