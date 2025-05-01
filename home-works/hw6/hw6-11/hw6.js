// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

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

let reduce = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade'){
        accumulator.spades.push(card);
    }if (card.cardSuit === 'diamond'){
        accumulator.diamond.push(card);
    }if (card.cardSuit === 'heart'){
        accumulator.heart.push(card);
    }if (card.cardSuit === 'clubs'){
        accumulator.clubs.push(card);
    }return accumulator;
}, {spades:[], diamond:[], heart:[], clubs:[]});
console.log(reduce)