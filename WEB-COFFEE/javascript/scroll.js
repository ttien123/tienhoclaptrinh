

export default scrollWeb;

var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)
function scrollWeb() {
//header-arrow
   let headerStatic = $('.header-top')
   let heightHeader = headerStatic.offsetHeight
   let headerDynamic = $('.JS-header')
   let isScrollHeader = true;
   let secWebs = Array.from($$('.Js-section'));
   let secItems = Array.from($$('.JS-header .navbar-item'));


// about-coffee
    let ctnHeading = $('#coffee .container-heading')
    let aboutCoffee = $('#coffee')
    let isAboutCoffee = true;
    let infoCoffeeLeft = $('.info-coffe__left')
    let infoCoffeeRight = $('.info-coffe__right')
    let infoCoffeeImg = $('.ctn-content__box-img')
// review-coffee

    let reviewCoffee = $('#review')
    let isReviewCoffee = true;
    let reviewImg = $('.container-review__box-img')
    let reviewContent = $('.container-review__content')

// blog
    let blogCoffee = $('#blog')
    let isBlogCoffee = true;
    let blogContent = $('.JS-blog')
    let blogImg = $('.container__blog-box-img')

//place
    let placeCoffee = $('#place')
    let isPlaceCoffee = true;
    let placewImg = $('.container-place__box-img')
    let placeContent = $('.container__place-info')

//footer

    let itemFooterWeb = $('.footer-coffee')
    let footerItemUps = $$('.footer-coffee .slide-box-social__link:nth-child(odd)')
    let footerItemdowns = $$('.footer-coffee .slide-box-social__link:nth-child(even)')
//scroll
    document.onscroll = function () {
        let heightWeb = window.scrollY || document.documentElement.scrollTop
        if (isScrollHeader && (heightWeb >= heightHeader)) {
            headerDynamic.classList.add('db-flex');
            headerDynamic.animate([
                {
                    opacity: 0,
                    transform: 'translateY(-100%)',
                },
                {
                    opacity: 1,
                    transform: 'translateY(0%)',
                }
            ], {
                duration: 500,
                fill: 'forwards',
                }
            );
            isScrollHeader = false;
        } else {
            if (!isScrollHeader && ((window.scrollY || document.documentElement.scrollTop) < heightHeader)) {
                headerDynamic.classList.remove('db-flex');
                isScrollHeader = true;
            }
        }

        secWebs.forEach(function (secWeb, idsecWeb) {
            if ((secWeb.offsetTop <= heightWeb + heightHeader + 100) && (heightWeb + heightHeader + 100 <= secWeb.offsetTop + secWeb.offsetHeight)) {
                secItems.forEach(function (secItem, idsecItem) {
                    if (secItem.matches('.active')) {
                        secItem.classList.remove('active')
                    }
                })
                secItems[idsecWeb].classList.add('active')
            };
        })

        if (isAboutCoffee && (aboutCoffee.offsetTop <= heightWeb + window.innerHeight)) {
            ctnHeading.animate([
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            ],{
                duration: 2000,
                fill: 'forwards',
                easing: 'ease'
                });       
            isAboutCoffee = false;

            infoCoffeeLeft.animate([
                {
                    opacity: 0,
                    transform: 'translateX(-50%)',
                },
                {
                    opacity: 1,
                    transform: 'translateX(0)',
                }
            ],{
                delay: 500,
                duration: 1000,
                fill: 'forwards',
                easing: 'ease'
                });  
                
            infoCoffeeRight.animate([
            {
                opacity: 0,
                transform: 'translateX(50%)',
            },
            {
                opacity: 1,
                transform: 'translateX(0)',
            }
        ],{
            delay: 500,
            duration: 1000,
            fill: 'forwards',
            easing: 'ease'
            });    

            infoCoffeeImg.animate([
                {
                    opacity: 0,
                    transform: 'translateY(30%)',
                },
                {
                    opacity: 1,
                    transform: 'translateY(0)',
                }
            ],{
                delay: 500,
                duration: 800,
                fill: 'forwards',
                easing: 'ease'
                });    
        };

        if (isReviewCoffee && (reviewCoffee.offsetTop <= heightWeb + window.innerHeight)) {
            reviewImg.animate([
                {
                    opacity: 0,
                    transform: 'translateX(-50%)',
                },
                {
                    opacity: 1,
                    transform: 'translateX(0)',
                }
            ],{
                delay: 500,
                duration: 1000,
                fill: 'forwards',
                easing: 'ease'
                });  
                
            reviewContent.animate([
            {
                opacity: 0,
                transform: 'translateX(50%)',
            },
            {
                opacity: 1,
                transform: 'translateX(0)',
            }
        ],{
            delay: 500,
            duration: 1000,
            fill: 'forwards',
            easing: 'ease'
            });    

            isReviewCoffee = false;
        };

        if (isBlogCoffee && (blogCoffee.offsetTop <= heightWeb + window.innerHeight)) {
            blogContent.animate([
                {
                    opacity: 0,
                    transform: 'translateX(-50%)',
                },
                {
                    opacity: 1,
                    transform: 'translateX(0)',
                }
            ],{
                delay: 800,
                duration: 1000,
                fill: 'forwards',
                easing: 'ease'
                });  

            blogImg.animate([
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                }
            ],{
                delay: 500,
                duration: 1500,
                fill: 'forwards',
                easing: 'ease'
                });  
            
                
                isBlogCoffee = false;
        };

        if (isPlaceCoffee && (placeCoffee.offsetTop <= heightWeb + window.innerHeight)) {
            placewImg.animate([
                {
                    opacity: 0,
                    transform: 'translateX(-50%)',
                },
                {
                    opacity: 1,
                    transform: 'translateX(0)',
                }
            ],{
                delay: 500,
                duration: 1000,
                fill: 'forwards',
                easing: 'ease'
                });  
            
            placeContent.animate([
                {
                    opacity: 0,
                    transform: 'translateX(50%)',
                },
                {
                    opacity: 1,
                    transform: 'translateX(0)',
                }
            ],{
                delay: 500,
                duration: 1000,
                fill: 'forwards',
                easing: 'ease'
                    });    
                    
            isPlaceCoffee = false;
        };


        if (heightWeb + window.innerHeight >= itemFooterWeb.offsetTop + 100){
            for(var footerItemUp of footerItemUps) {
                footerItemUp.style.animation = 'footerFameUp ease 0.8s'
            }
    
            for(var footerItemdown of footerItemdowns) {
                footerItemdown.style.animation = 'footerFamedown ease 0.8s'
            }
        }   

    }
}

