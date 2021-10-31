'use strict';

//Функция setTimeout в JavaScript

let elemOne = document.getElementById('elemOne')

elemOne.addEventListener('click', function(){
    setTimeout(function(){
        console.log('!')
    }, 3000)
})

/*Задача 1js.Pm.Tmr.DBE

Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.*/

let outTwo = document.getElementById('outTwo')

setTimeout(() => {
    outTwo.innerHTML = 'хоба!'
}, 3000)

//Запуск таймера

let i = 0

function getTimer(){
    setTimeout(() => {
        console.log(i++)
        
        if(i <= 60){
            getTimer()
        }
    }, 1000)
}

//getTimer()

/*Задача 2js.Pm.Tmr.DBE

Выведите в консоль число 0. Через секунду выведите число 1, через две секунды выведите число 2, через 3 секунды выведите число 3. И так далее до бесконечности.*/

let j = 0

function getTimerTwo(){
    setTimeout(() => {
        console.log(j++)
        getTimerTwo()
    }, 1000)
}

getTimerTwo()