// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

let tableMyForm = document.forms['myForm'];

let table = document.getElementById("table");

tableMyForm.onsubmit = function (event) {
    event.preventDefault();
    valueInput1 = +tableMyForm.lines.value;
    valueInput2 = +tableMyForm.cells.value;
    valueInput3 = tableMyForm.text.value;

    for (let i = 0; i < valueInput1; i++) {
       let tr= document.createElement('tr')
        for (let j = 0; j < valueInput2; j++) {
            let td = document.createElement('td');
            td.innerText = valueInput3;
            tr.appendChild(td);
        }table.appendChild(tr);
    }
}