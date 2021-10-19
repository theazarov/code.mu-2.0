'use strict';

//Отработка изученного материала на работу с DOM

/*Задача 1js.Pm.Dm.Pm

Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.*/

let elem01 = document.getElementById('elem01')
let elem02 = document.getElementById('elem02')

elem01.addEventListener('blur', function(){
    elem02.innerHTML += elem01.value
})

/*Задача 2js.Pm.Dm.Pm

Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.*/

let elem03 = document.getElementById('elem03')
let elem04 = document.getElementById('elem04')
let out04 = document.getElementById('out04')
let button04 = document.getElementById('button04')

button04.addEventListener('click', function(){
    out04.innerHTML = +elem03.value + +elem04.value
})

/*Задача 3js.Pm.Dm.Pm

Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.*/

let elem05 = document.getElementById('elem05')

elem05.addEventListener('blur', function(){
    let myArr = elem05.value.split('')
    let result = 0

    for(let num of myArr){
        result += Number(num)
    }

    return console.log(result)
})

/*Задача 4js.Pm.Dm.Pm

Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).*/

let elem06 = document.getElementById('elem06')

elem06.addEventListener('blur', function(){
    let myArr = elem06.value.split(',')
    let result = 0

    for(let num of myArr){
        result += Number(num)
    }

    return console.log(result / myArr.length)
})

/*Задача 5js.Pm.Dm.Pm

Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.*/

let elem07 = document.getElementById('elem07')
let elem08 = document.getElementById('elem08')
let elem09 = document.getElementById('elem09')
let elem10 = document.getElementById('elem10')

elem07.addEventListener('blur', function(){
    let myArr = elem07.value.split(' ')

    elem08.value = myArr[0]
    elem09.value = myArr[1]
    elem10.value = myArr[2]
})

/*Задача 6js.Pm.Dm.Pm

Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).*/

let elem11 = document.getElementById('elem11')

elem11.addEventListener('blur', function(){
    let myArr = elem11.value.split(' ')
    let result = ''

    for(let str of myArr){
        result += str[0].toUpperCase() + str.slice(1) + ' '
    }
    
    return elem11.value = result
})

/*Задача 7js.Pm.Dm.Pm

Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.*/

let elem12 = document.getElementById('elem12')

elem12.addEventListener('blur', function(){
    let myStrOne = elem12.value.split(',').join('')
    let myStrTwo = myStrOne.split(' ')

    return console.log('количество слов равно: ' + myStrTwo.length)
})

/*Задача 8js.Pm.Dm.Pm

Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.*/

let elem13 = document.getElementById('elem13')

elem13.addEventListener('blur', function(){
    let myArr = elem13.value.split('.').join('-')
    return elem13.value = myArr
})

/*Задача 9js.Pm.Dm.Pm

Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).*/

let elem14 = document.getElementById('elem14')
let button14 = document.getElementById('button14')

button14.addEventListener('click', function(){
    let myReverse = elem14.value.split('').reverse().join('')

    if(elem14.value == myReverse){
        console.log('перед нами полиндром')
    } else {
        console.log('попробуйте другое слово')
    }
})

/*Задача 10js.Pm.Dm.Pm

Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.*/

let elem15 = document.getElementById('elem15')

elem15.addEventListener('blur', function(){

    if(elem15.value.split('').includes('3')){
        console.log('yes')
    } else {
        console.log('no')
    }
})

/*Задача 11js.Pm.Dm.Pm

Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.*/

let myOne = document.querySelectorAll('.myOne')
let buttonOne = document.getElementById('buttonOne')

buttonOne.addEventListener('click', function(){

    for(let i = 0; i < myOne.length; i++){
        myOne[i].innerHTML += i
    }
})

/*Задача 12js.Pm.Dm.Pm

Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.*/

let elem16 = document.getElementById('elem16')
let elem17 = document.getElementById('elem17')

elem16.addEventListener('click', function(){
    elem16.innerHTML += elem16.href
})

elem17.addEventListener('click', function(){
    elem17.innerHTML += elem17.href
})

/*Задача 13js.Pm.Dm.Pm

Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).*/

let elem18 = document.getElementById('elem18')

if(elem18.href.indexOf('http://') !== -1){
    elem18.innerHTML += '&rarr;'
    console.log('ya')
}

/*Задача 14js.Pm.Dm.Pm

Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.*/

let elem19 = document.querySelectorAll('.elem19')

for(let elem of elem19){
    elem.addEventListener('click', function(){
        elem.innerHTML *= elem.innerHTML
    })
}

/*Задача 15js.Pm.Dm.Pm

Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.*/

/*Задача 16js.Pm.Dm.Pm

Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.*/

let elem21 = document.getElementById('elem21')
let buttonPlus = document.getElementById('buttonPlus')
let buttonMinus = document.getElementById('buttonMinus')

function plus(str){
    elem21.value++

    buttonMinus.addEventListener('click', minus)
}

function minus(){
    elem21.value--

    if(elem21.value == 0){
        buttonMinus.removeEventListener('click', minus)
    }
}

buttonPlus.addEventListener('click', plus)
buttonMinus.addEventListener('click', minus)

/*Задача 17js.Pm.Dm.Pm

Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.*/

let elem22 = document.getElementById('elem22')
let my22 = document.querySelectorAll('.my22')
let i = 0

for(let elem of my22){
    elem.addEventListener('click', function(){
        elem22.value = i++
    })
}

/*Задача 18js.Pm.Dm.Pm

В инпут вводится страна и нажимается Enter. По нажатию на Enter сделайте так, чтобы введенные страны записывались в абзац под инпутом через запятую. То есть по каждому нажатию Enter в абзац будут добавляться все новые и новые страны.*/

let elem23 = document.getElementById('elem23')
let elem24 = document.getElementById('elem24')

elem23.addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        elem24.innerHTML += elem23.value + ', '
        elem23.value = ''
    }
})

/*Задача 19js.Pm.Dm.Pm

На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста*/

let elem25 = document.querySelectorAll('.elem25')

for(let elem of elem25){
    let myArr = elem.innerHTML.split('')

    elem.innerHTML = myArr.splice(0, 10).join('') + '...'
}

/*Задача 20js.Pm.Dm.Pm

Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.*/

let elem26 = document.getElementById('elem26')

elem26.addEventListener('blur', function(){
    
    if(elem26.value >= 1 && elem26.value <= 100){
        elem26.classList.remove('colorRad')
        elem26.classList.add('colorGreen')

    } else{
        elem26.classList.remove('colorGreen')
        elem26.classList.add('colorRad')
    }
})

/*Задача 21js.Pm.Dm.Pm

Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.*/

let elem27 = document.getElementById('elem27')
let button27 = document.getElementById('button27')

button27.addEventListener('click', function(){
    let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я']
    let result = []

    for(let i = 0; i < 8; i++){
        let rundom = Math.floor(Math.random() * (arr_ru.length - 1 + 1)) + 1
        result.push(arr_ru.splice(rundom, 1))
    }
    elem27.value = result
})

/*Задача 22js.Pm.Dm.Pm

Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.*/

let elem28 = document.getElementById('elem28')
let button28 = document.getElementById('button28')

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

button28.addEventListener('click', function(){
    let myArr = elem28.value.split('')
    let result = []
    
    while(myArr.length > 0){
        let random = getRandom(0, myArr.length -1)
        let elem = myArr.splice(random, 1)[0]
        result.push(elem)
    }
    elem28.value = result.join('')
})

/*Задача 23js.Pm.Dm.Pm

Дана ссылка. Дан чекбокс. По нажатию на ссылку меняйте состояние чекбокса с отмеченного на неотмеченное и наоборот.*/

let elem29 = document.getElementById('elem29')
let elem30 = document.getElementById('elem30')

elem30.addEventListener('click', function(){
    elem29.checked = !elem29.checked
})

/*Задача 24js.Pm.Dm.Pm

Дан инпут. В него вводится температура в градусах Фаренгейта. Сделайте так, чтобы автоматически по мере ввода в абзац под инпутом эта температура выводилась в градусах Цельсия.*/

let elem31 = document.getElementById('elem31')
let elem32 = document.getElementById('elem32')

elem31.addEventListener('input', function(){
    elem32.innerHTML = (elem31.value - 32) * (5 / 9)
})

/*Задача 25js.Pm.Dm.Pm

Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.*/

let elem33 = document.getElementById('elem33')
let button33 = document.getElementById('button33')
let out33 = document.getElementById('out33')

button33.addEventListener('click', function(){
    let result = 1

    for(let i = 2; i <= elem33.value; i++){
        result = result * i
    }

    out33.innerHTML = result
})

/*Задача 26js.Pm.Dm.Pm

Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.*/

