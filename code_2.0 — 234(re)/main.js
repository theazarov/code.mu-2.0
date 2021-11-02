'use strict';

//Добавление рядов и колонок в HTML таблицу

let tableOne = document.getElementById('tableOne')

let trOne = document.createElement('tr')

for(let i = 0; i < 3; i++){
    let tdOne = document.createElement('td')
    trOne.appendChild(tdOne)
}

tableOne.appendChild(trOne)

/*Задача 1js.Pm.Mn.TRCA

Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.*/

let tableTwo = document.getElementById('tableTwo')
let buttonTwo = document.getElementById('buttonTwo')
let buttonThree = document.getElementById('buttonThree')
let j = 0


buttonTwo.addEventListener('click', () => {
    let trTwo = document.createElement('tr')
    

    for(let i = 0; i < j+1; i++){
        let tdTwo = document.createElement('td')
        trTwo.appendChild(tdTwo)
    }
    tableTwo.appendChild(trTwo)
})

buttonThree.addEventListener('click', () => {
    let trs = tableTwo.querySelectorAll('tr')

    for(let tr of trs){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    j++
})