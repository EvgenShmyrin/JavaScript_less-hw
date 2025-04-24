// – Дано 2 масиви з рівною кількістю об’єктів.
//     Масиви:

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .Записати цей об’єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: ‘vasya’,
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: ‘Ukraine’,
//                 city: ‘Ternopil’
//             }
//
//         },
// // TO BE CONTINUED …..
// ]
let total_users=[];
let i=0;
for (let user of usersWithId){
    if (user.id === 1){
        total_users.push(usersWithId[i]);
        for (let user2 of citiesWithId){
            if (user2.user_id === 1) {
                total_users[i].country = user2.country;
                total_users[i].city = user2.city;
            }
        }
    }if (user.id === 2){
        total_users.push(usersWithId[i]);
        for (let user2 of citiesWithId){
            if (user2.user_id === 2) {
                total_users[i].country = user2.country;
                total_users[i].city = user2.city;
            }
        }
    }if (user.id === 3){
        total_users.push(usersWithId[i]);
        for (let user2 of citiesWithId){
            if (user2.user_id === 3) {
                total_users[i].country = user2.country;
                total_users[i].city = user2.city;
            }
        }
    }if (user.id === 4){
        total_users.push(usersWithId[i]);
        for (let user2 of citiesWithId){
            if (user2.user_id === 4) {
                total_users[i].country = user2.country;
                total_users[i].city = user2.city;
            }
        }
    }i++
}console.log(total_users);