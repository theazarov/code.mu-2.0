'use strict';

//Методы focus и blur в JavaScript

let elem01 = document.getElementById('elem01')
let btn01 = document.getElementById('btn01')

btn01.addEventListener('click', function(){
    elem01.focus()
})

/*Задача 1js.Pm.Fm.FB

Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, а после ввода двух символов в этот инпут - фокус из него убирался.*/

let one = document.getElementById('one')
let two = document.getElementById('two')

one.addEventListener('input', function(){
    if(one.value.length == 5){
        two.focus()
    }
})

two.addEventListener('input', function(){
    if(two.value.length == 5){
        two.blur()
    }
})

//Работа с выпадающими списками в JavaScript

let elem02 = document.getElementById('elem02')

elem02.addEventListener('change', function(){
    console.log(this.value)
})

/*Задача 1js.Pm.Fm.DL

Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.*/

let elem03 = document.getElementById('elem03')
let out03 = document.getElementById('out03')
let btn03 = document.getElementById('btn03')

btn03.addEventListener('click', function(){

    for(let elem of elem03){
        if(elem.selected){
            out03.innerHTML = elem.innerHTML
        }
    }
})

/*Задача 2js.Pm.Fm.DL

Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.*/

let first = document.getElementById('first')
let last = document.getElementById('last')
let go = document.getElementById('go')
let year = document.getElementById('year')
let out = document.getElementById('out')

first.addEventListener('input', function(){
    if(first.value.length == 4){
        last.focus()
        last.value = ''
    }
})

last.addEventListener('input', function(){
    if(last.value <= first.value){
        out.innerHTML = 'второе число должно быть больше чем первое'
        last.focus()
    }
    if(last.value.length == 4 && last.value >= first.value){
        last.blur()
    }
})

first.addEventListener('click', function(){
    first.value = ''
})

last.addEventListener('click', function(){
    last.value = ''
})

go.addEventListener('click', function(){
    let firstNum = first.value
    let lastNum = last.value


    for(let i = firstNum; i <= lastNum; i++){
        let option = document.createElement('option')
        option.value = i
        option.text = i + 'г.'
        console.log(i)
        year.add(option)
    }
})

year.addEventListener('click', function(){
    let myYear = this.value
    let date = new Date(myYear, 2, 0)

    if(date.getDate() == 29){
        out.innerHTML = 'високосный год'
    } else {
        out.innerHTML = 'живи спокойно'
    }
})

//Атрибут value

let week = document.getElementById('week')

week.addEventListener('change', function(e){
    if(this.value >= 1 && this.value <= 5){
        console.log(this.options[this.value -1].text + ' ' + 'рабочий день')
    }
    if(this.value == 6 || this.value == 7){
        console.log(this.options[this.value -1].text + ' ' + 'выходной день')
    }
})