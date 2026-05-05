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