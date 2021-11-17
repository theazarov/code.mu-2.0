'use strict';

//Поиск ячеек таблицы через селектор CSS на JavaScript

let tableOne = document.getElementById('tableOne')

for(let i = 0; i < 8; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 8; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableOne.appendChild(tr)
}

let trsOne = document.querySelector('#tableOne tr:nth-child(3) td:nth-child(2)')
trsOne.innerHTML = 'lol'
console.log(trsOne.innerHTML)

/*Задача 1js.Pm.Mn.SCS

Найдите все ячейки третьего столбца и покрасьте их в красный фон.*/

for(let i = 1; i <= 8; i++){
    let colorize = document.querySelector('#tableOne tr:nth-child('+ i +') td:nth-child(3)')
    console.log(colorize)
    colorize.classList.add('colorGreen')
}

/*Задача 2js.Pm.Mn.SCS

Найдите третью ячейку первого ряда и покрасьте ее в красный фон.*/

let findThree = document.querySelector('#tableOne tr:nth-child(1) td:nth-child(4)')
findThree.classList.add('colorRad')

/*Задача 3js.Pm.Mn.SCS

Найдите все четные ряды и покрасьте в них все нечетные ячейки.*/

let tableTwo = document.getElementById('tableTwo')

for(let i = 0; i < 8; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 8; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableTwo.appendChild(tr)
}

for(let i = 0; i <= 8; i++){

    if(i % 2 == 0){

        for(let j = 1; j <= 8; j++){
            
            if(j % 2 == 0){
                let colorize = document.querySelectorAll('#tableTwo tr:nth-child('+i+') td:nth-child('+j+')')
                console.log(colorize)

                for(let elem of colorize){
                    elem.classList.add('colorGray')
                }
            }
        }
    }
}