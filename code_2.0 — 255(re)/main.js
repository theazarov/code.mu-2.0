'use strict';

//Много элементов с кнопками показа на JavaScript

/*
let buttons = document.querySelectorAll('button')

for(let button of buttons){
    
    button.addEventListener('click', function(){
        let elem = document.querySelector('#' + this.dataset.elem)
        elem.classList.toggle('hidden')
    })
}
*/

/*
let buttons = document.querySelectorAll('button')
let p = document.querySelectorAll('p')

for(let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener('click', function(){
        p[i].classList.toggle('hidden')
    })
}
*/

let buttons = document.querySelectorAll('button')

for(let button of buttons){

    button.addEventListener('click', function(){
        this.previousElementSibling.classList.toggle('hidden')
    })
}