'use strict';
//Получение DOM элемента в JavaScript

let btn01 = document.getElementById('btn01')

/*Задача 1hash.txt: js.Pm.Dm.EG

Даны 3 абзаца:

<p id="elem1">1</p>
<p id="elem2">2</p>
<p id="elem3">3</p>
Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.*/

let elem1 = document.getElementById('elem1')
let elem2 = document.getElementById('elem2')
let elem3 = document.getElementById('elem3')

console.log(elem1)
console.log(elem2.innerHTML)

//Более сложные селекторы.

let parent01 = document.querySelector('#parent01 input')

console.log(parent01)

/*Задача 2

Дан следующий HTML:

<div id="block">
	<p>1</p>
	<p>2</p>
</div>
Получите ссылку на первый абзац из дива с id, равным block.*/

let block01 = document.querySelector('#block01 p')
console.log(block01.innerHTML)

/*Задача 3

Дан следующий HTML:

<div class="block">
	<p>1</p>
	<p>2</p>
</div>
Получите ссылку на первый абзац из дива с классом block.*/

let block02 = document.querySelector('.block02 p')
console.log(block02)

/*Задача 4

Дан следующий HTML:

<p class="www">text</p>
<p class="www">text</p>
Получите ссылку на первый абзац с классом www.*/

let classWWW = document.querySelector('.www')
console.log(classWWW.innerHTML)