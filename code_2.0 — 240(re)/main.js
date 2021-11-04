'use strict';

/*Задача 1js.Pm.Mn.ER

Дан следующий код:

<ul id="parent">
	<li>1</li>
	<li id="elem">2</li>
	<li>3</li>
</ul>

<input type="submit" id="button">
Сделайте так, чтобы по нажатию на кнопку удалялся элемент #elem.*/

let parentOne = document.getElementById('parentOne')
let elemOne = document.getElementById('elemOne')
let btnOne = document.getElementById('btnOne')

btnOne.addEventListener('click', () => parentOne.removeChild(elemOne))

/*Задача 2js.Pm.Mn.ER

Дан следующий код:

<ul id="parent">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>

<input type="submit" id="button">
Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.*/

let parentTwo = document.getElementById('parentTwo')
let btnTwo = document.getElementById('btnTwo')

btnTwo.addEventListener('click', () => parentTwo.removeChild(parentTwo.lastElementChild))

//Получение родителя

let elemThree = document.getElementById('elemThree')
let btnThree = document.getElementById('btnThree')

btnThree.addEventListener('click', () => elemThree.parentElement.removeChild(elemThree))

/*Задача 3js.Pm.Mn.ER

Дан следующий код:

<ul>
	<li>1</li>
	<li id="elem">2</li>
	<li>3</li>
</ul>
Сделайте так, чтобы по нажатию на #elem этот элемент удалился.*/

let elemFour = document.getElementById('elemFour')

elemFour.addEventListener('click', () => elemFour.parentElement.removeChild(elemFour))

/*Задача 4js.Pm.Mn.ER

Дан следующий код:

<ul>
	<li>1</li>
	<li id="elem">2</li>
	<li>3</li>
</ul>
Сделайте так, чтобы по нажатию на #elem этот элемент удалился.*/

let elemFive = document.getElementById('elemFive')

elemFive.addEventListener('click', () => elemFive.remove())

//

let parentSix = document.querySelector('.parentSix')
console.log(parentSix)
let elemLi = parentSix.querySelectorAll('li')

for(let li of elemLi){
    li.addEventListener('click', () => li.remove())
}