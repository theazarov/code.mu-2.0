'use strict';

let one = document.querySelectorAll('.one')
console.log(one)

/*Задача 1js.Pm.Mn.ES

Дан следующий HTML код:

<p>text1</p>
<p>text2</p>
<p>text3</p>
Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет).*/

for(let elem of one){
    let span = document.createElement('span')
    span.innerHTML = elem.innerHTML
    elem.innerHTML = ''
    elem.appendChild(span)

    let a = document.createElement('a')
    a.href = '#'
    a.innerHTML = 'del'
    elem.appendChild(a)

    a.addEventListener('click', function one(){
        span.classList.toggle('colorRad')
        a.remove()
    })
}

/*Задача 2js.Pm.Mn.ES

Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым).*/

/*Задача 3js.Pm.Mn.ES

Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона.*/

let table = document.getElementById('table')

for(let i = 0; i < 3; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 4; j++){
        let td = document.createElement('td')

        tr.appendChild(td)
    }
    table.appendChild(tr)
}

let tr = table.querySelectorAll('tr')

for(let elem of tr){
    let td = document.createElement('td')
    let a = document.createElement('a')
    a.href = '#'
    a.innerHTML = 'colorize'

    a.addEventListener('click', function(){
        td.classList.add('colorGreen')
    })

    a.addEventListener('dblclick', function(){
        td.classList.remove('colorGreen')
    })

    td.appendChild(a)
    elem.appendChild(td)
}


/*Задача 4js.Pm.Mn.ES

Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило ряд в зеленый фон, а второе нажатие отменяло это действие.*/

