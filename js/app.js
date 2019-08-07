document.addEventListener('DOMContentLoaded', function() {
  var swiperPeople = new Swiper('#swiper-people', {
    slidesPerView: 1,
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

  var swiperLogos = new Swiper('#swiper-logos', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 2
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 2
      },
      540: {
        slidesPerView: 1,
        slidesPerColumn: 2
      }
    }
  });

  var swiperPoster = new Swiper('#swiper-poster', {
    slidesPerView: 'auto'
  });
});
