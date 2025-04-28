// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH,currencyValues,exchangeCurrency){
        let cash;
        if (exchangeCurrency === `USD`){
            cash = sumUAH / currencyValues[0]['value'];
            console.log(currencyValues[0]['value'])
            return cash;
         }
         else if (exchangeCurrency === `EUR`){
             cash = sumUAH / currencyValues[1]['value'];
            console.log(currencyValues[1]['value'])
            return cash;
        }
         else return (`Такої валюти немає`)
}
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'UA'))