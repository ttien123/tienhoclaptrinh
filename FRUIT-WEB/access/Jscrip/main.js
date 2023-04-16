
// getElement

var btnWeb = document.querySelector('.btn-full-web');
var headerStatic = document.querySelector('.header-web');
var headerDynamic = document.querySelector('.header-web-scroll');
var arrowScroll = document.querySelector('.arrow-scroll-top');


// biến scrollHeader
var isScrollHeader = true;
var isScrollArrow = true
var HeightHeader = headerStatic.offsetHeight;

// biến scroll product
var productsItems = document.querySelectorAll('.product-up')
var ArrayProductsList = Array.from(productsItems);

// biến about-web

var aboutCtns = document.querySelectorAll('.about-container');
var boxAboutCtn = document.querySelector('.about-box-container')
var ArrayAboutCtns = Array.from(aboutCtns);
var isSrollAbout = true;
var timeAbout = 250;

//footer-web

var itemFooterWeb = document.querySelector('.footer-web')
var footerItemUps = document.querySelectorAll('.contact-social__link:nth-child(odd)')
var footerItemdowns = document.querySelectorAll('.contact-social__link:nth-child(even)')
document.onscroll = function () {
    var heightScrollWeb = (window.scrollY || document.documentElement.scrollTop) + window.innerHeight;
    if (isScrollHeader && ((window.scrollY || document.documentElement.scrollTop) >= HeightHeader)) {
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
        isScrollHeader = false;
    } else {
        if (!isScrollHeader && ((window.scrollY || document.documentElement.scrollTop) < HeightHeader)) {
            headerDynamic.classList.remove('display-block');
            isScrollHeader = true;
        }
    }

    if (isScrollArrow && ((window.scrollY || document.documentElement.scrollTop) >= HeightHeader + 250)) {
        arrowScroll.classList.add('display-block')
        isScrollArrow = false;
    } else {
        if (!isScrollArrow && ((window.scrollY || document.documentElement.scrollTop) < HeightHeader + 250)) {
            arrowScroll.classList.remove('display-block');
            isScrollArrow = true;
        }
    }

    ArrayProductsList.forEach(function (product, index) {
        if (( heightScrollWeb >= product.offsetTop)) {
                product.style.animation = `slideUp linear 0.5s forwards`
        };
    });

    if (isSrollAbout && heightScrollWeb >= boxAboutCtn.offsetTop) {
        ArrayAboutCtns.forEach(function (service, index) {
            service.animate([
                {
                    opacity: 0,
                    transform: 'translateY(15%)',
                },
                {
                    opacity: 1,
                    transform: 'translateY(0%)',
                }
            ], {
                delay: timeAbout,
                duration: 500,
                fill: 'forwards',
                easing: 'ease',
                }
            );
            timeAbout += 200;
            isSrollAbout = false;
        });
    }

    if (heightScrollWeb >= itemFooterWeb.offsetTop + 100){
        for(var footerItemUp of footerItemUps) {
            footerItemUp.style.animation = 'footerFameUp ease 0.8s'
        }

        for(var footerItemdown of footerItemdowns) {
            footerItemdown.style.animation = 'footerFamedown ease 0.8s'
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


openAniText();
function openAniText() {
    var slideTextAppears = document.querySelectorAll('.slider-web.display-block .slider-content-heading__des');
    var slideHeaderAppears = document.querySelector('.slider-web.display-block .slider-container__header');
    var slideDesAppears = document.querySelector('.slider-web.display-block .slider-des');
    var slideBtnAppears = document.querySelector('.slider-web.display-block .btn-web');
    var arrayText = Array.from(slideTextAppears);
    var x = 300;

    slideHeaderAppears.animate([
        {
            transform: 'translateY(100%)',
        },
        {
            transform: 'translateY(0)',
        }
    ],{
        duration: 1000,
        fill: 'forwards',
        easing: 'ease',
        })


    arrayText.forEach(function (value,index) {
        value.animate([
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

    slideDesAppears.animate([
        {
            transform: 'translateY(100%)',
        },
        {
            transform: 'translateY(0)',
        }
    ],{
        delay: x,
        duration: 1000,
        fill: 'forwards',
        easing: 'ease',
        })

    slideBtnAppears.animate([
        {
            transform: 'translateY(100%)',
        },
        {
            transform: 'translateY(0)',
        }
    ],{
        delay: x + 1000,
        duration: 1000,
        fill: 'forwards',
        easing: 'ease',
        })
}

function hideAniText() {
    var slideTextAppears = document.querySelectorAll('.slider-web.display-block .slider-content-heading__des');
    var slideHeaderAppears = document.querySelector('.slider-web.display-block .slider-container__header');
    var slideDesAppears = document.querySelector('.slider-web.display-block .slider-des');
    var slideBtnAppears = document.querySelector('.slider-web.display-block .btn-web');
    var arrayText = Array.from(slideTextAppears);
    var x = 300;

    setTimeout(() => {
        slideHeaderAppears.animate([
            {

                transform: 'translateY(0)',
            },
            {

                transform: 'translateY(100%)',
            }
        ],{
            // duration: 100,
            fill: 'forwards',
            easing: 'ease',
            });
    
        arrayText.forEach(function (value,index) {
            value.animate([
                {
                    opacity: 1
                },
                {
                    opacity: 0
                }
            ],{
                // duration: 1500,
                fill: 'forwards',
                easing: 'ease',
                })
            x += 80;
        });
    
        slideDesAppears.animate([
            {
                transform: 'translateY(0%)',
            },
            {
                transform: 'translateY(100%)',
            }
        ],{
            // duration: 100,
            fill: 'forwards',
            easing: 'ease',
            })
    
        slideBtnAppears.animate([
            {
                transform: 'translateY(0%)',
            },
            {
                transform: 'translateY(100%)',
            }
        ],{
            // duration: 100,
            fill: 'forwards',
            easing: 'ease',
            })
        
    }, 1000);

}

var isSuccessNext = false;
var isSuccessPre = false;
var OpenedPreSlide = true;
var OpenedNextSlide = true;

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
                duration: 1000,
                fill: 'forwards',
                easing: 'ease'
                });                                      
                setTimeout(() => {
                    arrayallSlider[i].classList.remove('display-block'); 
                }, 800);


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
                    duration: 1000,
                    fill: 'forwards',
                    easing: 'ease'
                    });    
                    setTimeout(() => {
                        openAniText()
                    }, 800);
                    
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
                    duration: 1000,
                    fill: 'forwards',
                    easing: 'ease'
                    });

                    setTimeout(() => {
                        openAniText()
                    }, 800);
            }

            break;
        };

    }

    if (OpenedNextSlide) {
        setTimeNextSlide = setInterval(() => {
            hideAniText();
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
                        duration: 1000,
                        fill: 'forwards',
                        easing: 'ease'
                        });                                      
                        setTimeout(() => {
                            arrayallSlider[i].classList.remove('display-block'); 
                        }, 800);
        
        
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
                            duration: 1000,
                            fill: 'forwards',
                            easing: 'ease'
                            });    
                            setTimeout(() => {
                                openAniText()
                            }, 800);
                            
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
                            duration: 1000,
                            fill: 'forwards',
                            easing: 'ease'
                            });
        
                            setTimeout(() => {
                                openAniText()
                            }, 800);
                    }
                    break;
                };
        
            }
        }, 8000);
        OpenedNextSlide = false;
    } else {
        clearInterval(setTimeNextSlide);
        setTimeNextSlide = setInterval(() => {
            hideAniText();
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
                        duration: 1000,
                        fill: 'forwards',
                        easing: 'ease'
                        });                                      
                        setTimeout(() => {
                            arrayallSlider[i].classList.remove('display-block'); 
                        }, 800);
        
        
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
                            duration: 1000,
                            fill: 'forwards',
                            easing: 'ease'
                            });    
                            setTimeout(() => {
                                openAniText()
                            }, 800);
                            
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
                            duration: 1000,
                            fill: 'forwards',
                            easing: 'ease'
                            });
        
                            setTimeout(() => {
                                openAniText()
                            }, 800);
                    }
                    break;
                };
        
            }
        }, 8000);
    }


    if (isSuccessPre){
        clearInterval(setTimePreSlide);
    }
    isSuccessNext = true;
    clearInterval(setTimeSlide);
}

btnPreSlider.onclick = function () {
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
                duration: 1000,
                fill: 'forwards',
                easing: 'ease'
                });                                      
                setTimeout(() => {
                    arrayallSlider[i].classList.remove('display-block'); 
                }, 800);


            if (i - 1 < 0 ) {
                arrayallSlider[arrayallSlider.length - 1].classList.add('display-block')
                arrayallSlider[arrayallSlider.length - 1].animate([
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1
                    }
                ],{
                    duration: 1000,
                    fill: 'forwards',
                    easing: 'ease'
                    });    
                    setTimeout(() => {
                        openAniText()
                    }, 800);
                    
            }else {
                arrayallSlider[i - 1].classList.add('display-block')
                arrayallSlider[i - 1].animate([
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1
                    }
                ],{
                    duration: 1000,
                    fill: 'forwards',
                    easing: 'ease'
                    });

                    setTimeout(() => {
                        openAniText()
                    }, 800);
            }

            break;
        };
    };


    if (OpenedPreSlide) {
        setTimePreSlide = setInterval(() => {
            hideAniText();
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
                        duration: 1000,
                        fill: 'forwards',
                        easing: 'ease'
                        });                                      
                        setTimeout(() => {
                            arrayallSlider[i].classList.remove('display-block'); 
                        }, 800);
        
        
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
                            duration: 1000,
                            fill: 'forwards',
                            easing: 'ease'
                            });    
                            setTimeout(() => {
                                openAniText()
                            }, 800);
                            
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
                            duration: 1000,
                            fill: 'forwards',
                            easing: 'ease'
                            });
        
                            setTimeout(() => {
                                openAniText()
                            }, 800);
                    }
        
                    break;
                };
        
            }
        }, 8000);
        OpenedPreSlide = false;
    } else {
        clearInterval(setTimePreSlide);
        setTimePreSlide = setInterval(() => {
            hideAniText();
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
                        duration: 1000,
                        fill: 'forwards',
                        easing: 'ease'
                        });                                      
                        setTimeout(() => {
                            arrayallSlider[i].classList.remove('display-block'); 
                        }, 800);
        
        
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
                            duration: 1000,
                            fill: 'forwards',
                            easing: 'ease'
                            });    
                            setTimeout(() => {
                                openAniText()
                            }, 800);
                            
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
                            duration: 1000,
                            fill: 'forwards',
                            easing: 'ease'
                            });
        
                            setTimeout(() => {
                                openAniText()
                            }, 800);
                    }
        
                    break;
                };
        
            }
        }, 8000);
    }


    if (isSuccessNext) {
        clearInterval(setTimeNextSlide);
    }

    isSuccessPre = true;
    clearInterval(setTimeSlide);
}

setTimeSlide = setInterval(() => {
    hideAniText();
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
                duration: 1000,
                fill: 'forwards',
                easing: 'ease'
                });                                      
                setTimeout(() => {
                    arrayallSlider[i].classList.remove('display-block'); 
                }, 800);


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
                    duration: 1000,
                    fill: 'forwards',
                    easing: 'ease'
                    });    
                    setTimeout(() => {
                        openAniText()
                    }, 800);
                    
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
                    duration: 1000,
                    fill: 'forwards',
                    easing: 'ease'
                    });

                    setTimeout(() => {
                        openAniText()
                    }, 800);
            }
            break;
        };

    }
}, 8000);



// member-web 


var members = document.querySelectorAll('.member-content');
var arrayMembers = Array.from(members)
var btnNextMember = document.querySelector('.JS-btn-member-next');
var boxMember = document.querySelector('.member-box__content');
var btnPreMember = document.querySelector('.JS-btn-member-pre');
var heighSlideMember = arrayMembers[0].offsetWidth;
var currIndex = 0;
var pre = heighSlideMember;


var isNextMember = false;
var OpenedNextSlideMember = true
var ispreMember = false;
var OpenedpreSlideMember = true

btnNextMember.onclick = function () {

    currIndex++;
    boxMember.style.transition = `transform ease 0.8s`
    boxMember.style.transform = `translateX(-${currIndex * pre}px)`

    if (currIndex === arrayMembers.length - 1) {
        btnNextMember.classList.remove('active')
    }
    
    if (currIndex > 0) {
        btnPreMember.classList.add('active')
        btnPreMember.style.animation = 'showBtnMember ease 0.8s'
    }
    
    arrayBtnTap[currIndex].classList.add('click-tab')
    arrayBtnTap[currIndex - 1].classList.remove('click-tab')


}

btnPreMember.onclick = function () {
    currIndex--;
    boxMember.style.transition = `transform ease 0.8s`
    boxMember.style.transform = `translateX(${-currIndex * pre}px)`
   
    btnNextMember.classList.add('active')
    btnNextMember.style.animation = 'showBtnMember ease 0.8s'

    if (currIndex === 0) {
        btnPreMember.classList.remove('active')
    }

    arrayBtnTap[currIndex].classList.add('click-tab')
    arrayBtnTap[currIndex + 1].classList.remove('click-tab')
}



//tap member

var btnTap = document.querySelectorAll('.tab-member')

var arrayBtnTap = Array.from(btnTap)

arrayBtnTap.forEach(function (value,index) {
    value.onclick = function () {
        boxMember.style.transition = `transform ease 0.8s`
        boxMember.style.transform = `translateX(-${index * pre}px)`
        if (currIndex < index) {
            arrayBtnTap[index].classList.add('click-tab')
            arrayBtnTap[currIndex].classList.remove('click-tab')

            if (index === arrayMembers.length - 1) {
                btnNextMember.classList.remove('active')
            }
            
            if (index > 0) {
                btnPreMember.classList.add('active')
                btnPreMember.style.animation = 'showBtnMember ease 0.8s'
            }
            
        } else {
            arrayBtnTap[index].classList.add('click-tab')
            arrayBtnTap[currIndex].classList.remove('click-tab')

            btnNextMember.classList.add('active')
            btnNextMember.style.animation = 'showBtnMember ease 0.8s'
        
            if (index === 0) {
                btnPreMember.classList.remove('active')
            }
        }
        
        currIndex = index
    }
})