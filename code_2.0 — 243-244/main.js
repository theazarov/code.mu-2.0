'use strict';

//Ссылка на удаление элемента на JavaScript

let elemOne = document.getElementById('elemOne')
let removeOne = document.getElementById('removeOne')

removeOne.addEventListener('click', function(){
    elemOne.parentElement.removeChild(elemOne)
})

/*Задача 1js.Pm.Mn.RL

Самостоятельно, не подсматривая в мой код, решите описанную задачу.*/

let elemTwo = document.getElementById('elemTwo')
let removeTwo = document.getElementById('removeTwo')

removeTwo.addEventListener('click', function(event){
    elemTwo.parentElement.removeChild(elemTwo)
    event.preventDefault()
})

//Создание ссылок для удаление элементов на JavaScript

let parentThree = document.querySelectorAll('#parentThree p')
console.log(parentThree)

for(let elem of parentThree){
    let newRemove = document.createElement('a')
    newRemove.href = '#'
    newRemove.innerHTML = 'remove'

    elem.appendChild(newRemove)

    newRemove.addEventListener('click', function(event){
        elem.remove()
        event.preventDefault()
    })
}

/*Задача 1js.Pm.Mn.CRL

Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.*/

let parentFour = document.getElementById('parentFour')
let j = 0

for(let i = 0; i < 5; i++){
    let newElem = document.createElement('li')
    newElem.innerHTML = 'new elem'
    parentFour.appendChild(newElem)
}

let elemLi = parentFour.querySelectorAll('li')

for(let li of elemLi){
    let newA = document.createElement('a')
    newA.href = '#'
    newA.innerHTML = ' - new ...' + j++

    li.appendChild(newA)

    newA.addEventListener('click', function(){
        li.remove()
    })
}

/*Задача 2js.Pm.Mn.CRL

Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.*/

let tableFive = document.getElementById('tableFive')

for(let i = 0; i < 5; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 3; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableFive.appendChild(tr)
}

let elemFive = tableFive.querySelectorAll('tr')
console.log(elemFive)

for(let elem of elemFive){
    let td = document.createElement('td')
    let a = document.createElement('a')

    a.href = '#'
    a.innerHTML = 'lol'
    td.appendChild(a)

    a.addEventListener('click', function(event){
        tableFive.removeChild(elem)
    })

    elem.appendChild(td)
}