'use strict';

//Получение целевого элемента при всплытии событий

/*
let elemDiv = document.getElementById('myDiv')

elemDiv.addEventListener('click', function(event){
    if(event.target.tagName == 'DIV'){
        console.log('div')
    }
    if(event.target.tagName == 'P'){
        console.log('P')
    }
})
*/

/*Задача 1js.Pm.OE.BTE

Даны следующие элементы:

<div>
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
</div>
div, ul, li {
	padding: 20px;
}

div {
	border: 1px solid red;
}
ul {
	border: 1px solid orange;
}
li {
	border: 1px solid green;
}
Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.*/

let elemOne = document.getElementById('elemOne')

elemOne.addEventListener('click', function(event){
    if(event.target.tagName == 'DIV'){
        console.log('div')
    }
    if(event.target.tagName == 'UL'){
        console.log('ul')
    }
    if(event.target.tagName == 'LI'){
        console.log('LI')
    }
})