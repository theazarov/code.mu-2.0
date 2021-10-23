'use strict';

//Основы работы с объектом Event в JavaScript

let btn01 = document.getElementById('btn01')

btn01.addEventListener('click', function(event){
    console.log(event)
})

/*Задача 1js.Pm.OE.Io

Самостоятельно проделайте описанные манипуляции и выведите объект с событием в консоль. Изучите структуру этого объекта.*/

let btn02 = document.getElementById('btn02')

btn02.addEventListener('click', function(event){
    console.log(event)
})

//Координаты события в JavaScript

/*Задача 1js.Pm.OE.EC

Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора, подобно тому, как это сделано в следующем образце:*/

let out03 = document.getElementById('out03')

document.addEventListener('mousemove', function(event){
    out03.innerHTML = event.clientX + ' : ' + event.clientY
})

//Тип события в объекте Event в JavaScript

let btn04 = document.getElementById('btn04')

btn04.addEventListener('click', function(event){
    console.log(event.type)
})

/*Задача 1js.Pm.OE.ET

В следующем коде в двум событиям привязан один и тот же обработчик:

<button id="elem">text</button>
let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func() {
	
}
Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.*/

let btn05 = document.getElementById('btn05')

btn05.addEventListener('click', myFunc)

btn05.addEventListener('dblclick', myFunc)

function myFunc(event){
    if(event.type == 'click'){
        btn05.classList.remove('colorRad')
        btn05.classList.add('colorGreen')
    }

    if(event.type == 'dblclick'){
        btn05.classList.remove('colorGreen')
        btn05.classList.add('colorRad')
    }
}

//Элемент события в объекте Event в JavaScript

let elem06 = document.getElementById('elem06')

elem06.addEventListener('click', function(event){
    console.log(this)
    console.log(event.target)
    console.log(event.target.innerHTML)
})

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

let elem07 = document.getElementById('elem07')

elem07.addEventListener('click', function(event){
    if(event.target.tagName == 'LI'){
        event.target.innerHTML += '!'
    }
    if(event.target.tagName == 'UL'){
        let newLI = document.createElement('li')
        newLI.innerHTML = 'text'

        elem07.appendChild(newLI)
        console.log(event.target.lastElementChild.classList.add('colorGreen'))
    }
})

//Получение нажатых клавиш в JavaScript

/*Задача 1js.Pm.OE.PKG

Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.*/

let elem08 = document.getElementById('elem08')
let out08 = document.getElementById('out08')

elem08.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        out08.innerHTML = elem08.value
    }
})

//Отслеживание клавиш-модификаторов в JavaScript

let btn09 = document.getElementById('btn09')

btn09.addEventListener('click', function(event){
    if(event.ctrlKey){
        console.log('ctrl')
    }

    if(event.shiftKey){
        console.log('shift')
    }

    if(event.altKey){
        console.log('alt')
    }
})

/*Задача 1js.Pm.OE.KM

Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.*/

document.getElementById('btn10').addEventListener('click', function(event){
    if(event.altKey){
        event.target.classList.add('colorRad')
    }
    if(!event.altKey){
        event.target.classList.remove('colorRad')
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

document.getElementById('elem11').addEventListener('click', function(event){
    if(event.ctrlKey){
        event.target.innerHTML += 1
    }

    if(event.shiftKey){
        event.target.innerHTML += 2
    }
})