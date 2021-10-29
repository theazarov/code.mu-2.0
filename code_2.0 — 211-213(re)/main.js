'use strict';

//Привязывание контекста через метод call в JavaScript

let elem01 = document.getElementById('elem01')

function one(){
    console.log(this.value)
}

one.call(elem01)

/*Задача 1js.Pm.Ctx.CM

Дана функция:

function func() {
	console.log(this.value);
}
Даны три инпута:

<input id="elem1" value="text1">
<input id="elem2" value="text2">
<input id="elem3" value="text3">
С помощью метода call и функции func выведите на экран value каждого из инпутов.*/

let elemOne = document.getElementById('elemOne')
let elemTwo = document.getElementById('elemTwo')
let elemThree = document.getElementById('elemThree')

one.call(elemOne)
one.call(elemTwo)
one.call(elemThree)

//Метод call с параметрами

/*Задача 2js.Pm.Ctx.CM

Пусть дан следующий код:

<input id="elem" value="привет">
let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

func(); // тут должно вывести 'привет, Иванов Иван'
Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'привет, Иванов Иван'. Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.*/

let myName = document.getElementById('myName')

function nameOne(thename, surname){
    console.log(this.value + thename + surname)
}

nameOne.call(myName, 'ivan', 'petrov')

//Привязывание контекста через метод apply в JavaScript

/*Задача 1js.Pm.Ctx.AM

Пусть дан следующий код:

<input id="elem" value="привет">
let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

func(); // тут должно вывести 'привет, Иванов Иван'
Добавьте в последнюю строчку метод apply так, чтобы на экран вывелось 'привет, Иванов Иван'. Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.*/

let getName = document.getElementById('getName')

function getMyName(name, surname){
    console.log(this.value + name + surname)
}

getMyName.apply(getName, ['ivan', 'petrov'])

//Привязывание контекста через метод bind в JavaScript

let sum = document.getElementById('sum')

function getSum(num){
    console.log(Number(this.value) + num)
}

let newFunc = getSum.bind(sum)

newFunc(9)