'use strict';

//Пользовательские атрибуты в JavaScript.

let elem01 = document.getElementById('elem01')

console.log(elem01.dataset.num)

/*Задача 1hash.txt: js.Pm.Dm.DA

Дан следующий код:

<div id="elem" data-text="str">text</div>
Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.*/

let elem02 = document.getElementById('elem02')

elem02.addEventListener('click', function(){
    elem02.innerHTML += elem02.dataset.text
})

/*Задача 2hash.txt: js.Pm.Dm.DA

Даны дивы, содержащие в атрибуте data-num свой порядковый номер:

<div data-num="1">text</div>
<div data-num="2">text</div>
<div data-num="3">text</div>
<div data-num="4">text</div>
<div data-num="5">text</div>
Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.*/

let elem03 = document.querySelectorAll('.qqq')

console.log(elem03)

for(let elem of elem03){
    elem.addEventListener('click', function(){
        elem.innerHTML += elem.dataset.mynum
    })
}

/*Задача 3hash.txt: js.Pm.Dm.DA

Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. Пусть по двойному клику на эту кнопку на экран выводится, сколько кликов по этой кнопке было сделано.*/

let elem04 = document.getElementById('elem04')
let j = 0

elem04.addEventListener('click', function(){
    elem04.setAttribute('num', '0')

    elem04.dataset.num = j++
})

elem04.addEventListener('dblclick', function(){
    console.log(elem04.dataset.num)
})

/*Задача 4hash.txt: js.Pm.Dm.DA

Дан инпут:

<input id="elem" data-length="5">
В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.*/

let elem05 = document.getElementById('elem05')

elem05.addEventListener('blur', function(){
    if(elem05.value.length != elem05.dataset.length){
        console.log('количество символов не совпадает')
    }
})

/*Задача 5hash.txt: js.Pm.Dm.DA

Дан инпут:

<input id="elem" data-min="5" data-max="10">
В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.*/

let elem06 = document.getElementById('elem06')

elem06.addEventListener('blur', function(){
    let myText = elem06.value.length
    let min = elem06.dataset.min
    let max = elem06.dataset.max

    if(myText < min || myText > max){
        console.log('недопустимое количество символов')
    }

})

//Имена с дефисами

let elem07 = document.getElementById('elem07')

console.log(elem07.dataset.myTest)

/*Задача 6hash.txt: js.Pm.Dm.DA

Дан следующий код:

<div id="elem" data-product-price="1000" data-product-amount="5">
	товар яблоки
</div>
Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.*/

let elem08 = document.getElementById('elem08')

elem08.addEventListener('click', function(){
    elem08.innerHTML += elem08.dataset.productPrice * elem08.dataset.productAmount
})

//Обращение через методы

let elem09 = document.getElementById('elem09')

console.log(elem09.getAttribute('data-num'))

//Работа с узлами в JavaScript

let elem10 = document.getElementById('elem10')

console.log(elem10.firstElementChild)
console.log(elem10.firstChild)

/*Задача 1hash.txt: js.Pm.Dm.Nds

Напишите код, который покажет разницу между lastChild и lastElementChild.*/

let elem11 = document.getElementById('elem11')

console.log(elem11.firstChild)
console.log(elem11.firstElementChild)

/*Задача 2hash.txt: js.Pm.Dm.Nds

Напишите код, который покажет разницу между nextSibling и nextElementSibling.*/

let elem12 = document.getElementById('elem12')

console.log(elem12.nextElementSibling)
console.log(elem12.nextSibling)

/*Задача 3hash.txt: js.Pm.Dm.Nds

Напишите код, который покажет разницу между previousSibling и previousElementSibling.*/

let elem13 = document.getElementById('elem13')

console.log(elem13.previousElementSibling)
console.log(elem13.previousSibling)

//Перебор циклом

let elem14 = document.querySelector('.elem14')

console.log(elem14.childNodes[0])
console.log(elem14.childNodes[1])

for(let node of elem14.childNodes){
    console.log(node)
}

/*Задача 4hash.txt: js.Pm.Dm.Nds

Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите их в консоль.*/

let elem15 = document.getElementById('elem15')

for(let node of elem15.childNodes){
    console.log(node)
}

//Название узлов

/*Задача 5hash.txt: js.Pm.Dm.Nds

Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль их названия.*/

let elem16 = document.getElementById('elem16')

for(let node of elem16.childNodes){
    console.log(node.nodeName)
}

//Тип узлов

/*Задача 6hash.txt: js.Pm.Dm.Nds

Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль только узлы-элементы и текстовые узлы.*/

let elem17 = document.getElementById('elem17')

for(let node of elem17.childNodes){
    if(node.nodeType == 1 || node.nodeType == 3){
        console.log(node.nodeName)
    }
}

//Текст узлов

/*Задача 7hash.txt: js.Pm.Dm.Nds

Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль тексты всех узлов.*/

let elem18 = document.getElementById('elem18')

for(let node of elem18.childNodes){

    if(node.nodeType == 3){
        console.log(node.data)
    }
}

/*Задача 8hash.txt: js.Pm.Dm.Nds

Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль тексты всех комментариев и текстовых узлов.*/

let elem19 = document.getElementById('elem19')

for(let node of elem19.childNodes){
    if(node.nodeType == 3 || node.nodeType == 8){
        console.log(node.nodeValue)
    }
}

/*Задача 9hash.txt: js.Pm.Dm.Nds

Дан див:

<div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
Переберите циклом все узлы этого дива и выведите в консоль тексты текстовых узлов и элементов.*/

let elem20 = document.getElementById('elem20')

for(let node of elem20.childNodes){
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

let elem21 = document.getElementById('elem21')

for(let node of elem21.childNodes){
    if(node.nodeType ==1){
        node.innerHTML += node.nodeName
    }
    if(node.nodeType == 3 || node.nodeType == 8){
        node.data += node.nodeName
    }
}