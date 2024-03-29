const form = document.querySelector('form');
const result = document.querySelector('.res');
const block = document.querySelector('.color-block');
const count = document.querySelector('.bmi-count');
const tabColor = document.querySelector('.tabColor');
const description = document.querySelector('.description');
const deleteBtn = document.querySelector('.delete')

    


form.addEventListener('submit', (e) =>{
    e.preventDefault();  
    
    // BMI formula
    const weigth = Number(document.querySelector('.weigth').value);
    const heigth = Number(document.querySelector('.heigth').value);
    const BMI = (weigth/(((heigth)/100)**2)).toFixed(2);          
    console.log(weigth, heigth)
    console.log(BMI)


    // BMI result shows in paragraph

    count.textContent = `${BMI}`
    
    //animation effect
    // let counter = 0;
    // const timer = setInterval(()=>{
    //     count.textContent = `${counter}`
    //     if(counter < BMI){
    //         counter ++;
    //     if(counter = BMI)
    //         clearInterval()
    //     }
    // },100)

            
    // mistake check
    if(isNaN(weigth)|| isNaN(heigth)){
        alert('Пожалуйста вводите только цифры!!!')
        result.classList.add("d-none")
    }else{
        //change color tab and add info depending on the BMI result
    if(BMI < 18.5){
        tabColor.classList.remove('bg-success');
        tabColor.classList.remove('bg-danger');
        tabColor.classList.add('bg-warning');
        description.textContent = 'У вас низкий вес'
        result.classList.remove('d-none')
    }
    if(BMI <= 24.9 && BMI >= 18.5){
        tabColor.classList.remove('bg-warning');
        tabColor.classList.remove('bg-danger');
        tabColor.classList.add('bg-success')
        description.textContent = 'У вас оптимальный вес'
        result.classList.remove('d-none')
        
    }
    if(30 > BMI >= 25){
        tabColor.classList.remove('bg-success');
        tabColor.classList.remove('bg-danger');
        tabColor.classList.add('bg-warning');
        description.textContent = 'У вас лишний вес'
        result.classList.remove('d-none')
    }
    if(BMI >= 30){
        tabColor.classList.remove('bg-success');
        tabColor.classList.remove('bg-warning');
        tabColor.classList.add('bg-danger');
        description.textContent = 'У вас ожирение'
        result.classList.remove('d-none')
    }
    }

    form.reset()
})

deleteBtn.addEventListener("click", ()=>{
    result.classList.add('d-none')
})