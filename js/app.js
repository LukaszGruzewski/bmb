$(function() {
  var nextBtn = $('.next_btn');
  var prevBtn = $('.prev_btn');
  var allSlides = $('.slide');
  var indexSlide = 0;
  var lastIndex = allSlides.length - 1;

  $(allSlides[indexSlide]).addClass('visible');

  nextBtn.on('click', function() {
    $(allSlides[indexSlide]).removeClass('visible');
    indexSlide++;
    if (indexSlide > lastIndex) {
      indexSlide = 0;
    }
    $(allSlides[indexSlide]).addClass('visible');
  });

  prevBtn.on('click', function() {
    $(allSlides[indexSlide]).removeClass('visible');
    indexSlide--;
    if (indexSlide < 0) {
      indexSlide = lastIndex;
    }
    $(allSlides[indexSlide]).addClass('visible');
  });
});

var swiper = new Swiper('#swiper-logos', {
  slidesPerView: 4,
  slidesPerColumn: 2,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

var swiper = new Swiper('#swiper-people', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
