'use strict';

//Решение проблемы с контекстом в JavaScript
//Первое решение проблемы

let elemOne = document.getElementById('elemOne')

function parentOne(){
    let param = this.value

    function childOne(){
        console.log(param)
    }

    childOne()
}

elemOne.addEventListener('blur', parentOne)

//Второе решение проблемы

let elemTwo = document.getElementById('elemTwo')

function parentTwo(){

    function childTwo(param){
        console.log(param)
    }

    childTwo(this.value)
}

elemTwo.addEventListener('blur', parentTwo)

//Третье решение проблемы

let elemThree = document.getElementById('elemThree')

elemThree.addEventListener('blur', parentThree)

function parentThree(){
    console.log(this)

    let child = () =>{
        console.log(this)
    }
    child()
}

//Привязывание контекста через метод call в JavaScript

let elemFour = document.getElementById('elemFour')

function four(){
    console.log(this.value)
}
four.call(elemFour)

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

let elem1 = document.getElementById('elem1')
let elem2 = document.getElementById('elem2')
let elem3 = document.getElementById('elem3')

function getValue(){
    console.log(this.value)
}
getValue.call(elem1)
getValue.call(elem2)
getValue.call(elem3)

//Метод call с параметрами

let elemFive = document.getElementById('elemFive')

function param(one, two){
    console.log(this.value + one + two)
}
param.call(elemFive, '!', '?')

/*Задача 2js.Pm.Ctx.CM

Пусть дан следующий код:

<input id="elem" value="привет">
let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

func(); // тут должно вывести 'привет, Иванов Иван'
Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'привет, Иванов Иван'. Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.*/

let elemSix = document.getElementById('elemSix')

function six(surname, name){
    console.log(this.value + ' ' + surname + ' ' + name)
}
six.call(elemSix, 'иванов', 'иван')