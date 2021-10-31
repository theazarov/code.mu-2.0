'use strict';

//Практика на таймеры и работу с DOM в JavaScript

/*Задача 1js.Pm.Tmr.Pr

Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.*/

let btnOne = document.getElementById('btnOne')
let outOne = document.getElementById('outOne')

btnOne.addEventListener('click', function one(){

    setInterval(() => {
        outOne.innerHTML++
    }, 1000);

    this.removeEventListener('click', one)
})

/*Задача 2js.Pm.Tmr.Pr

Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.*/

let btnTwo = document.getElementById('btnTwo')
let outTwo = document.getElementById('outTwo')
let timerTwo;

btnTwo.addEventListener('click', function two(){

    timerTwo = setInterval(() => {
        outTwo.innerHTML--
        if(outTwo.innerHTML == 0){
            clearInterval(timerTwo)
        }
    }, 1000);

    this.removeEventListener('click', two)
})

/*Задача 3js.Pm.Tmr.Pr

Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.*/

let elemThree = document.getElementById('elemThree')
let timerThree;

elemThree.addEventListener('blur', function three(){

    timerThree = setInterval(() => {
        elemThree.value = elemThree.value * elemThree.value
    }, 1000);

    this.removeEventListener('focus', three)
})

elemThree.addEventListener('focus', function three(){
    elemThree.value = ''
    clearInterval(timerThree)
})

/*Задача 4js.Pm.Tmr.Pr

Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.*/

let elemFour = document.getElementById('elemFour')
let outFour = document.getElementById('outFour')
let timerFour;

elemFour.addEventListener('blur', function four(){
    outFour.innerHTML = elemFour.value

    timerFour = setInterval(() => {
        outFour.innerHTML--

        if(outFour.innerHTML == 0){
            clearInterval(timerFour)
        }
    }, 1000);

    elemFour.value = ''
})

/*Задача 5js.Pm.Tmr.Pr

Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.*/

let elemFive = document.getElementById('elemFive')
let startFive = document.getElementById('startFive')
let stopFive = document.getElementById('stopFive')
let outFive = document.getElementById('outFive')
let timerFive;

elemFive.addEventListener('input', function(){
    outFive.innerHTML = elemFive.value
})

startFive.addEventListener('click', five)

stopFive.addEventListener('click', function(){
    clearInterval(timerFive)

    startFive.addEventListener('click', five)

})

function five(){
    timerFive = setInterval(() => {
        outFive.innerHTML--

        if(outFive.innerHTML == 0){
            clearInterval(timerFive)
        }
    }, 1000);

    this.removeEventListener('click', five)

    elemFive.value = ''
}

/*Задача 6js.Pm.Tmr.Pr

Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.*/

let startSix = document.getElementById('startSix')
let stopSix = document.getElementById('stopSix')
let outSix = document.getElementById('outSix')
let timerSix;

function six(){

    timerSix = setInterval(() => {
        outSix.innerHTML++
    }, 1000);
}

startSix.addEventListener('click', six)

stopSix.addEventListener('click', function(){
    clearInterval(timerSix)

    startSix.addEventListener('click', six)
})

/*Задача 7js.Pm.Tmr.Pr

Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.*/

let outSeven = document.getElementById('outSeven')

outSeven.addEventListener('click', function(event){
    setInterval(() => {
        outSeven.classList.toggle('colorGreen')
        outSeven.classList.toggle('colorRad')
    }, 1000);
})

/*Задача 8js.Pm.Tmr.Pr

Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часики, как показано ниже в образце:*/

let outEight = document.getElementById('outEight')


setInterval(() => {
    let date = new Date()
    outEight.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}, 1000);