'use strict';

//Чередование стилей активации на JavaScript

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
let color = 'color1'

for(let td of tdOne){

    td.addEventListener('click', function(){
        if(color == "color1"){
            color = 'color2'
        } else {
            color = 'color1'
        }
        this.classList.add(color)
    })
}

//Чередование многих цветов из массива

let colors = ['color1', 'color2', 'color3']
let tableTwo = document.getElementById('tableTwo')

for(let i = 0; i < 3; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 4; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableTwo.appendChild(tr)
}

let tdTwo = tableTwo.querySelectorAll('td')
let i = 0

for(let td of tdTwo){
    td.addEventListener('click', function(){
        td.classList.add(colors[i])
        i++

        if(i == colors.length){
            i = 0
        }
    })
}