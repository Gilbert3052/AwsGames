import {juegos} from "./js/data.js";
import {printDestacados, printRecent, printPopular} from "./js/layout.js";
import { swiper, swiper1 } from "./js/swip.js";
import "./js/showMenu.js";
// import "./js/showCart.js";

const contentDestacados = document.querySelector(".destacado_swiper");
const contentRecent = document.querySelector(".recent_swiper");
const contentPopular = document.querySelector(".popular_swiper");

printDestacados(contentDestacados, juegos);
printRecent(contentRecent, juegos);
printPopular(contentPopular, juegos);

