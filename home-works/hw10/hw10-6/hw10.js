// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво,
//     без натискань додаткових кнопок

let input = document.getElementById("calc");
let p = document.getElementById("answer");
input.oninput = function () {
    let cg = calc.value;  // або this.value
    let result = Math.round(cg * 2.2);
    p.innerText = result;
    document.body.appendChild(p)
}