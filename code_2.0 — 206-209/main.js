'use strict';

//Универсальное делегирование событий

let elemOne = document.getElementById('elemOne')

elemOne.addEventListener('click', function(event){
    let li = event.target.closest('li')

    if(li){
        li.innerHTML += '!'
    }
})

//Основы работы с контекстом в JavaScript

let elemTwo = document.getElementById('elemTwo')

function myFuncOne(){
    console.log(this.value)
}

elemTwo.addEventListener('blur', myFuncOne)

let elemThree = document.getElementById('elemThree')

elemThree.addEventListener('input', myFuncOne)

//Потеря контекста в JavaScript

let elemFour = document.getElementById('elemFour')

elemFour.addEventListener('blur', parent)

function parent(){
    console.log(this)

    function child(){
        console.log(this)
    }

    child()
}

/*Задача 1js.Pm.Ctx.CL

Пусть теперь в одной и во второй функции мы будем выводить value инпута. Определите, что выведется в строчках кода, отмеченных комментариями:

"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this.value); // что выведет?
	
	function child() {
		console.log(this.value); // что выведет?
	}
	child();
}*/

let elemFive = document.getElementById('elemFive')

function one(){
    let value = this.value
    console.log(value)

    function two(){
        console.log(value)
    }

    two()
}

elemFive.addEventListener('click', one)