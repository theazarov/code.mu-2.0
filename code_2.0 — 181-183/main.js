'use strict';

//Работа с текстареа в JavaScript

/*Задача 1js.Pm.Fm.Ta

Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.*/

let elem01 = document.getElementById('elem01')
let out01 = document.getElementById('out01')

elem01.addEventListener('blur', function(){
    out01.innerHTML = elem01.value
})

//Атрибут disabled в JavaScript

let elem02 = document.getElementById('elem02')

console.log(elem02.disabled)

elem02.disabled = false

/*Задача 1js.Pm.Fm.Dsb

Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.*/

let elem03 = document.getElementById('elem03')
let button03 = document.getElementById('button03')

button03.addEventListener('click', function(){

    if(!elem03.disabled){
        elem03.disabled = true
    } else{
        elem03.disabled = false
    }
    
})

/*Задача 2js.Pm.Fm.Dsb

Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.*/

let elem04 = document.getElementById('elem04')
let buttonTrue = document.getElementById('buttonTrue')
let buttonFalse = document.getElementById('buttonFalse')

buttonTrue.addEventListener('click', function(){
    elem04.disabled = true
})

buttonFalse.addEventListener('click', function(){
    elem04.disabled = false
})

/*Задача 3js.Pm.Fm.Dsb

Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.*/

let elem05 = document.getElementById('elem05')
let button05 = document.getElementById('button05')

button05.addEventListener('click', function(){
    if(elem05.disabled = true){
        console.log('заблокирован')
    } else {
        console.log('разблокирован')
    }
})

//Работа с чекбоксами в JavaScript

let elem06 = document.getElementById('elem06')

console.log(elem06.checked)

/*Задача 1js.Pm.Fm.Chb

Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.*/

let elem07 = document.getElementById('elem07')
let checkTrue = document.getElementById('checkTrue')
let checkFalse = document.getElementById('checkFalse')

checkTrue.addEventListener('click', function(){
    elem07.checked = true
})

checkFalse.addEventListener('click', function(){
    elem07.checked = false
})