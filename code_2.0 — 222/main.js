'use strict';

//Практика на таймеры и работу с DOM в JavaScript

/*Задача 1js.Pm.Tmr.Pr

Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.*/

let elemOne = document.getElementById('elemOne')
let outOne = document.getElementById('outOne')

elemOne.addEventListener('click', function one(){
    setInterval(() => outOne.innerHTML++, 1000)
    this.removeEventListener('click', one)
})

/*Задача 2js.Pm.Tmr.Pr

Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.*/

let elemTwo = document.getElementById('elemTwo')
let outTwo = document.getElementById('outTwo')

elemTwo.addEventListener('click', function(){
    let timer;
    timer = setInterval(function(){
        outTwo.innerHTML--

        if(outTwo.innerHTML == 0){
            clearInterval(timer)
        }
    }, 1000)
    
})

/*Задача 3js.Pm.Tmr.Pr

Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.*/

let elemThree = document.getElementById('elemThree')

elemThree.addEventListener('blur', function one(){
    setInterval(function(self){
        self.value = self.value * self.value
    }, 1000, this)

    this.removeEventListener('focus', one)
})

elemThree.addEventListener('focus', function(){
    elemThree.value = ''
})

/*Задача 4js.Pm.Tmr.Pr

Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.*/

let elemFour = document.getElementById('elemFour')
let outFour = document.getElementById('outFour')
let timerFour;

elemFour.addEventListener('blur', four)

elemFour.addEventListener('focus', function(){
    elemFour.value = ''
    clearInterval(timerFour)

    elemFour.addEventListener('blur', four)
})

function four(){
    let num = Number(elemFour.value)

    timerFour = setInterval(() => {
        outFour.innerHTML = num--
    }, 1000);
    this.removeEventListener('blur', four)
}

elemFour.addEventListener('input', function(){
    outFour.innerHTML = elemFour.value
})