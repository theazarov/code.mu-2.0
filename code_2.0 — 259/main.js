'use strict';

//Практика на изменение элементов на JavaScript

/*Задача 1js.Pm.Mn.EChT

Дан массив. Выведите его элементы в виде списка ul.*/

let elemOne = document.getElementById('elemOne')

let arrOne = [1,2,3,4,5,6,7,8]

for(let i = 0; i < arrOne.length; i++){
    let span = document.createElement('span')
    let li = document.createElement('li')
    li.innerHTML = arrOne[i]
    span.appendChild(li)
    elemOne.appendChild(span)
}

/*Задача 2js.Pm.Mn.EChT

Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.*/

let lisOne = elemOne.querySelectorAll('li')


elemOne.addEventListener('click', function one(event){

    if(event.target.tagName == 'LI'){
        let a = document.createElement('a')
        a.href = '#'
        a.innerHTML = 'delete'
        event.target.parentElement.appendChild(a)

        a.addEventListener('click', function(){
            a.parentElement.remove()
            elemOne.addEventListener('click', one)
        })

        let input = document.createElement('input')
        input.value = event.target.innerHTML
        event.target.innerHTML = ''
        event.target.appendChild(input)

    input.addEventListener('blur', function(){
        event.target.innerHTML = input.value
        elemOne.addEventListener('click', one)
        a.remove()
        })
    input.focus()
    elemOne.removeEventListener('click', one)
        }
    })

/*Задача 3js.Pm.Mn.EChT

Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать.*/

let btnOne = document.getElementById('btnOne')

btnOne.addEventListener('click', function(){
    let span = document.createElement('span')
    let newLi = document.createElement('li')
    newLi.innerHTML = 'new'
    span.appendChild(newLi)
    elemOne.appendChild(span)
})

/*Задача 4js.Pm.Mn.EChT

Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.*/

