'use strict';

//Работа с атрибутами тегов через свойства элементов

let elem01 = document.getElementById('elem01')
let button01 = document.getElementById('button01')

button01.addEventListener('click', function(){
    console.log(elem01.id)
})

/*Задача 1hash.txt: js.Pm.Dm.AVP

Дан следующий инпут:

<input id="elem" type="email">
Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.*/

let elem02 = document.getElementById('elem02')
let button02 = document.getElementById('button02')

button02.addEventListener('click', function(){
    console.log(elem02.type)
})

/*Задача 2hash.txt: js.Pm.Dm.AVP

Дан следующий инпут:

<input id="elem" type="email">
Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.*/

let elem03 = document.getElementById('elem03')
let button03 = document.getElementById('button03')

button03.addEventListener('click', function(){
    elem03.type = 'submit'
})

/*Задача 3hash.txt: js.Pm.Dm.AVP

Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.*/

let elem04 = document.getElementById('elem04')
let button04 = document.getElementById('button04')
let out04 = document.getElementById('out04')

button04.addEventListener('click', function(){
    out04.innerHTML = elem04.href
})

/*Задача 4hash.txt: js.Pm.Dm.AVP

Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.*/

let elem05 = document.getElementById('elem05')
let button05 = document.getElementById('button05')

button05.addEventListener('click', function(){
    elem05.innerHTML += ' - ' + elem05.href
})

/*Задача 5hash.txt: js.Pm.Dm.AVP

Пусть у вас есть картинка. Разместите ее на странице в помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.*/

let elem06 = document.getElementById('elem06')
let button06 = document.getElementById('button06')
let out06 = document.getElementById('out06')

button06.addEventListener('click', function(){
    out06.innerHTML = elem06.src
})

/*Задача 6hash.txt: js.Pm.Dm.AVP

Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.*/

let elem07 = document.getElementById('elem07')
let button07 = document.getElementById('button07')

button07.addEventListener('click', function(){
    elem07.width = 200
    elem07.height = 200
})

/*Задача 7hash.txt: js.Pm.Dm.AVP

Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.*/

let elem08 = document.getElementById('elem08')
let button08 = document.getElementById('button08')

button08.addEventListener('click', function(){
    elem08.width = elem08.width * 2

    if(elem08.width >= 1200){
        elem08.width = 150
    }
})

/*Задача 8hash.txt: js.Pm.Dm.AVP

Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.*/

let elem09 = document.getElementById('elem09')
let button09 = document.getElementById('button09')

let elem10 = document.getElementById('elem10')
let button10 = document.getElementById('button10')

button09.addEventListener('click', function(){
    elem09.src = 'logo.png'
})

button10.addEventListener('click', function(){
    elem10.src = 'logo.png'
})

//Работа с текстовыми полями в JavaScript

let elem11 = document.getElementById('elem11')

console.log(elem11.value)

/*Задача 1hash.txt: js.Pm.Dm.TF

Дан инпут:

<input id="elem" value="text">
Сделайте кнопку, нажатие на которую будет выводить текущий текст инпута. После захода на страницу нажмите на кнопку, чтобы увидеть текущий текст инпута, затем поредактируйте текст в инпуте и еще раз нажмите на кнопку. Убедитесь в том, что выведется новый текст инпута.*/

let elem12 = document.getElementById('elem12')
let button12 = document.getElementById('button12')

button12.addEventListener('click', function(){
    console.log(elem12.value)
})

/*Задача 2hash.txt: js.Pm.Dm.TF

Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.*/

let elem13 = document.getElementById('elem13')
let button13 = document.getElementById('button13')

button13.addEventListener('click', function(){
    elem13.value = 'hello'
})

/*Задача 3hash.txt: js.Pm.Dm.TF

Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.*/

let elem14 = document.getElementById('elem14')
let button14 = document.getElementById('button14')
let out14 = document.getElementById('out14')

button14.addEventListener('click', function(){
    out14.innerHTML = elem14.value
})

/*Задача 4hash.txt: js.Pm.Dm.TF

Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.*/

let elem15 = document.getElementById('elem15')
let button15 = document.getElementById('button15')
let out15 = document.getElementById('out15')

elem15.addEventListener('focus', function(){
    elem15.value = ''
})

button15.addEventListener('click', function(){
    out15.value = elem15.value * elem15.value
})

/*Задача 5hash.txt: js.Pm.Dm.TF

Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.*/

let one = document.getElementById('one')
let two = document.getElementById('two')
let button16 = document.getElementById('button16')

button16.addEventListener('click', function(){
    let oneArr = [one.value]
    let twoArr = [two.value]

    one.value = twoArr
    two.value = oneArr
})

/*Задача 6hash.txt: js.Pm.Dm.TF

Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.*/

let elem17 = document.getElementById('elem17')
let elem18 = document.getElementById('elem18')
let elem19 = document.getElementById('elem19')
let elem20 = document.getElementById('elem20')

let button20 = document.getElementById('button20')
let out20 = document.getElementById('out20')

button20.addEventListener('click', function(){
    let out = Number(elem17.value) + Number(elem18.value) + Number(elem19.value) + Number(elem20.value)
    out20.innerHTML = out / 4
})