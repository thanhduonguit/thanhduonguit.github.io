// Variables
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let slideIndex = 1; 

// Show slide
showSlides(); 

// Auto run slide
setInterval(function() {
    showSlides(slideIndex += 1);
}, 4500);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		dots[i].classList.remove("active"); 
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].classList.add("active");
}
