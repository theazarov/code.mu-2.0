'use strict';

//Поиск элементов внутри другого элемента

let parentOne = document.getElementById('parentOne')

let childOne = parentOne.querySelectorAll('.childOne')

for(let elem of childOne){
	console.log(elem.innerHTML)
}

/*Задача 1hash.txt: js.Pm.Dm.IES

Дан элемент #parent:

<div id="parent">
	<p class="www">text</p>
	<p class="www">text</p>
	<p class="www">text</p>
	<p class="ggg">text</p>
	<p class="ggg">text</p>
	<p class="ggg">text</p>
</div>
let parent = document.querySelector('#parent');
Найдите внутри родителя элементы с классом www и запишите их в переменную elems1. Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2.*/

let partentTwo = document.getElementById('parentTwo')

let childTwo = partentTwo.querySelectorAll('.ggg')

//Пользовательские атрибуты в JavaScript

let elem01 = document.getElementById('elem01')

console.log(elem01.dataset.num)

elem01.dataset.num = 123

console.log(elem01.dataset.num)

/*Задача 1hash.txt: js.Pm.Dm.DA

Дан следующий код:

<div id="elem" data-text="str">text</div>
Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.*/

let elem02 = document.getElementById('elem02')

elem02.addEventListener('click', function(){
	elem02.innerHTML += elem02.dataset.text
})

/*Задача 2hash.txt: js.Pm.Dm.DA

Даны дивы, содержащие в атрибуте data-num свой порядковый номер:

<div data-num="1">text</div>
<div data-num="2">text</div>
<div data-num="3">text</div>
<div data-num="4">text</div>
<div data-num="5">text</div>
Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.*/

let elem03 = document.getElementsByTagName('div')

console.log(elem03)

for(let elem of elem03){
	if(elem.dataset.num >= 0 || elem.dataset.num <= 10){
		elem.addEventListener('click', function one(){
			elem.innerHTML += elem.dataset.num

			elem.removeEventListener('click', one)
		})
	}
}

/*Задача 3hash.txt: js.Pm.Dm.DA

Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. Пусть по двойному клику на эту кнопку на экран выводится, сколько кликов по этой кнопке было сделано.*/

let elem04 = document.getElementById('elem04')
let outOne = document.getElementById('outOne')

let i = 0

elem04.addEventListener('click', function(){
	elem04.dataset.clickME = i++
})

elem04.addEventListener('dblclick', function(){
	outOne.innerHTML = elem04.dataset.clickME
})

/*Задача 4hash.txt: js.Pm.Dm.DA

Дан инпут:

<input id="elem" data-length="5">
В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.*/

let elem05 = document.getElementById('elem05')

elem05.addEventListener('blur', function(){
	if(elem05.value.length == elem05.dataset.length){
		console.log('вы попали в пятерку')
	}
})

/*Задача 5hash.txt: js.Pm.Dm.DA

Дан инпут:

<input id="elem" data-min="5" data-max="10">
В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.*/

let elem06 = document.getElementById('elem06')

elem06.addEventListener('blur', function(){
	let myValue = elem06.value.length
	let min = elem06.dataset.min
	let max = elem06.dataset.max

	if(myValue < min){
		console.log('вы ввели слишком мало символов')
	}

	if(myValue > max){
		console.log('вы ввели слишком много символов')
	}

	if(myValue >= min && myValue <= max){
		console.log('вот так нормально')
	}
})

//Имена с дефисами

let elem07 = document.getElementById('elem07')

console.log(elem07.dataset.myTest)

/*Задача 6hash.txt: js.Pm.Dm.DA

Дан следующий код:

<div id="elem" data-product-price="1000" data-product-amount="5">
	товар яблоки
</div>
Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.*/

let elem08 = document.getElementById('elem08')

elem08.addEventListener('click', function(){
	elem08.innerHTML += elem08.dataset.productPrice * elem08.dataset.productAmount
})

//Обращение через методы

let elem09 = document.getElementById('elem09')

console.log(elem09.getAttribute('data-num'))
console.log(elem09.getAttribute('data-my-num'))

/*Задача 7hash.txt: js.Pm.Dm.DA

Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. Используйте метод setAttribute.*/

let qqq = document.querySelectorAll('.qqq')
console.log(qqq)

let j = 0

for(let elem of qqq){
	elem.setAttribute('num', j++)
}