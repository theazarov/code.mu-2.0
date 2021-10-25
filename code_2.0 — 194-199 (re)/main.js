'use strict';

//Основы работы с объектом Event в JavaScript

let btn01 = document.getElementById('btn01')

btn01.addEventListener('click', function(event){
    console.log(event)
})

/*Задача 1js.Pm.OE.EC

Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора, подобно тому, как это сделано в следующем образце:*/

let out02 = document.getElementById('out02')

document.addEventListener('mousemove', function(event){
    out02.innerHTML = event.pageX + ' : ' + event.pageY
})

//Тип события в объекте Event в JavaScript

/*Задача 1js.Pm.OE.ET

В следующем коде в двум событиям привязан один и тот же обработчик:

<button id="elem">text</button>
let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func() {
	
}
Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.*/

let btn03 = document.getElementById('btn03')

function getColor(event){

    if(event.type == 'click'){
        event.target.classList.remove('colorRad')
        event.target.classList.add('colorGreen')
    }

    if(event.type == 'dblclick'){
        event.target.classList.remove('colorGreen')
        event.target.classList.add('colorRad')
    }
}

btn03.addEventListener('click', getColor)
btn03.addEventListener('dblclick', getColor)

//Элемент события в объекте Event в JavaScript

/*Задача 1js.Pm.OE.EE

Пусть у вас есть список ul с тегами li:

ul {
	padding: 30px;
	border: 1px solid red;
}
li {
	list-style-type: none;
	margin-bottom: 20px;
	border: 1px dashed black;
}
<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>

Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - добавьте ему в конец еще один пункт списка.*/

let elem04 = document.getElementById('elem04')

elem04.addEventListener('click', function(event){

    if(event.target.tagName == 'UL'){
        let elem = document.createElement('li')
        elem.innerHTML = 'newElem'
        elem.classList.add('colorGreen')

        elem04.appendChild(elem)
    }

    if(event.target.tagName == 'LI'){
        event.target.innerHTML += '!'
    }
})

//Получение нажатых клавиш в JavaScript

/*Задача 1js.Pm.OE.PKG

Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.*/

let elem05 = document.getElementById('elem05')
let out05 = document.getElementById('out05')

elem05.addEventListener('keydown', function(event){

    if(event.key == 'Enter'){
        out05.innerHTML = elem05.value
        elem05.value = ''
    }
})

//Отслеживание клавиш-модификаторов в JavaScript

/*Задача 1js.Pm.OE.KM

Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.*/

let btn06 = document.getElementById('btn06')

btn06.addEventListener('click', function(event){

    if(event.altKey){
        event.target.classList.add('colorGreen')
    } else {
        event.target.classList.remove('colorGreen')
    }
})

/*Задача 2js.Pm.OE.KM

Пусть у вас есть список ul с тегами li:

<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.*/

let elem07 = document.getElementById('elem07')

elem07.addEventListener('click', function (event) {
    if(event.ctrlKey){
        event.target.innerHTML += '!'
    }

    if(event.shiftKey){
        event.target.innerHTML += '?'
    }
})