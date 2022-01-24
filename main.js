

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

// -----------Дз раздел 10-----------//

// let book = {
//     age: 3,
//     name: 'cpp course'
// }

// console.log(book);
// // копирование объектов
// let bookTwo = Object.assign({}, book)

// console.log(bookTwo);

// // конструктор
//     function Book (age, name){
//         this.name = name; 
//         this.age = age
//     }
// console.log(new Book(2, 'py course'));

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


//-------------

document.addEventListener('DOMContentLoaded', () => {

    let stats = document.querySelectorAll('.stats__inner__item-num')
    let statsWrap = document.querySelector('.stats');
    let scrollOffset = statsWrap.offsetTop; //расстояние до нужного элемента

    const statsAnimate = () => {

        let windowCenter = (window.innerHeight / 2) + window.scrollY; // центр страницы
        
        
        
        let statsArr = [120, 4600, 340, 23]// нужные значения

            stats.forEach(el => {

                if(windowCenter >= scrollOffset){ // Проверяем долистал ли польз. до элемента

                    el.dataset.counter === "1" ? outNum(120, el) : 
                    el.dataset.counter === "2" ? el.innerHTML = statsArr[1] : 
                    el.dataset.counter === "3" ? el.innerHTML = statsArr[2] : 
                    el.dataset.counter === "4" ? el.innerHTML = statsArr[3] : console.log();
                   
                    // 4 элемента статистики 
                }else{
                    el.innerHTML = 0
                }

                
            })    
    }

    window.addEventListener('scroll', () =>{ //вызов функции при скроле
        statsAnimate()
        
    })
    
})


//анимация счетчика

let time = 10000
let step = 10;
let n = 0;

function outNum(num, el){
    let t = Math.round(time / (num / step)) // вычисление интервала  для соотв. значения
    
    let intr = setInterval(() => {
        n += step;
        if(n == num){
            clearInterval(intr) // остановка интервала не работает, счетчик бесконечный
        }
        el.innerHTML = n;
    }, t);

    
}













