// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// let arr=[]
// let i=0;
// let a=2;
// while (i<50) {
//     arr[i]=a;
//     a+=2;
//     i++
// }console.log(arr)
//     b. заповнити його 50 непарними числами за допомоги циклу.
// let arr=[]
// let i=0;
// let a=1;
// while (i<50) {
//     arr[i]=a;
//     a+=2;
//     i++
// }console.log(arr)
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
// let arr=[]
// let i=0;
// while (i<20) {
//     arr[i]= Math.round(Math. random()*10);
//     i++
// }console.log(arr)

//     d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let min = 8;
// let max = 732;
// let arr=[]
// for(let i=0; i<20; i++){
//     arr[i]=Math.floor(Math.random() * (max - min + 1)) + min;
// }console.log(arr)

// 2. Вивести за допомогою console.log кожен третій елемент

// let min = 8;
// let max = 732;
// let arr=[]
// for(let i=0; i<20; i++){
//     arr[i]=Math.floor(Math.random() * (max - min + 1)) + min;
// }console.log(arr)
// let j=0;
// while (j<arr.length) {
//     if (j % 3 === 0) {
//         console.log(arr[j])
//     }j+=3;
// }

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.

// let min = 8;
// let max = 732;
// let arr=[]
// for(let i=0; i<20; i++){
//     arr[i]=Math.floor(Math.random() * (max - min + 1)) + min;
// }console.log(arr)
// let j=0;
// while (j<arr.length) {
//     if (j % 3 === 0) {
//         if (arr[j] % 2 ===0 ) {
//             console.log(arr[j])
//         }
//     }j+=3;
// }

// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
// let min = 8;
// let max = 732;
// let arr=[]
// for(let i=0; i<20; i++){
//     arr[i]=Math.floor(Math.random() * (max - min + 1)) + min;
// }console.log(arr)
// let new_arr = [];
// let j=0;
// while (j<arr.length) {
//     if (j % 3 === 0) {
//         if (arr[j] % 2 ===0 ) {
//             new_arr[j]=arr[j];
//         }
//     }j+=3;
// }
// console.log(new_arr)
// Не знаю як прибрати пробіли

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
//
// let min = 8;
// let max = 732;
// let arr=[]
// for(let i=0; i<20; i++){
//     arr[i]=Math.floor(Math.random() * (max - min + 1)) + min;
// }console.log(arr)
// let j=0;
// while (j<arr.length) {
//     if (arr[j+1] % 2 === 0) {
//         console.log(arr[j]);
//     }j++;
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arr = [100,250,50,168,120,345,188];
// let i=0;
// let sum_number=0
// while (i < arr.length) {
//     sum_number = sum_number + arr[i];
//     i++;
//     var check = Math.round(sum_number / arr.length);
// }console.log(`Середній чек дорінює - ${check}$`);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let min = 8;
// let max = 732;
// let arr=[]
// let new_arr=[]
// for(let i=0; i<20; i++){
//     arr[i]=Math.floor(Math.random() * (max - min + 1)) + min;
// }console.log(arr)
// let j=0;
// while (j<arr.length) {
//     new_arr[j]=arr[j]*5;
//     j++;
// }console.log(new_arr)


// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

// let array = [1, 3, 'two', 'three', 'four', 'five', true, false, 10, 500];
// let i=0;
// let new_array = [];
// while (i < array.length) {
//     if (typeof (array[i]) === 'number') {
//         new_array[i] = array[i];
//     }
//     i++
// }console.log(new_array);



