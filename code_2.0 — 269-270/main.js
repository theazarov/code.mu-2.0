'use strict';

//Функция для создания HTML таблиц на JavaScript

let one = document.getElementById('one')

function createTable(rows, cols){
    let table = document.createElement('table')
    
    for(let i = 0; i < rows; i++){
        let tr = document.createElement('tr')

        for(let j = 0; j < cols; j++){
            let td = document.createElement('td')
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    return table
}


//Возврат таблицы из функции на JavaScript

let getTable = createTable(3, 3)
one.appendChild(getTable)

/*Задача 2js.Pm.FD.RT

Пусть у нас есть вот такой див с абзацами:

<div id="elem">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>
С помощью функции createTable создайте новую таблицу, а затем вставьте ее в конец дива в абзацами.*/

let elem = document.getElementById('elem')

elem.appendChild(createTable(4, 4))