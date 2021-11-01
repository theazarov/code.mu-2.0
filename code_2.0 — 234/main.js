'use strict';

//Добавление рядов и колонок в HTML таблицу

let tableOne = document.getElementById('tableOne')
let tr1 = document.createElement('tr')

for(let i = 0; i < 3; i++){
    let td = document.createElement('td')
    tr1.appendChild(td)
}

tableOne.appendChild(tr1)

/*Задача 1js.Pm.Mn.TRCA

Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.*/

let tableTwo = document.getElementById('tableTwo')
let buttonTwo = document.getElementById('buttonTwo')
let buttonThree = document.getElementById('buttonThree')
let r = 0


buttonTwo.addEventListener('click', () => {
    let addTR = document.createElement('tr')

    for(let i = 0; i < r+1; i++){
        let addTD = document.createElement('td')
        addTR.appendChild(addTD)
    }
    tableTwo.appendChild(addTR)
})



buttonThree.addEventListener('click', () => {
    let trs = tableTwo.querySelectorAll('tr')
    r++
    for(let tr of trs){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
})