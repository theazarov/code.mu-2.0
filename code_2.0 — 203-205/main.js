'use strict';

//Прекращение всплытия событий в JavaScript

let elemOne = document.getElementById('elemOne')
let elemTwo = document.getElementById('elemTwo')
let elemThree = document.getElementById('elemThree')

elemOne.addEventListener('click', function(event){
    alert('one')
})

elemTwo.addEventListener('click', function(event){
    alert('two')
    event.stopPropagation()
})

elemThree.addEventListener('click', function(event){
    alert('three')
})

//Практическое применение

let myParent = document.getElementById('myParent')
let myButton = document.getElementById('myButton')
let block = document.getElementById('block')

myButton.addEventListener('click', function(event){
    block.classList.add('active')
    event.stopImmediatePropagation()
})

myParent.addEventListener('click', function(event){
    block.classList.remove('active')
})

//Погружение событий в JavaScript

let deepOne = document.getElementById('deepOne')
let deepTwo = document.getElementById('deepTwo')
let deepThree = document.getElementById('deepThree')

deepOne.addEventListener('click', function(){
    alert('one погружение')
}, true)
deepOne.addEventListener('click', function(){
    alert('one всплытие')
}, false)

deepTwo.addEventListener('click', function(){
    alert('two погружение')
}, true)
deepTwo.addEventListener('click', function(){
    alert('two всплытие')
}, false)

deepThree.addEventListener('click', function(){
    alert('three погружение')
}, true)
deepThree.addEventListener('click', function(){
    alert('three всплытие')
}, false)

//Навешивание обработчиков на новые элементы в JavaScript

let myUL = document.getElementById('myUL')
let myButtonTwo = document.getElementById('myButtonTwo')
let items = myUL.querySelectorAll('li')

for(let elem of items){
    elem.addEventListener('click', handler)
}

myButtonTwo.addEventListener('click', function(){
    let newItem = document.createElement('li')
    newItem.innerHTML = 'item+'

    newItem.addEventListener('click', handler)

    myUL.appendChild(newItem)
})

function handler(){
    this.innerHTML += '!'
}