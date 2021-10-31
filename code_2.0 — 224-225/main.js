'use strict';

//Создание и вставка элементов на JavaScript

let parentOne = document.getElementById('parentOne')

let childOne = document.createElement('P')

childOne.innerHTML = 'new el'
parentOne.appendChild(childOne)

/*Задача 1js.Pm.Mn.CIE

Дан ol:

<ol id="elem"></ol>
Вставьте ему в конец li с текстом 'пункт'.*/

let elemTwo = document.getElementById('elemTwo')

let childTwo = document.createElement('LI')
childTwo.innerHTML = 'punkt'
elemTwo.appendChild(childTwo)

/*Задача 2js.Pm.Mn.CIE

Дан ol и кнопка:

<ol id="elem"></ol>
<button id="button">click me</button>
Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'пункт'.*/

let elemThree = document.getElementById('elemThree')
let btnAdd = document.getElementById('add')

btnAdd.addEventListener('click', function(){
    let newElem = document.createElement('LI')
    newElem.innerHTML = 'пункт'

    elemThree.appendChild(newElem)
})

//Привязывание событий при вставке элементов

let elemFour = document.getElementById('elemFour')

let newP = document.createElement('P')
newP.innerHTML = 'hi'

newP.addEventListener('click', function(){
    console.log(newP.innerHTML)
})

elemFour.appendChild(newP)

/*Задача 1js.Pm.Mn.IHE

Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.*/

let elemFive = document.getElementById('elemFive')
let btnFive = document.getElementById('btnFive')

btnFive.addEventListener('click', function(){
    let newElem = document.createElement('LI')
    newElem.innerHTML = 'new'

    elemFive.appendChild(newElem)
})

elemFive.addEventListener('click', function(event){
    if(event.tagName = 'LI'){
        event.target.innerHTML += '!'
    }
})