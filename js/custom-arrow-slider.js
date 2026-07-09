window.addEventListener("DOMContentLoaded", (event) => {
	
			// custom button
			let customPrevBtn = document.querySelector('#custom-btn-previous a');
			let customNextBtn = document.querySelector('#custom-btn-next a');
			
			// di contoh ini widget post diberikan ID -> carousel-post
		
			customPrevBtn.addEventListener('click', function(e) {
					e.preventDefault();
					// actual previous button from widget -> UAE using slickjs
					document.querySelector('#carousel-post .slick-prev').click();
				});

			customNextBtn.addEventListener('click', function(e) {
				e.preventDefault();
				// actual next button from widget -> UAE using slickjs
				document.querySelector('#carousel-post .slick-next').click();
			});
	
});
