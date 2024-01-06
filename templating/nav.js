function generateNav(){
    return `

        <div class="flex-row-reverse" id="navbarNav" >
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="https://www.facebook.com">
                        <i class="fa-brands fa-facebook-f px-3" style="color: #DFD6A7"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.twitter.com">
                        <i class="fa-brands fa-twitter px-3" style="color: #DFD6A7"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.linkedin.com">
                        <i class="fa-brands fa-linkedin-in px-3" style="color: #DFD6A7"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.instagram.com">
                        <i class="fa-brands fa-instagram px-3" style="color: #DFD6A7"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="mainNav container-fluid pt-3 px-5" data-bs-theme="light">
        <a class="navbar-brand rounded p-2" href="./index.html" style="background-color: #AF9B46; color: white;">BuyNBakeRecipes</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./pages/recipes.html">Recipes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./pages/shop.html">Shop</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./pages/contactUs.html">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./pages/account.html">Account</a>
                </li>
            </ul>
        </div>
        <h5 class="contactNum">09999999999</h5>
    </div>
    <div class="container-fluid">
        <hr class="mx-auto" style="width: 95%; opacity: 1;">
    </div>    
    `

};
document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById('navbarContainer');
    if (navbarContainer) {
        navbarContainer.innerHTML = generateNav();
    }
});