'use strict';

//Создание HTML таблицы из одномерного массива на JavaScript

let cols = 5
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function convertArr(arr, col){
    let result = []

    for(let i = 0; i < arr.length; i += col){
        result.push(arr.slice(i, i+col))
    }
    return result
}
//console.log(convertArr(myArr, cols))

/*Задача 2js.Pm.FD.TCFODA

Дан следующий массив:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
С помощью комбинаций функций createTableByArr и convertArr создайте из приведенного массива таблицу размером 4 колонки. Добавьте созданную таблицу в какой-нибудь див.*/

function createTableByArr(arr){
    let table = document.createElement('table')

    for(let i = 0; i < arr.length; i++){
        let tr = document.createElement('tr')

        for(let j = 0; j < arr[i].length; j++){
            let td = document.createElement('td')
            td.innerHTML = arr[i][j]
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    return table
}

let one = document.getElementById('one')
let table = createTableByArr(convertArr(myArr, cols))
one.appendChild(table)

//Нехватка элементов в массиве при создании таблицы
let arrTwo = [[1, 2, 3, 4], [5, 6, 7, 8], [9]]

function normalizeArr(arr, symbol){
    let num = arr[0].length

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < num; j++){
            if(arr[i].length < num){
                arr[i].push(symbol)
            }
        }
    }
    return arr
}

console.log(normalizeArr(arrTwo, '-'))


let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let myCols = 5
let two = document.getElementById('two')

let newTable = createTableByArr(normalizeArr(convertArr(newArr, myCols), '-'))
two.appendChild(newTable)