'use strict';

/*Задача 3js.Pm.Mn.DATA

Дана некоторая таблица. Сделайте так, чтобы по клику на любую ячейку в ее текст выводился номер ряда и номер колонки этой ячейки.*/

let tableOne = document.getElementById('tableOne')

for(let i = 0; i < 8; i++){
    let tr = document.createElement('tr')

    for(let j = 0; j < 8; j++){
        let td = document.createElement('td')
        tr.appendChild(td)
    }
    tableOne.appendChild(tr)
}

let trsOne = tableOne.querySelectorAll('tr')
let tdsAll = tableOne.querySelectorAll('td')


// i - координата Y - переменная trsOne
for(let i = 0; i < trsOne.length; i++){
    let tdsOne = trsOne[i].querySelectorAll('td')
    
    // j - координата X - переменная tdsOne
    for(let j = 0; j < tdsOne.length; j++){
        
        //удаляем предыдущие клетки
        tdsOne[j].addEventListener('click', function(){
            for(let elem of tdsAll){
                elem.innerHTML = ''
                elem.classList.remove('colorGray')
                elem.classList.remove('colorRad')
            }

            //стилизуем нынешнюю клетку
            this.innerHTML = 'Y = ' + i + '<br>' + 'X = ' + j
            

            let x = j
            let y = i

            //получаем диагональ в низ
            for(let i = y, j = x; i < trsOne.length && x < tdsOne.length; i++, j++){
                //console.log('y =' +i, 'x='+j)
                let XplusYplus = trsOne[i].querySelectorAll('td')
                XplusYplus[j].classList.add('colorGray')

                if(j >= 7){
                    break
                }
            }

            //получаем диагональ в верх
            for(let i = y, j = x; i >= 0 && j >= 0; i--, j--){
                //console.log('y =' +i, 'x='+j)
                let XplusYplus = trsOne[i].querySelectorAll('td')
                XplusYplus[j].classList.add('colorGray')

                if(j <= 0){
                    break
                }
            }

            //получаем диагональ в право в верх
            for(let i = y, j = x; i >= 0 && j >= 0; i--, j++){
                //console.log('y =' +i, 'x='+j)
                let XplusYplus = trsOne[i].querySelectorAll('td')
                XplusYplus[j].classList.add('colorGray')

                if(j >= 7){
                    break
                }
            }

            //получаем диагонал в лево в низ
            for(let i = y, j = x; i >= 0 && j >= 0; i++, j--){
                //console.log('y =' +i, 'x='+j)
                let XplusYplus = trsOne[i].querySelectorAll('td')
                XplusYplus[j].classList.add('colorGray')

                if(i >= 7){
                    break
                }
            }
            this.classList.add('colorRad')
            this.classList.remove('colorGray')
        })
    }
}