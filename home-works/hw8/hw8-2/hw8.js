// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об’єкта.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

function dipCopy(arr){
    if (arr) {
        let functions = [];
        for (let key in arr) {
            if (typeof arr[key] === 'function') {
                let newFunction = arr[key].bind({});
                functions.push({newFunction, key});
            }
        }
        console.log(functions);
        let strArr = JSON.stringify(arr);
        let parseArr = JSON.parse(strArr);
        for (let func of functions) {
            parseArr[func.key] = func.newFunction;
        }
        console.log(parseArr);
        return parseArr;
    }
}
dipCopy({title: 'JavaScript Complex', monthDuration: 5, myFunction() {}});
