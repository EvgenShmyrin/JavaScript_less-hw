// #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається


let priceLine;
let firstDate;
if (localStorage.getItem('priceLine')) {
    console.log(localStorage.getItem('firstDate'))
    console.log(Date.now())
    if (Date.now() > +localStorage.getItem('firstDate') + 10000){
        priceLine = +localStorage.getItem('priceLine') + 10
        firstDate = Date.now()
        localStorage.setItem("priceLine", JSON.stringify(priceLine));
        localStorage.setItem("firstDate", JSON.stringify(firstDate));
    }
}else {
    priceLine = 100
    firstDate = Date.now()
    localStorage.setItem("priceLine", JSON.stringify(priceLine));
    localStorage.setItem("firstDate", JSON.stringify(firstDate));
}
