var swiper = new Swiper(".sswiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        510: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 40,
            }
        },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
        },
    loop: true,
    });

var swiper1 = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        570: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
        }
    });

export {swiper, swiper1};