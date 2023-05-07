




let zoom = document.querySelector('.box-log')
let imgZoom = document.querySelector('.img-box-zoom')
let imgNoZoom = document.querySelector('.img-box')

imgNoZoom.addEventListener('mousemove', (event) => {
    imgZoom.style.opacity = 1;

    let positionPx = event.x - imgNoZoom.getBoundingClientRect().left
    let positionX = (positionPx / imgNoZoom.offsetWidth) * 100


    let positionPy = event.y - imgNoZoom.getBoundingClientRect().top
    let positionY = (positionPy / imgNoZoom.offsetHeight) * 100

    imgZoom.style.setProperty('--zoom-X',positionX + '%');
    imgZoom.style.setProperty('--zoom-y',positionY + '%');

    // let transformX = -(positionX - 50) / 3
    // let transformY = -(positionY - 50) / 3

    // let transformX = 50 - positionX
    // let transformY = 50 - positionY
    // imgZoom.style.transform = `scale(1.5) translateX(${transformX}%) translateY(${transformY}%`

})

zoom.addEventListener('mouseout', () => {
    imgZoom.style.opacity = 0
})