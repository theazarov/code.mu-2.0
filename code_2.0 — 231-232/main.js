'use strict';

//Последовательное заполнение HTML таблиц

let tableOne = document.getElementById('tableOne')
let k = 0

for(let i = 0; i < 9; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 9; j++){
        let td = document.createElement('td')
        td.innerHTML = k++
        tr.appendChild(td)
    }

    tableOne.appendChild(tr)
}

/*Задача 1js.Pm.Mn.TCF

Выведите на экран таблицу table размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.*/

let tableTwo = document.getElementById('tableTwo')
let e = 0

for(let i = 0; i < 5; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 5; j++){
        let td = document.createElement('td')

        td.innerHTML += e+=2
        tr.appendChild(td)
    }
    tableTwo.appendChild(tr)
}

/*Задача 2js.Pm.Mn.TCF

Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.*/

//Создание HTML таблицы из массива на JavaScript

let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
let tableThree = document.getElementById('tableThree')

for(let subArr of arr){
    let tr = document.createElement('tr')

    for(let elem of subArr){
        let td = document.createElement('td')
        tr.appendChild(td)
        td.innerHTML = elem
    }
    tableThree.appendChild(tr)
}

/*Задача 1js.Pm.Mn.TCVA

Дан массив:

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.*/

let tableFour = document.getElementById('tableFour')
let arrTwo = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]

for(let subArr of arrTwo){
    let tr = document.createElement('tr')

    for(let elem of subArr){
        let td = document.createElement('td')
        tr.appendChild(td)
        td.innerHTML = elem*elem
    }
    tableFour.appendChild(tr)
}

/*Задача 2js.Pm.Mn.TCVA

Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.*/