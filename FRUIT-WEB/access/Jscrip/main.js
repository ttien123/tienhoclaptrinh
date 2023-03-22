
// getElement

var btnWeb = document.querySelector('.btn-full-web');
var headerStatic = document.querySelector('.header-web');
var headerDynamic = document.querySelector('.header-web-scroll');


// biến
var isScroll = true;
var totalHeightHeader = headerStatic.offsetHeight + 100;

document.onscroll = function () {
    if (isScroll && ((window.scrollY || document.documentElement.scrollTop) >= totalHeightHeader)) {
        headerDynamic.classList.add('display-block');
        headerDynamic.animate([
            {
                transform: 'translateY(-100%)',
            },
            {
                transform: 'translateY(0%)',
            }
        ], {
            duration: 500,
            fill: 'forwards',
            }
        );
        isScroll = false;
    } else {
        if (!isScroll && ((window.scrollY || document.documentElement.scrollTop) < totalHeightHeader)) {
            headerDynamic.classList.remove('display-block');
            isScroll = true;
        }
    }
    
    

}
// dom-event 


// click page link 
var btnOpenListpages = document.querySelectorAll('.JS-btn-listPage');

var Listpages = document.querySelectorAll('.JS-box-listPage');

for (var btnOpenListpage of btnOpenListpages) {
    btnOpenListpage.onclick = function (e) {
        console.log(btnOpenListpage)
        var x = btnOpenListpage.lastElementChild;
        x.classList.add('display-block')
        e.stopPropagation();
    }
}

// var arrayPage = Array.from(btnOpenListpages);

// arrayPage.forEach(function (value,index) {
//     value.onclick = function (e) {
//         var x = value.lastElementChild;
//         x.classList.add('display-block')
//         e.stopPropagation();
//     }
// })


btnWeb.onclick = function (e) {
    for (var Listpage of Listpages) {
            Listpage.classList.remove('display-block');
        }
}



// click shop bag

var btnOpenShopBag = document.querySelectorAll('.JS-btn-open-bag');
var btnCloseShopbag = document.querySelector('.JS-btn-close-bag');
var shopBag = document.querySelector('.Js-Shop-bag');

for (var openShopbag of btnOpenShopBag) {
    openShopbag.onclick = function () {
        shopBag.style.display = 'flex';
        shopBag.animate([
            {
                transform: 'translateX(100%)',
            },
            {
                transform: 'translateX(0%)',
            }
        ], {
            duration: 500,
            fill: 'forwards',
            easing: 'ease'
            }
        );

    }
}

btnCloseShopbag.onclick = function () {
    shopBag.animate([
        {
            transform: 'translateX(0%)',
        },
        {
            transform: 'translateX(100%)',
        }
    ], {
        duration: 500,
        fill: 'forwards',
        easing: 'ease'
        }
    );
    
}