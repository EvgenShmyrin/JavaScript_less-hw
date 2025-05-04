// #2ikXsE2WiKZ

// – Взяти масив з  Users[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

users = [
    new User(1, 'oleg', 'ronda', 'ronda@gmail.com', '+380990272747'),
    new User(2, 'vasya', 'garba', 'garbaa@gmail.com', '+380990272747'),
    new User(3, 'petya', 'jovner', 'jovner@gmail.com', '+380990272747'),
    new User(4, 'olya', 'shmarin', 'shmarina@gmail.com', '+380990272747'),
    new User(5, 'olexander', 'sedov', 'sedov@gmail.com', '+380990272747'),
    new User(6, 'oleg', 'remiga', 'remiga@gmail.com', '+380990272747'),
    new User(7, 'olena', 'kulabuh', 'kulabuh@gmail.com', '+380990272747'),
    new User(8, 'nastya', 'sitenko', 'sitenko@gmail.com', '+380990272747'),
    new User(9, 'kolya', 'toyda', 'toyda@gmail.com', '+380990272747'),
    new User(10, 'valya', 'rolla', 'rolla@gmail.com', '+380990272747'),
]

 function usersFilter(user) {
    return user.id % 2 === 0;
}

let functionFilter = users.filter(usersFilter);

console.log(functionFilter);
