var swiper =  new Swiper(".mySwiper",{
    slidesParView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevtEl: '.swiper-button-prev'
    },
    breakpoints:{
        991: {
            slidesPerView: 3
        }
    }
})