// Variables
let slides = document.getElementsByClassName("mySlides");
let cursor = document.getElementsByClassName("cursor");
let slideIndex = 1;
let isPlay = false;

// Show slide
showSlides(); 

// Auto run slide
let runSlide = setInterval(function() {
	if (isPlay) {
		showSlides(slideIndex += 1);
	} else {
		clearInterval(runSlide);
	}
}, 3000);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

// Main function: show slides
function showSlides(n) {
	isPlay = true;
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		cursor[i].classList.remove("active"); 
	}
	slides[slideIndex - 1].style.display = "block";
	cursor[slideIndex - 1].classList.add("active");
}
