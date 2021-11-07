'use strict';

//Редактирование в группе элементов на JavaScript

let p = document.querySelectorAll('p')

for(let elem of p){
    elem.addEventListener('click', function one(){
        let input = document.createElement('input')
        input.value = elem.innerHTML
        elem.innerHTML = ''
        elem.appendChild(input)

        input.addEventListener('blur', function(){
            elem.innerHTML = this.value
            elem.addEventListener('click', one)
        })

        elem.removeEventListener('click', one)
    })

}

/*Задача 1js.Pm.Mn.EGE

Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредатировать текст этой li.*/

let li = document.querySelectorAll('li')

for(let elem of li){

    elem.addEventListener('click', function one(){
        let input = document.createElement('input')
        input.value = this.innerHTML
        this.innerHTML = ''
        elem.appendChild(input)

        input.addEventListener('blur', function(){
            elem.innerHTML = this.value
            elem.addEventListener('click', one)
        })
        elem.removeEventListener('click', one)
    })
}

/*Задача 2js.Pm.Mn.EGE

Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки.*/

let table = document.getElementById('table')

for(let i = 0; i < 4; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        td.innerHTML = 'text № ' + 1
        tr.appendChild(td)
    }
    table.appendChild(tr)
}

let td = table.querySelectorAll('td')

for(let elem of td){
    elem.addEventListener('click', function one(){
        let input = document.createElement('input')
        input.value = elem.innerHTML
        elem.innerHTML = ''
        elem.appendChild(input)

        input.addEventListener('blur', function(){
            elem.innerHTML = this.value
            elem.addEventListener('click', one)
        })

        elem.removeEventListener('click', one)

    })
}