import {juegos} from "./js/data.js";
import {printDestacados, printRecent, printPopular} from "./js/layout.js";
import { swiper, swiper1 } from "./js/swip.js";
import "./js/showMenu.js";
import "./js/showCart.js";
import { printCart, cart} from "./js/cart.js";

const contentDestacados = document.querySelector(".destacado_swiper");
const contentRecent = document.querySelector(".recent_swiper");
const contentPopular = document.querySelector(".popular_swiper");
const contentCartBody = document.querySelector(".content_cart-body");
const cartTotal = document.querySelector("#total");



// Añadir al carrito desde Destacados

contentDestacados.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-cart-add")) {
        const idGame = +e.target.parentElement.id;
        const findGame = juegos.find((item) => item.id === idGame);
        console.log(juegos);
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

contentCartBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-minus-circle")) {
        const idGame = +e.target.parentElement.id;
        if(cart[idGame].amount > 1) {
            cart[idGame].amount--;
            cart[idGame].total -= cart[idGame].price;
            cartTotal.innerHTML = +cartTotal.innerHTML-(cart[idGame].price);
        }else {
            cartTotal.innerHTML = +cartTotal.innerHTML-(cart[idGame].price);
            delete cart[idGame];
        }
    }

    if (e.target.classList.contains("bx-plus-circle")) {
        const idGame = +e.target.parentElement.id;
        if(cart[idGame].amount < cart[idGame].stock) {
            cart[idGame].amount++;
            cart[idGame].total += cart[idGame].price;
            cartTotal.innerHTML = +cartTotal.innerHTML+(cart[idGame].price);
            console.log(cart[idGame].price);
        }        
    }

    if (e.target.classList.contains("bx-trash")) {
        const idGame = +e.target.parentElement.id;
        cartTotal.innerHTML = +cartTotal.innerHTML-((cart[idGame].amount)*(cart[idGame].price));
        delete cart[idGame];
    }
    printCart(contentCartBody);
});

const button = document.querySelector("#button_total");

button.addEventListener("click", checkout);

function checkout(){
    
}



printDestacados(contentDestacados, juegos);
printRecent(contentRecent, juegos);
printPopular(contentPopular, juegos);

