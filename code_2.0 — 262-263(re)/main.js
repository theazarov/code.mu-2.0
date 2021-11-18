'use strict';

//Функции для работы с DOM элементом на JavaScript

function setText(id, text){
    let elem = document.getElementById(id)
    elem.innerHTML = text
}
setText('buttonOne', 'click')

/*Задача 1js.Pm.FD.DEF

Модифицируйте созданную мною функцию так, чтобы параметром она принимала не id элемента, а произвольный CSS селектор.*/

function setSel(selector, text){
    let elem = document.querySelector(selector)
    elem.innerHTML = text
}
setSel('p', 'out')

/*Задача 2js.Pm.FD.DEF

Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение.*/

function setAttr(selector, name, meaning){
    let elem = document.querySelector(selector)
    elem.setAttribute(name, meaning)
}
setAttr('h1', 'value', 'new')

//Функции для работы с группой DOM элементов

function getGroup(selectors, text){
    let elems = document.querySelectorAll(selectors)

    for(let elem of elems){
        elem.innerHTML = text
    }
}
getGroup('.one', 'new elem')

/*Задача 1js.Pm.FD.EGF

Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.*/

function appendText(selectors, text){
    let elems = document.querySelectorAll(selectors)

    for(let elem of elems){
        elem.innerHTML = text
        elem.setAttribute('value', 'hi')
    }
}
appendText('.two', 'my elem')