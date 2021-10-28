'use strict';

//Привязывание контекста через метод apply в JavaScript

/*Задача 1js.Pm.Ctx.AM

Пусть дан следующий код:

<input id="elem" value="привет">
let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

func(); // тут должно вывести 'привет, Иванов Иван'
Добавьте в последнюю строчку метод apply так, чтобы на экран вывелось 'привет, Иванов Иван'. Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.*/

let elem01 = document.getElementById('elem01')

function one(name, surname){
    console.log(this.value + ' ' + name + ' ' + surname)
}
one.apply(elem01, ['ivan', 'ivanov'])

//Привязывание контекста через метод bind в JavaScript

let elem02 = document.getElementById('elem02')

function two(name, surname){
    console.log(this.value + ' ' + name + ' ' + surname)
}

let test = two.bind(elem02)

test('ivan', 'ivanov')

/*Задача 1js.Pm.Ctx.BM

Пусть дан следующий код:

<input id="elem" value="привет">
let elem = document.getElementById('elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

// Тут напишите конструкцию с bind()

func('Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'
func('Петров', 'Петр'); // тут должно вывести 'привет, Петров Петр'
Напишите в указанном месте конструкцию с методом bind так, чтобы this внутри функции func всегда указывал на инпут из переменной elem.*/

let elem03 = document.getElementById('elem03')

function three(name, surname){
    console.log(this.value + ' ' + name + ' ' + surname)
}

let myThree = three.bind(elem03)


myThree('petr', 'petrovich')