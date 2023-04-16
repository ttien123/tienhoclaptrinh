export default clickModalMenu;

function clickModalMenu() {
const modalClicks = document.querySelectorAll('.js-modal-menu')
const modalHeader = document.querySelector('.js-modal-header')
const modalOut = document.querySelector('.js-modal-out')



function openModal () {
    modalHeader.animate([
        {
            transform: 'translateY(100%)',
        },
        {
            transform: 'translateY(0)',

        }
    ],{
        duration: 500,
        fill: 'forwards'
    })
}

function removeModal () {
    modalHeader.animate([
        {
            transform: 'translateY(0)',
        },
        {
            transform: 'translateY(100%)',

        }
    ],{
        duration: 500,
        fill: 'forwards'
    })
}

modalOut.addEventListener('click',removeModal)

for (const modalClick of modalClicks){
    modalClick.addEventListener('click',openModal)

}

}

