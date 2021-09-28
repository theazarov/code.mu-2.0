'use strict';

//Именованные обработчики событий в JavaScript

let button01 = document.getElementById('button01')

function getSOS(){
    console.log('soso')
}

button01.addEventListener('click', getSOS)

/*Задача 1

Дан следующий HTML код:

<input id="button1" type="submit" value="button1">
<input id="button2" type="submit" value="button2">
Даны следующие функции:

function func1() {
	alert(1);
}

function func2() {
	alert(2);
}
Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.*/

let buttonOne = document.getElementById('buttonOne')
let buttonTwo = document.getElementById('buttonTwo')

buttonOne.addEventListener('click', one)
buttonTwo.addEventListener('click', two)

function one(){
    console.log(1)
}

function two(){
    console.log(2)
}

//Привязывание одного обработчика ко многим элементам

function three(){
    console.log('hi!')
}

let button02 = document.getElementById('button02')
let button03 = document.getElementById('button03')

button02.addEventListener('click', three)
button03.addEventListener('click', three)

/*Задача 1

Даны 5 абзацев:

<p id="elem1">text</p>
<p id="elem2">text</p>
<p id="elem3">text</p>
<p id="elem4">text</p>
<p id="elem5">text</p>
Дана следующая функция:

function func() {
	alert('message');
}
Привяжите эту функцию ко всем 5-ти абзацам.*/

function four(){
    console.log('hello')
}

let elem01 = document.getElementById('elem01')
let elem02 = document.getElementById('elem02')

elem01.addEventListener('click', four)
elem02.addEventListener('click', four)