'use strict';

//Передача родительского элемента в модуль через замыкания в JavaScript

;(function(root){
    let parent = document.querySelector(root)

    let div1 = parent.querySelector('#div1')
    let div2 = parent.querySelector('#div2')
    let div3 = parent.querySelector('#div3')
    let res = parent.querySelector('#res')
    let btn = parent.querySelector('#btn')

    btn.addEventListener('click', function(){
        let num1 = Number(div1.textContent)
        let num2 = Number(div2.textContent)
        let num3 = Number(div3.textContent)

        res.textContent = 'result: ' + (num1+num2+num3)
    })

})('#parent')

//Передача настроек модуля через замыкания в JavaScript
let config = {
    root: 'parentTwo',
    type: 'p',
    amount: 6
}

;(function({root, type, amount}){
    let parent = document.getElementById(root)

    for(let i = 0; i < amount; i++){
        let elem = document.createElement(type)
        elem.innerHTML = i
        parent.appendChild(elem)
    }
})(config)

//Параметры по умолчанию

let configTwo = {
	root:  'parentThree',
}

;(function({root, type = 'p', amount = 4}){
    let parent = document.getElementById(root)

    for(let i = 0; i <= amount; i++){
        let elem = document.createElement(type)
        elem.textContent = 'elem' + i
        parent.appendChild(elem)
    }
})(configTwo)

//Экспорт переменных и функций в модулях через замыкания в JavaScript

;(function (){
    let str = 'string'

    function func(){
        console.log('this function')
    }
    window.func = func;
})()

window.func()

/*Задача 1js.Pm.MCl.VFE

Дан следующий модуль:

;(function() {
	let str1 = 'переменная модуля';
	let str2 = 'переменная модуля';
	let str3 = 'переменная модуля';
	
	function func1() {
		alert('функция модуля');
	}
	function func2() {
		alert('функция модуля');
	}
	function func3() {
		alert('функция модуля');
	}
})();
Эскортируйте наружу одну из переменных и две любые функции.*/

;(function() {
	let str1 = 'переменная модуля';
	let str2 = 'переменная модуля';
	let str3 = 'переменная модуля';
	
	function func1() {
		alert('функция модуля');
	}
	function func2() {
		console.log('функция модуля');
	}
	function func3() {
		alert('функция модуля');
	}
    window.str1 = str1
    window.func2 = func2
})();

console.log(str1)
func2()

//Экспорт объекта

;(function() {
	function func1() {
		alert('функция модуля');
	}
	function func2() {
		alert('функция модуля');
	}
	function func3() {
		alert('функция модуля');
	}

    window.module = {func1, func2, func3}
})();

module.func1()

//Библиотеки через замыкания в JavaScript

;(function(){

    //сумма элементов массива
    function sumArr(arr){
        let result = 0;

        for(let elem of arr){
            result += elem
        }
        return result
    };

    //возведение в квадрат
    function square(num){
        return num * num
    };

    function avg(arr){
        return sumArr(arr) / arr.length
    }
    window.match = {sumArr, square, avg}
})()

console.log(match.avg([33,99]))