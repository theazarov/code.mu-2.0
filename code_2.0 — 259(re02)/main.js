'use strict';

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
]

let table = document.getElementById('table')
let theName = document.getElementById('name').value
let age = document.getElementById('age').value
let salary = document.getElementById('salary').value
let arr = [theName, age, salary]
let button = document.getElementById('button')

for(let i = 0; i < employees.length; i++){
    let tr = document.createElement('tr')

    for(let elem in employees[i]){
        let td = document.createElement('td')
        td.classList = 'new'
        td.innerHTML = employees[i][elem]
        tr.appendChild(td)
        
        editElem(td)
    }
    table.appendChild(tr)
}

let trs = table.querySelectorAll('tr')


for(let tr of trs){
    let td = document.createElement('td')
    let a = document.createElement('a')
    a.href = '#'
    a.innerHTML = 'del'
    td.appendChild(a)
    tr.appendChild(td)

    deleteTR(a, tr)
}


button.addEventListener('click', function(){
    let tr = document.createElement('tr')

    for(let i = 0; i < 3; i++){
        let td = document.createElement('td')
        td.innerHTML = arr[i]
        tr.appendChild(td)

        editElem(td)
    }

    let a = document.createElement('a')
    let td = document.createElement('td')
        a.href = '#'
        a.innerHTML = 'del'
        td.appendChild(a)
        tr.appendChild(td)

    table.appendChild(tr)

    deleteTR(a, tr)
})

function deleteTR(del, elem){
    del.addEventListener('click', function(){
        elem.remove()
    })
}

function editElem(elem){
    elem.addEventListener('click', function one(){
        let input = document.createElement('input')
        input.value = elem.innerHTML
        elem.innerHTML = ''
        elem.appendChild(input)

        input.addEventListener('blur', function(){
            elem.innerHTML = input.value
            input.remove()
            elem.addEventListener('click', one)
        })

        input.focus()
        elem.removeEventListener('click', one)
    })
}
