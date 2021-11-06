'use strict';

//Клонирование элементов на JavaScript

let parentOne = document.querySelector('#parentOne')
let elemOne = parentOne.querySelector('.elemOne')

let cloneOne = elemOne.cloneNode(true)
parentOne.appendChild(cloneOne)

/*Задача 1js.Pm.Mn.EC

Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.*/

let elemTwo = document.getElementById('elemTwo')
let btnTwo = document.getElementById('btnTwo')

btnTwo.addEventListener('click', function(){
    let clone = elemTwo.cloneNode(true)
    elemTwo.insertAdjacentElement('afterend', clone)
    clone.insertAdjacentHTML('beforebegin', '<br>')
})

//Проверка элементов в JavaScript

let elemThree = document.getElementById('elemThree')

console.log(elemThree.matches('p.www'))

/*Задача 1js.Pm.Mn.ECh

Дан элемент:

<div id="elem" class="www"></div>
Проверьте, является ли этот элемент элементом с классом www.*/

let elemFour = document.getElementById('elemFour')
console.log(elemFour.matches('div.qqq'))

/*Задача 2js.Pm.Mn.ECh

Дан элемент. Проверьте, является ли этот элемент абзацем.*/

let elemFive = document.getElementById('elemFive')
console.log(elemFive.matches('p'))

//Метод contains

let elemSix = document.getElementById('elemSix')
let childSix = elemSix.querySelector('#childSix')
console.log(childSix)

console.log(elemSix.contains(childSix))

/*Задача 3js.Pm.Mn.ECh

Даны две переменные elem1 и elem2, содержащие два элемента:

<div id="elem1">
	<p id="elem2"></p>
</div>
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
Проверьте, является ли элемент из elem2 потомком элемента из elem1.*/

let elem1 = document.getElementById('elem1')
let elem2 = elem1.querySelector('#elem2')

console.log(elem1.contains(elem2))