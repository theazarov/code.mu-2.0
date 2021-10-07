'use strict';

//Нахождение элементов по родственным связям
//Свойство firstElementChild

let elem01 = document.getElementById('elem01')

let getText = elem01.firstElementChild.innerHTML

console.log(getText)

let elem02 = document.getElementById('elem02')

console.log(elem02.firstElementChild)

//Свойство lastElementChild

let elem03 = document.getElementById('elem03')
console.log(elem03.lastElementChild.innerHTML)

let elem04 = document.getElementById('elem04')
console.log(elem04.lastElementChild)

//Свойство children

let elem05 = document.getElementById('elem05')

let elems05 = elem05.children

for(let elem of elems05){
    console.log(elem.innerHTML)
    elem.addEventListener('click', function(){
        elem.style.color = 'green'
    })
}

/*Задача 1hash.txt: js.Pm.Dm.PRS

Дан элемент #elem:

<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите первого потомка этого элемента и сделайте его текст красного цвета.*/

let elem06 = document.getElementById('elem06')

let firstElem06 = elem06.firstElementChild

firstElem06.style.color = 'red'

/*Задача 2hash.txt: js.Pm.Dm.PRS

Дан элемент #elem:

<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите последнего потомка этого элемента и сделайте его текст красного цвета.*/

let elem07 = document.getElementById('elem07')

let lastElem07 = elem07.lastElementChild

lastElem07.style.color = 'green'

/*Задача 3hash.txt: js.Pm.Dm.PRS

Дан элемент #elem:

<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите всех потомков этого элемента и добавьте им в конец текст '!'.*/

let elem08 = document.getElementById('elem08')

let childElem08 = elem08.children

for(let elem of childElem08){
    elem.innerHTML += '!'
}

//Родители элементов
//Свойство parentElement

let child01 = document.getElementById('child01')
console.log(child01.parentElement.id)

/*Задача 4hash.txt: js.Pm.Dm.PRS

Дан элемент #elem:

<div>
	<ul>
		<li>text</li>
		<li>text</li>
		<li id="elem">text</li>
		<li>text</li>
		<li>text</li>
	</ul>
</div>
Найдите его родителя и задайте ему красную границу.*/

let elem09 = document.getElementById('elem09')
let parentElem09 = elem09.parentElement

parentElem09.style.border = '1px solid black'

//Поиск всех родителей
//Метод closest

let myChild = document.getElementById('myChild')

let parentSearch = myChild.closest('.www')
console.log(parentSearch.id)

/*Задача 6hash.txt: js.Pm.Dm.PRS

Дан элемент:

<header>
	<div>
		<p>
			<span id="elem"></span>
		</p>
	</div>
</header>
Найдите ближайшего родителя этого элемента, являющегося тегом div.*/

let elem10 = document.getElementById('elem10')

let searcParentDiv = elem10.closest('div')

console.log(searcParentDiv)

/*Задача 7hash.txt: js.Pm.Dm.PRS

Дан элемент:

<header>
	<div class="www">
		<p class="www">
			<span id="elem"></span>
		</p>
	</div>
</header>
Найдите ближайшего родителя этого элемента, являющегося элементом с классом www.*/

let elem11 = document.getElementById('elem11')

let searchWWW = elem11.closest('.www')

console.log(searchWWW.tagName)

//Поиск соседей
//Свойство previousElementSibling

let elem12 = document.getElementById('elem12')
console.log(elem12.previousElementSibling.innerHTML)

//Свойство nextElementSibling

let elem13 = document.getElementById('elem13')
console.log(elem13.nextElementSibling.innerHTML)

/*Задача 8hash.txt: js.Pm.Dm.PRS

Дан элемент #elem:

<ul>
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите его соседа сверху и добавьте ему в конец текст '!'.*/

let elem14 = document.getElementById('elem14')

elem14.previousElementSibling.innerHTML += '!'

/*Задача 9hash.txt: js.Pm.Dm.PRS

Дан элемент #elem:

<ul>
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите его соседа снизу и добавьте ему в конец текст '!'.*/

let elem15 = document.getElementById('elem15')

elem15.nextElementSibling.innerHTML += '!'

/*Задача 10hash.txt: js.Pm.Dm.PRS

Дан элемент #elem:

<ul>
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.*/

let elem16 = document.getElementById('elem16')
let siblingOne = elem16.nextElementSibling
let siblingTwo = siblingOne.nextElementSibling

siblingTwo.innerHTML += '!'

/*Задача 11hash.txt: js.Pm.Dm.PRS

Дан элемент #elem:

<ul>
	<li>text1</li>
	<li>text2</li>
	<li id="elem">text3</li>
	<li>text4</li>
	<li>text5</li>
</ul>
Поменяйте местами текст его соседа сверху и текст его соседа снизу.*/

let elem17 = document.getElementById('elem17')

let one = String(elem17.previousElementSibling.innerHTML)
let two = String(elem17.nextElementSibling.innerHTML)

let oneElem = elem17.previousElementSibling
let twoElem = elem17.nextElementSibling

oneElem.innerHTML = two
twoElem.innerHTML = one

//Другие полезные методы для поиска элементов
//Метод getElementsByTagName

let elems18 = document.getElementsByTagName('h2')

for(let elem of elems18){
    elem.innerHTML = '!!!'
}

//Метод getElementsByClassName
let sss = document.getElementsByClassName('sss')

for(let elem of sss){
    elem.innerHTML += '>'
}