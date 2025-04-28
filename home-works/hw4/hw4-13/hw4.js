// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH,currencyValues,exchangeCurrency){
        let cash;
        if (exchangeCurrency === `USD`){
            for(let vid of currencyValues){
                if (vid.currency === "USD"){
                    cash = Math.round(sumUAH / vid.value);
                    return cash;
                }
            }
         }
         else if (exchangeCurrency === `EUR`){
            for(let vid of currencyValues){
                if (vid.currency === "EUR"){
                    cash = Math.round(sumUAH / vid.value);
                    return cash;
                }
            }
        }
         else return (`Такої валюти немає`)
}
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'))