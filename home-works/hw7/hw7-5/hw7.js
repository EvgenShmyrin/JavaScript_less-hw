// #8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

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
function clientsSort(values1, values2){
    return values1.order.length - values2.order.length;
}
console.log(clients.sort(clientsSort));
