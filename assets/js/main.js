// Open/Close burger-menu
const burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    document.querySelector('.burger-menu').classList.toggle('open');
})



const feedbackSlider = new Swiper ('.feedbacks__slider', {
    speed: 700,
	slidesPerView: 1,
	spaceBetween: 20,
	navigation: {
		nextEl: '.feedbacks__slider-button-next',
		prevEl: '.feedbacks__slider-button-prev',
		enabled: window.innerWidth >= 768
	},
	
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    breakpoints: {
		768: {
		slidesPerView: 2,
		spaceBetween: 30,
		},
		1024: {
		slidesPerView: 3,
		spaceBetween: 40
		}
	}
});
