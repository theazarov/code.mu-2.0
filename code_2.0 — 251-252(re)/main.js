'use strict';

//Редактирование в группе элементов на JavaScript

let p = document.querySelectorAll('.parent')

for(let elem of p){

    elem.addEventListener('click', function one(){
        let input = document.createElement('input')
        input.value = elem.innerHTML
        elem.innerHTML = ''

        input.addEventListener('blur', function(){
            elem.innerHTML = input.value
            elem.addEventListener('click', one)
        })
        elem.appendChild(input)

        input.focus()
        elem.removeEventListener('click', one)
    })
}

/*Задача 2js.Pm.Mn.EGE

Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки.*/

let tableOne = document.getElementById('tableOne')

for(let i = 0; i < 4; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        td.innerHTML = 'text' + j
        tr.appendChild(td)
    }
    tableOne.appendChild(tr)
}

let td = tableOne.querySelectorAll('td')
console.log(td)

for(let elem of td){

    elem.addEventListener('click', function one(){
        let input = document.createElement('input')
        input.value = elem.innerHTML
        elem.innerHTML = ''
        elem.appendChild(input)

        input.addEventListener('blur', function(){
            elem.innerHTML = input.value
            elem.addEventListener('click', one)
        })

        input.focus()
        elem.removeEventListener('click', one)
    })
}

//Одновременное редактирование и удаление элементов

/*Задача 2js.Pm.Mn.RET

Пусть теперь изначально тегов span нет:

<div id="parent">
	<p>text1</p>
	<p>text2</p>
	<p>text3</p>
</div>
Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление.*/

let parentTwo = document.getElementById('parentTwo')
let pTwo = parentTwo.querySelectorAll('p')

for(let elem of pTwo){

    let span = document.createElement('span')
    span.innerHTML = elem.innerHTML
    elem.innerHTML = ''
    elem.appendChild(span)

    span.addEventListener('click', function one(){

        let input = document.createElement('input')
        input.value = span.innerHTML
        span.innerHTML = ''
        elem.appendChild(input)

        input.addEventListener('blur', function(){
            span.innerHTML = input.value
            input.remove()
            span.addEventListener('click', one)
        })

        let a = document.createElement('a')
        a.innerHTML = 'delete'
        a.href = '#'
        elem.appendChild(a)

        a.addEventListener('click', function(){
            elem.remove()
        })

        input.focus()
        span.removeEventListener('click', one)
    })

}