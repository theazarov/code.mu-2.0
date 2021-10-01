'use strict';

//Цепочки методов и свойств в JavaScript

let elem01 = document.getElementById('elem01')
console.log(elem01.value)

console.log(document.getElementById('elem01').value)

/*Задача 1hash.txt: js.Pm.Dm.Chn

Дан следующий код:

<img id="image" src="avatar.png">
let image = document.querySelector('#image');
console.log(image.src);
Переделайте приведенный выше код так, чтобы вместо введения переменной image использовалась цепочка.*/

console.log(document.getElementById('image01').src)

//Объект this в JavaScript

let elem02 = document.getElementById('elem02')

function test02(){
    console.log(this.value)
}

elem02.addEventListener('blur', test02)

/*Задача 1hash.txt: js.Pm.Dm.Ths

Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.*/

let elem03 = document.getElementById('elem03')

elem03.addEventListener('focus', function(){
    this.value = 0.1
})

elem03.addEventListener('blur', function(){
    this.value = 2.3
})

/*Задача 2hash.txt: js.Pm.Dm.Ths

Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.*/

let button04 = document.getElementById('button04')

button04.addEventListener('click', function(){
    this.innerHTML ++
})

//Особое преимущество this

/*Задача 3hash.txt: js.Pm.Dm.Ths

Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.*/

let elem05 = document.getElementById('elem05')
let elem06 = document.getElementById('elem06')
let elem07 = document.getElementById('elem07')

function test07(){
    this.innerHTML += '!'
}

elem05.addEventListener('click', test07)
elem06.addEventListener('click', test07)
elem07.addEventListener('click', test07)

/*Задача 4hash.txt: js.Pm.Dm.Ths

Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.*/

let elem08 = document.getElementById('elem08')
let elem09 = document.getElementById('elem09')
let elem10 = document.getElementById('elem10')

function test10(){
    this.value *= this.value
}

elem08.addEventListener('blur', test10)