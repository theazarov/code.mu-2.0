'use strict';

//Самоудаление элементов на JavaScript

let parentOne = document.querySelector('#parentOne')
let oneP = parentOne.querySelectorAll('p')

for(let elem of oneP){
    elem.addEventListener('click', () => elem.remove())
}

/*Задача 1js.Pm.Mn.ESr

Дан следующий код:

<ul id="parent">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
Сделайте так, чтобы любая li удалялась по клику на нее.*/

let parentTwo = document.querySelector('#parentTwo')
let twoLI = parentTwo.querySelectorAll('li')

for(let elem of twoLI){
    elem.addEventListener('click', () => elem.remove
    ())
}

//Самоудаление новых элементов на JavaScript

let parentThree = document.getElementById('parentThree')

for(let i = 0; i < 5; i++){
    let newElem = document.createElement('p')
    newElem.innerHTML = 'new ' + i 

    newElem.addEventListener('click', function(){
        this.remove()
    })
    parentThree.appendChild(newElem)
}

/*Задача 1js.Pm.Mn.NES

Дан следующий код:

<ul id="parent">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>

<input type="submit" id="button">
Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.*/

let parentFour = document.getElementById('parentFour')
let btnFour = document.getElementById('btnFour')

btnFour.addEventListener('click', function(){
    let newElem = document.createElement('li')
    newElem.innerHTML = 'new'
    parentFour.appendChild(newElem)
})
parentFour.addEventListener('click', function(event){
    if(event.target.tagName == 'LI'){
        event.target.remove()
    }
})