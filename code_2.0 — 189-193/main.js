'use strict';

/*Задача 1js.Pm.Fm.DL

Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.*/

let select01 = document.getElementById('select01')
let out01 = document.getElementById('out01')
let btn01 = document.getElementById('btn01')



btn01.addEventListener('click', function(){
    out01.innerHTML = select01.options[select01.selectedIndex].text
})

/*Задача 2js.Pm.Fm.DL

Сделайте выпадающий список годов от 2020 до 2030. При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.*/

let vYear = document.getElementById('vYear')

vYear.addEventListener('change', function(){
    let date = new Date(this.value, 1, 29)

    if(date.getDate() == 29){
        console.log('високосный год')
    } else {
        console.log('обычный год')
    }
})

/*Задача 3js.Pm.Fm.DL

Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.*/

let days = document.getElementById('days')

days.addEventListener('change', function(){
    if(this.value >= 1 && this.value <= 5){
        console.log('рабочий день')
    } else {
        console.log('выходной день')
    }
})

/*Задача 1js.Pm.Fm.SICh

Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий месяц.*/

let mounts = document.getElementById('mounts')
let getMount = document.getElementById('getMount')

getMount.addEventListener('click', function(){
    let date = new Date()

    mounts.value = date.getMonth() +1
})

/*Задача 1js.Pm.Fm.SIN

Дан инпут и селект. В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.*/

let mountsTest = document.getElementById('mountsTest')
let getNum = document.getElementById('getNum')
let out03 = document.getElementById('out03')

getNum.addEventListener('blur', function(){
    let num = getNum.value

    if(num > mountsTest.length -1){
        console.log('число слишком большое')
    }
    mountsTest.selectedIndex = num -1
})

out03.innerHTML = 'введите число от ' + mountsTest[0].value + ' до ' + mountsTest.length

/*Задача 2js.Pm.Fm.SIN

Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы по JavaScript по умолчанию выбирал в этом списке текущий день.*/

let daysTwo = document.getElementById('daysTwo')

btn04.addEventListener('click', function(){
    let date = new Date()

    daysTwo.selectedIndex = date.getDay() -1
})

/*Задача 1js.Pm.Fm.DLIG

Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.*/

for(let day of daysTwo){
    day.text += day.value
}

/*Задача 1js.Pm.Fm.DLIO

Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, а для невыбранных пунктов - вопросительный.*/

let daysThree = document.getElementById('daysThree')

daysThree.addEventListener('change', function(){
    for(let day of daysThree){
        if(day.selected){
            day.text = day.text + '!'
        } else {
            day.text = day.text + '?'
        }
    }
})

/*Задача 2js.Pm.Fm.DLIO

Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.*/

let daysFive = document.getElementById('daysFive')
let btn05 = document.getElementById('btn05')

btn05.addEventListener('click', function(){
    daysFive[daysFive.length -1].selected = true
})

/*Задача 3js.Pm.Fm.DLIO

Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.*/

let nums = document.getElementById('nums')
let btn06 = document.getElementById('btn06')

btn06.addEventListener('click', function(){
    console.log(nums[nums.selectedIndex].text)

    nums[nums.selectedIndex].text += '!'
})

/*Задача 4js.Pm.Fm.DLIO

Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.*/