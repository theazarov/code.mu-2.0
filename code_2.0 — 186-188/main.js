'use strict';

//Событие change в JavaScript.

let elem01 = document.getElementById('elem01')

elem01.addEventListener('change', function(){
    console.log('изм.')
})

/*Задача 1js.Pm.Fm.Och

Дан инпут и абзац. По изменению инпута выведите его текст в абзац.*/

let elem02 = document.getElementById('elem02')
let out02 = document.getElementById('out02')

elem02.addEventListener('change', function(){
    out02.innerHTML = elem02.value
})

/*Задача 2js.Pm.Fm.Och

Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.*/

let elem03 = document.getElementById('elem03')

elem03.addEventListener('change', function(){
    
    if(elem03.checked){
        console.log(true)
    } else {
        console.log(false)
    }
})

/*Задача 4js.Pm.Fm.Och

Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.*/

let elem04 = document.getElementById('elem04')

elem04.addEventListener('change', function(){
    if(this.value.length <= 5){
        this.classList.remove('colorRad')
        this.classList.add('colorGreen')
    }
    if(this.value.length > 5){
        this.classList.remove('colorGreen')
        this.classList.add('colorRad')
    }
})

//Событие input в JavaScript

let elem05 = document.getElementById('elem05')

elem05.addEventListener('input', function(){
    console.log(this.value)
})

/*Задача 1js.Pm.Fm.Oin

Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.*/

let elem06 = document.getElementById('elem06')

elem06.addEventListener('input', function(){
    if(this.value.length == 5){
        console.log('вы достигли 5-ти символов')
    }
})

/*Задача 2js.Pm.Fm.Oin

Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.*/

let elem07 = document.getElementById('elem07')
let out07 = document.getElementById('out07')

elem07.addEventListener('input', function(){
    let num = Number(this.value.length)

    if(num >= 0 && num <= 15){
        out07.innerHTML = 'вам доступно ' + (15 - num) + ' символов'
    }

    if(num > 15){
        out07.innerHTML = 'вы превысили текст на ' + (num - 15) + ' символов'
        out07.classList.add('inputRad')
    }
    
})

//Методы focus и blur в JavaScript

let elem08 = document.getElementById('elem08')
let btn08 = document.getElementById('btn08')

btn08.addEventListener('click', function(){
    elem08.focus()
})

/*Задача 1js.Pm.Fm.FB

Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.*/

let one = document.getElementById('one')
let two = document.getElementById('two')

one.addEventListener('input', function(){

    if(one.value.length == 2){
        two.focus()
    }
})

two.addEventListener('input', function(){

    if(two.value.length == 2){
        two.blur()
    }
})