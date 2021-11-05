'use strict';

//Ссылка на удаление элемента на JavaScript

let childOne = document.getElementById('childOne')
let removeOne = document.getElementById('removeOne')

removeOne.addEventListener('click', function(event){
    childOne.parentElement.removeChild(childOne)
    event.preventDefault()
})

//Создание ссылок для удаление элементов на JavaScript

let parentTwo = document.getElementById('parentTwo')
let elemTwo = parentTwo.querySelectorAll('p')
console.log(elemTwo)

for(let elem of elemTwo){
    let newA = document.createElement('a')
    newA.href = '#'
    newA.innerHTML = 'remove'

    newA.addEventListener('click', () => elem.remove())
    elem.appendChild(newA)
}

/*Задача 1js.Pm.Mn.CRL

Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.*/

let parentThree = document.getElementById('parentThree')
let elemThree = parentThree.querySelectorAll('li')

for(let elem of elemThree){
    let a = document.createElement('a')
    a.href = '#'
    a.innerHTML = 'remove'

    a.addEventListener('click', function(event){
        elem.remove()
        event.preventDefault()
    })

    elem.appendChild(a)
}

/*Задача 2js.Pm.Mn.CRL

Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.*/

let tableFour = document.getElementById('tableFour')

for(let i = 0; i < 3; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 4; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableFour.appendChild(tr)
}

let tdElem = tableFour.querySelectorAll('tr')
console.log(tdElem)

for(let elem of tdElem){
    let a = document.createElement('a')
    a.href = '#'
    a.innerHTML = 'remove'
    let td = document.createElement('td')
    td.appendChild(a)

    a.addEventListener('click', function(event){
        elem.remove()
        event.preventDefault()
    })

    
    elem.appendChild(td)
}