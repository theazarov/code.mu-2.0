'use strict';

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
let j = 1
let table = document.querySelectorAll('#table td[data-col="' +col+ '"]')
let button = document.getElementById('button')

button.addEventListener('click', function(){

    for(let td of table){
        if(j == row){
            td.classList.add('colorGreen')
        }
        j++
    }
})

//Добавление номера колонки и ряда в таблицу

let tableTwo = document.querySelectorAll('#tableTwo tr')
console.log(tableTwo)
let i = 1
let f = 1
for(let trs of tableTwo){
    let tds = trs.querySelectorAll('td')
    
	for(let td of tds){
		td.setAttribute('data-col', i)
		i++
		td.setAttribute('data-row', f)
		if(i == 4){
			i = 1
		}
	}
	f++
}

let tdsArr = document.querySelectorAll('#tableTwo td')


for(let td of tdsArr){

	td.addEventListener('click', function(){
		for(let elem of tdsArr){
			elem.classList.remove('colorGreen')
			elem.innerHTML = ''
		}
		this.classList.add('colorGreen')
		td.innerHTML = 'колонка: ' + td.dataset.col + '<br>' + 'ряд: ' + td.dataset.row
	})
}

/*Задача 4js.Pm.Mn.DATA

Пусть у нас есть некоторая квадратная HTML таблица. В такой таблице есть две диагонали. Назовем главной диагональ, идущую от верхнего левого угла к нижнему правому. Сделайте так, чтобы по клику на любую ячейку главной диагонали эта ячейка красилась в красный цвет фона, а по клику любую другую ячейку - она красилась в зеленый.*/

let tableThree = document.querySelectorAll('#tableThree tr')
console.log(tableThree)
let a = 1
let b = 1
let u = 1

for(let tds of tableThree){
	let tdArr = tds.querySelectorAll('td')

	for(let td of tdArr){
		td.setAttribute('data-col', a)
		a++
		
		if(a == 4){
			a = 1
		}
		td.setAttribute('data-raw', b)
	}
	b++

	if(b == 4){
		b = 1
	}
}

console.log(tableThree)

for(let i = 0; i < tableThree.length; i++){
	let tdsThree =  tableThree[i].querySelectorAll('td')
	for(let elem of tdsThree){
		if(elem.dataset.col == i+1){
			elem.addEventListener('click', function(){
				elem.classList.add('colorGreen')
			})
		} else {
			elem.addEventListener('click', function(){
				elem.classList.add('colorRad')
			})
		}
	}
}