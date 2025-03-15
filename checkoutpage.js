document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkoutForm');
    const paymentMethodSelect = document.getElementById('payment-method');
    const creditCardDetails = document.getElementById('credit-card-details');

    // Function to load cart items and totals from localStorage
    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let totalItems = 0;
        let totalPrice = 0;
        const orderItemsContainer = document.getElementById('order-items');

        orderItemsContainer.innerHTML = ''; // Clear previous items

        if (cart.length === 0) {
            orderItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            document.getElementById('total-items').textContent = '0';
            document.getElementById('total-price').textContent = '$0.00';
            return;
        }

        cart.forEach(item => {
            const product = getProductDetails(item.id); // Fetch product details based on ID
            const itemTotal = product.price * item.quantity;

            totalItems += item.quantity;
            totalPrice += itemTotal;

            orderItemsContainer.innerHTML += `
                <div class="order-item" data-product-id="${item.id}">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="order-item-details">
                        <h3>${product.name}</h3>
                        <p>$${product.price.toFixed(2)} per unit</p>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Total: $${itemTotal.toFixed(2)}</p>
                    </div>
                </div>
            `;
        });

        document.getElementById('total-items').textContent = totalItems;
        document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Example function to get product details (replace with real data)
    function getProductDetails(productId) {
        const products = {
            '1': { name: 'Organic Apples', price: 2.99, image: 'images/apples.jpg' },
            '2': { name: 'Organic Bananas', price: 1.99, image: 'images/bananas.jpg' },
            // Add more products as needed
        };

        return products[productId] || { name: 'Unknown Product', price: 0, image: 'images/default.jpg' };
    }

    // Show/hide credit card details based on payment method selection
    paymentMethodSelect.addEventListener('change', function() {
        if (this.value === 'credit-card') {
            creditCardDetails.style.display = 'block';
        } else {
            creditCardDetails.style.display = 'none';
        }
    });

    // Handle form submission
    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload on form submission

        const shippingName = document.getElementById('shipping-name').value;
        const shippingAddress = document.getElementById('shipping-address').value;
        const shippingCity = document.getElementById('shipping-city').value;
        const shippingState = document.getElementById('shipping-state').value;
        const shippingZip = document.getElementById('shipping-zip').value;
        const paymentMethod = document.getElementById('payment-method').value;
        const cardNumber = document.getElementById('card-number').value;
        const cardExpiry = document.getElementById('card-expiry').value;
        const cardCvc = document.getElementById('card-cvc').value;

        // Simple validation
        if (!shippingName || !shippingAddress || !shippingCity || !shippingState || !shippingZip) {
            alert('Please fill out all shipping information.');
            return;
        }

        if (paymentMethod === 'credit-card' && (!cardNumber || !cardExpiry || !cardCvc)) {
            alert('Please fill out all credit card details.');
            return;
        }

        // Process the order (e.g., save to database, send confirmation email, etc.)
        // For demonstration, we'll just display an alert and clear the cart
        alert('Order placed successfully! Thank you for shopping with us.');

        // Clear the cart
        localStorage.removeItem('cart');

        // Optionally, redirect to a confirmation page or home page
        window.location.href = 'index.html';
    });

    // Load cart items on page load
    loadCart();
}); 