let cart = [];

const buttons = document.querySelectorAll(".add-to-cart");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("cart-total");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseInt(button.getAttribute("data-price"));

    cart.push({ name, price });
    updateCart();
  });
});

function updateCart() {
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.name}</span>
      <span>${item.price.toLocaleString()} FCFA</span>
    `;

    cartItems.appendChild(div);
  });

  totalDisplay.textContent = "Total : " + total.toLocaleString() + " FCFA";
}