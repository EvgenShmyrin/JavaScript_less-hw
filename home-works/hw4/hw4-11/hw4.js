// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13


function maxNumber(arr){
    let sum= 0;
    for (let number of arr){
        sum = sum + number;
    }
    return sum;
}
console.log(maxNumber([10, 2, 3, 14, 5]))