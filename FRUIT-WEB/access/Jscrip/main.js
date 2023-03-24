
// getElement

var btnWeb = document.querySelector('.btn-full-web');
var headerStatic = document.querySelector('.header-web');
var headerDynamic = document.querySelector('.header-web-scroll');


// biến
var isScroll = true;
var totalHeightHeader = headerStatic.offsetHeight;

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

// for (var btnOpenListpage of btnOpenListpages) {
//     btnOpenListpage.onclick = function (e) {
//         console.log(btnOpenListpage)
//         var x = btnOpenListpage.lastElementChild;
//         x.classList.add('display-block')
//         e.stopPropagation();
//     }
// }

var arrayPage = Array.from(btnOpenListpages);
var isOpen = true;
arrayPage.forEach(function (value,index) {
    value.onclick = function (e) {
        if (isOpen) {
            for (var Listpage of Listpages) {
                Listpage.classList.add('display-block');
            }
            isOpen = false;
        } else {
            for (var Listpage of Listpages) {
                Listpage.classList.remove('display-block');
            }
            isOpen = true;

        };

        e.stopPropagation()

    }
})

btnWeb.onclick = function () {
    for (var Listpage of Listpages) {
            Listpage.classList.remove('display-block');
            isOpen = true;
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

// click menu 
var btnOpenMenus = document.querySelectorAll('.Js-Open-menu');
var btnCloseMenu = document.querySelector('.JS-close-menu');
var menu = document.querySelector('.js-modal-menu');
var menuOpenPage = document.querySelector('.JS-page-menu');
var MenuListPage = document.querySelector('.JS-menu-listPage');
var MenuBgr = document.querySelector('.background-menu');
var liItems = document.querySelectorAll('.menu-content .nav-list__item');


for (var btnOpenMenu of btnOpenMenus) {
    btnOpenMenu.onclick = function (e) {
        menu.style.display = 'block';
        var aniOpenMenu = menu.animate([
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
        MenuBgr.style.display = 'block';

        for (var liItem of liItems) {
            liItem.animate([
                {
                    transform: 'translateY(32px)',
                    opacity: 0
                },
                {
                    transform: 'translateY(0)',
                    opacity: 1
                }
            ], {
                duration: 2000,
                fill: 'forwards',
                easing: 'ease'
            })
        }

        shopBag.style.display = 'none';
    }
}

btnCloseMenu.onclick = function () {
    menu.animate([
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

    MenuBgr.style.display = 'none';

}

menu.onclick = function () {
    MenuListPage.classList.remove('display-block');
}
menuOpenPage.onclick = function (e) {
    if (isOpen) {
        MenuListPage.classList.add('display-block');
        isOpen = false;
    } else {
        MenuListPage.classList.remove('display-block');
        isOpen = true;
    };
    e.stopPropagation()

}

MenuBgr.onclick = function () {
    menu.animate([
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
    MenuBgr.style.display = 'none';
    MenuListPage.classList.remove('display-block');
}


// animation-slider-web


var slideDesAppears = document.querySelector('.slider-des');
var slideBtnAppears = document.querySelector('.slider-web .btn-web');
var btnNextSlider = document.querySelector('.JS-btn-next')
var btnPreSlider = document.querySelector('.JS-btn-pre')
var allSlider = document.querySelectorAll('.slider-web')
var arrayallSlider = Array.from(allSlider);
var heightSlider = document.querySelector('.slide-1').offsetHeight;
var sliderHeight = document.querySelector('.box-slider-web');
sliderHeight.style.height = heightSlider + 'px';


function openAniText() {
    var slideTextAppears = document.querySelectorAll('.slider-web.display-block .slider-content-heading__des');
    var arrayText = Array.from(slideTextAppears);
    var x = 250;
    arrayText.forEach(function (value,index) {
        var name = value.animate([
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        ],{
            delay: x,
            duration: 1500,
            fill: 'forwards',
            easing: 'ease',
            })
        x += 80;
    });
}


function hideAniText() {
    var slideTextAppears = document.querySelectorAll('.slider-web.display-block .slider-content-heading__des');
    var arrayText = Array.from(slideTextAppears);
    arrayText.forEach(function (value,index) {
        var name = value.animate([
            {
                opacity: 1
            },
            {
                opacity: 0
            }
        ],{
            duration: 1500,
            fill: 'forwards',
            easing: 'ease',
            })
    });
}



openAniText();

    btnNextSlider.onclick = function () {
        hideAniText()
        for ( var i = 0; i < arrayallSlider.length; i++) {
            if (arrayallSlider[i].matches('.display-block')) {
                arrayallSlider[i].animate([
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0
                    }
                ],{
                    duration: 1500,
                    fill: 'forwards',
                    easing: 'ease'
                    });                   
                    
                    setTimeout(() => {
                        arrayallSlider[i].classList.remove('display-block');                                                                    
                    }, 500);


                if (i + 1 == arrayallSlider.length ) {
                    arrayallSlider[0].classList.add('display-block')
                    arrayallSlider[0].animate([
                        {
                            opacity: 0
                        },
                        {
                            opacity: 1
                        }
                    ],{
                        duration: 1500,
                        fill: 'forwards',
                        easing: 'ease'
                        });    

                        setTimeout(() => {
                            openAniText();
                        }, 1000);
                        
                }else {
                    arrayallSlider[i + 1].classList.add('display-block')
                    arrayallSlider[i + 1].animate([
                        {
                            opacity: 0
                        },
                        {
                            opacity: 1
                        }
                    ],{
                        duration: 1500,
                        fill: 'forwards',
                        easing: 'ease'
                        });
                    
                    setTimeout(() => {
                        openAniText();
                    }, 1000);
                }

                break;
            }

           

        }
    }



    

   