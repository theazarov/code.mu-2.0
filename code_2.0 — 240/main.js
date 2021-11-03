'use strict';

//Удаление элементов на JavaScript

let parentOne = document.getElementById('parentOne')
let elemOne = document.getElementById('elemOne')

parentOne.removeChild(elemOne)

/*Задача 1js.Pm.Mn.ER

Дан следующий код:

<ul id="parent">
	<li>1</li>
	<li id="elem">2</li>
	<li>3</li>
</ul>

<input type="submit" id="button">
Сделайте так, чтобы по нажатию на кнопку удалялся элемент #elem.*/

let parentTwo = document.getElementById('parentTwo')
let elemTwo = document.getElementById('elemTwo')
let btnTwo = document.getElementById('btnTwo')

btnTwo.addEventListener('click', function(){
    parentTwo.removeChild(elemTwo)
})

/*Задача 2js.Pm.Mn.ER

Дан следующий код:

<ul id="parent">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>

<input type="submit" id="button">
Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.*/

let parentThree = document.getElementById('parentThree')
let btnThree = document.getElementById('btnThree')

btnThree.addEventListener('click', function(){
    parentThree.removeChild(parentThree.lastElementChild)
})

//Получение родителя

let elemFour = document.getElementById('elemFour')
let btnFour = document.getElementById("btnFour")

btnFour.addEventListener('click', function(){
    elemFour.parentElement.removeChild(elemFour)
})

/*Задача 3js.Pm.Mn.ER

Дан следующий код:

<ul>
	<li>1</li>
	<li id="elem">2</li>
	<li>3</li>
</ul>
Сделайте так, чтобы по нажатию на #elem этот элемент удалился.*/

let elemFive = document.getElementById('elemFive')

elemFive.addEventListener('click', function(){
    elemFive.parentElement.removeChild(elemFive)
})

//Совсем без родителя

let elemSix = document.getElementById('elemSix')
let liSix = document.querySelectorAll('li')



for(let elem of liSix){
    elem.addEventListener('click', function(){
        this.remove()
    })
}