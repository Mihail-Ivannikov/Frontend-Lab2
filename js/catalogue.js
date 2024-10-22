document.addEventListener('DOMContentLoaded', function () {
    setTimeout(loadProductsFromServer, 500); 
});

function loadProductsFromServer() {
    const productData = [
        {
            name: 'D.I.D ERT3 520-120 L Chain',
            price: '$82.95',
            img: '../img/products/1.png'
        },
        {
            name: 'Universal Titanium Piston Ring',
            price: '$42.99',
            img: '../img/products/2.png'
        },
        {
            name: 'Polisport RSP LED 3.0',
            price: '$25.99',
            img: '../img/products/3.png'
        },
        {
            name: 'Titanium Offset -1cm GP VERSION Foot Pegs',
            price: '$102.99',
            img: '../img/products/4.png'
        },
        {
            name: 'JE Pistons Piston Set',
            price: '$149.99',
            img: '../img/products/5.png'
        },
        {
            name: 'Twenty Radiator',
            price: '$40.99',
            img: '../img/products/6.png'
        },
        {
            name: 'ProX Exhaust valves and springs kit',
            price: '$89.00',
            img: '../img/products/7.png'
        },
        {
            name: 'Boyesen SuperCooler Water Pump Black',
            price: '$147.99',
            img: '../img/products/8.png'
        },
        {
            name: 'Athena 2-Stroke Cylinder and Piston Kit',
            price: '$507.95',
            img: '../img/products/9.png'
        },
        {
            name: 'Twenty Clutch Kit',
            price: '$40.99',
            img: '../img/products/10.png'
        },
        {
            name: 'Twenty Shock Spring',
            price: '$89.00',
            img: '../img/products/11.png'
        },
        {
            name: 'HGS 4-Stroke Full Exhaust System',
            price: '$779.99',
            img: '../img/products/12.png'
        },
    ];

    const productGrid = document.getElementById('product-grid');

    productData.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product'); // Add the 'product' class for styling

        const productImg = document.createElement('img');
        productImg.src = product.img;
        productImg.alt = product.name;

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productText = document.createElement('div');
        productInfo.classList.add('product-text');

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.classList.add('buy-button');

        productText.appendChild(productName);
        productText.appendChild(productPrice);


        productInfo.appendChild(productText);
        productInfo.appendChild(buyButton);


        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        productGrid.appendChild(productCard);
    });
}
