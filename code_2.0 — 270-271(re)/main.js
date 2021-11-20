'use strict';

//Возврат таблицы из функции на JavaScript

function createTable(trs, tds){
    let table = document.createElement('table')

    for(let i = 0; i < trs; i++){
        let tr = document.createElement('tr')

        for(let j = 0; j < tds; j++){
            let td = document.createElement('td')
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    return table
}

let one = document.querySelector(['.one'])
one.append(createTable(3,5))

/*Задача 2js.Pm.FD.RT

Пусть у нас есть вот такой див с абзацами:

<div id="elem">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>
С помощью функции createTable создайте новую таблицу, а затем вставьте ее в конец дива в абзацами.*/

let two = document.getElementById('two')

two.appendChild(createTable(4,5))

//Функция для создания таблицы из двухмерного массива

let myArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

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

let three = document.getElementById('three')

three.appendChild(createTableByArr(myArr))