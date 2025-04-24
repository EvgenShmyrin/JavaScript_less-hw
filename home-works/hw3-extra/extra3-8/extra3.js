// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [1, 3, 159, 56, 99, 11, 44, 10, 500, -3];
// for (let number of arr) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
// }
// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let arr = [1, 3, 159, 56, 99, 11, 44, 10, 500, -3];
// let new_arr = []
// for (let number of arr) {
//     new_arr.push(number);
// }console.log(new_arr);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
// let arr=[ 'a', 'b', 'c'];
// let new_arr = []
// for (let string of arr) {
//     new_arr.push(string);
// }console.log(`${new_arr[0]}${new_arr[1]}${new_arr[2]}`);

// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
let arr=[ 'a', 'b', 'c'];
let new_arr = []
let i=0;
while (i<arr.length) {
    let string = arr[i];
    new_arr.push(string);
    i++
}console.log(`${new_arr[0]}${new_arr[1]}${new_arr[2]}`);