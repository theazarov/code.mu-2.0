'use strict';
//Событие change в JavaScript

let elem01 = document.getElementById('elem01')

elem01.addEventListener('change', function(){
    console.log(this.value)
})

/*Задача 1js.Pm.Fm.Och

Дан инпут и абзац. По изменению инпута выведите его текст в абзац.*/

let elem02 = document.getElementById('elem02')
let out02 = document.getElementById('out02')

elem02.addEventListener('change', function(){
    out02.innerHTML = this.value
})

/*Задача 2js.Pm.Fm.Och

Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.*/

let elem03 = document.getElementById('elem03')

elem03.addEventListener('change', function(){
    
    if(this.checked){
        console.log(true)
    } else {
        console.log(false)
    }
})

/*Задача 4js.Pm.Fm.Och

Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.*/

let elem04 = document.getElementById('elem04')

elem04.addEventListener('change', function(){
    if(this.value.length > 5){
        this.classList.remove('colorGreen')
        this.classList.add('colorRad')
    } else {
        this.classList.remove('colorRad')
        this.classList.add('colorGreen')
    }
})