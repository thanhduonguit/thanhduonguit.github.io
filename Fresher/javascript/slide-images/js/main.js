// Variables
let slides = document.getElementsByClassName("mySlides");
let cursor = document.getElementsByClassName("cursor");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slideIndex = 1;
let isPlay = false;

// Show slide
showSlides(); 

next.addEventListener("click", function(){
	showSlides(slideIndex += 1);
});

prev.addEventListener("click", function(){
	showSlides(slideIndex -= 1);
});

// Auto run slide
let runSlide = setInterval(function() {
	if (isPlay) {
		showSlides(slideIndex += 1);
	} else {
		clearInterval(runSlide);
	}
}, 3000);

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
	for(var i = 0; i < cursor.length; i++) {
		(function(index) {
			cursor[index].addEventListener("click", function() {
				showSlides(slideIndex = (index + 1));
		   	});
		})(i);
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active"); 
		cursor[i].classList.remove("active"); 
	}
	slides[slideIndex - 1].classList.add("active");
	cursor[slideIndex - 1].classList.add("active");
}
