'use strict';

//Поиск ячеек таблицы с помощью атрибута data

let tableOne = document.querySelectorAll('#tableOne td[data-col="2"]')
console.log(tableOne)

/*Задача 1js.Pm.Mn.CDS

Дана следующая HTML таблица:

<table id="table">
	<tr>
		<td data-col="1"></td>
		<td data-col="2"></td>
		<td data-col="3"></td>
	</tr>
	<tr>
		<td data-col="1"></td>
		<td data-col="2"></td>
		<td data-col="3"></td>
	</tr>
	<tr>
		<td data-col="1"></td>
		<td data-col="2"></td>
		<td data-col="3"></td>
	</tr>
</table>
td {
	width: 50px;
	height: 50px;
	border: 1px solid black;
}
Сделайте так, чтобы по клику на любую ячейку в красный фон красились все ячейки этой колонки.*/

let tableTwo = document.querySelectorAll('#tableTwo td')
console.log(tableTwo)
let i = 1

for(let elem of tableTwo){
    console.log()
    
    elem.addEventListener('click', function(){
        let num = elem.dataset.col
        let colorizeArr = document.querySelectorAll('#tableTwo td[data-col="'+num+'"]')

        for(let colorize of colorizeArr){
            colorize.classList.add('colorGreen')
        }
    })
}

/*Задача 2js.Pm.Mn.CDS

Дана следующая HTML таблица:

<table id="table">
	<tr>
		<td data-row="1" data-col="1"></td>
		<td data-row="1" data-col="2"></td>
		<td data-row="1" data-col="3"></td>
	</tr>
	<tr>
		<td data-row="2" data-col="1"></td>
		<td data-row="2" data-col="2"></td>
		<td data-row="2" data-col="3"></td>
	</tr>
	<tr>
		<td data-row="3" data-col="1"></td>
		<td data-row="3" data-col="2"></td>
		<td data-row="3" data-col="3"></td>
	</tr>
</table>
Даны также две переменные, в которых хранятся номер колонки и номер ряда:

let col = 2;
let row = 3;
Сделайте кнопку, по нажатию на которую в красный фон покрасится та ячейка, номер которой совпадает с номером из переменных.*/

let col = 2
let row = 3

let button = document.getElementById('button')
let tds = document.querySelectorAll('#tableThree td[data-row="'+row+'"]')
console.log(tds)

button.addEventListener('click', function(){
    let i = 1

    for(let elem of tds){
        console.log(elem)
        if(elem.dataset.col == col){
            elem.classList.add('colorGreen')
            console.log(elem.dataset.col = col)
        }
    }
})

//Добавление номера колонки и ряда в таблицу

/*Задача 1js.Pm.Mn.DATA

Дана HTML таблица с пустыми ячейками, например, вот такая:

<table id="table">
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>
Напишите скрипт, который добавит в каждую ячейку таблицы атрибут data-col с номером колонки таблицы, в которой находится эта ячейка.*/

let tableFour = document.querySelectorAll('#tableFour tr')
let j = 1

for(let tr of tableFour){
    let tds = tr.querySelectorAll('td')
    let i = 1
    

    for(let td of tds){
        td.setAttribute('data-col', i)
        i++
        td.setAttribute('data-row', j)
    }
    j++
}

/*Задача 2js.Pm.Mn.DATA
Модифицируйте предыдущую задачу так, чтобы в ячейку добавлялся еще и номер ее ряда.*/

/*Задача 3js.Pm.Mn.DATA

Дана некоторая таблица. Сделайте так, чтобы по клику на любую ячейку в ее текст выводился номер ряда и номер колонки этой ячейки.*/

let tableSix = document.querySelectorAll('#tableSix td')

for(let elem of tableSix){

    elem.addEventListener('click', function one(){

        for(let td of tableSix){
            td.classList.remove('colorRad')
            td.innerHTML = ''
        }

        elem.innerHTML = 'ряд: ' + elem.dataset.row + ', колонка: ' + elem.dataset.col
        elem.classList.add('colorRad')
    })
}

/*Задача 4js.Pm.Mn.DATA

Пусть у нас есть некоторая квадратная HTML таблица. В такой таблице есть две диагонали. Назовем главной диагональ, идущую от верхнего левого угла к нижнему правому. Сделайте так, чтобы по клику на любую ячейку главной диагонали эта ячейка красилась в красный цвет фона, а по клику любую другую ячейку - она красилась в зеленый.*/

let trs = document.querySelectorAll('#tableSeven tr')

let x = 0
let y = 0

for(let i = 0; i < trs.length; i++){
    let tds = trs[y].querySelectorAll('td')
    y++

    for(let j = 0; j < tds.length; j++){
        if(j == x){
            tds[x].addEventListener('click', function(){
                this.classList.add('colorGreen')
            })
        } else {
            tds[j].addEventListener('click', function(){
                this.classList.add('colorRad')
            })
        }
    }
    x++
}

