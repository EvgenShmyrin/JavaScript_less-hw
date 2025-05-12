// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objToAdd) {
    let item = localStorage.getItem(arrayName);
    if (!item) {
        throw new Error('Немає такого масиву')
    }
    let arrayItem = JSON.parse(item);
    if (typeof objToAdd === 'object') {
        arrayItem.push(objToAdd);
    }
    let JsonArray = JSON.stringify(arrayItem);
    localStorage.setItem(arrayName, JsonArray);
}
addToLocalStorage('sessionsListPage', {})