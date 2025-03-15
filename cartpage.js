// cart.js

// Simulated cart data (replace this with dynamic data from backend)
let cart = [
    { id: 1, name: "Organics Apple", price: 100.00, quantity: 1 },
    { id: 2, name: "Organics Banana", price: 40.00, quantity: 1 }
];

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current items

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.setAttribute('data-id', item.id);
        itemElement.innerHTML = `
            <p>Product Name: ${item.name}</p>
            <p>Price: ₹<span class="item-price">${item.price.toFixed(2)}</span></p>
            <p>Quantity: 
                <button class="decrease-btn">-</button>
                <input type="number" class="item-quantity" value="${item.quantity}" min="1">
                <button class="increase-btn">+</button>
            </p>
            <p>Total: ₹<span class="item-total">${(item.price * item.quantity).toFixed(2)}</span></p>
            <button class="remove-item">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    updateCartSummary();
    attachEventListeners();
}

// Function to update cart summary
function updateCartSummary() {
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Event Listeners for quantity updates and remove buttons
function attachEventListeners() {
    // Quantity increase/decrease
    document.querySelectorAll('.increase-btn').forEach((button, index) => {
        button.addEventListener('click', () => {
            cart[index].quantity++;
            renderCartItems();
        });
    });

    document.querySelectorAll('.decrease-btn').forEach((button, index) => {
        button.addEventListener('click', () => {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            }
            renderCartItems();
        });
    });

    // Remove item
    document.querySelectorAll('.remove-item').forEach((button, index) => {
        button.addEventListener('click', () => {
            cart.splice(index, 1); // Remove item from cart
            renderCartItems();
        });
    });

    // Update quantity directly from input
    document.querySelectorAll('.item-quantity').forEach((input, index) => {
        input.addEventListener('change', (event) => {
            const newQuantity = parseInt(event.target.value);
            cart[index].quantity = newQuantity > 0 ? newQuantity : 1;
            renderCartItems();
        });
    });
}

// Initial rendering of cart items
renderCartItems(); 