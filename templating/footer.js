function generateFooter() {
    return `
    <div>
        <div class="row p-5 m-0" style="width:100%">
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
        <div class="col-lg-4">
                <div class="photoGallery">
                <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-6 img-container">
                                <img src="https://scientificallysweet.com/wp-content/uploads/2020/09/IMG_4087-feature-2.jpg" class="img-fluid" id="fullscreenImage1" alt="Fullscreen Image 1" data-bs-toggle="modal" data-bs-target="#fullscreenModal1">
                            </div>
                            <div class="col-md-4 col-6 img-container">
                                <img src="https://www.foodrepublic.com/img/gallery/definitive-classic-butter-croissant-recipe/l-intro-1684859945.jpg" class="img-fluid" id="fullscreenImage2" alt="Fullscreen Image 2" data-bs-toggle="modal" data-bs-target="#fullscreenModal2">
                            </div>
                            <div class="col-md-4 col-6 img-container">
                                <img src="https://www.beyondthechickencoop.com/wp-content/uploads/2021/02/Oatmeal-Banana-Muffins.jpg" class="img-fluid" id="fullscreenImage3" alt="Fullscreen Image 3" data-bs-toggle="modal" data-bs-target="#fullscreenModal3">
                            </div>
                            <div class="col-md-4 col-6 img-container">
                                <img src="https://scientificallysweet.com/wp-content/uploads/2020/09/IMG_4087-feature-2.jpg" class="img-fluid" id="fullscreenImage4" alt="Fullscreen Image 4" data-bs-toggle="modal" data-bs-target="#fullscreenModal4">
                            </div>
                            <div class="col-md-4 col-6 img-container">
                                <img src="https://www.foodrepublic.com/img/gallery/definitive-classic-butter-croissant-recipe/l-intro-1684859945.jpg" class="img-fluid" id="fullscreenImage5" alt="Fullscreen Image 5" data-bs-toggle="modal" data-bs-target="#fullscreenModal5">
                            </div>
                            <div class="col-md-4 col-6 img-container">
                                <img src="https://www.beyondthechickencoop.com/wp-content/uploads/2021/02/Oatmeal-Banana-Muffins.jpg" class="img-fluid" id="fullscreenImage6" alt="Fullscreen Image 6" data-bs-toggle="modal" data-bs-target="#fullscreenModal6">
                            </div>
                        </div>
                    </div>

                    <!-- Fullscreen Modals -->                   
                    <div class="modal fade" id="fullscreenModal1" tabindex="-1" aria-labelledby="fullscreenModalLabel1" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <img src="https://scientificallysweet.com/wp-content/uploads/2020/09/IMG_4087-feature-2.jpg" class="img-fluid" alt="Fullscreen Image 1">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="fullscreenModal2" tabindex="-1" aria-labelledby="fullscreenModalLabel1" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <img src="https://www.foodrepublic.com/img/gallery/definitive-classic-butter-croissant-recipe/l-intro-1684859945.jpg" class="img-fluid" alt="Fullscreen Image 2">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="fullscreenModal3" tabindex="-1" aria-labelledby="fullscreenModalLabel1" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <img src="https://www.beyondthechickencoop.com/wp-content/uploads/2021/02/Oatmeal-Banana-Muffins.jpg" class="img-fluid" alt="Fullscreen Image 3">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="fullscreenModal4" tabindex="-1" aria-labelledby="fullscreenModalLabel1" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <img src="https://scientificallysweet.com/wp-content/uploads/2020/09/IMG_4087-feature-2.jpg" class="img-fluid" alt="Fullscreen Image 4">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="fullscreenModal5" tabindex="-1" aria-labelledby="fullscreenModalLabel1" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <img src="https://www.foodrepublic.com/img/gallery/definitive-classic-butter-croissant-recipe/l-intro-1684859945.jpg" class="img-fluid" alt="Fullscreen Image 5">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="modal fade" id="fullscreenModal6" tabindex="-1" aria-labelledby="fullscreenModalLabel1" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <img src="https://www.beyondthechickencoop.com/wp-content/uploads/2021/02/Oatmeal-Banana-Muffins.jpg" class="img-fluid" alt="Fullscreen Image 6">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    <div class="footerBottom d-flex justify-content-between px-5" style="background-color: black; color: white;">
        <h6>©2023 BuyNBakeRecipes</h6>
        <a href="https://www.privacypolicytemplate.net/live.php?token=dLD6BEqQSdDZ8qGL7IGsNtCh90DYJCli">Privacy Policy</a>
    </div>
    `

};

document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById('footerContainer');
    if (footerContainer) {
        footerContainer.innerHTML = generateFooter();
    }
});

