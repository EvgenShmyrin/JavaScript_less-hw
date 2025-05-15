// #HmvAfRQM
//
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
fetch('https://dummyjson.com/carts')
    .then((value) => value.json())
    .then((cartsObject) => {
        let {carts} = cartsObject;
        console.log(carts);
        for (let cart of carts) {
            let div = document.createElement('div');
            div.classList.add('DivCard');
            let divInfo = document.createElement('div');
            divInfo.innerText = `
          "total": ${cart.total},
          "discountedTotal": ${cart.discountedTotal},
          "userId": ${cart.userId},
          "totalProducts": ${cart.totalProducts},
          "totalQuantity": ${cart.totalQuantity}
        `
            let ol = document.createElement('ol');
            for (let product of cart.products) {
                let li = document.createElement('li');
                let info = document.createElement('p');
                info.innerText = `
                      "id": ${product.id},
                      "title": ${product.title},
                      "price": ${product.price},
                      "quantity": ${product.quantity},
                      "total": ${product.total},
                      "discountPercentage": ${product.discountPercentage},
                      "discountedTotal": ${product.discountedTotal}
                `
                let img = document.createElement('img');
                img.src = product.thumbnail;
                li.append(info, img);
                ol.appendChild(li);
            }
            divInfo.append(ol)
            DivCard.appendChild(divInfo)
        }
    })
