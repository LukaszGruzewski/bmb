document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('#swiper-people', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  var swiper = new Swiper('#swiper-logos', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 2,
      },
      // 640: {
      //   slidesPerView: 2,
      //   spaceBetween: 20,
      // },
      540: {
        slidesPerView: 1,
        slidesPerColumn: 2,
      }
    }
  });

  // var swiper = new Swiper('#swiper-poster', {

  // });
});