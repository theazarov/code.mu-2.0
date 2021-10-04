'use strict';

//Разница между способами получения атрибутов

let elem01 = document.getElementById('elem01')

elem01.value = 'new'

console.log(elem01.value)
console.log(elem01.getAttribute('value'))

/*Задача 1hash.txt: js.Pm.Dm.AMPDf

Дан инпут с каким-то начальным значением. Дана также кнопка. По нажатию на кнопку определите, было ли изменено пользователем начальное значение инпута.*/

let elem02 = document.getElementById('elem02')
let button02 = document.getElementById('button02')

//elem02.value = 'two'

button02.addEventListener('click', function(){
    if(elem02.value == elem02.getAttribute('value')){
        console.log('изменений не было')
    } else {
        console.log('изминения были внесены')
    }
})

//Изменение атрибута

let elem03 = document.getElementById('elem03')

elem03.setAttribute('value', 'new')
console.log(elem03.value)
console.log(elem03.getAttribute('value'))

/*Задача 2hash.txt: js.Pm.Dm.AMPDf

Дан инпут с каким-то начальным значением. Пусть пользователь меняет это значение. Сделайте рядом с инпутом кнопку, по нажатию на которую value инпута вернется в изначальное значение.*/

let elem04 = document.getElementById('elem04')
let button04 = document.getElementById('button04')

button04.addEventListener('click', function(){
    elem04.value = elem04.getAttribute('value')
})

//Манипулирование CSS классами в JavaScript
//Свойство classList

let elem05 = document.getElementById('elem05')

let lengthElem = elem05.classList.length

let nameElem = elem05.classList

console.log(lengthElem)

for(let elem of nameElem){
    console.log(elem)
}

/*Задача 1hash.txt: js.Pm.Dm.CCM

Дан элемент:

<p id="elem" class="www ggg zzz"></p>
Узнайте количество его классов.*/

let elem06 = document.getElementById('elem06')

console.log(elem06.classList.length)

/*Задача 2hash.txt: js.Pm.Dm.CCM

Дан элемент:

<p id="elem" class="www ggg zzz"></p>
Переберите в цикле его классы.*/

let elem07 = document.getElementById('elem07')

let elemClass = elem07.classList

for(let elem of elemClass){
    console.log(elem)
}

//Добавление классов
//Метод add объекта classList

let elem08 = document.getElementById('elem08')

elem08.classList.add('hello')

console.log(elem08.className)

/*Задача 3hash.txt: js.Pm.Dm.CCM

Дан элемент:

<p id="elem" class="www ggg zzz"></p>
Добавьте ему класс xxx.*/

let elem09 = document.getElementById('elem09')

elem09.classList.add('xxx')

console.log(elem09.className)

//Удаление классов
//Метод remove объекта classList

let elem10 = document.getElementById('elem10')

elem10.classList.remove('eee')

console.log(elem10.className)

/*Задача 4hash.txt: js.Pm.Dm.CCM

Дан элемент:

<p id="elem" class="www ggg zzz"></p>
Удалите у него класс www и класс zzz.*/

let elem11 = document.getElementById('elem11')

elem11.classList.remove('www', 'zzz')

console.log(elem11.className)

//Проверка классов
//Метод contains объекта classList

let elem12 = document.getElementById('elem12')

console.log(elem12.classList.contains('mmm'))

/*Задача 5hash.txt: js.Pm.Dm.CCM

Дан элемент:

<p id="elem" class="www ggg zzz"></p>
Проверьте наличие у него класса ggg.*/

let elem13 = document.getElementById('elem13')

console.log(elem13.classList.contains('fff'))

//Чередование классов
//Метод toggle объекта classList

let elem14 = document.getElementById('elem14')

elem14.classList.toggle('ggg')

console.log(elem14.className)

/*Задача 6hash.txt: js.Pm.Dm.CCM

Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.*/

let elem15 = document.getElementById('elem15')

elem15.classList.toggle('kkk')

console.log(elem15.classList.contains('kkk'))