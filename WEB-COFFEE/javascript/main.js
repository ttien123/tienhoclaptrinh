


// sự kiện scroll
import scrollWeb from './scroll.js'
scrollWeb()

// sự kiện click
import clickModalMenu from './openMenu.js'
import openModalOrder from './openOrder.js'
clickModalMenu()
openModalOrder()


var number1 = document.querySelector('.number1')
var i = 0;
var sett = setInterval(() => {
    i+=15
    number1.innerHTML = i;
},10);

setTimeout(() => {
    clearInterval(sett)
    number1.innerHTML = 3780;
}, 3000);