


// sự kiện scroll
import scrollWeb from './scroll.js'
scrollWeb()

// sự kiện click
import clickModalMenu from './openMenu.js'
import openModalOrder from './openOrder.js'
clickModalMenu()
openModalOrder()

var swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    speed: 1500,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + ' cursor slider-stt">' + (index + 1) + '</span>';
        },
      },

});


