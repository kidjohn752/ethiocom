// Cart Logic and Rendering Module
let cart = JSON.parse(localStorage.getItem('ethioCart')) || [];

function saveCart() {
    localStorage.setItem('ethioCart', JSON.stringify(cart));
}

function updateCartUI() {
    const countEl = document.getElementById('cartCount');
    const itemsEl = document.getElementById('cartItems');
    const footerEl = document.getElementById('cartFooter');
    const totalEl = document.getElementById('cartTotal');
    
    if(!countEl) return; 

    countEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cart.length === 0) {
        itemsEl.innerHTML = '<div style="text-align: center; padding: 3rem 1rem; color: #777; font-weight: 500;">Your shopping cart is currently empty.</div>';
        footerEl.style.display = 'none';
    } else {
        itemsEl.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} ETB</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span style="font-weight: 700;">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <span class="remove-item" onclick="removeFromCart(${item.id})">Remove</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalEl.textContent = `${total.toFixed(2)} ETB`;
        footerEl.style.display = 'block';
    }
}

function addToCart(productId, qty = 1) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) existingItem.quantity += qty;
    else cart.push({ ...product, quantity: qty });
    
    saveCart();
    updateCartUI();
    document.getElementById('cartSidebar').classList.add('open');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        saveCart();
        updateCartUI();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('open');
}

// Fixed Checkout Sequence: Removes all products in cart after successful processing
function checkoutViaTelebirr() {
    if (cart.length === 0) {
        alert("Your shopping cart is currently empty!");
        return;
    }
    
    alert("Proceeding to secure payment window via Telebirr mobile wallet gateway! Transaction completed successfully.");
    
    // Empty the products array in the cart object
    cart = [];
    saveCart();
    updateCartUI();
    
    // Automatically close the sidebar overlay panel
    document.getElementById('cartSidebar').classList.remove('open');
}

function renderProductGrid(containerId, category = 'all', limit = null) {
    const grid = document.getElementById(containerId);
    if (!grid) return;

    let filtered = category === 'all' ? products : products.filter(p => p.category === category);
    if (limit) filtered = filtered.slice(0, limit);

    grid.innerHTML = filtered.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=600'">
            <div class="product-content">
                <div class="product-category">${product.category.replace('_', ' ')}</div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">${product.price.toFixed(2)} ETB</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', updateCartUI);