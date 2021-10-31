'use strict';

let arrOne = ['one', 'two', 'three']
let elemOne = document.getElementById('elemOne')
let i = 0

for(let elem of arrOne){
    let newElem = document.createElement('p')
    newElem.innerHTML = elem

    newElem.addEventListener('click', function(){
        this.innerHTML += ++i
    })

    elemOne.appendChild(newElem)
}

/*Задача 1js.Pm.Mn.ECVA

Модифицируйте мой код так, чтобы по клику на абзац к его содержимому прибавлялась единица.*/

//Практика на создание списков ul на JavaScript

/*Задача 1js.Pm.Mn.LCP

Дан ul:

<ul id="elem"></ul>
Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.*/

let arrTwo = ['one', 'two', 'three', 'four']
let elemTwo = document.getElementById('elemTwo')

for(let elem of arrTwo){
    let newElem = document.createElement('li')
    newElem.innerHTML = elem
    elemTwo.appendChild(newElem)
}

/*Задача 2js.Pm.Mn.LCP

Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.*/

let elemThree = document.getElementById('elemThree')
let arrThree = ['one', 'two', 'three', 'four']

for(let elem of arrThree){
    let newElem = document.createElement('li')
    newElem.innerHTML = elem

    newElem.addEventListener('click', function three(){
        newElem.innerHTML += '!'
        console.log(newElem.innerHTML)

        this.removeEventListener('click', three)
    })

    elemThree.appendChild(newElem)
}

/*Задача 3js.Pm.Mn.LCP

Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.*/

/*Задача 4js.Pm.Mn.LCP

Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.*/