// #reLkOkTB29Q
// створити масив книжок (назва, кількість сторінок, автори , жанри).

// – знайти книжку/ки з найбільшою кількістю жанрів
// – знайти книжку/ки з найдовшою назвою
// – знайти книжку/ки, які писали 2 автори
// – знайти книжку/ки, які писав 1 автор
let arr=[
    {
        name: "Adventure in future",
        page: 800,
        author: {
            number1: 'Nic Alex',
            number2: 'Forex Roy',
        },
        genre: {
            one: 'fantasy',
            two: 'thriller',
            three: 'romance',
            four: 'adventure',
        }
    },{
        name: "Var and peace",
        page: 1000,
        author: {
            number1: 'Lev Tolstoy',
        },
        genre: {
            two: 'var',
            three: 'romance',
        }
    }
]
// – знайти найбільшу книжку.
// let long_page=[]
for (let key of arr ) {
    // console.log(long_page.length);
    let long_page=[]
    if (long_page.length === 1) {
        if (long_page[0] < long_page[1]) {
        long_page[0] = key.page;
        console.log(long_page + 'one');

    }else{
        long_page[0] = key.page;
        console.log(long_page + 'zerro');
        }
    }console.log(long_page.length+'last');
}
//
// else if (long_page.length === 1) {
//     if (long_page[0] < long_page[1]) {
//         long_page[0] = key.page;
//         console.log(long_page + 'one');
//     }