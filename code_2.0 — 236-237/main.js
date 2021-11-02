'use strict';

//Порядковый номер ячейки таблицы на JavaScript

let tableOne = document.getElementById('tableOne')

for(let i = 0; i < 3; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableOne.appendChild(tr)
}

let tdsOne = tableOne.querySelectorAll('td')

for(let i = 0; i < tdsOne.length; i++){
    tdsOne[i].innerHTML = i +1
}

/*Задача 1js.Pm.Mn.TCON

Дана HTML таблица. Запишите в каждую ячейку ее порядковый номер с конца. То есть последней ячейке запишите 1, предпоследней - 2, и так далее.*/

let tableTwo = document.getElementById('tableTwo')

for(let i = 0; i < 3; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableTwo.appendChild(tr)
}

let tdsTwo = tableTwo.querySelectorAll('td')

for(let i = tdsTwo.length; i > 0; i--){
    tdsTwo[i-1].innerHTML = i
}

//Номер колонки и ряда таблицы на JavaScript

let tableThree = document.getElementById('tableThree')

for(let i = 0; i < 6; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableThree.appendChild(tr)
}

let trs = tableThree.querySelectorAll('tr')

for(let i = 0; i < trs.length; i++){
    let tr = trs[i]
    let tds = tr.querySelectorAll('td')

    for(let j = 0; j < tds.length; j++){
        let td = tds[j]
        td.innerHTML = 'ряд: ' + i + ' | ' + 'колонка: ' + j
    }
}

/*Задача 1js.Pm.Mn.CRN

Дана HTML таблица. Запишите в каждую ячейку ее порядковый номер в ряду.*/

let tableFour = document.getElementById('tableFour')

for(let i = 0; i < 6; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableFour.appendChild(tr)
}

let myTrs = tableFour.querySelectorAll('tr')

for(let i = 0; i < myTrs.length; i++){
    let tr = myTrs[i]
    let tds = tr.querySelectorAll('td')

    for(let j = 0; j < tds.length; j++){
        let td = tds[j]
        td.innerHTML = j +1
    }
}