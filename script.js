// CURATED & CO. WEBSITE JAVASCRIPT

// Business WhatsApp number in international format
const whatsappNumber = "27713201343";

// Shopping cart
let cart = JSON.parse(localStorage.getItem("curatedCart")) || [];

// Save cart
function saveCart() {
    localStorage.setItem("curatedCart", JSON.stringify(cart));
    displayCart();
}

// Add product to cart
document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", function() {

        const name = this.dataset.name;
        const price = Number(this.dataset.price);

        const existingProduct = cart.find(item => item.name === name);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        saveCart();

        this.textContent = "Added!";
        setTimeout(() => {
            this.textContent = "Add to Cart";
        }, 1000);
    });
});

// Display shopping cart
function displayCart() {

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartTotal) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const div = document.createElement("div");
        div.className = "cart-item";

        const name = document.createElement("span");
        name.textContent = item.name + " - R" + item.price;

        const quantity = document.createElement("span");
        quantity.textContent = "Quantity: " + item.quantity;

        const subtotal = document.createElement("strong");
        subtotal.textContent = "R" + itemTotal;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        removeButton.addEventListener("click", function() {
            cart.splice(index, 1);
            saveCart();
        });

        div.appendChild(name);
        div.appendChild(quantity);
        div.appendChild(subtotal);
        div.appendChild(removeButton);

        cartItems.appendChild(div);
    });

    cartTotal.textContent = "R" + total;
}

// Display cart when page opens
displayCart();


// CUSTOMER ORDER FORM
const orderForm = document.getElementById("order-form");

if (orderForm) {

    orderForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (cart.length === 0) {
            alert("Please add a hamper to your cart first.");
            return;
        }

        const formData = new FormData(orderForm);

        let total = 0;
        let orderDetails = "";

        cart.forEach(item => {
            orderDetails +=
                item.name + " x " + item.quantity +
                " = R" + (item.price * item.quantity) + "\n";

            total += item.price * item.quantity;
        });

        const message =
            "Hello Curated & Co.! I would like to place an order.\n\n" +

            "ORDER DETAILS:\n" +
            orderDetails +
            "\nTotal: R" + total + "\n\n" +

            "CUSTOMER DETAILS:\n" +
            "Name: " + formData.get("fullname") + "\n" +
            "Email: " + formData.get("email") + "\n" +
            "Phone: " + formData.get("phone") + "\n" +
            "Province: " + formData.get("province") + "\n" +
            "Address: " + formData.get("address") + "\n" +
            "Payment: " + formData.get("payment") + "\n" +
            "Notes: " + formData.get("notes");

        const whatsappLink =
            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(message);

        window.open(whatsappLink, "_blank");

    });
}


// CUSTOM ORDER FORM
const customForm = document.getElementById("custom-form");

if (customForm) {

    customForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const formData = new FormData(customForm);

        const message =
            "Hello Curated & Co.! I have a custom hamper enquiry.\n\n" +
            "Name: " + formData.get("name") + "\n" +
            "Email: " + formData.get("email") + "\n" +
            "Occasion: " + formData.get("occasion") + "\n" +
            "Budget: " + formData.get("budget") + "\n" +
            "Recipient: " + formData.get("recipient") + "\n" +
            "Details: " + formData.get("details");

        const whatsappLink =
            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(message);

        window.open(whatsappLink, "_blank");

    });
}


// CONTACT FORM
const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const formData = new FormData(contactForm);

        const message =
            "Hello Curated & Co.! I have an enquiry.\n\n" +
            "Name: " + formData.get("name") + "\n" +
            "Email: " + formData.get("email") + "\n" +
            "Message: " + formData.get("message");

        const whatsappLink =
            "https://wa.me/" + whatsappNumber +
            "?text=" + encodeURIComponent(message);

        window.open(whatsappLink, "_blank");

    });
}