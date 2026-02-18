document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    setupMobileMenu();
});

// Cart Application Logic
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert("Item added to cart!");
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.querySelector('.cart-count');
    if (badge) {
        badge.innerText = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// WhatsApp Checkout Logic
function checkoutWhatsApp() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello Vijay Electronics, I want to place an order:%0A%0A";
    let total = 0;

    cart.forEach(item => {
        const product = getProductById(item.id);
        if (product) {
            const lineTotal = product.price * item.quantity;
            total += lineTotal;
            message += `- ${product.name} x ${item.quantity} = ₹${lineTotal}%0A`;
        }
    });

    message += `%0A*Total Amount: ₹${total}*`;
    message += "%0A%0APlease confirm availability.";

    const phoneNumber = "918090090051"; // Replace with actual number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}
