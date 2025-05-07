// #OPLI89c9G
// – Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main','Products','About us','Contacts']

let ul = document.createElement('ul');

for (let element of arr) {
    let li = document.createElement('li');
    li.innerText = element;
    ul.appendChild(li);
}
document.body.appendChild(ul);