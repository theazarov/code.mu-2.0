'use strict';

//Вставка элементов в начало или в конец на JavaScript

/*Задача 1js.Pm.Mn.IBA

Дан ul:

<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.*/

let elemOne = document.getElementById('elemOne')

let appLiOne = document.createElement('li')
appLiOne.innerHTML = 'finish'
elemOne.append(appLiOne)

let preLiOne = document.createElement('li')
preLiOne.innerHTML = 'start'
elemOne.prepend(preLiOne)

//Метод insertBefore

let parent = document.getElementById('parent')
let before = document.getElementById('before')

let elemP = document.createElement('p')
elemP.innerHTML = 'hi'

parent.insertBefore(elemP, before)

/*Задача 2js.Pm.Mn.IBA

Дан элемент #elem:

<ul id="parent">
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Вставьте перед этим элементом элемент с текстом 'new'.*/

let parentThree = document.getElementById('parentThree')
let elemThree = document.getElementById('elemThree')

let newElemThree = document.createElement('p')
newElemThree.innerHTML = '111'

parentThree.insertBefore(newElemThree, elemThree)

/*Задача 3js.Pm.Mn.IBA

Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому, что в конец его текста будет добавляться '!'.*/

let parentFour = document.getElementById('parentFour')
let elemLi = parentFour.querySelectorAll('li')

/*for(let elem of elemLi){
    let li = document.createElement('li')
    li.innerHTML = 'new!'

    elem.addEventListener('click', function(){
        parentFour.insertBefore(li, elem)
    })
}*/

parentFour.addEventListener('click', function(event){
    if(event.target.tagName == 'LI'){
        let li = document.createElement('li')
        li.innerHTML = 'new!'

        li.addEventListener('click', () => li.innerHTML += '!!!')
        parentFour.insertBefore(li, event.target)
    }
})