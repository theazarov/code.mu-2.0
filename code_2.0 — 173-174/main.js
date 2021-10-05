'use strict';

//Стилизация элементов через атрибут style в JavaScript

let elem01 = document.getElementById('elem01')

elem01.style.color = 'red'

/*Задача 1hash.txt: js.Pm.Dm.ASS

Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.*/

let elem02 = document.getElementById('elem02')
let button02 = document.getElementById('button02')

button02.addEventListener('click', function(){
    elem02.style.width = '200px'
    elem02.style.height = '350px'
    elem02.style.border = '4px solid #EF8031'
    elem02.style.backgroundColor = 'green'
})

//Свойства с дефисом

/*Задача 2hash.txt: js.Pm.Dm.ASS

Дан див с текстом и кнопка. По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон.*/

let elem03 = document.getElementById('elem03')
let button03 = document.getElementById('button03')

button03.addEventListener('click', function(){
    elem03.style.border = '3px solid black'
    elem03.style.fontSize = '20px'
    elem03.style.backgroundColor = 'blue'

})

/*Задача 3hash.txt: js.Pm.Dm.ASS

Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left.*/

let elem04 = document.getElementById('elem04')
let button04 = document.getElementById('button04')

button04.addEventListener('click', function(){
    elem04.style.cssFloat = 'left'
})

//Стилизация с помощью CSS классов на JavaScript

let elemsP = document.querySelectorAll('p')

for(let elem of elemsP){
    elem.addEventListener('click', function(){
        elem.classList.add('colored')
    })
}

/*Задача 2hash.txt: js.Pm.Dm.CCS

Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).*/

let elem05 = document.getElementById('elem05')
let button05 = document.getElementById('button05')
let button06 = document.getElementById('button06')
let button07 = document.getElementById('button07')

button05.addEventListener('click', function(){
    elem05.classList.add('strikeOut')
})

button06.addEventListener('click', function(){
    elem05.classList.add('underlineText')
})

button07.addEventListener('click', function(){
    elem05.classList.add('colorRed')
})

//Дополнительное преимущество

let elem08 = document.getElementById('elem08')
let button08 = document.getElementById('button08')

button08.addEventListener('click', function(){
    elem08.classList.toggle('colored')
})

/*Задача 3hash.txt: js.Pm.Dm.CCS

Модифицируйте предыдущую задачу так, чтобы повторное нажатие на кнопку отменяло действие этой кнопки.*/

let elem09 = document.getElementById('elem09')
let button09 = document.getElementById('button09')
let button10 = document.getElementById('button10')
let button11 = document.getElementById('button11')

button09.addEventListener('click', function(){
    elem09.classList.toggle('strikeOut')
})

button10.addEventListener('click', function(){
    elem09.classList.toggle('underlineText')
})

button11.addEventListener('click', function(){
    elem09.classList.toggle('colorRed')
})

//Применение

let button12 = document.getElementById('button12')
let elem12 = document.getElementById('elem12')

button12.addEventListener('click', function(){
    elem12.classList.toggle('active')
})