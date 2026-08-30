window.addEventListener("DOMContentLoaded", (event) => {
   
   // custom button
	let customPrevBtn = document.querySelector('#custom-btn-previous a');
	let customNextBtn = document.querySelector('#custom-btn-next a');
			
	// di contoh ini widget post diberikan ID -> carousel-post

	const triggerSliderButton = (selector) => {
		const sliderButton = document.querySelector(selector);
		if (sliderButton) {
			sliderButton.click();
		}
	};

	if (customPrevBtn) {
		customPrevBtn.addEventListener('click', function(e) {
			e.preventDefault();
			// actual previous button from widget -> UAE using slickjs
			triggerSliderButton('#carousel-post .slick-prev');
		});
	}

	if (customNextBtn) {
		customNextBtn.addEventListener('click', function(e) {
			e.preventDefault();
			// actual next button from widget -> UAE using slickjs
			triggerSliderButton('#carousel-post .slick-next');
		});
	}
});
