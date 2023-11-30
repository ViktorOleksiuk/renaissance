const swiper = new Swiper('.image-slider', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    //centeredSlides: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    // autoHeight: true,

    slidesPerView: 4,

    spaceBetween: 4,

    initialSlide: 0,
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // speed: 800,

    // effect: 'coverflow',

    // coverflowEffect: {
    //     rotate: 20,
    //     stretch: 50,
    //     slideShadows: true,
    // }

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },

        480: {
            slidesPerView: 2,
        },

        992: {
            slidesPerView: 4,
        },
    },

    focusableElements: 'select',

    grabCursor: true,

  });



//   gfdhdhfgh

const swiper1 = new Swiper('.image-slider1', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    //centeredSlides: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    // autoHeight: true,

    slidesPerView: 4,

    spaceBetween: 4,

    initialSlide: 4,
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // speed: 800,

    // effect: 'coverflow',

    // coverflowEffect: {
    //     rotate: 20,
    //     stretch: 50,
    //     slideShadows: true,
    // }

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },

        480: {
            slidesPerView: 2,
        },

        992: {
            slidesPerView: 4,
        },
    },

    focusableElements: 'select',

    grabCursor: true,

  });