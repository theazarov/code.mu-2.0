'use strict';

//Фокус текстовых полей в JavaScript

let elem01 = document.getElementById('elem01')

elem01.addEventListener('focus', function(){
    console.log(elem01.value)
})

/*Задача 1hash.txt: js.Pm.Dm.TFF

Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.*/

let elem02 = document.getElementById('elem02')

elem02.addEventListener('focus', function(){
    elem02.value = 'one'
})

elem02.addEventListener('blur', function(){
    elem02.value = 'two'
})

/*Задача 2hash.txt: js.Pm.Dm.TFF

Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.*/

let elem03 = document.getElementById('elem03')

elem03.addEventListener('blur', function(){
    console.log(elem03.value * elem03.value)
})

/*Задача 3hash.txt: js.Pm.Dm.TFF

Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.*/

let elem04 = document.getElementById('elem04')

elem04.addEventListener('focus', function(){
    elem04.value = ''
})

//Исключения при работе с атрибутами в JavaScript

let elem05 = document.getElementById('elem05')

console.log(elem05.className)

/*Задача 1hash.txt: js.Pm.Dm.EA

Дан див:

<div id="elem" class="content no-gap"></div>
Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.*/

let elem06 = document.getElementById('elem06')
let button06 = document.getElementById('button06')

button06.addEventListener('click', function(){
    console.log(elem06.className)
})

/*Задача 2hash.txt: js.Pm.Dm.EA

Дан див:

<div id="elem"></div>
Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.*/

let elem07 = document.getElementById('elem07')
let button07 = document.getElementById('button07')

button07.addEventListener('click', function(){
    elem07.classList.add('www')
    console.log(elem07.className)
})

/*Задача 3hash.txt: js.Pm.Dm.EA

Дан див с несколькими CSS классами, записанными через пробел:

<div id="elem" class="aaa bbb ccc"></div>
Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.*/

let elem08 = document.getElementById('elem08')
let button08 = document.getElementById('button08')

button08.addEventListener('click', function(){
    let myArr = elem08.className.split(' ')
    console.log(myArr)
})