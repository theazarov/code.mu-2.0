'use strict';

//Передача DOM элемента параметром функции

function  setText(elem, text) {
    elem.innerHTML = text
}
let elem1 = document.getElementById('elem1')

setText(elem1, 'out')

/*Задача 1js.Pm.FD.PEAP

Сделайте функцию appendText, которая первым параметром будет принимать DOM элемент, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец этого элемента.*/

function appendText(elem, text){
    elem.innerHTML += text
}
let elem2 = document.getElementById('elem2')

appendText(elem2, ' hi')

/*Задача 2js.Pm.FD.PEAP

Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции appendText, сделанной в предыдущей задаче.*/
let outs = document.querySelectorAll('.out')

function forEach(arr, text, func) {
    
    for(let elem of arr){
        func(elem, text)
    }
}

forEach(outs, '!!!', appendText)

/*Задача 3js.Pm.FD.PEAP

Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст. Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута.*/

let elem3 = document.getElementById('elem3')

function setValue(elem, text) {
    elem.setAttribute('value', text)
    elem.value = text
}
setValue(elem3, 'three')