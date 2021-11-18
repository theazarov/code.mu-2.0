'use strict';

//Передача DOM группы элементов параметрами функций

function setText(elems, text) {
    for(let elem of elems){
        elem.innerHTML += text
    }
}

let one = document.querySelectorAll('.one')
console.log(one)
setText(one, '!')

/*Задача 1js.Pm.FD.PGAP

Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.*/

function appendText(elems, text) {
    for(let elem of elems){
        elem.innerHTML += text
    }
}

let two = document.querySelectorAll('.two')

appendText(two, ' hi hater')

/*Задача 2js.Pm.FD.PGAP

Сделайте функцию appendElem, которая первым параметром будет принимать ссылку DOM объект, в котором лежит тег ul, а вторым - текст. Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul.*/

let three = document.getElementById('three')

function appendElem (elem, text) {
    let li = document.createElement('li')
    li.innerHTML = text
    elem.appendChild(li)
}

appendElem(three, 'work')

/*Задача 3js.Pm.FD.PGAP

Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul.*/

let arrNum = ['one', 'two', 'three', 'four']

function forEach(parent, arr, func) {
    for(let elem of arr){
        func(parent, elem)
    }
}
forEach(three, arrNum, appendElem)