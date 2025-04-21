// Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.

let book1
let book2
let book3

book1 = {
    title:'War and peace',
    pageCount:1300,
    genre:'Novel',
    authors:[
        {
            name:'Tolstoy',
            age: 195
        }
    ]
}
book2 = {
    title:'Crime and Punishment',
    pageCount:608,
    genre:'Drama',
    authors:[
        {
            name: 'Dostoevsky',
            age: 204
        }
    ]
}
book3 = {
    title:'Mind hacking',
    pageCount:450,
    genre:'Self-development',
    authors:[
        {
            name:'Hargrave',
            age: 85
        }
    ]
}