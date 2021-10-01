'use strict';

//Получение группы элементов

let wwwS = document.querySelectorAll('.www')

for(let elem of wwwS){
    elem.addEventListener('click', function(){
        this.innerHTML += '!'
    })
}

/*Задача 1hash.txt: js.Pm.Dm.EGG

Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите из циклом и установите текст каждого абзаца в значение 'text'.*/

let button01 = document.getElementById('button01')

button01.addEventListener('click', function(){
    let qqqS = document.querySelectorAll('.qqq')

    for(let elem of qqqS){
        elem.innerHTML += 'tx'
    }
})

/*Задача 2hash.txt: js.Pm.Dm.EGG

Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.*/

let button02 = document.getElementById('button02')
let eeeS = document.querySelectorAll('.eee')

button02.addEventListener('click', function(){
    let i = 0

    for(let elem of eeeS){
        elem.innerHTML += i++
    }
})

/*Задача 3hash.txt: js.Pm.Dm.EGG

Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.*/

let rrrS = document.querySelectorAll('.rrr')
let button03 = document.getElementById('button03')
let out03 = document.getElementById('out03')

button03.addEventListener('click', function(){
    let result = 0

    for(let elem of rrrS){
        result += Number(elem.value)
    }

    out03.innerHTML = result
})

//Добавление обработчиков событий в цикле

let tttS = document.querySelectorAll('.ttt')

for(let elem of tttS){
    elem.addEventListener('click', getPlus)
}

function getPlus(){
    this.innerHTML += '++'
}

/*Задача 1hash.txt: js.Pm.Dm.LH

Дана следующая функция:

function func() {
	this.value = Number(this.value) + 1;
}
Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.*/

let yyyS = document.querySelectorAll('.yyy')

function getOne(){
    this.value++
}

for(let elem of yyyS){
    elem.addEventListener('blur', getOne)
}

/*Задача 2hash.txt: js.Pm.Dm.LH

Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.*/

let uuuS = document.querySelectorAll('.uuu')

function getSquare(){
    this.innerHTML = this.innerHTML * this.innerHTML
}

for(let elem of uuuS){
    elem.addEventListener('click', getSquare)
}

/*Задача 3hash.txt: js.Pm.Dm.LH

Дан следующий код:

<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
let divs = document.querySelectorAll('div');

for (let div of divs) {
	div.addEventListener('click', func);
}

function func() {
	this.innerHTML++;
}
Сделайте функцию-обработчик анонимной.*/

let divs = document.querySelectorAll('div')

for(let div of divs){
    div.addEventListener('click', function(){
        this.innerHTML++
    })
}