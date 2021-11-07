'use strict';

//Одновременное редактирование и удаление элементов

let parentOne = document.getElementById('parentOne')
let p = parentOne.querySelectorAll('p')

for(let elem of p){

    let span = document.createElement('span')
    span.innerHTML = 'text'
    elem.appendChild(span)

    span.addEventListener('click', function one(){
        let input = document.createElement('input')
        input.value = span.innerHTML
        span.innerHTML = ''
        span.appendChild(input)
        
        input.addEventListener('blur', function(){
            span.innerHTML = input.value
            span.addEventListener('click', one)
        })

        input.focus()
        span.removeEventListener('click', one)
    })

    let a = document.createElement('a')
    a.href = '#'
    a.innerHTML = ' - delete'
    elem.appendChild(a)

    a.addEventListener('click', function(){
        elem.remove()
    })
}