// #NKB0tgWIK1G
//
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів
//
let arr = [];
let arrFirst = [];
let arrPrew = [];
let arrNext = [];
for (let i = 0; i < 100; i++) {
    arr.push(i + 1);
}
let button1 = document.createElement('button');
button1.classList.add("button1");
button1.textContent = 'next';
let button2 = document.createElement('button');
button2.classList.add("button2");
button2.textContent = 'prev';
let p = document.createElement('p');
document.body.append(button1, button2);
let position = 0
let i = 0;
for (let element of arr) {
    console.log(i)
    if (i < 10) {
        arrFirst.push(element);
        position++
    }
    i++;
}
p.innerText = `${arrFirst}`;
document.body.appendChild(p);

console.log(`Position: ${position}`);
button1.addEventListener("click", function (event) {
    event.preventDefault();
    if (position === 10 || position < 100) {
        let x = position;
        arrNext = [];
        for (let i = x; i < x + 10; i++) {
            arrNext.push(arr[i]);
            position++
        }
        p.innerText = `${arrNext}`;
        document.body.appendChild(p);
    } else {
        p.innerText = `Данні закінчилися`;
        document.body.appendChild(p);
    }
})
button2.addEventListener("click", function (event) {
    event.preventDefault();
    if (arrPrew === arrNext) {
        position = position - 10;
    }
    if (position >= 10 && position <= 100) {
        let x = position;
        arrPrew = [];
        for (let i = x - 10; i < x; i++) {
            arrPrew.push(arr[i]);
            position--
        }
        p.innerText = `${arrPrew}`;
        document.body.appendChild(p);
    }
    if (position < 10 || position > 100) {
        p.innerText = `Данні закінчилися`;
        document.body.appendChild(p);
    }
})
