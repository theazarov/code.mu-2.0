'use strict';

//Изменение выбранного пункта списка на JavaScript

let elem01 = document.getElementById('elem01')
let btn01 = document.getElementById('btn01')

btn01.addEventListener('click', function(){
    elem01.value = 'three'
})

/*Задача 1js.Pm.Fm.SICh

Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий месяц.*/

let elem02 = document.getElementById('elem02')
let btMount = document.getElementById('btMount')

btMount.addEventListener('click', function(){
    let date = new Date()

    elem02.value = date.getMonth() +1
})

//Номер выбранного пункта выпадающего списка

let elem03 = document.getElementById('elem03')

console.log(elem03.selectedIndex)
console.log(elem03.options[elem03.selectedIndex].text)

/*Задача 1js.Pm.Fm.SIN

Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.*/

let getNum = document.getElementById('getNum')
let goNum = document.getElementById('goNum')

getNum.addEventListener('blur', function(){
    goNum.selectedIndex = Number(getNum.value) -1
})

/*Задача 2js.Pm.Fm.SIN

Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий день.*/

let myDay = document.getElementById('myDay')
let getDay = document.getElementById('getDay')

getDay.addEventListener('click', function(){
    let date = new Date()

    myDay.selectedIndex = date.getDay() -1
})

//Получение пунктов выпадающего списка на JavaScript

let days = document.getElementById('days')
let myBtn = document.getElementById('myBtn')

for(let day of days){
    console.log(day.text)
}

/*Задача 1js.Pm.Fm.DLIG

Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.*/

let i = 1

for(let day of days){
    day.value = i++

    day.text += ': ' + day.value
}

//Работа с пунктами выпадающего списка на JavaScript

/*Задача 1js.Pm.Fm.DLIO

Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.*/

let mySel = document.getElementById('mySel')

for(let elem of mySel){
    if(elem.selected){
        elem.text += '!'
    } else {
        elem.text += '?'
    }
}

/*Задача 2js.Pm.Fm.DLIO

Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.*/

let btn05 = document.getElementById('btn05')

btn05.addEventListener('click', function(){

    mySel.lastElementChild.selected = true
})