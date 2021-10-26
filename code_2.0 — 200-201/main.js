'use strict';

//Отмена действия по умолчанию в JavaScript

/*Задача 1js.Pm.OE.CDA

Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.*/

let elem01 = document.getElementById('elem01')

elem01.addEventListener('click', function(event){
    event.target.innerHTML += event.target.href
    event.preventDefault()
})

/*Задача 2js.Pm.OE.CDA

Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.*/

let elem02 = document.getElementById('elem02')
let elem03 = document.getElementById('elem03')
let out03 = document.getElementById('out03')
let elem04 = document.getElementById('elem04')

elem04.addEventListener('click', function(event){
    out03.innerHTML = +elem02.value + +elem03.value
    event.preventDefault()
})

//Всплытие событий в JavaScript

let elemOne = document.getElementById('elemOne')
let elemTwo = document.getElementById('elemTwo')
let elemThree = document.getElementById('elemThree')

elemThree.addEventListener('click', function(event){
    if(event.target.id == 'elemThree'){
        console.log('hi')
    }
})

elemTwo.addEventListener('click', function(event){
    if(event.target.id == 'elemTwo'){
        console.log('by')
    }
})

elemOne.addEventListener('click', function(event){
    if(event.target.id == 'elemOne'){
        console.log('su')
    }
})