'use strict';

//Модули через замыкания в JavaScript

;(function(){
    let elem = document.getElementById('div1')

    function func(num){
        return num * num
    }

    elem.addEventListener('click', function(){
        this.textContent = func(elem.textContent)
    })
})();

;(function(){
    let elem = document.getElementById('div2')

    function func(num){
        return num * num * num
    }

    elem.addEventListener('click', function() {
        this.textContent = func(this.textContent)
    })
})();

//Передача параметров в модуль через замыкания в JavaScript

;(function (selOne, selTwo) {
    let div = document.getElementById(selOne)
    let button = document.getElementById(selTwo)

    button.addEventListener('click', function() {
        div.textContent = div.textContent * div.textContent    
    })
})('div3', 'btn')

/*Задача 1js.Pm.MCl.PP

Дана кнопка и три инпута, в которые вводятся числа. По нажатию на кнопку выведите в консоль сумму введенных чисел. Реализуйте задачу с помощью модуля.*/

;(function (one, two, three, btn) {
    let input1 = document.getElementById(one)
    let input2 = document.getElementById(two)
    let input3 = document.getElementById(three)
    let button = document.getElementById(btn)

    button.addEventListener('click', function () {
        return console.log(Number(input1.value) + Number(input2.value) + Number(input3.value))
    })
})('inputOne', 'inputTwo', 'inputThree', 'btnTwo')