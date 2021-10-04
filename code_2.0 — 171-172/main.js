'use strict';

//Разница между способами получения атрибутов

let elem01 = document.getElementById('elem01')

elem01.value = 'new'

console.log(elem01.value)
console.log(elem01.getAttribute('value'))

/*Задача 1hash.txt: js.Pm.Dm.AMPDf

Дан инпут с каким-то начальным значением. Дана также кнопка. По нажатию на кнопку определите, было ли изменено пользователем начальное значение инпута.*/

let elem02 = document.getElementById('elem02')
let button02 = document.getElementById('button02')

//elem02.value = 'two'

button02.addEventListener('click', function(){
    if(elem02.value == elem02.getAttribute('value')){
        console.log('изменений не было')
    } else {
        console.log('изминения были внесены')
    }
})

//Изменение атрибута

let elem03 = document.getElementById('elem03')

elem03.setAttribute('value', 'new')
console.log(elem03.value)
console.log(elem03.getAttribute('value'))

/*Задача 2hash.txt: js.Pm.Dm.AMPDf

Дан инпут с каким-то начальным значением. Пусть пользователь меняет это значение. Сделайте рядом с инпутом кнопку, по нажатию на которую value инпута вернется в изначальное значение.*/

let elem04 = document.getElementById('elem04')
let button04 = document.getElementById('button04')

button04.addEventListener('click', function(){
    elem04.value = elem04.getAttribute('value')
})