// #pOeHKct
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(2, 'vasya', 'garba', 'garbaa@gmail.com', '+380990272747'),
    new User(5, 'olexander', 'sedov', 'sedov@gmail.com', '+380990272747'),
    new User(1, 'oleg', 'ronda', 'ronda@gmail.com', '+380990272747'),
    new User(3, 'petya', 'jovner', 'jovner@gmail.com', '+380990272747'),
    new User(6, 'oleg', 'remiga', 'remiga@gmail.com', '+380990272747'),
    new User(8, 'nastya', 'sitenko', 'sitenko@gmail.com', '+380990272747'),
    new User(4, 'olya', 'shmarin', 'shmarina@gmail.com', '+380990272747'),
    new User(9, 'kolya', 'toyda', 'toyda@gmail.com', '+380990272747'),
    new User(10, 'valya', 'rolla', 'rolla@gmail.com', '+380990272747'),
    new User(7, 'olena', 'kulabuh', 'kulabuh@gmail.com', '+380990272747'),
]
function usersSort(user1, user2) {
    return user1.id - user2.id;
}
console.log(users.sort(usersSort));
