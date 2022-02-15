




let option = {threshold: [1]};
let observer = new IntersectionObserver(onEntry, option);
let elemets = $(".stats__inner__item-num");
elemets.each((i, el) => {

observer.observe(el);
// console.log(num);

});

function onEntry (entry){
entry.forEach(change => {
if(change.isIntersecting){  
    let num = change.target.dataset.num;
    let countTarget = change.target
    console.log(num);
    // console.log(el);
    
    const time = 1000
    let step = 1
    const outNum = (el, n) => { //анимация счетчика
        if (n > 1000){
            step = 10;
        }
        let i = 0;
        let t = Math.round(time / (n / step));
        let interval = setInterval(() => {
            i = i + step;
            if (i == n){
                clearInterval(interval);
            }
            el.textContent = i;
        }, t)
    }

    outNum(countTarget, num)
   
}
});
}



