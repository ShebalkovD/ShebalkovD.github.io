

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












