'use strict';

//Кнопки для запуска и остановки таймера на JavaScript

let startOne = document.getElementById('startOne')
let stopOne = document.getElementById('stopOne')
let timerOne;

startOne.addEventListener('click', function one(){

    let i = 0

    timerOne = setInterval(() => {
        console.log(i++ + ' one')
    }, 1000);
    this.removeEventListener('click', one)
})

stopOne.addEventListener('click', function one(){
    clearInterval(timerOne)
})

//start and stop

let startTwo = document.getElementById('startTwo')
let stopTwo = document.getElementById('stopTwo')
let clearTwo = document.getElementById('clearTwo')
let timerTwo;
let i = 0

function goTime(){

    timerTwo = setInterval(() => {
        console.log(i++ + 'two')
    }, 1000);

    this.removeEventListener('click', goTime)
}   

startTwo.addEventListener('click', goTime)

stopTwo.addEventListener('click', function(){
    clearInterval(timerTwo)

    startTwo.addEventListener('click', goTime)
})

clearTwo.addEventListener('click', function(){
    i = 0
    clearInterval(timerTwo)
})

/*Задача 1js.Pm.Tmr.SB

Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.

По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.*/

let startThree = document.getElementById('startThree')
let stopThree = document.getElementById('stopThree')
let j = 10
let timerThree;

function three(){
    
    timerThree = setInterval(() => {
        console.log('three ' + j--)

        if(j == 0){
            clearInterval(timerThree)
        }
    }, 1000);

    this.removeEventListener('click', three)
}

startThree.addEventListener('click', three)

stopThree.addEventListener('click', function(){
    clearInterval(timerThree)

    startThree.addEventListener('click', three)
})