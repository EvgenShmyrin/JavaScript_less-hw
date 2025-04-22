// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об’єкту які потрібно впровадити в шаблон
// ШАБЛОН
//
// <div class=”product-card”>
//
// <h3 class=”product-title”>TITLE. Price – PRICE</h3>
//
// <img src=”IMAGE” alt=”” class=”product-image”>
//
// </div>

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLYLrpcL-2TKZDY0eljDthboDPMytCCRgVg&s'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://images.prom.ua/4436706074_w600_h600_4436706074.jpg'
    },
];
document.write('<div class="product-card">')
for (let product of products) {
    document.write(`<h3 class=”product-title>${product.title}. Price- ${product.price}$</h3>`);
    document.write(`<img src='${product.image}' alt ='img' class='product-image' width="120px">`);
}
document.write('</div>')