'use strict';

//Отмена действия по умолчанию в JavaScript

let elem01 = document.getElementById('elem01').addEventListener('click', function (event) {
    event.preventDefault()
    console.log('я тебя спас бро, там вирус.')
})

/*Задача 1js.Pm.OE.CDA

Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.*/

let elem02 = document.getElementsByClassName('elem02')

for(let elem of elem02){
    elem.addEventListener('click', function(event){
        event.target.innerHTML += event.target.href
        event.preventDefault()
        console.log(event.target.innerHTML)

    })
}

/*Задача 2js.Pm.OE.CDA

Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.*/

let one = document.getElementById('one')
let two = document.getElementById('two')
let elem03 = document.getElementById('elem03')
let out03 = document.getElementById('out03')

elem03.addEventListener('click', function(event){
    event.preventDefault()
    out03.innerHTML = +one.value + +two.value
})
