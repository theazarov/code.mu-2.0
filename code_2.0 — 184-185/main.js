'use strict';

//Чередование атрибутов без значений

let elem01 = document.getElementById('elem01')
let btn01 = document.getElementById('btn01')

btn01.addEventListener('click', function(){

    if(elem01.disabled){
        elem01.disabled = false
    } else {
        elem01.disabled = true
    }
})

let elem02 = document.getElementById('elem02')
let btn02 = document.getElementById('btn02')

btn02.addEventListener('click', function(){
    elem02.disabled = !elem02.disabled
})

/*Задача 2js.Pm.Fm.AWVA

Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.*/

let elem03 = document.getElementById('elem03')
let btn03 = document.getElementById('btn03')

btn03.addEventListener('click', function(){

    if(elem03.checked){
        elem03.checked = false
    } else {
        elem03.checked = true
    }
})

let qqq = document.querySelectorAll('.qqq')
let btn04 = document.getElementById('btn04')

btn04.addEventListener('click', function(){

    for(let elem of qqq){
        if(elem.checked){
            console.log(elem.value)
        }
    }
})

/*Задача 1js.Pm.Fm.Rd

Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.*/

let www = document.querySelectorAll('.www')
let btn05 = document.getElementById('btn05')
let out05 = document.getElementById('out05')

btn05.addEventListener('click', function(){

    for(let elem of www){
        if(elem.checked){
            out05.innerHTML = elem.value
        }
    }
})