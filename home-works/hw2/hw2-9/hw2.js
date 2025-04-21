// Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані
//     відображається інфа, що заплановано на цей день (можна замість плану на день, назву дня англійською).

let day = prompt('Введіть порядковий номер дня')

let PlanDay=[
    {
        NumberDay: 1,
        plan:'Англійської немає'},
    {
        NumberDay: 2,
        plan:'Англійська на 15,30'},
    {
        NumberDay: 3,
        plan:'Англійської немає'},
    {
        NumberDay: 4,
        plan:'Англійська на 15,30'},
    {
        NumberDay: 5,
        plan:'Англійської немає'},
    {
        NumberDay: 6,
        plan:'Англійська на 12,30'},
    {
        NumberDay: 7,
        plan:'Англійської немає'},

]
switch (day) {
    case '1':
        console.log(PlanDay[0]['plan']);
        break;
    case '2':
        console.log(PlanDay[1]['plan']);
        break;
    case '3':
        console.log(PlanDay[2]['plan']);
        break;
    case '4':
        console.log(PlanDay[3]['plan']);
        break;
    case '5':
        console.log(PlanDay[4]['plan']);
        break;
    case '6':
        console.log(PlanDay[5]['plan']);
        break;
    case '7':
        console.log(PlanDay[6]['plan']);
        break;
    default:
        console.log('Введіть порядковий номер дня від 1 до 7');
}

