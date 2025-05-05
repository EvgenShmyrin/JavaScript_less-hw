// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter


let arrNumbers = [10,34, 56, 75, 12, 11]

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
arrNumbers.myForEach((num, index) => {
    console.log(`Елемент під індексом ${index}: ${num}`);
});

let names = ["Anna", "Olga", "Ivan", "Oksana"];

Array.prototype.myFilter = function(callback) {
    let result = [];
    let index = 0;
    for (let value of this) {
        if (callback(value, index, this)) {
            result.push(value);
        }
        index++;
    }
    return result;
};
let namesNew = names.myFilter(name => name.startsWith("O"));
console.log("Імена на O:", namesNew);