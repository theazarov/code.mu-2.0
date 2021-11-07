'use strict';

//Клонирование элементов на JavaScript

let parentOne = document.getElementById('parentOne')
let elemOne = parentOne.querySelector('.elemOne')

let cloneOne = elemOne.cloneNode(true)

parentOne.appendChild(cloneOne)

/*Задача 1js.Pm.Mn.EC

Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.*/

let elemTwo = document.getElementById('elemTwo')
let btnTwo = document.getElementById('btnTwo')

btnTwo.addEventListener('click', function(){
    let clone = elemTwo.cloneNode(true)
    elemTwo.insertAdjacentElement('beforebegin', clone)
    elemTwo.insertAdjacentHTML('beforebegin', '<br>')
})

//Проверка элементов в JavaScript

/*Задача 1js.Pm.Mn.ECh

Дан элемент:

<div id="elem" class="www"></div>
Проверьте, является ли этот элемент элементом с классом www.*/

let elemThree = document.querySelector('#elemThree')

console.log(elemThree.matches('div.www'))

/*Задача 2js.Pm.Mn.ECh

Дан элемент. Проверьте, является ли этот элемент абзацем.*/

let elemFour = document.getElementById('elemFour')
console.log(elemFour.matches('p'))

/*Задача 3js.Pm.Mn.ECh

Даны две переменные elem1 и elem2, содержащие два элемента:

<div id="elem1">
	<p id="elem2"></p>
</div>
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
Проверьте, является ли элемент из elem2 потомком элемента из elem1.*/

let elem1 = document.getElementById('elem1')
let elem2 = document.getElementById('elem2')

console.log(elem1.contains(elem2))

//Редактирование отдельного элемента на JavaScript

let elem = document.getElementById('elem')

elem.addEventListener('click', function one(){
    let input = document.createElement('input')
    input.value = this.innerHTML
    this.innerHTML = ''
    this.parentElement.appendChild(input)

    input.addEventListener('blur', function(){
        elem.innerHTML = this.value
        elem.parentElement.removeChild(input)
    })
    
})