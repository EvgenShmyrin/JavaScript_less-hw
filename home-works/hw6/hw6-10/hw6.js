// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:

// Приклад моделі об’єкту карти:
// {
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//     color:”, // ‘red’,’black’
// }

// Масив складається з ключей: cardSuit та value
let cards=[];
let suits  = ['spade', 'diamond', 'heart', 'clubs']
let nameValue = [6,7,8,9,10,'jack', 'queen', 'king', 'ace']

for (let suit of suits){
    if (suit === 'diamond' || suit === 'heart'){
        for (let name of nameValue){
            cards.push({value: name, cardSuit: suit, color:'red'});
        }
    } if (suit === 'spade' || suit === 'clubs'){
        for (let name of nameValue){
            cards.push({value: name, cardSuit: suit, color:'black'});
        }
    }
}
console.log(cards);

// – знайти піковий туз

console.log(cards.filter(value => {
    return value.cardSuit === 'spade' && value.value === 'ace'
}))

//  – всі червоні карти

console.log(cards.filter(value => {
    return value.color === 'red'
}))

//  – всі шістки

console.log(cards.filter(value => {
    return value.value === 6
}))

//  – всі буби

console.log(cards.filter(value => {
    return value.cardSuit === 'diamond'
}))

//  – всі трефи від 9 та більше

console.log(cards.filter(value => {
    return value.value !== 6 && value.value !== 7 && value.value !== 8 && value.value !== 9
}))
