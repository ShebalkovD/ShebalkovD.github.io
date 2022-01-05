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