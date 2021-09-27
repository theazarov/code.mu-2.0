'use strict';

//Привязывание обработчиков событий к элементам

let button01 = document.querySelector('#button01')

button01.addEventListener('click', function(){
    console.log('yes')
})

/*Задача 1hash.txt: js.Pm.Dm.EHB

Даны 3 кнопки:

<input id="button1" type="submit">
<input id="button2" type="submit">
<input id="button3" type="submit">
Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.*/

let button02 = document.querySelector('#button02')
let button03 = document.querySelector('#button03')
let button04 = document.querySelector('#button04')

button02.addEventListener('click', function(){
    console.log('002')
})

button03.addEventListener('click', function(){
    console.log('003')
})

button04.addEventListener('click', function(){
    console.log('004')
})

//Другие типы событий в JavaScript

/*Задача 1

Дана кнопка. По двойному клику по ней выведите на экран какое-нибудь сообщение.*/

let button05 = document.querySelector('#button05')

button05.addEventListener('dblclick', function(){
    console.log('2 click')
})

/*Задача 2

Дана кнопка. По наведению на нее выведите на экран какое-нибудь сообщение.*/

let button06 = document.querySelector('#button06')

button06.addEventListener('mouseover', function(){
    console.log('hi hater')
})

/*Задача 3

Дана кнопка. По уходу курсора с нее выведите на экран какое-нибудь сообщение.*/

let button07 = document.querySelector('#button07')

button07.addEventListener('mouseout', function(){
    console.log('bye hater')
})

//Ловим несколько событий на элементе

let button08 = document.querySelector('#button08')

button08.addEventListener('mouseover', function(){
    console.log('пришел')
})

button08.addEventListener('mouseout', function(){
    console.log('ушел')
})