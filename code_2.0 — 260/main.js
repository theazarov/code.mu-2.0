'use strict';

//Поиск ячеек таблицы с помощью атрибута data

let tdsTwo = document.querySelectorAll('#table td[data-col="2"]')
console.log(tdsTwo)

for(let td of tdsTwo){
    td.innerHTML = '№2'
}

let three = 3

let tdsThree = document.querySelectorAll('#table td[data-col="'+ three +'"]')
console.log(tdsThree)

for(let td of tdsThree){
    td.innerHTML = '!'
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

let button = document.getElementById('button')
let j = 1
let f = 1

button.addEventListener('click', function(){

    let tdsFour = document.querySelectorAll('#tableFour td[data-col="'+ j +'"]')
    let tdsRemove = document.querySelectorAll('#tableFour td[data-col="'+ f +'"]')
    
    for(let td of tdsFour){
        td.classList.toggle('colorGreen')
    }

    if(j >= 2){
        for(let td of tdsRemove){
            td.classList.toggle('colorGreen')
        }
        f++
    }
    j++ 
})