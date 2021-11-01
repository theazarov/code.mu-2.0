'use strict';

//Создание HTML таблиц на JavaScript

/*Задача 1js.Pm.Mn.TC

Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.*/

let tableOne = document.getElementById('tableOne')

for(let i = 0; i < 5; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 5; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableOne.appendChild(tr)
}

/*Задача 2js.Pm.Mn.TC

Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.*/

let tableTwo = document.getElementById('tableTwo')

for(let i = 0; i < 10; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 5; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
        td.innerHTML = 'x'
    }
    tableTwo.appendChild(tr)
}

/*Задача 3js.Pm.Mn.TC

Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'.*/

/*Задача 4js.Pm.Mn.TC

Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).*/

let elemThree = document.getElementById('elemThree')
let one = document.getElementById('one')
let two = document.getElementById('two')
let button = document.getElementById('button')

button.addEventListener('click', function(){
    let wid = Number(one.value)
    let hei = Number(two.value)
    let newTabble = document.createElement('table')

    for(let i = 0; i < wid; i++){
        let tr = document.createElement('tr')

        for(let j = 0; j < hei; j++){
            let td = document.createElement('td')
            tr.appendChild(td)
        }
        newTabble.appendChild(tr)
        elemThree.appendChild(newTabble)
    }

})