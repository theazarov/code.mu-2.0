'use strict';

//Практика на таймеры и работу с DOM в JavaScript

let elemOne = document.getElementById('elemOne')

let timerOne = setInterval(() => {
    elemOne.value++
}, 1000);

/*Задача 2js.Pm.Tmr.Dm

Пусть в инпуте в атрибуте value изначально записано число 10. Запустите таймер, который каждую секунду будет уменьшать это число на единицу.*/

let elemTwo = document.getElementById('elemTwo')

let timerTwo = setInterval(() => {
    elemTwo.value--

    if(elemTwo.value == 0){
        clearInterval(timerTwo)
    }
}, 1000);

//Таймеры и потеря контекста в JavaScript

let elemThree = document.getElementById('elemThree')

elemThree.addEventListener('click', function(){
    let self = this
    this.value = 0

    setInterval(function(){
        
        console.log(self.value++)
    }, 1000);
})

//Другие способы решить проблему

let elemFour = document.getElementById('elemFour')

elemFour.addEventListener('click', function(){
    setInterval(() => {console.log(this.value++)}, 1000);
})

//Решение проблемы через замыкание

let elemFive = document.getElementById('elemFive')

elemFive.addEventListener('click', function one(){
    function myFunc(self){
        return function(){
            console.log(self.value++)
        }
    }
    setInterval(myFunc(this), 1000)
    this.removeEventListener('click', one)
})

//Передача контекста параметром функции setInterval

let elemSix = document.getElementById('elemSix')

elemSix.addEventListener('click', function(){
    setInterval(six, 1000, this)

    function six(self){
        console.log(self.value++)

    }
})

//

let elemSeven = document.getElementById('elemSeven')

elemSeven.addEventListener('click', function(){
    setInterval(function(self){
        console.log(self.value++)
    }, 1000, this)
})

/*Задача 1js.Pm.Tmr.PCBP

Пусть дан такой код:

<input type="button" id="elem" value="10">
let elem = document.querySelector('#elem');

elem.addEventListener('click', function() {
	setInterval(function() {
		this.value--;
	}, 1000);
});
Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду уменьшалось на 1. Однако, по нажатию на кнопку вообще ничего не происходит. Исправьте ошибку автора кода, используя изученный в данном уроке способ.*/

let elemEight = document.getElementById('elemEight')

elemEight.addEventListener('click', function(){
    setInterval(function(self){
        console.log(self.value--)
    }, 1000, this)
})