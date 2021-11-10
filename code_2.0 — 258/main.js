'use strict';

//Чередование стилей активации на JavaScript

let tableOne = document.getElementById('tableOne')

for(let i = 0; i < 3; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 4; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableOne.appendChild(tr)
}

let tdOne = tableOne.querySelectorAll('td')

for(let td of tdOne){

    td.addEventListener('click', function(){
        let activeTd = tableOne.querySelectorAll('td.active')

        if(activeTd.length < 3){
            this.classList.add('active')
        }
    })
}

/*Задача 2js.Pm.Mn.LEA

Сделайте так, чтобы в одном ряду таблице можно было активировать не более 5-ти ячеек.*/

let tableTwo = document.getElementById('tableTwo')

for(let i = 0; i < 4; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 9; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableTwo.appendChild(tr)
}

let trTwo = tableTwo.querySelectorAll('tr')
console.log(trTwo)

for(let tr of trTwo){
    let tds = tr.querySelectorAll('td')
    console.log(tds)

    for(let td of tds){
        td.addEventListener('click', function(){
            let activeTd = tr.querySelectorAll('td.active')

            if(activeTd.length < 5){
                this.classList.add('active')
            }
        })
    }
}

/*Задача 3js.Pm.Mn.LEA

Сделайте так, чтобы в для активированной ячейки нельзя было активировать ее соседей слева и справа.*/

let tableThree = document.getElementById('tableThree')

for(let i = 0; i < 4; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 9; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableThree.appendChild(tr)
}

let trThree = tableThree.querySelectorAll('tr')
let tdThree = tableThree.querySelectorAll('td')

for(let i = 0; i < tdThree.length; i++){

    tdThree[i].addEventListener('click', function one(){

    })

}

/*Задача 4js.Pm.Mn.LEA

Сделайте так, чтобы в для активированной ячейки нельзя было активировать ее соседей сверху и снизу.*/