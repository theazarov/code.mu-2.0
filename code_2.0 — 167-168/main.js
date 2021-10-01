'use strict';

//Отвязывание событий через removeEventListener

let button01 = document.getElementById('button01')

button01.addEventListener('click', one)

function one(){
    console.log('SOS!')
    this.removeEventListener('click', one)
}

/*Задача 1hash.txt: js.Pm.Dm.HU

Дана ссылка. По нажатию на эту ссылку добавьте в конец ее текста содержимое ее атрибута href в круглых скобках. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.*/

let elem02 = document.getElementById('elem02')

elem02.addEventListener('click', two)

function two(){
    this.innerHTML += ' (' + this.href + ')'

    this.removeEventListener('click', two)
}

/*Задача 2hash.txt: js.Pm.Dm.HU

Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.*/

let button03 = document.getElementById('button03')

button03.addEventListener('click', function clicker(){
    this.innerHTML++

    if(this.innerHTML >= 10){
        this.removeEventListener('click', clicker)
    }
})