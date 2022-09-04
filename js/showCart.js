const iconCart = document.querySelector("#icon_cart");
const contentCart = document.querySelector("#contentCart");

iconCart.addEventListener("click", () => {
    contentCart.classList.toggle("content_cart-show");
});
