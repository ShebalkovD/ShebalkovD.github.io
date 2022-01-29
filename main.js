

// Лоадер

// const loader = document.querySelector('.loader');
// const main = document.querySelector('.main');


// function init() {
//     setTimeout(() => {
//         loader.style.opacity = 0
//         loader.style.display = 'none'

//         main.style.display = 'block'
//         // main.style.opacity = 1

//     }, 3000)
// }

// init()

// -------burger---------//

const burgerBtn = document.querySelector('.header__nav__btn-wrapper')
const burgerMenu = document.querySelector('.header__nav__burger')

burgerBtn.onclick = () =>  burgerMenu.classList.toggle('active')


//----------------Слайдер----------------//


$('.case__slider').slick({
    dots: true
});

$('.reviews__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    
});

// Модальное окно 

let modal = document.querySelector('.modal')
const showOffer = () => {
    

    setTimeout(() => {
        modal.style.display = "block"
    }, 5000);
}

showOffer()
let modalBtn = document.querySelectorAll('.modal__btn');

modalBtn.forEach(el => {
    el.addEventListener('click', () => {
        modal.style.display = "none"
    })
});


// Анимация Nav меню при скролле


$(document).ready(function(){
    $(".case__slider-img").magnificPopup({type:'image'});   //Модальное окно с картинкой

    $(window).scroll(() => {

        let scrollDistance = $(window).scrollTop();

        $(".section").each((i, el) => {
            if($(el).offset().top - $(".header__nav").outerHeight() <= scrollDistance){
                $(".header__nav__list-item").each((i, el) => {
                    if($(el).hasClass("header__nav-active")){
                        $(el).removeClass("header__nav-active");
                    };
                });

                $('.header__nav__list-item:eq('+ i +')').addClass("header__nav-active")
            }
        })
    })
})



































//-----------------------

// document.addEventListener('DOMContentLoaded', () => {

    
   

//     // const navAnimate = () => {
//     //     let section = document.querySelectorAll('.section');
//     //     let navItem = document.querySelectorAll('.header__nav__list-item');
//     //     let windowCenter = (window.innerHeight / 2 ) + window.scrollY;
//     //     // console.log(scrollDistance);
//     //     section.forEach((i,el) => {
//     //         let scrollOffset = el.offsetTop;
//     //         if(windowCenter >= scrollOffset){

//     //             navItem.forEach((i,el) => {
//     //                 // if(el.classList.contains('.nav-active')){
//     //                 //     el.classList.remove('.nav-active')
//     //                 // }
//     //                 el[i].classList.add('.nav-active')
//     //             });
//     //         }
//     //     })

//     // }




//     window.addEventListener('scroll', () =>{ 
        
//         navAnimate()
        
//     })
    
// })
















