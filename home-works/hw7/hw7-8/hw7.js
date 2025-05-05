// #zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Popelyushka{
    constructor(name, age, sizeLag) {
        this.name = name;
        this.age = age;
        this.sizeLag = sizeLag;
    }
}
let popelyushky = [
    new Popelyushka("Олена", 18, 36),
    new Popelyushka("Марія", 20, 36),
    new Popelyushka("Ірина", 19, 37),
    new Popelyushka("Наталя", 21, 38),
    new Popelyushka("Анастасія", 22, 36),
    new Popelyushka("Юлія", 23, 35),
    new Popelyushka("Катерина", 24, 40),
    new Popelyushka("Тетяна", 25, 37),
    new Popelyushka("Вікторія", 26, 38),
    new Popelyushka("Алла", 27, 39),
];
 class Prince{
     constructor(name, age, slipper) {
         this.name = name;
         this.age = age;
         this.slipper = slipper;
     }
 }
 let prince = new Prince('alex', 33, 35);

for (let name of popelyushky) {
    if (name.sizeLag === 35) console.log(`${name.name} is wife for prince`);
}
let wife = popelyushky.find(lag => lag.sizeLag === prince.slipper);
