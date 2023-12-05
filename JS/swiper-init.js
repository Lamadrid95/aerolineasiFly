// @ts-nocheck
// swiper-init.js

var swiper = new Swiper('.bg-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If you need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});