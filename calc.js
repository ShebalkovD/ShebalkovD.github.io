
let price = document.getElementById('price') 
let priceSelectValue = [0,0,0] // Массив для хранения значений каждого селекта 

let setPrice = () => price.innerText = priceSelectValue[0] + priceSelectValue[1] + priceSelectValue[2] // Выводит цену 






window.addEventListener('click', (event) => { // Отслеживает по какой опции был клик, затем ищет родительский Селект и заносит значение в соотвествующий элемент массива


    if(event.target.dataset.action === 'type'){
        const listTask = event.target.closest('.case__price__dd')
        if(listTask.selectedIndex === 1){
            priceSelectValue[0] = 0
            priceSelectValue[0] += 1000 
            
        }

        if(listTask.selectedIndex === 2){
            priceSelectValue[0] = 0
            priceSelectValue[0] += 2000 
            
        }

        if(listTask.selectedIndex === 3){
            priceSelectValue[0] = 0
            priceSelectValue[0] += 3000 
            
        } 
        setPrice()
    }

    if(event.target.dataset.action === 'design'){
        const listTask = event.target.closest('.case__price__dd')
        if(listTask.selectedIndex === 1){
            priceSelectValue[1] = 0
            priceSelectValue[1] += 100
            
        }

        if(listTask.selectedIndex === 2){
            priceSelectValue[1] = 0
            priceSelectValue[1] += 200 
            
        }

        if(listTask.selectedIndex === 3){
            priceSelectValue[1] = 0
            priceSelectValue[1] += 300
            
        } 
        setPrice()
    }

    if(event.target.dataset.action === 'adaptive'){
        const listTask = event.target.closest('.case__price__dd')
        if(listTask.selectedIndex === 1){
            priceSelectValue[2] = 0
            priceSelectValue[2] += 10
            
        }

        if(listTask.selectedIndex === 2){
            priceSelectValue[2] = 0
            priceSelectValue[2] += 20 
            
        }

        if(listTask.selectedIndex === 3){
            priceSelectValue[2] = 0
            priceSelectValue[2] += 30
            
        } 
        setPrice()
        
    }

    
    
})
