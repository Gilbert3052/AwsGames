import {juegos} from "./js/data.js";
import {printDestacados, printRecent, printPopular} from "./js/layout.js";
import { swiper, swiper1 } from "./js/swip.js";
import "./js/showMenu.js";
import "./js/showCart.js";
import { printCart, cart} from "./js/cart.js";

const contentDestacados = document.querySelector(".destacado_swiper");
const contentRecent = document.querySelector(".recent_swiper");
const contentPopular = document.querySelector(".popular_swiper");
const content = document.querySelector(".content_cart");
const contentCartBody = document.querySelector(".content_cart-body");
const contentCartTotal = document.querySelector(".checkout_cart");
const cartTotal = document.querySelector("#total");
const button = document.querySelector(".checkout");


// Añadir al carrito desde Destacados

contentDestacados.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-cart-add")) {
        const idGame = +e.target.parentElement.id;
        const findGame = juegos.find((item) => item.id === idGame);
        if (findGame.stock) {
            if (cart[idGame]) {
                cart[idGame].amount++;
                cart[idGame].total += cart[idGame].price;
            } else {
                cart[idGame] = findGame;
                cart[idGame].amount = 1;
                cart[idGame].total = cart[idGame].price;
            }
            cartTotal.innerHTML = +cartTotal.innerHTML+(cart[idGame].price);
            printCart(contentCartBody);
        }
        
    }
    
});

// Añadir al carrito desde Receientes

contentRecent.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-cart-add")) {
        const idGame = +e.target.parentElement.id;
        const findGame = juegos.find((item) => item.id === idGame);
        
        if (cart[idGame]) {
            cart[idGame].amount++;
            cart[idGame].total += cart[idGame].price;
        } else {
            cart[idGame] = findGame;
            cart[idGame].amount = 1;
            cart[idGame].total = cart[idGame].price;
        }
        cartTotal.innerHTML = +cartTotal.innerHTML+(cart[idGame].price);

        printCart(contentCartBody);
    }
});


// Añadir al carrito desde Populares

contentPopular.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-cart-add")) {
        const idGame = +e.target.parentElement.id;
        const findGame = juegos.find((item) => item.id === idGame);
        
        if (cart[idGame]) {
            cart[idGame].amount++;
            cart[idGame].total += cart[idGame].price;
        } else {
            cart[idGame] = findGame;
            cart[idGame].amount = 1;
            cart[idGame].total = cart[idGame].price;
        }

        cartTotal.innerHTML = +cartTotal.innerHTML+(cart[idGame].price);

        printCart(contentCartBody);
    }
});


// Funcionalidades botones dentro del Carrito

content.addEventListener("click", (e) => {
    const idGame = +e.target.parentElement.id;
    if (e.target.classList.contains("bx-minus-circle")) {
        if(cart[idGame].amount > 1) {
            cart[idGame].amount--;
            cart[idGame].total -= cart[idGame].price;
            cartTotal.innerHTML = +cartTotal.innerHTML-(cart[idGame].price);
        }else {
            cartTotal.innerHTML = +cartTotal.innerHTML-(cart[idGame].price);
            delete cart[idGame]
        }
    }

    if (e.target.classList.contains("bx-plus-circle")) {
        if(cart[idGame].amount < cart[idGame].stock) {
            cart[idGame].amount++;
            cart[idGame].total += cart[idGame].price;
            cartTotal.innerHTML = +cartTotal.innerHTML+(cart[idGame].price);
        }        
    }

    if (e.target.classList.contains("remove")) {
        if(e.target.classList.contains("button_total")){
            for(let i = 0; i<30; i++) {
                delete cart[i];
            }
            cartTotal.innerHTML = 0;
            alert("¡Gracias Por Su Compra!")
        }else {
            cartTotal.innerHTML = +cartTotal.innerHTML-(cart[idGame].amount*(cart[idGame].price));
            delete cart[idGame];
        }        
    }

    printCart(contentCartBody);
});







printDestacados(contentDestacados, juegos);
printRecent(contentRecent, juegos);
printPopular(contentPopular, juegos);

