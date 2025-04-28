// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
//
function textName(text, lap) {
    document.write(`<div><ul>`);
    for (let i = 0; i < lap; i++) {
        document.write(`<li>${text}</li>`);
    };
    document.write(`</ul></div>`);
}
textName('Hello World!', 5);