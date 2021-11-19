'use strict';

//Передача порядкового номера в коллбэк на JavaScript

function forEach(selector, func) {
    let elems = document.querySelectorAll(selector)

    for(let i = 0; i < elems.length; i++){
        func(elems[i], i)
    }
}

forEach('p', function (elem, index) {
    elem.innerHTML += index
})

//Передача DOM элемента параметром функции
let elemOne = document.getElementById('elemOne')

function setText(elem, text) {
    elem.innerHTML += text
}

setText(elemOne, ' hi')

/*Задача 2js.Pm.FD.PEAP

Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции appendText, сделанной в предыдущей задаче.*/

let one = document.querySelectorAll('.one')

for(let elem of one){
    setText(elem, '!!!')
}

/*Задача 3js.Pm.FD.PEAP

Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст. Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута.*/

let elemTwo = document.getElementById('elemTwo')

function setValue(input, text) {
    input.setAttribute('value', text)
}
setValue(elemTwo, 'click')

//Передача DOM группы элементов параметрами функций

function setTextTwo(elems, text) {
    
    for(let elem of elems){
        elem.innerHTML = text
    }
}

let three = document.querySelectorAll('.three')

setTextTwo(three, 'work!')

/*Задача 1js.Pm.FD.PGAP

Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.*/

let four = document.querySelectorAll('.four')

function appendText(elems, text) {
    
    for(let elem of elems){
        elem.innerHTML = text
    }
}
appendText(four, '000100101')

/*Задача 2js.Pm.FD.PGAP

Сделайте функцию appendElem, которая первым параметром будет принимать ссылку DOM объект, в котором лежит тег ul, а вторым - текст. Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul.*/

let input = document.getElementById('input')
let button = document.getElementById('button')
let out = document.getElementById('out')

function appendElem(elem, text) {
    let li = document.createElement('li')
    li.innerHTML = text
    elem.appendChild(li)
}

button.addEventListener('click', function(){
    let tx = input.value

    appendElem(out, tx)
})

/*Задача 3js.Pm.FD.PGAP

Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul.*/

let five = document.getElementById('five')
let myArr = ['one', 'two', 'three']

for(let elem of myArr){
    appendElem(five, elem)
}