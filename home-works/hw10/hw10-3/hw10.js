// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів,
//     та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

let name = document.getElementById("name");
let surname = document.getElementById("surname");
let age = document.getElementById("age");
let button = document.getElementById("button");

let p = document.createElement('p');
button.addEventListener("click", function(event) {
    event.preventDefault();
    let nameForm = name.value;
    let surNameForm = surname.value;
    let ageForm = age.value;
    p.innerText = `Ваше ім'я - ${nameForm}. Ваше прізвище - ${surNameForm}. Вам ${ageForm} років. Все правильно?`;
    document.body.appendChild(p);
})
