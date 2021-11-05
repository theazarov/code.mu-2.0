'use strict';

//Смежная вставка элементов на JavaScript
//Метод insertAdjacentElement

let elemOne = document.getElementById('elemOne')

let elemP = document.createElement('p')
elemP.innerHTML = 'new!'

//elemOne.insertAdjacentElement('afterEnd', elemP)
elemOne.insertAdjacentElement('beforeBegin', elemP)

/*Задача 1js.Pm.Mn.IA

Дан элемент:

<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Вставьте перед ним абзац с текстом '!!!'.*/

let elemTwo = document.getElementById('elemTwo')
let twoP = document.createElement('p')
twoP.innerHTML = '!!!'

elemTwo.insertAdjacentElement('beforeBegin', twoP)

/*Задача 2js.Pm.Mn.IA

Дан элемент:

<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Вставьте после него абзац с текстом '!!!'.*/

let elemThree = document.getElementById('elemThree')
let threeP = document.createElement('p')
threeP.innerHTML = '!!!'

elemThree.insertAdjacentElement('afterend', threeP)

/*Задача 3js.Pm.Mn.IA

Дан элемент:

<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Вставьте ему в начало абзац с текстом '!!!'.*/

let elemFour = document.getElementById('elemFour')
let fourP = document.createElement('p')
fourP.innerHTML = '!!!'

elemFour.insertAdjacentElement('afterbegin', fourP)

/*Задача 4js.Pm.Mn.IA

Дан элемент:

<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Вставьте ему в конец абзац с текстом '!!!'.*/

let elemFive = document.getElementById('elemFive')
let fiveP = document.createElement('p')
fiveP.innerHTML = '!!!'

elemFive.insertAdjacentElement('beforeend', fiveP)

//Метод insertAdjacentHTML

let elemSix = document.getElementById('elemSix')

elemSix.insertAdjacentHTML('beforeend', '<p>hi</p>')

/*Задача 5js.Pm.Mn.IA

Дан элемент:

<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Дан элемент. Вставьте перед ним следующий тег:

<div class="www"><p>text</p><p>text</p><input></div>*/

let elemSeven = document.getElementById('elemSeven')

elemSeven.insertAdjacentHTML('beforebegin', '<p>!!!</p>')