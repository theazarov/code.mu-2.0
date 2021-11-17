'use strict';

//Функции для работы с DOM элементом на JavaScript

function setText(id, text){
    let elem = document.getElementById(id)
    elem.innerHTML = text
}

setText('button', 'click')

/*Задача 1js.Pm.FD.DEF

Модифицируйте созданную мною функцию так, чтобы параметром она принимала не id элемента, а произвольный CSS селектор.*/

function mod(css, text){
    let elem = document.querySelector(css)
    elem.value = text
}
mod('button', 'one')

/*Задача 2js.Pm.FD.DEF

Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение.*/

function setAttr(css, name, mean){
    let elem = document.querySelector(css)
    elem.setAttribute(name, mean)
}
setAttr('h1', 'value', 'hello')

//Функции для работы с группой DOM элементов

function setTextTwo(selector, text){
    let elems = document.querySelectorAll(selector)
    let i = 0

    for(let elem of elems){
        elem.innerHTML = text + ': 0' + i
        i++
    }
}
setTextTwo('p', 'out')

/*Задача 1js.Pm.FD.EGF

Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.*/

function appendText(selector, text){
    let elems = document.querySelectorAll(selector)

    for(let elem of elems){
        elem.innerHTML = text
        elem.setAttribute('value', 'ouu')
    }
}
appendText('h2', 'hi dude')