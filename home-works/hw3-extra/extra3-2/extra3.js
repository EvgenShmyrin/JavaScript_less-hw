// – є масив [2,17,13,6,22,31,45,66,100,-18] :

let array=[2,17,13,6,22,31,45,66,100,-18];
//1. перебрати його циклом while
// let i=0
// while (i < array.length) {
//     console.log(array[i])
//     i++
// }
// 2. перебрати його циклом for
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i=0
// while (i < array.length) {
//         console.log(array[i])
//         i+=2;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for(let i=0;i<array.length;i+=2){
//     console.log(array[i])
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i=0
// while (i < array.length) {
//     if (array[i] % 2) {
//     }else{
//         console.log(array[i])
//     }
//     i++
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for(let i=0;i<array.length;i++){
//     if (array[i] % 2) {
//     }else{
//         console.log(array[i])
//     }
// }
// 7. замінити кожне число, кратне 3, на слово “okten”
// for(let i=0;i<array.length;i++) {
//     if (array[i] % 3 === 0) {
//         array[i] = 'okten';
//     }
// }console.log(array)
// }console.log(array)
// 8. вивести масив у зворотньому порядку.
// for(let i=9;i<array.length;i--){
//     if(i>=0){
//         console.log(array[i])
//     }else{
//         break;
//     }
// }
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
// let i=array.length-1
// while (i >= 0) {
//     console.log(array[i])
//     i--
// }
/////////////////////////////////////////
// for(let i=array.length-1;i<array.length;i--){
//     if (i>=0) {
//         console.log(array[i]);
//     }else {
//         break;
//     }
// }
/////////////////////////////////////////
// let i=array.length-1
// while (i < array.length) {
//     if (i>=0) {
//         console.log(array[i])
//     }else{
//         break;
//     }
//     i-=2;
// }
////////////////////////////////////////////
// for(let i=array.length-1;i<array.length;i-=2){
//     if (i>=0) {
//         console.log(array[i])
//     }else{
//         break;
//     }
// }
/////////////////////////////////////////////
// let i=array.length-1
// while (i < array.length) {
//     if (i>=0) {
//         if (array[i] % 2) {
//         } else {
//             console.log(array[i])
//         }
//     }else{
//         break;
//     }
//     i--
// }
/////////////////////////////////////////////
// for(let i=array.length-1;i<array.length;i--){
//     if (i>=0) {
//         if (array[i] % 2) {
//         } else {
//             console.log(array[i])
//         }
//     } else {
//         break;
//     }
// }
/////////////////////////////////////////////
// for(let i=array.length-1;i<array.length;i--) {
//     if (i>=0) {
//         if (array[i] % 3 === 0) {
//             array[i] = 'okten';
//         }
//     } else {
//         break;
//     }
// }console.log(array)