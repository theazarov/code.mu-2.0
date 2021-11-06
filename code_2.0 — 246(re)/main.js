'use strict';

//Смежная вставка элементов на JavaScript

/*Задача 1js.Pm.Mn.IA

Дан элемент:

<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Вставьте перед ним абзац с текстом '!!!'.*/

let elemOne = document.getElementById('elemOne')
let pOne = document.createElement('p')
pOne.innerHTML = 'hi'
elemOne.insertAdjacentElement('beforebegin', pOne)

/*Задача 2js.Pm.Mn.IA

Дан элемент:

<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Вставьте после него абзац с текстом '!!!'.*/

let elemTwo = document.getElementById('elemTwo')
let pTwo = document.createElement('p')
pTwo.innerHTML = 'hi'
elemTwo.insertAdjacentElement('afterend', pTwo)

/*Задача 3js.Pm.Mn.IA

Дан элемент:

<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Вставьте ему в начало абзац с текстом '!!!'.*/

let elemThree = document.getElementById('elemThree')
let pThree = document.createElement('p')
pThree.innerHTML = 'hi'
elemThree.insertAdjacentElement('afterbegin', pThree)

/*Задача 4js.Pm.Mn.IA

Дан элемент:

<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Вставьте ему в конец абзац с текстом '!!!'.*/

let elemFour = document.getElementById('elemFour')
let pFour = document.createElement('p')
pFour.innerHTML = 'hi'
elemFour.insertAdjacentElement('beforeend', pFour)

//Смежная вставка тегов

/*Задача 5js.Pm.Mn.IA

Дан элемент:

<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Дан элемент. Вставьте перед ним следующий тег:

<div class="www"><p>text</p><p>text</p><input></div>*/

let elemFive = document.getElementById('elemFive')
elemFive.insertAdjacentHTML('beforebegin', '<div class="www"><p>text</p><p>text</p><input></div>')