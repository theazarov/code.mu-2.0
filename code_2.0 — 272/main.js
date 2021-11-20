'use strict';

//Создание HTML таблицы из одномерного массива на JavaScript

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let cols = 4

function convertArr (arr, num){
    let result = []

    for(let i = 0; i < arr.length; i++){
        let miniArr = []

        for(let j = 0; j < num; j++){
            miniArr.push(arr[i])
            arr.shift()
        }
        result.push(miniArr)
    }
    return result
}
//console.log(convertArr(arr, cols))

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

one.appendChild(createTableByArr(convertArr(arr, cols)))
console.log(arr)