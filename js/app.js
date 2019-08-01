document.addEventListener('DOMContentLoaded', function() {
	var swiper = new Swiper('#swiper-people', {
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	clickable: true
		// }
	});

	var swiper = new Swiper('#swiper-logos', {
		slidesPerView: 4,
		slidesPerColumn: 2,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});
});
