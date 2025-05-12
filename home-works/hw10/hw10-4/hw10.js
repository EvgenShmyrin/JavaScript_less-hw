// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в якому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let number1 = +localStorage.getItem('number');
number1 += 1;
localStorage.setItem('number', number1)

document.getElementById('numberId').innerText = number1;