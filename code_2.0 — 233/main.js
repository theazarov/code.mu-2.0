'use strict';

//Создание HTML таблицы из массива объектов

let users = [
	{
		name: 'name1',
		surname: 'surname1',
		patronymic: 'patronymic1'
	},
	{
		name: 'name2',
		surname: 'surname2',
		patronymic: 'patronymic2'
	},
	{
		name: 'name3',
		surname: 'surname3',
		patronymic: 'patronymic3'
	},
]

let tableOne = document.getElementById('tableOne')

for(let user of users){
    let tr = document.createElement('tr')

    let td1 = document.createElement('td')
    td1.innerHTML = user.name
    tr.appendChild(td1)

    let td2 = document.createElement('td')
    td2.innerHTML = user.surname
    tr.appendChild(td2)

    let td3 = document.createElement('td')
    td3.innerHTML = user.patronymic
    tr.appendChild(td3)

    tableOne.appendChild(tr)
}

/*Задача 1js.Pm.Mn.TCVOA

Дан следующий массив с работниками:

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
Выведите элементы этого массива в виде HTML таблицы.*/

let tableTwo = document.getElementById('tableTwo')

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
]


for(let user of employees){
    let tr = document.createElement('tr')

    let td1 = document.createElement('td')
    td1.innerHTML = user.name
    tr.appendChild(td1)

    let td2 = document.createElement('td')
    td2.innerHTML = user.age
    tr.appendChild(td2)

        td2.addEventListener('click', () => td2.innerHTML++)

    let td3 = document.createElement('td')
    td3.innerHTML = user.salary
    tr.appendChild(td3)
    let pr = 0.1

        td3.addEventListener('click', () => td3.innerHTML = Number
        (td3.innerHTML) * pr + Number(td3.innerHTML))

    tableTwo.appendChild(tr)
}

/*Задача 2js.Pm.Mn.TCVOA

Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.*/

/*Задача 3js.Pm.Mn.TCVOA

Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.*/

