// #nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client

function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(2, 'vasya', 'garba', 'garbaa@gmail.com', '+380990272747', ['tv']),
    new Client(5, 'olexander', 'sedov', 'sedov@gmail.com', '+380990272747', ['table']),
    new Client(1, 'oleg', 'ronda', 'ronda@gmail.com', '+380990272747', ['tv', 'radio']),
    new Client(3, 'petya', 'jovner', 'jovner@gmail.com', '+380990272747', ['tv']),
    new Client(6, 'oleg', 'remiga', 'remiga@gmail.com', '+380990272747', ['radio']),
    new Client(8, 'nastya', 'sitenko', 'sitenko@gmail.com', '+380990272747', ['tv']),
    new Client(4, 'olya', 'shmarin', 'shmarina@gmail.com', '+380990272747', ['tv']),
    new Client(9, 'kolya', 'toyda', 'toyda@gmail.com', '+380990272747', ['tv']),
    new Client(10, 'valya', 'rolla', 'rolla@gmail.com', '+380990272747', ['glass']),
    new Client(7, 'olena', 'kulabuh', 'kulabuh@gmail.com', '+380990272747', ['brash']),
]
console.log(clients);
