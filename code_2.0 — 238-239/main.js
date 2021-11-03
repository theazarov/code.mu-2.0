'use strict';

let tableOne = document.getElementById('tableOne')

for(let i = 0; i < 4; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableOne.appendChild(tr)
}

let tdOne = tableOne.querySelectorAll('td')

for(let i = 0; i < tdOne.length; i++){
    tdOne[i].addEventListener('click', function(){
        console.log(i+1)
    })
}

/*Задача 1js.Pm.Mn.CCON

Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в эту ячейку записывался порядковый номер этой ячейки с конца таблицы.*/

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
let j = tdTwo.length

for(let i = tdTwo.length; i > 0; i--){
    
    tdTwo[i -1].addEventListener('click', function(){
        this.innerHTML = tdTwo.length - i +1
    })
    j--
}

//Порядковый номер клика в ячейке HTML таблицы

let tableThree = document.getElementById('tableThree')

for(let i = 0; i < 4; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableThree.appendChild(tr)
}

let tdThree = tableThree.querySelectorAll('td')
let l = 0

for(let elem of tdThree){
    elem.addEventListener('click', function (){
        this.innerHTML = l++
    })
}

/*Задача 1js.Pm.Mn.CON

Модифицируйте код теоретической части урока так, чтобы повторное нажатие по ячейке не приводило к увеличению счетчика.*/

let tableFour = document.getElementById('tableFour')

for(let i = 0; i < 4; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableFour.appendChild(tr)
}

let tdFour = tableFour.querySelectorAll('td')
let u = 0

for(let elem of tdFour){
    elem.addEventListener('click', function one(){
        this.innerHTML = u++
        this.removeEventListener('click', one)
    })
}

//Чередование

let tableFive = document.getElementById('tableFive')

for(let i = 0; i < 4; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableFive.appendChild(tr)
}

let tdFive = tableFive.querySelectorAll('td')
let f = 1

for(let elem of tdFive){
    elem.addEventListener('click', function(){
        this.innerHTML = f

        if(f == 1){
            f = 2
        } else {
            f = 1
        }
    })
}

/*Задача 2js.Pm.Mn.CON

Модифицируйте описанную в теоретической части урока задачу так, чтобы при кликах на ячейки чередовались числа 1, 2 и 3.*/

let tableSix = document.getElementById('tableSix')

for(let i = 0; i < 4; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableSix.appendChild(tr)
}

let tdSix = tableSix.querySelectorAll('td')
let q = 1

for(let elem of tdSix){
    elem.addEventListener('click', function(){
        elem.innerHTML = q

        if(q == 1){
            q = 2
        } else if( q == 2){
            q = 3
        } else {
            q = 1
        }
    })
}