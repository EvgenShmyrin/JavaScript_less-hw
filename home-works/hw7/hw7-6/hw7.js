// #vV9a6584I5
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(mode, producer, year, maxSpeed, volume){
    this.mode = mode;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.volumeType = volume;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    this.info = function (){
        for (let key in this) {
            console.log(key, this[key]);
        }
    }
    this.increaseMaxSpeed = function (newSpeed){
        if (this.maxSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue){
        if (this.year > 0) this.year = newValue;
    }
    this.addDriver = function (driver){
        if (driver) this.driver = driver;
    }
}
let car = new Car('shwed', 'volvo', 2002, 200, 350);
console.log(car)

car.drive();

car.info()

car.increaseMaxSpeed (100);
console.log(car)

car.changeYear(2020)
console.log(car)

car.addDriver({})
console.log(car)
