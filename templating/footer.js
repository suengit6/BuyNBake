function generateFooter(){
    return `
    <div class="row p-5 m-0">
        <div class="col-lg-4">
            <h3>BuyNBakeRecipes</h3>
            <small><p>Your Culinary Haven for Inspired Baking and Seamless Shopping. Explore a world of delightful recipes, shop for quality ingredients, and join a community passionate about the joy of baking. <br>
            levate your baking experience with us!</p></small>
        </div>
        <div class="col-lg-4 links">
            <h3>Links</h3>
            <ul class="list-unstyled  d-flex flex-column justify-content-center">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./pages/recipes.html">Recipes</a></li>
                <li><a href="./pages/shop.html">Shop</a></li>
                <li><a href="./pages/contactUs.html">Contact Us</a></li>
                <li><a href="./pages/account.html">Account</a></li>
            </ul>
        </div>
        <div class="col-lg-4 photoGallery">
            <h3>Photo Gallery</h3>
            <div class="row">
                <div class="col-lg-4">
                    <img src="https://scientificallysweet.com/wp-content/uploads/2020/09/IMG_4087-feature-2.jpg" alt="">
                </div>
                <div class="col-lg-4">

                    <img src="https://www.foodrepublic.com/img/gallery/definitive-classic-butter-croissant-recipe/l-intro-1684859945.jpg" alt="">
                </div>                    
                <div class="col-lg-4">

                    <img src="https://www.beyondthechickencoop.com/wp-content/uploads/2021/02/Oatmeal-Banana-Muffins.jpg" alt="">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">

                    <img src="https://www.beyondthechickencoop.com/wp-content/uploads/2021/02/Oatmeal-Banana-Muffins.jpg" alt="">
                </div>
                <div class="col-lg-4">
                
                    <img src="https://scientificallysweet.com/wp-content/uploads/2020/09/IMG_4087-feature-2.jpg" alt="">
                </div>                    
                <div class="col-lg-4">

                    <img src="https://www.foodrepublic.com/img/gallery/definitive-classic-butter-croissant-recipe/l-intro-1684859945.jpg" alt="">
                </div>
            </div>
        </div>    
    </div>
    <div class="footerBottom d-flex justify-content-between px-5" style="background-color: black; color: white;">
        <h6>©2023 BuyNBakeRecipes. All rights reserved</h6>
        <a href="#">Privacy Policy</a>
    </div>
    `

};
document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById('footerContainer');
    if (footerContainer) {
        footerContainer.innerHTML = generateFooter();
    }
});