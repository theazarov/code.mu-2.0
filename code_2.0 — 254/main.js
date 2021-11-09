'use strict';

//Кнопки для скрытия и показа элемента на JavaScript

/*
let elemOne = document.getElementById('elemOne')
let show = document.getElementById('show')
let hide = document.getElementById('hide')

show.addEventListener('click', function(){
    elemOne.classList.toggle('hidden')
})
*/

/*
hide.addEventListener('click', function(){
    elemOne.classList.add('hidden')
})
*/

/*Задача 1js.Pm.Mn.HShB

Модифицируйте мой код так, чтобы была только одна кнопка. Пусть по первому клику на эту кнопку элемент показывается, а по второму - скрывается.*/

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

/*Задача 1js.Pm.Mn.MEWShB

Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.*/


/*
let btn = document.querySelectorAll('button')

for(let button of btn){
    button.addEventListener('click', function(){
        let elem = document.querySelector('#' + this.dataset.elem)
        elem.classList.toggle('hidden')
    })
}
*/

//Второй способ

/*
let p = document.querySelectorAll('p')
let button = document.querySelectorAll('button')

for(let i = 0; i < button.length; i++){

    button[i].addEventListener('click', function(){
        p[i].classList.toggle('hidden')
    })
}
*/

//Третий способ

let buttons = document.querySelectorAll('button')

for(let button of buttons){
    button.addEventListener('click', function(){
        button.previousElementSibling.classList.toggle('hidden')
    })
}