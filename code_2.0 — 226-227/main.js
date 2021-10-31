'use strict';

//Создание элементов в цикле на JavaScript

let elemOne = document.getElementById('elemOne')

for(let i = 0; i < 10; i++){
    let newElem = document.createElement('P')
    newElem.innerHTML = 'new'
    elemOne.appendChild(newElem)
}

/*Задача 1js.Pm.Mn.LEC

Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.*/

let elemTwo = document.getElementById('elemTwo')

for(let i = 0; i <= 10; i++){
    let newElem = document.createElement('p')
    newElem.innerHTML = 'elem ' + i
    elemTwo.appendChild(newElem)
}

//Навешивание обработчиков в цикле на JavaScript

let elemThree = document.getElementById('elemThree')

for(let i = 0; i <= 5; i++){
    let newElem = document.createElement('p')
    newElem.innerHTML = 'new elem' + i

    newElem.addEventListener('click', function(){
        console.log(newElem.innerHTML)
    })
    elemThree.appendChild(newElem)
}

/*Задача 1js.Pm.Mn.LHH

Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.*/

let elemFour = document.getElementById('elemFour')
let outFour = document.getElementById('outFour')

for(let i = 0; i <= 5; i++){
    let newElem = document.createElement('input')
    newElem.value = 'hello world'

    newElem.addEventListener('blur', function(){
        outFour.innerHTML += newElem.value + ', '
    })
    elemFour.appendChild(newElem)
}