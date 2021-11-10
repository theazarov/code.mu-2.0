'use strict';

//Активация элементов на JavaScript

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
        td.classList.toggle('colorRad')
    })
}

/*Задача 1js.Pm.Mn.EA

Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.*/

let elemTwo = document.getElementById('elemTwo')
let lis = elemTwo.querySelectorAll('li')

for(let li of lis){
    li.addEventListener('click', function(){
        this.classList.toggle('colorGreen')
    })
}

//Чередование стилей активации на JavaScript

let tableThree = document.getElementById('tableThree')

for(let i = 0; i < 3; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 4; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableThree.appendChild(tr)
}

let tds = tableThree.querySelectorAll('td')
let color = 'colorGreen'

for(let td of tds){

    td.addEventListener('click', function(){
        if(color == 'colorGreen'){
            color = 'colorRad'
        } else {
            color = 'colorGreen'
        }
        this.classList.add(color)
    })
}

//Чередование многих цветов из массива

let colors = ['colorRad', 'colorGreen', 'colorGray']
let f = 0

let elemFour = document.getElementById('elemFour')
let liFour = elemFour.querySelectorAll('li')

for(let li of liFour){
    li.addEventListener('click', function(){
        li.classList.toggle(colors[f])
        f++

        if(f == 3){
            f = 0
        }
    })
}