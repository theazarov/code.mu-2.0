'use strict';

/*Задача 1js.Pm.Tmr.TS

Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.*/

let q = 0

let timerOne = setInterval(() => {
    console.log('QQQ' + q++)

    if(q >= 10){
        clearInterval(timerOne)
        console.log('the and')
    }
}, 1000);

//Кнопка для запуска таймера на JavaScript

let startTwo = document.getElementById("startTwo")

startTwo.addEventListener('click', function(){
    let w = 0

    let timetTwo = setInterval(() => {
        console.log(w++)

        if(w == 10){
            clearInterval(timetTwo)
        }
    }, 1000);
})

/*Задача 1js.Pm.Tmr.LB

Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.*/

let startThree = document.getElementById('startThree')

startThree.addEventListener('click', function(){
    let e = 10

    let timerThree = setInterval(() => {
        console.log('you lose...' + e--)

        if(e <= 0){
            clearInterval(timerThree)
            console.log('the and')
        }
    }, 1000);
})

//Многократное нажатие на кнопку

let startFour = document.getElementById('startFour')

startFour.addEventListener('click', function four(){

    let r = 10

    let timerFour = setInterval(() => {

        console.log('stop' + r--)

        if(r == 0){
            console.log('bye')
            clearInterval(timerFour)
        }
    }, 1000);

    this.removeEventListener('click', four)
})


let startFive = document.getElementById('startFive')

startFive.addEventListener('click', function five(){

    let t = 10

    let timerFive = setInterval(() => {
        console.log(t--)
        if(t == 0){
            clearInterval(timerFive)
            console.log('THE AND')
        }
    }, 1000);
})