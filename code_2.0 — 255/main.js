'use strict';

let tableOne = document.getElementById('tableOne')

for(let i = 0; i < 3; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 4; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableOne.appendChild(tr)
}

let tdOne = tableOne.querySelectorAll('td')

for(let td of tdOne){
    td.addEventListener('click', function(){
        td.classList.toggle('active')
    })
}

/*Задача 1js.Pm.Mn.EA

Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.*/

let elemTwo = document.getElementById('elemTwo')
let lis = elemTwo.querySelectorAll('li')

for(let li of lis){
    li.addEventListener('click', function(){
        li.classList.toggle('active')
    })
}

/*Задача 2js.Pm.Mn.EA

Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась.*/