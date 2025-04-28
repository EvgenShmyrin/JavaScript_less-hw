// – створити функцію яка повертає найменьше число з масиву

let arr = [10, 2, 3, 14, 5]

function maxNumber(arr){
    let max= arr[0];
    for (let number of arr){
        if (number >= max){
            max = number;
        }
    }console.log(max);
}
maxNumber(arr)