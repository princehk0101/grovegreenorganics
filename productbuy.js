// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Handle scroll to top button
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Handle mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Handle add to cart and buy now buttons
    const addToCartButton = document.querySelector('.add-to-cart');
    const buyNowButton = document.querySelector('.buy-now');

    addToCartButton.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        const quantity = document.getElementById('quantity').value;
        addToCart(productId, quantity);
    });

    buyNowButton.addEventListener('click', function() {
        const productId = this.getAttribute('data-product-id');
        const quantity = document.getElementById('quantity').value;
        buyNow(productId, quantity);
    });

    function addToCart(productId, quantity) {
        // Example logic for adding a product to the cart
        alert(`Added ${quantity} of product ${productId} to cart.`);
        // This is where you would handle actual cart logic
    }

    function buyNow(productId, quantity) {
        // Example logic for proceeding with purchase
        alert(`Proceeding to checkout with ${quantity} of product ${productId}.`);
        // Redirect to checkout or handle purchase logic
    }
}); 