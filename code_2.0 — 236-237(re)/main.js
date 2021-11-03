'use strict';

//Порядковый номер ячейки таблицы на JavaScript

let tableOne = document.getElementById('tableOne')

for(let i = 0; i < 4; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableOne.appendChild(tr)
}

//ищем ячейку

let tdOne = tableOne.querySelectorAll('td')

for(let i = 0; i < tdOne.length; i++){
    tdOne[i].innerHTML = i
}

/*Задача 1js.Pm.Mn.TCON

Дана HTML таблица. Запишите в каждую ячейку ее порядковый номер с конца. То есть последней ячейке запишите 1, предпоследней - 2, и так далее.*/

let tableTwo = document.getElementById('tableTwo')

for(let i = 0; i < 4; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableTwo.appendChild(tr)
}

let tdTwo = tableTwo.querySelectorAll('td')
let j = 0

for(let i = tdTwo.length; i > 0; i--){
    tdTwo[i -1].innerHTML = j++ +1
}

//

let tableThree = document.getElementById('tableThree')

for(let i = 0; i < 4; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableThree.appendChild(tr)
}

let trMy = tableThree.querySelectorAll('tr')
console.log(trMy)

for(let i = 0; i < trMy.length; i++){
    let tdMy = trMy[i].querySelectorAll('td')
    console.log(tdMy)

    for(let j = 0; j < tdMy.length; j++){
        tdMy[j].innerHTML = 'строка' + (i +1) + ' : ячейка' + (j +1)
    }
}