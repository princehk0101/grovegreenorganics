// Add this part to handle "Add to Cart" functionality on the Trending page
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            addToCart(productId);
        });
    });

    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let product = cart.find(item => item.id === productId);

        if (product) {
            product.quantity++;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`Product ${productId} added to cart.`);
    }
});
