function generateNav() {
    const currentPage = window.location.pathname;

    return `
            <div class="flex-row-reverse" id="navbarNav" >
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="https://facebook.com">
                            <i class="fa-brands fa-facebook-f" style="color: #DFD6A7"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://twitter.com">
                            <i class="fa-brands fa-twitter" style="color: #DFD6A7"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://linkedin.com">
                            <i class="fa-brands fa-linkedin-in" style="color: #DFD6A7"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://instagram.com">
                            <i class="fa-brands fa-instagram" style="color: #DFD6A7"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mainNav container-fluid pt-3 px-5" data-bs-theme="light">
            <a class="navbar-brand rounded p-2" href="../index.html" style="background-color: #AF9B46; color: white;">BuyNBakeRecipes</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link ${currentPage.endsWith('/pages/index.html') ? 'active' : ''}" href="../index.html" aria-current="${currentPage.endsWith('/pages/index.html') ? 'page' : ''}">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${currentPage.endsWith('/pages/recipes.html') ? 'active' : ''}" href="../pages/recipes.html" aria-current="${currentPage.endsWith('/pages/recipes.html') ? 'page' : ''}">Recipes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${currentPage.endsWith('/pages/shop.html') ? 'active' : ''}" href="../pages/shop.html" aria-current="${currentPage.endsWith('/pages/shop.html') ? 'page' : ''}">Shop</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${currentPage.endsWith('/pages/contactUs.html') ? 'active' : ''}" href="../pages/contactUs.html" aria-current="${currentPage.endsWith('/pages/contactUs.html') ? 'page' : ''}">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${currentPage.endsWith('/pages/account.html') ? 'active' : ''}" href="../pages/account.html" aria-current="${currentPage.endsWith('/pages/account.html') ? 'page' : ''}">Account</a>
                    </li>
                </ul>
            </div>
            <h5 class="contactUsNum">09999999999</h5>
        </div>
        <div class="container-fluid">
            <hr class="mx-auto" style="width: 95%; opacity: 1;">
        </div>    
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById('navbarContainer');
    if (navbarContainer) {
        navbarContainer.innerHTML = generateNav();
    }
});
