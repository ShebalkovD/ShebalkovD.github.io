let stastsItems = document.querySelectorAll('.stats__inner__item-num')

// //анимация счетчика

// const time = 4000;
// const step = 1;

// let  outNum =(num, item) =>{
//         let i = 1;
//         let n = 0;
//         let t = Math.round(time / (num / step))
//         let intr = setInterval(() =>{
//             item.textContent = n;
//             n += step;
//             if(n == num){
//                 clearInterval(intr);
//             }
//         } ,t)

// }


let observer = new IntersectionObserver((item) => {
   console.log(item.typeOf);
   console.log("условие Observer");
    
},{threshold: 0.5})



stastsItems.forEach(item => {
//    console.log(item);
    observer.observe(item);

    
})



