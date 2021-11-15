'use strict';

//Массив объектов и список

/*Задача 10js.Pm.Mn.EChT

Дан следующий массив с работниками:

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
Выведите на экран каждого работника в своем теге li тега ul.*/

let elemOne = document.getElementById('elemOne')
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
]

for(let i = 0; i < employees.length; i++){
    let ul = document.createElement('ul')

    for(let key in employees[i]){
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.href = '#'
        a.innerHTML = 'delete'

        li.innerHTML = key + ': ' + employees[i][key] + ' '
        li.append(a)

        a.addEventListener('click', function(){
            a.parentElement.remove()
        })

        ul.appendChild(li)
    }
    let p = document.createElement('p')
    ul.appendChild(p)
    elemOne.appendChild(ul)
}

elemOne.addEventListener('click', function one(event){
    if(event.target.tagName == 'LI'){
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

let user = document.getElementById('name')
let age = document.getElementById('age')
let salary = document.getElementById('salary')
let arr = [user, age, salary]
let theString = ['user', 'age', 'salary']
let j = 0

let button = document.getElementById('button')

button.addEventListener('click', function(){
    let ul = document.createElement('ul')
    
    for(let elem of arr){
        let li = document.createElement('li')
        li.innerHTML = theString[j] + ': ' +elem.value
        j++

        if(j == 3){
            j = 0
        }
        ul.appendChild(li)
    }
    elemOne.appendChild(ul)
})