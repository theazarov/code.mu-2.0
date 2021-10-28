'use strict';

//Навешивание обработчиков на новые элементы в JavaScript

let elemOne = document.getElementById('elemOne')
let myLI = elemOne.querySelectorAll('li')
let buttonOne = document.getElementById('buttonOne')
console.log(myLI)

for(let elem of myLI){
    elem.addEventListener('click', addSym)
}

function addSym(){
    this.innerHTML += '!'
}


buttonOne.addEventListener('click', function(){
    let newElem = document.createElement('LI')
    newElem.innerHTML = 'new'

    newElem.addEventListener('click', addSym)

    elemOne.appendChild(newElem)
})

//Делегирование событий в JavaScript

let elemTwo = document.getElementById('elemTwo')
let buttonTwo = document.getElementById('buttonTwo')

function addMe(event){

    if(event.target.tagName == 'LI'){
        event.target.innerHTML += '?'
    }
}

buttonTwo.addEventListener('click', function(){
    let newElem = document.createElement('LI')
    newElem.innerHTML = 'new'
    elemTwo.appendChild(newElem)
})

elemTwo.addEventListener('click', addMe)