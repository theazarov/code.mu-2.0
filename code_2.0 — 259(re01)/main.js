'use strict';

//Практика на изменение элементов на JavaScript

/*Задача 1js.Pm.Mn.EChT

Дан массив. Выведите его элементы в виде списка ul.*/

let elemOne = document.getElementById('elemOne')
let arrOne = ['one', 'two', 'three']

for(let elem of arrOne){
    let li = document.createElement('li')
    let span = document.createElement('span')
    span.innerHTML = elem

    li.appendChild(span)
    elemOne.appendChild(li)
}

/*Задача 2js.Pm.Mn.EChT

Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.*/

elemOne.addEventListener('click', function one(event){
    if(event.target.tagName == 'LI'){

        let a = document.createElement('a')
        a.href = '#'
        a.innerHTML = 'del'

        a.addEventListener('click', function(){
            a.parentElement.remove()
        })

        event.target.parentElement.appendChild(a)
        
        let input = document.createElement('input')
        input.value = event.target.innerHTML
        event.target.innerHTML = ''

        input.addEventListener('blur', function(){
            event.target.innerHTML = input.value
        })

        
        event.target.appendChild(input)
        input.focus()
    }

})

/*Задача 3js.Pm.Mn.EChT

Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать.*/

let buttonOne = document.getElementById('buttonOne')
let addElem = document.getElementById('addElem')

addElem.addEventListener('focus', function(){
    addElem.value = ''
})

buttonOne.addEventListener('click', function two(){
    let li = document.createElement('li')

    if(addElem.value == ''){
        addElem.value = 'введите название'
        buttonOne.removeEventListener('click', two)

    }
    if(addElem.value == 'введите название'){
        buttonOne.removeEventListener('click', two)
    }
    else{
        li.innerHTML = addElem.value
        elemOne.appendChild(li)
        addElem.value = ''
        buttonOne.addEventListener('click', two)
    }
    buttonOne.addEventListener('click', two)
})

/*Задача 4js.Pm.Mn.EChT

Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.*/

//Массив объектов и таблица

/*Задача 6js.Pm.Mn.EChT

Дан следующий массив с работниками:

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
Выведите этих работников в HTML таблице.*/

let tableTwo = document.getElementById('tableTwo')
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
]



for(let i = 0; i < employees.length; i++){
    let tr = document.createElement('tr')
    
    for(let j = 0; j < 1; j++){
        let td = document.createElement('td')
        td.innerHTML = employees[j].name
        td.classList.add('new')
        tr.appendChild(td)
    }
    for(let j = 0; j < 1; j++){
        let td = document.createElement('td')
        td.innerHTML = employees[j].age
        td.classList.add('new')
        tr.appendChild(td)
    }
    for(let j = 0; j < 1; j++){
        let td = document.createElement('td')
        td.innerHTML = employees[j].salary
        td.classList.add('new')
        tr.appendChild(td)
    }
    tableTwo.appendChild(tr)

}

tableTwo.addEventListener('click', function one(event){
    if(event.target.className == 'new'){
        let input = document.createElement('input')
        input.value = event.target.innerHTML
        event.target.innerHTML = ''

        input.addEventListener('blur', function(){
            event.target.innerHTML = input.value
            input.remove()
        })
        

        event.target.appendChild(input)
        input.focus()
    }
})

/*Задача 8js.Pm.Mn.EChT

Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.*/

let trTwo = document.querySelectorAll('tr')

for(let elem of trTwo){
    let td = document.createElement('td')
    let a = document.createElement('a')
    a.href = '#'
    a.innerHTML = 'del'

    a.addEventListener('click', function(){
        elem.remove()
    })

    td.appendChild(a)
    elem.appendChild(td)
}

/*Задача 9js.Pm.Mn.EChT

Сделайте под таблицей 3 инпута и кнопку для добавление нового работника. Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку новый работник добавляется в таблицу. Реализуйте редактирование ячеек для вновь добавленных работников.*/

let myname = document.getElementById('name')
let myage = document.getElementById('age')
let mysalary = document.getElementById('salary')

let buttonTwo = document.getElementById('buttonTwo')

buttonTwo.addEventListener('click', function one(){

    for(let i = 0; i < 1; i++){
        let td = document.createElement('td')
        td.innerHTML = myname.value
        td.classList.add('new')
        tableTwo.appendChild(td)
    }

    for(let i = 0; i < 1; i++){
        let td = document.createElement('td')
        td.innerHTML = myage.value
        td.classList.add('new')
        tableTwo.appendChild(td)
    }

    for(let i = 0; i < 1; i++){
        let td = document.createElement('td')
        td.innerHTML = mysalary.value
        td.classList.add('new')
        tableTwo.appendChild(td)
    }

    for(let i = 0; i < 1; i++){
        let td = document.createElement('td')
        let a = document.createElement('a')
        a.href = '#'
        a.innerHTML = 'del'

        td.appendChild(a)
        tableTwo.appendChild(td)

    }


})
