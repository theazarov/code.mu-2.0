'use strict';

//Работа с текстом тега на JavaScript

let elem01 = document.getElementById('elem01')
let button01 = document.getElementById('button01')

button01.addEventListener('click', function(){
    console.log(elem01.innerHTML)
})

/*Задача 1hash.txt: js.Pm.Dm.EH

Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.*/

let elem02 = document.getElementById('elem02')
let elem03 = document.getElementById('elem03')
let button02 = document.getElementById('button02')

button02.addEventListener('click', function(){
    console.log(Number(elem02.innerHTML) + Number(elem03.innerHTML))
})

/*Задача 2hash.txt: js.Pm.Dm.EH

Даны два абзаца и две кнопки. Пусть нажатие на первую кнопку выводит текст первого абзаца, а нажатие на вторую кнопку - текст второго абзаца.*/

let elem04 = document.getElementById('elem04')
let button03 = document.getElementById('button03')

let elem05 = document.getElementById('elem05')
let button04 = document.getElementById('button04')

button03.addEventListener('click', function(){
    console.log(elem04.innerHTML)
})

button04.addEventListener('click', function(){
    console.log(elem05.innerHTML)
})

//Запись

let elem06 = document.getElementById('elem06')
let button05 = document.getElementById('button05')

button05.addEventListener('click', function(){
    elem06.innerHTML = 'hi'
})

/*Задача 3hash.txt: js.Pm.Dm.EH

Дан абзац и две кнопки. По нажатию на первую кнопку запишите в абзац слово 'привет', а по нажатию на вторую кнопку - слово 'пока'.*/

let elem07 = document.getElementById('elem07')
let button06 = document.getElementById('button06')
let button07 = document.getElementById('button07')

button06.addEventListener('click', function(){
    elem07.innerHTML = 'привет'
})

button07.addEventListener('click', function(){
    elem07.innerHTML = 'пока'
})

/*Задача 4hash.txt: js.Pm.Dm.EH

Даны 3 абзаца с текстом. По нажатию на первый абзац запишите в его текст число 1, по нажатию на второй абзац запишите в его текст число 2, а по нажатию на третий - запишите в его текст число 3.*/

let elem08 = document.getElementById('elem08')
let elem09 = document.getElementById('elem09')
let elem10 = document.getElementById('elem10')

elem08.addEventListener('click', function(){
    elem08.innerHTML = 1
})

elem09.addEventListener('click', function(){
    elem09.innerHTML = 2
})

elem10.addEventListener('click', function(){
    elem10.innerHTML = 3
})

/*Задача 5hash.txt: js.Pm.Dm.EH

Дан абзац и кнопка. В абзаце записано какое-то число. По нажатию на кнопку возведите значение абзаца в квадрат и запишите его обратно.*/

let elem11 = document.getElementById('elem11')
let button08 = document.getElementById('button08')

button08.addEventListener('click', function(){
    elem11.innerHTML *= Number(elem11.innerHTML)
})

/*Задача 6hash.txt: js.Pm.Dm.EH

Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.*/

let elem12 = document.getElementById('elem12')
let button09 = document.getElementById('button09')

button09.addEventListener('click', function(){
    elem12.innerHTML = Number(elem12.innerHTML) +1
})

/*Задача 7hash.txt: js.Pm.Dm.EH

Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.*/

let elem13 = document.getElementById('elem13')
let button10 = document.getElementById('button10')

button10.addEventListener('click', function(){
    elem13.innerHTML += '!'
})

/*Задача 8hash.txt: js.Pm.Dm.EH

Модифицируйте предыдущую задачу так, чтобы восклицательный знак записывался не в конец текста, а в начало.*/

let elem14 = document.getElementById('elem14')
let button11 = document.getElementById('button11')

button11.addEventListener('click', function(){
    elem14.innerHTML = '!' + elem14.innerHTML
})

//Запись тегов

let elem15 = document.getElementById('elem15')
let button12 = document.getElementById('button12')

button12.addEventListener('click', function(){
    elem15.innerHTML = '<b>sos!</b>'
})

/*Задача 9hash.txt: js.Pm.Dm.EH

Дан абзац и кнопка. По нажатию на кнопку запишите в абзац текст '<i>hello</i>'.*/

let elem16 = document.getElementById('elem16')
let button13 = document.getElementById('button13')

button13.addEventListener('click', function(){
    elem16.innerHTML = '<i>hello</i>'
})

/*Задача 10hash.txt: js.Pm.Dm.EH

Дан абзац с текстом и кнопка. По нажатию на кнопку прочитайте текст абзаца, оберните этот текст в теги <b> и запишите новый текст обратно в абзац.*/

let elem17 = document.getElementById('elem17')
let button14 = document.getElementById('button14')

button14.addEventListener('click', function(){
    elem17.innerHTML = '<b>' + elem17.innerHTML + '</b>'
})