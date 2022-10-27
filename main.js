
let products = [
    {
        id: 1,
        name: 'RAMO DE ROSAS',
        price: 35.50,
        urlImg: './assets/rosas.png'  
    },
    {
        id: 2,
        name: 'RAMO DE GIRASOLES',
        price: 39.50,
        urlImg: './assets/girasoles.png'
    },
    {
        id: 3,
        name: 'LAVANDA',
        price: 25.50,
        urlImg: './assets/lavanda.png'
    },
    {
        id: 4,
        name: 'RAMO DE LIRIOS',
        price: 15.90,
        urlImg: './assets/lirios.png'
    },
    {
        id: 5,
        name: 'CACTUS',
        price: 49.50,
        urlImg: './assets/cactus.png'
    }
      
];

let elementProductList = document.querySelector('.product-list');
let elementProduct = document.querySelector('.product');

function renderProductList(){
    for (let i = 0; i < products.length; i++){
        let elementBtn = document.createElement('button');
        elementBtn.textContent = products[i].name;
        elementBtn.classList.add('btn');
        elementBtn.addEventListener('click', function(){ renderProduct( products[i] ) });
        elementProductList.appendChild(elementBtn);
    }
}

function renderProduct(item){
    elementProduct.textContent = '';
    let elementImg = document.createElement('img');
    elementImg.setAttribute('src', item.urlImg);
    elementImg.classList.add('img-product');

    let elementPrice = document.createElement('p');
    elementPrice.textContent = item.price + '€';
    elementPrice.classList.add('price-product');

    let elementBtn = document.createElement('button');
    elementBtn.textContent = 'COMPRAR';
    elementBtn.classList.add('btn-product');
    elementBtn.addEventListener('click', purchase);

    elementProduct.appendChild(elementImg);
    elementProduct.appendChild(elementPrice);
    elementProduct.appendChild(elementBtn);
}


function purchase (){
    elementProduct.textContent = '';
    let elementPurchase = document.createElement('p');
    elementPurchase.textContent='GRACIAS POR TU COMPRA';

    elementProduct.appendChild(elementPurchase);
}

renderProductList();
renderProduct(products[0]);