'use strict';

//Изменение ячеек HTML таблицы на JavaScript

let tableOne = document.getElementById('tableOne')
let start = document.getElementById('start')
let out = document.getElementById('out')
let timer;
let counter = 0

for(let i = 0; i < 3; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')

        tr.appendChild(td)
    }
    tableOne.appendChild(tr)
}

start.addEventListener('click', one)
tableOne.addEventListener('click', two)

//part one
function one(){
    let myArr = tableOne.querySelectorAll('td')
    let rundomArr = [0]

    timer = setInterval(() => {
        let myRandom = Math.floor(Math.random() * (9 - 0) ) + 0
        rundomArr.push(myRandom)

        myArr[myRandom].classList.add('colorGreen')
        myArr[rundomArr[rundomArr.length -2]].classList.remove('colorGreen')
        
    }, 1100);
    start.removeEventListener('click', one)
    tableOne.addEventListener('click', two)
}

//part two
function two(event){

    if(event.target.classList.contains('colorGreen')){
        out.innerHTML = 'counter: ' + Number(++counter)

        setTimeout(() => {
            event.target.classList.add('colorBlue')
        }, 0);

        setTimeout(() => {
            event.target.classList.remove('colorBlue')
        }, 100);

    } else {
        out.innerHTML = 'counter: ' + Number(--counter)

        setTimeout(() => {
            event.target.classList.add('colorRad')
        }, 0);

        setTimeout(() => {
            event.target.classList.remove('colorRad')
        }, 100);

        if(counter < 0){
            out.innerHTML = 'GAME OWER'
            clearInterval(timer)
            counter = 0
            let arr = tableOne.querySelectorAll('td')

            for(let elem of arr){
                if(elem.classList.contains('colorGreen')){
                    elem.classList.remove('colorGreen')
                }
            }

            tableOne.removeEventListener('click', two)
            start.addEventListener('click', one)
        }
    }
}