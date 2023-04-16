export default openModalOrder;

function openModalOrder() {
    
const modalOrder = document.querySelector('.js-modal-check-order')
const modalOrdered = document.querySelector('.js-modal-order__checked')
const modalOrderout = document.querySelector('.js-modalCheckout')
const OpenOrderS = document.querySelectorAll('.js-open-modal-order')
const modalOpenorder = document.querySelector('.js-modal-order')
const modalOutorder = document.querySelector('.js_modal-order-out')
const modalOrderCtn = document.querySelector('.js-modal-order-container')

function openModalOder () {
    modalOpenorder.classList.add('open')
    modalOpenorder.animate([
        {
            opacity: 0
        },
        {
            opacity: 1
        }
    ],{
        duration: 500,
        fill: 'forwards'
    })
}



function removeModaloder () {
    var opt = modalOpenorder.animate([
        {
            opacity: 1
        },
        {
            opacity: 0
        }
    ],{
        duration: 500,
        fill: 'forwards'
    })

    opt.addEventListener('finish', function() {
        modalOpenorder.classList.remove('open')
    });

}

function modalOrderopen () {
    modalOrdered.classList.add('open')
    modalOrderout.classList.add('open')

}

function removeModalOrder () {
    modalOrdered.classList.remove('open')
    modalOrderout.classList.remove('open')

}

modalOutorder.addEventListener('click',removeModaloder)
modalOpenorder.addEventListener('click',removeModaloder)
for (const OpenOrder of OpenOrderS){
    OpenOrder.addEventListener('click', openModalOder)
}
modalOrder.addEventListener('click',modalOrderopen)
modalOrderout.addEventListener('click',removeModalOrder)
modalOrderCtn.addEventListener('click',function (event) {
    event.stopPropagation()

})
}