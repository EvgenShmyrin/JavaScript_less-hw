// #I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

// let calcS = (a, b) => a * b;
// console.log(calcS(10, 5));

// / #ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

// let cycleS = (r) => 3.14 * r * r;
// console.log(cycleS(10));

// #Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

// function cylinderS(r, h) {
//     return 3.14 * r * r * h;
// }
// let S= cylinderS(5, 10);
// console.log(S);

// let cylinder = (r, h) =>3.14 * r * r * h;
// console.log(cylinder(10, 20));

// #SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент

// let array = ["яблоко", "банан", "вишня", "груша", "апельсин"]
// let arr = (arrayName) => console.log(arrayName);
// arr(array);

// #59g0IsA
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент

// let textName = (text) =>  document.write(`<div><p>${text}</p></div>`);
// textName('Hello World!');

// #hOL6126
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let textName = (text) =>document.write(`<div><ul><li>${text}</li><li>${text}</li><li>${text}</li></ul></div>`);
// textName('Hello World!');

// #0Kxco1edSN
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let textName = (text, lap) => {
//     document.write(`<div><ul>`);
//     for (let i = 0; i < lap; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul></div>`);
// }
// textName('Hello World!', 5);

// #gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [true, "банан", 71, "груша", "Всім привіт"]
// let nameArr = (name) => {
//     document.write(`<div><ul>`);
//     for (let element of name) {
//         document.write(`<li>${element}</li>`);
//     }
//     document.write(`</ul></div>`);
// }
// nameArr(arr);

// #bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

// users = [
//     {"id": 1, "name": "Олена", "age": 25},
//     {"id": 2, "name": "Андрій", "age": 30},
//     {"id": 3, "name": "Ірина", "age": 22},
//     {"id": 4, "name": "Максим", "age": 27},
//     {"id": 5, "name": "Софія", "age": 24}
// ]
//
// let nameFunction = (users) => {
//     document.write(`<div>`)
//     for(let user of users){
//         document.write(`<div><p>${user.id} ${user.name} ${user.age}</p></div>`)
//     }
//     document.write(`</div>`)
// }
// nameFunction(users);

//     #pghbnSB
// – створити функцію, яка повертає найменше число з масиву

// let arr = [10, 2, 3, 14, 5]
//
// let maxNumber = (arr) => {
//     let min= arr[0];
//     for (let number of arr){
//         if (number <= min){
//             min = number;
//         }
//     }console.log(min);
// }
// maxNumber(arr)

// #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum= 0;
// maxNumber = (arr) => {
//     for (let number of arr){
//         sum = sum + number;
//     }
// }
// maxNumber([10, 2, 3, 14, 5])
// console.log(sum);

// #kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах

let swap = (arr, index1, index2) => {
    if (index1 < arr.length && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2]=temp;
        console.log(arr);
    }else{
        console.log('Помилка');
    }
}
swap([11,22,33,44],1,3);

// #mkGDenYnNjn
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

// let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//     let cash;
//     if (exchangeCurrency === `USD`){
//         for(let vid of currencyValues){
//             if (vid.currency === "USD"){
//                 cash = Math.round(sumUAH / vid.value);
//                 console.log(cash);
//             }
//         }
//     }
//     else if (exchangeCurrency === `EUR`){
//         for(let vid of currencyValues){
//             if (vid.currency === "EUR"){
//                 cash = Math.round(sumUAH / vid.value);
//                 console.log(cash);
//             }
//         }
//     }
//     else console.log(`Такої валюти немає`)
// }
// exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'UA')