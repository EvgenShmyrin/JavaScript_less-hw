// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

let input = document.getElementById("input");
let button =document.getElementsByClassName("button")[0];
button.addEventListener("click", function (ev) {
    if (input.value < 18) {
        alert("Вхід заборонено")
        ev.preventDefault();
    }else{
        alert("Вхі дозволен");
    }
})