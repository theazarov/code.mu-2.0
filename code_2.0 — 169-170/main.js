'use strict';

//RE: Отвязывание обработчиков событий в цикле

let qqq = document.querySelectorAll('.qqq')

for(let elem of qqq){
    elem.addEventListener('click', one)
}

function one(){
    this.innerHTML += '>>>'
    this.removeEventListener('click', one)
}

/*Задача 1hash.txt: js.Pm.Dm.LHU

Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.*/

let www = document.querySelectorAll('.www')

function two(){
    this.innerHTML += '!'
    this.removeEventListener('click', two)
}

for(let elem of www){
    elem.addEventListener('click', two)
}

//Отвязывание анонимных функций в JavaScript

let eee = document.querySelectorAll('.eee')

for(let elem of eee){
    elem.addEventListener('click', function three(){
        this.innerHTML += 'X'
        this.removeEventListener('click', three)
    })
}

//Работа с атрибутами через методы в JavaScript
//Метод getAttribute

let elem01 = document.getElementById('elem01')
let value = elem01.getAttribute('value')

console.log(value)

/*Задача 1hash.txt: js.Pm.Dm.AVM

Дан элемент:

<input id="elem" value="text">
Получите значение его атрибута value.*/

let elem02 = document.getElementById('elem02')
let button02 = document.getElementById('button02')

button02.addEventListener('click', function(){
    console.log(elem02.getAttribute('value'))
    console.log(elem02.value)
})

/*Задача 2hash.txt: js.Pm.Dm.AVM

Дан элемент:

<input id="elem" class="www zzz">
Получите значение его атрибута class.*/

let elem03 = document.getElementById('elem03')

let getClass = elem03.getAttribute('class')
console.log(getClass)

//Метод setAttribute

let elem04 = document.getElementById('elem04')

elem04.setAttribute('value', 'abc')

console.log(elem04.value)

/*Задача 3hash.txt: js.Pm.Dm.AVM

Дан элемент:

<input id="elem">
Установите его атрибут value в значение 'text'.*/

let elem05 = document.getElementById('elem05')

elem05.setAttribute('value', 'text')

console.log(elem05.value)

/*Задача 4hash.txt: js.Pm.Dm.AVM

Дан элемент:

<input id="elem">
Установите ему атрибут class в значение 'valid'.*/

let elem06 = document.getElementById('elem06')

elem06.setAttribute('class', 'valid')

console.log(elem06.className)

//Метод removeAttribute

let elem07 = document.getElementById('elem07')

elem07.removeAttribute('value')

console.log(elem07)

/*Задача 5hash.txt: js.Pm.Dm.AVM

Дан элемент:

<input id="elem" value="text">
Удалите у него атрибут value.*/

let elem08 = document.getElementById('elem08')

elem08.removeAttribute('value')

console.log(elem08)

//Метод hasAttribute

let elem09 = document.getElementById('elem09')

console.log(elem09.hasAttribute('value'))
console.log(elem09.hasAttribute('class'))