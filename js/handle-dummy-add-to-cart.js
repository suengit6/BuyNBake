const productInteraction = function () {
    let $img, $name, $price, $description;

    let localStorageProduct;

    const initVariable = () => {
        $img         = $('.product-image-img');
        $name        = $('.product-name');
        $price       = $('.product-price');
        $description = $('.product-description');
    }

    const initProduct = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id        = urlParams.get('id');
        
        localStorageProduct = JSON.parse(localStorage.getItem('products'))[id];

        $img.attr('src', localStorageProduct['image']);
        $name.text(localStorageProduct['name']);
        $price.text(`$${localStorageProduct['price']}`);
        $description.text(localStorageProduct['description']);
    };

    return {
        init: function () {
            initVariable();
            initProduct();

            console.log(localStorageProduct)
        }
    }
}();

$(document).ready(function () {
    productInteraction.init();
});
