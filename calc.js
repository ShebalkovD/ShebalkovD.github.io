
let price = document.getElementById('price') 
let priceTerms = document.getElementById('priceTerm') 
let priceSelectValue = [0,0,0] // Массив для хранения значений каждого селекта
let priceTermsValue = [0,0,0] // то же самое для сроков

let setPrice = () => {
    price.innerText = priceSelectValue[0] + priceSelectValue[1] + priceSelectValue[2]
    priceTerms.innerText = priceTermsValue[0] + priceTermsValue[1] + priceTermsValue[2]
} // Выводит цену 






window.addEventListener('click', (event) => { // Отслеживает по какой опции был клик, затем ищет родительский Селект и заносит значение в соотвествующий элемент массива


    if(event.target.dataset.action === 'type'){
        const listTask = event.target.closest('.case__price__dd')
        if(listTask.selectedIndex === 1){
            priceSelectValue[0] = 0
            priceSelectValue[0] += 1000 

            priceTermsValue[0] =  0
            priceTermsValue[0] += 5
            
        }

        if(listTask.selectedIndex === 2){
            priceSelectValue[0] = 0
            priceSelectValue[0] += 2000 

            priceTermsValue[0] =  0
            priceTermsValue[0] += 10
            
        }

        if(listTask.selectedIndex === 3){
            priceSelectValue[0] = 0
            priceSelectValue[0] += 3000 

            priceTermsValue[0] =  0
            priceTermsValue[0] += 15
            
        } 
        setPrice()
    }

    if(event.target.dataset.action === 'design'){
        const listTask = event.target.closest('.case__price__dd')
        if(listTask.selectedIndex === 1){
            priceSelectValue[1] = 0
            priceSelectValue[1] += 100

            priceTermsValue[1] =  0
            priceTermsValue[1] += 2
            
        }

        if(listTask.selectedIndex === 2){
            priceSelectValue[1] = 0
            priceSelectValue[1] += 200 

            priceTermsValue[1] =  0
            priceTermsValue[1] += 4
            
        }

        
        setPrice()
    }

    if(event.target.dataset.action === 'adaptive'){
        const listTask = event.target.closest('.case__price__dd')
        if(listTask.selectedIndex === 1){
            priceSelectValue[2] = 0
            priceSelectValue[2] += 10

            priceTermsValue[2] =  0
            priceTermsValue[2] += 7
            
        }

        if(listTask.selectedIndex === 2){
            priceSelectValue[2] = 0
            priceSelectValue[2] += 20 

            priceTermsValue[2] =  0
            priceTermsValue[2] += 14
            
        }

        if(listTask.selectedIndex === 3){
            priceSelectValue[2] = 0
            priceSelectValue[2] += 30

            priceTermsValue[2] =  0
            priceTermsValue[2] += 21
            
        } 
        setPrice()
        
    }

    
    
})


