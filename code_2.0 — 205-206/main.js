'use strict';

//Навешивание обработчиков на новые элементы в JavaScript

let elemOne = document.getElementById('elemOne')
let items = elemOne.querySelectorAll('li')
let buttonOne = document.getElementById('buttonOne')

function addMe(){
    this.innerHTML += '!'
}

for(let elem of items){
    elem.addEventListener('click', addMe)
}

buttonOne.addEventListener('click', function(){
    let newElem = document.createElement('li')
    newElem.innerHTML = 'new text'

    newElem.addEventListener('click', addMe)

    elemOne.appendChild(newElem)
})

//Делегирование событий в JavaScript

let elemTwo = document.getElementById('elemTwo')
let buttonTwo = document.getElementById('buttonTwo')

elemTwo.addEventListener('click', function(event){
    if(event.target.tagName == 'LI'){
        event.target.innerHTML += '!'
    }
})

buttonTwo.addEventListener('click', function(){
    let newElem = document.createElement('li')
    newElem.innerHTML = 'new'
    elemTwo.appendChild(newElem)
})