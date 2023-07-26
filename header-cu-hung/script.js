
let drop = Array.from(document.querySelectorAll('.drop'))
let wapper = document.querySelector('.wapper')

drop.forEach((valu) => {
    valu.onmousemove = () => {
        wapper.style.display = 'block'
    }

    valu.onmouseout = () => {
        wapper.style.display = 'none'
    }
})



