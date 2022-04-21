var swiper = new Swiper(".mySwiper", {
    autoplay: true,
    autoplayTimeOut: 1000,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    }, 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
