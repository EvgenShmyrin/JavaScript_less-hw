// – створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function textName(text) {
    document.write(`<div><p>${text}</p></div>`);
}
textName('Hello World!');