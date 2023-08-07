const productsData = function () {
    let $productsGallery;

    const PRODUCT_LIST = [
        {
            name: 'Product 1',
            price: 21,
            description: 'This is the description for Product 1',
            image: 'https://github.com/suengit6/activity-images/blob/03b265a1b02fef5303267a32f751be488c177ed0/products/img_product_01.jpeg?raw=true',
        },
        {
            name: 'Product 2',
            price: 31,
            description: 'This is the description for Product 2',
            image: 'https://github.com/suengit6/activity-images/blob/03b265a1b02fef5303267a32f751be488c177ed0/products/img_product_02.jpeg?raw=true',
        },
        {
            name: 'Product 3',
            price: 41,
            description: 'This is the description for Product 3',
            image: 'https://github.com/suengit6/activity-images/blob/03b265a1b02fef5303267a32f751be488c177ed0/products/img_product_03.jpeg?raw=true',
        }
    ];

    const handleInitLocalStoreProduct = () => {
        console.log(JSON.parse(JSON.stringify(PRODUCT_LIST)));

        if (!localStorage.getItem('products')) {
            localStorage.setItem('products', JSON.stringify(PRODUCT_LIST));
        } else {
            localStorage.removeItem('products');
            localStorage.setItem('products', JSON.stringify(PRODUCT_LIST));
        }

        // check if products not empty
        let data = JSON.parse(localStorage.getItem('products'));

        // Check if data is not null and has at least one item
        if (data && data.length > 0) {
            console.log(data[0]);
        } else {
            console.log('No products in localStorage.');
        }
    }


    const handleRenderProduct = () => {
        $productsGallery = document.querySelector('#products-gallery');

        let listHtml = [];

        PRODUCT_LIST.forEach((val, index) => {
            let containerHtml = `
            <li class="col-md-4">
                <a href="product.html?id=${index}" target="_blank" >
                    <div class="thumbnail text-center">
                        <img
                            class="product__pic1 my-5"
                            src="${val.image}"
                            loading="eager"
                        />
                        <div class="caption">
                            <h2>$${val.price} - ${val.name}</h2>
                            <p>
                                ${val.description}
                            </p>
                        </div>
                    </div>
                </a>
            </li>`;

            listHtml.push(containerHtml);
        });

        $productsGallery.innerHTML = listHtml.join(' ');
    }


    return {
        init: function () {
            handleInitLocalStoreProduct();
            handleRenderProduct();
        }
    }
    
}();


$(document).ready(function () {
    productsData.init();
});
