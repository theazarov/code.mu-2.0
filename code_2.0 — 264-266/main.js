'use strict';

let arr = [1,2,3,4,5]

function square(elem){
    return elem*elem
}

function getResult(arr, call){
    let result = []

    for(let elem of arr){
        result.push(call(elem))
    }
    return result
}

console.log(getResult(arr, square))

//Передача коллбэка для работы с DOM на JavaScript

function forEach(selector, func){
    let elems = document.querySelectorAll(selector)

    for(let i = 0; i < elems.length; i++){
        func(elems[i], i)
    }
}

function squareHTML(elem){
    return elem.innerHTML = elem.innerHTML * elem.innerHTML
}
forEach('.elem', squareHTML)

/*Задача 1js.Pm.FD.CP

Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте в конец его текста восклицательный знак.*/

forEach('.elem1', function(elem, index) {
    elem.innerHTML += '!' + 'index' + index
})

//Передача порядкового номера в коллбэк на JavaScript

/*Задача 1js.Pm.FD.CSNP

Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте ему в начало его порядковый номер.*/

function each(selector, func) {
    let elems = document.querySelectorAll(selector)

    for(let i = 0; i < elems.length; i++){
        func(elems[i], i)
    }
}

each('.elem2', function(elem, index) {
    elem.innerHTML = 'index: ' + index
})