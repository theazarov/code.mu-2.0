'use strict';

//Основы работы с функцией setInterval в JavaScript

let i = 0

function timerOne(){
    console.log(i++)
}

setInterval(timerOne, 1000)

setInterval(function(){
    console.log('one')
}, 1000)

/*Задача 1js.Pm.Tmr.Ln

Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.*/

setInterval(function(){
    console.log('hello kitty')
}, 3000)

//Счетчик через функцию setInterval в JavaScript

let j = 0

setInterval(function(){
    console.log(j++)
}, 1000)

let q = 100

setInterval(() => console.log(q--), 1000)

/*Задача 1js.Pm.Tmr.Cn

Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.*/

let y = 100

setInterval(function(){
    console.log(y--)

    if(y == 80){
        console.log('vsee')
    }
}, 1000)

//Остановка таймера JavaScript

let myTimer = setInterval(() => {
    console.log('hi')
}, 1000);

console.log(myTimer)

let u = 0

let timerTwo = setInterval(() => {
    console.log(u++)
    
    if(u >= 10){
        clearInterval(timerTwo)
    }
}, 1000);