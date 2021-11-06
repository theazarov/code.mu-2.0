'use strict';

//Редактирование отдельного элемента на JavaScript

let elemOne = document.getElementById('elemOne')
let inputOne = document.getElementById('inputOne')

inputOne.value = elemOne.innerHTML

inputOne.addEventListener('input', function(){
    elemOne.innerHTML = this.value
})

/*Задача 1js.Pm.Mn.SEE

Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.*/

//Появление инпута

let elemTwo = document.getElementById('elemTwo')

elemTwo.addEventListener('click', function(){
    let input = document.createElement('input')
    input.value = elemTwo.innerHTML

    input.addEventListener('blur', function(){
        elemTwo.innerHTML = this.value
        this.parentElement.removeChild(this)
    })
    elemTwo.parentElement.appendChild(input)
})

/*Задача 2js.Pm.Mn.SEE

Самостоятельно, не подсматривая в мой код, решите описанную задачу.*/

let elemThree = document.getElementById('elemThree')

elemThree.addEventListener('click', function(){
    let input = document.createElement('input')
    input.value = this.innerHTML

    input.addEventListener('blur', function(){
        elemThree.innerHTML = this.value
        elemThree.parentElement.removeChild(this)
    })
    elemThree.parentElement.appendChild(input)
})

//Прячем текст при редактировании элемента на JavaScript

let elemFour = document.getElementById('elemFour')

elemFour.addEventListener('click', function one(){
    let input = document.createElement('input')
    input.value = this.innerHTML
    this.innerHTML = ''
    elemFour.appendChild(input)

    input.addEventListener('blur', function(){
        elemFour.innerHTML = this.value
        elemFour.addEventListener('click', one)
    })
    elemFour.removeEventListener('click', one)
})

/*Задача 1js.Pm.Mn.EHT

Самостоятельно, не подсматривая в мой код, решите описанную задачу.*/

let elemFive = document.getElementById('elemFive')

elemFive.addEventListener('click', function one(){
    let input = document.createElement('input')
    input.value = elemFive.innerHTML
    elemFive.innerHTML = ''

    input.addEventListener('blur', function(){
        elemFive.innerHTML = this.value
        elemFive.addEventListener('click', one)
    })

    elemFive.appendChild(input)
    elemFive.removeEventListener('click', one)
})