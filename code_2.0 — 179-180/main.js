'use strict';

//Работа с узлами в JavaScript

let elem01 = document.getElementById('elem01')

console.log(elem01.firstElementChild)
console.log(elem01.firstChild)

/*Задача 2hash.txt: js.Pm.Dm.Nds

Напишите код, который покажет разницу между nextSibling и nextElementSibling.*/

let elem02 = document.getElementById('elem02')

console.log(elem02.nextElementSibling)
console.log(elem02.nextSibling)

/*Задача 3hash.txt: js.Pm.Dm.Nds

Напишите код, который покажет разницу между previousSibling и previousElementSibling.*/

let elem03 = document.getElementById('elem03')

console.log(elem03.previousElementSibling)
console.log(elem03.previousSibling)

//Перебор циклом

let elem04 = document.getElementById('elem04')

console.log(elem04.childNodes[0])
console.log(elem04.childNodes[1])

for(let node of elem04.childNodes){
    console.log(node)
}

/*Задача 4hash.txt: js.Pm.Dm.Nds

Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите их в консоль.*/

let elem05 = document.getElementById('elem05')

for(let node of elem05.childNodes){
    console.log(node)
}

//Название узлов

/*Задача 5hash.txt: js.Pm.Dm.Nds

Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль их названия.*/

let elem06 = document.getElementById('elem06')

for(let node of elem06.childNodes){
    console.log(node.nodeName)
}

//Тип узлов

/*Задача 6hash.txt: js.Pm.Dm.Nds

Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль только узлы-элементы и текстовые узлы.*/

let elem07 = document.getElementById('elem07')

for(let node of elem07.childNodes){
    if(node.nodeType == 1 || node.nodeType == 3){
        console.log(node.nodeType)
    }
}

//Текст узлов

/*Задача 7hash.txt: js.Pm.Dm.Nds

Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль тексты всех узлов.*/

let elem08 = document.getElementById('elem08')

for(let node of elem08.childNodes){

    if(node.nodeType == 1){
        console.log(node.innerHTML)
    }

    if(node.nodeType == 3 || node.nodeType == 8){
        console.log(node.nodeValue)
    }
}

/*Задача 8hash.txt: js.Pm.Dm.Nds

Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль тексты всех комментариев и текстовых узлов.*/

let elem09 = document.getElementById('elem09')

for(let node of elem09.childNodes){

    if(node.nodeType == 3 || node.nodeType == 8){
        console.log(node.data)
    }
}

/*Задача 9hash.txt: js.Pm.Dm.Nds

Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль тексты текстовых узлов и элементов.*/

let elem10 = document.getElementById('elem10')

for(let node of elem10.childNodes){

    if(node.nodeType == 1){
        console.log(node.innerHTML)
    }
    if(node.nodeType == 3){
        console.log(node.data)
    }
}

/*Задача 10hash.txt: js.Pm.Dm.Nds

Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и каждому узлу в конец запишите его тип.*/

let elem11 = document.getElementById('elem11')

for(let node of elem11.childNodes){
    
    if(node.nodeType == 1){
        node.innerHTML += '(' + node.nodeName + ')' + ' '
    }

    if(node.nodeType == 3 || node.nodeType == 8){
        node.data += '(' + node.nodeName + ')' + ' '
    }
}

//Отработка изученного материала на работу с DOM

/*Задача 1hash.txt: js.Pm.Dm.Pm

Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.*/

let elem12 = document.getElementById('elem12')
let elem13 = document.getElementById('elem13')

elem12.addEventListener('blur', function(){
    elem13.innerHTML = elem12.value
})

/*Задача 2hash.txt: js.Pm.Dm.Pm

Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.*/

let elem14 = document.getElementById('elem14')
let elem15 = document.getElementById('elem15')
let button15 = document.getElementById('button15')
let out15 = document.getElementById('out15')

button15.addEventListener('click', function(){
    out15.innerHTML = Number(elem14.value) + Number(elem15.value)
})

/*Задача 3hash.txt: js.Pm.Dm.Pm

Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.*/

let elem16 = document.getElementById('elem16')

elem16.addEventListener('blur', function(){
    let myArr = elem16.value.split('')
    let result = 0
    
    for(let elem of myArr){
        result += Number(elem)
    }

    console.log(result)
})

/*Задача 4hash.txt: js.Pm.Dm.Pm

Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).*/

let elem17 = document.getElementById('elem17')

elem17.addEventListener('blur', function(){

    let myArr = elem17.value.split(',')
    let result = 0

    for(let elem of myArr){
        result += Number(elem)
    }
    console.log(result / myArr.length)
})

/*Задача 5hash.txt: js.Pm.Dm.Pm

Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.*/

let elem18 = document.getElementById('elem18')
let elem19 = document.getElementById('elem19')
let elem20 = document.getElementById('elem20')
let out20 = document.getElementById('out20')

out20.addEventListener('blur', function(){
    let myArr = out20.value.split(' ')

    elem18.value = myArr[0]
    elem19.value = myArr[1]
    elem20.value = myArr[2]
})

/*Задача 6hash.txt: js.Pm.Dm.Pm

Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).*/

let elem21 = document.getElementById('elem21')

elem21.addEventListener('blur', function(){
    let myArr = elem21.value.split(' ')
    let myStr = ''

    for(let elem of myArr){
        myStr += String(elem.split('')[0]).toUpperCase() + elem.slice(1) + ' '
    }
    elem21.value = myStr
})

elem21.addEventListener('focus', function(){
    elem21.value = ''
})

/*Задача 7hash.txt: js.Pm.Dm.Pm

Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.*/

let elem22 = document.getElementById('elem22')

elem22.addEventListener('blur', function(){
    let myArr = elem22.value.split(' ')
    console.log('количество слов в тексте: ' + myArr.length)
})

/*Задача 8hash.txt: js.Pm.Dm.Pm

Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.*/

let elem23 = document.getElementById('elem23')

elem23.addEventListener('blur', function(){
    let myArr = elem23.value.split('.').join('-')

    elem23.value = myArr
})

/*Задача 9hash.txt: js.Pm.Dm.Pm

Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).*/

let elem24 = document.getElementById('elem24')
let button24 = document.getElementById('button24')

button24.addEventListener('click', function(){
    let myABC = elem24.value.split('').reverse().join('')

    if(myABC == elem24.value){
        console.log('перед вами полиндром')
    }
})

/*Задача 10hash.txt: js.Pm.Dm.Pm

Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.*/

let elem25 = document.getElementById('elem25')

elem25.addEventListener('blur', function(){
    let myNum = elem25.value.split('')

    for(let elem of myNum){
        if(Number(elem) == 3){
            console.log('число содержит цифру 3')
        }
    }
})

/*Задача 11hash.txt: js.Pm.Dm.Pm

Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.*/

let qqq = document.querySelectorAll('.qqq')
let buttonQ = document.getElementById('buttonQ')

buttonQ.addEventListener('click', function(){

    for(let i = 0; i < qqq.length; i++){
        qqq[i].innerHTML += i
    }
})

/*Задача 12hash.txt: js.Pm.Dm.Pm

Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.*/

let elem26 = document.getElementById('elem26')

elem26.innerHTML += ' (' + elem26.href + ')'

/*Задача 13hash.txt: js.Pm.Dm.Pm

Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).*/

let elem27 = document.getElementById('elem27')

let myStr = elem27.href

console.log(myStr)

if(myStr.indexOf('http://')){
    elem27.innerHTML += '&rarr;'
}