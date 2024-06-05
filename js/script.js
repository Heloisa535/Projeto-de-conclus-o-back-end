document.addEventListener("DOMContentLoaded", function() {
    const decreaseButton = document.getElementById("decrease");
    const increaseButton = document.getElementById("increase");
    const quantityDisplay = document.getElementById("quantity");

    let quantity = 0;

    decreaseButton.addEventListener("click", function() {
        if (quantity > 0) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });

    increaseButton.addEventListener("click", function() {
        quantity++;
        quantityDisplay.textContent = quantity;
    });
});
