'use strict';

//Функция для создания таблицы из двухмерного массива

let elem = document.getElementById('elem')
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

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

elem.appendChild(createTableByArr(arr))