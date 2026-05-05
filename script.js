// Add to cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}

// Display cart
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalContainer = document.getElementById("cart-total");

    if (!cartContainer || !totalContainer) return;

    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalContainer.innerText = "Total: $0";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - $${item.price}</p>
                <button onclick="removeItem(${index})" class="remove-btn">Remove</button>
            </div>
        `;
    });

    totalContainer.innerText = "Total: $" + total;
}

// Remove item
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

// Budget filter
function filterFood(limit) {
    let items = document.querySelectorAll(".food-item");
    let message = document.getElementById("filter-message");

    items.forEach(item => {
        let price = parseInt(item.getAttribute("data-price"));

        if (limit === 'all') {
            item.style.display = "block";
            message.innerText = "Showing all meals";
        } else if (price <= limit) {
            item.style.display = "block";
            message.innerText = "Showing meals under $" + limit;
        } else {
            item.style.display = "none";
        }
    });
}

// Load cart when page opens
window.onload = displayCart;