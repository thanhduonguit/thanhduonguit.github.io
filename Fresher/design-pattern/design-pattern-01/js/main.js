var slide = (function() {
	// Variables
	var privateSlideWidth = $(".main-container").width();
	var privateSlideContaint = $(".slideshow-container");
	var privateSlides = $(".mySlides");
	var privateCursor = $(".thumbnail").children();
	var slideIndex = 0; 
	var privateInterval;
	
	/*----------  Private function  ----------*/
	// Function for auto slide
	function privateAutoSlide() {
		privateInterval = setInterval(privateNextSlide, 3000);
	}

	// Function pause slide
	function privatePauseSlide() {
		clearInterval(privateInterval);
	}

	// Function prev button
	function privatePreviewSlide() {
		slideIndex--;
		if (slideIndex < 0) {
			slideIndex = privateSlides.length - 2;
			privateSlideContaint.animate({left: '-='+ (privateSlideWidth*privateSlides.length-privateSlideWidth)}, 500);
		} else {
			privateSlideContaint.animate({left: '+='+ privateSlideWidth}, 500);
		}
		privateCursor.eq(slideIndex).addClass("active").siblings().removeClass("active");
	}

	// Function for next button
	function privateNextSlide() {
		slideIndex++;
		if (slideIndex > privateSlides.length - 1) {
			slideIndex = 0;
			privateSlideContaint.animate({left: '+='+ (privateSlideWidth*privateSlides.length-privateSlideWidth)}, 500);
		} else {
			privateSlideContaint.animate({left: '-='+ privateSlideWidth}, 500);
		}
		privateCursor.eq(slideIndex).addClass("active").siblings().removeClass("active");
	}

	// Function for click thumbnail
	function privateClickThumbnail(index) {
		privateSlideContaint.animate({left: '+='+ privateSlideWidth * (slideIndex - index + 1)}, 500);
		slideIndex = index -1;
		privateCursor.eq(slideIndex).addClass("active").siblings().removeClass("active");
	}
	/*----------  End Private function ----------*/

	/*----------  Public function  ----------*/
	function publicAutoSlide() {
		privateAutoSlide();
	}

	function publicPreviewSlide() {
		privatePauseSlide();
		privatePreviewSlide();
		privateAutoSlide();
	}

	function publicNextSlide() {
		privatePauseSlide();
		privateNextSlide();
		privateAutoSlide();
	}

	function publicClickThumbnail(index) {
		privatePauseSlide();
		privateClickThumbnail(index);
		privateAutoSlide();
	}
	/*----------  End Public function  ----------*/
	
	return {
		auto: publicAutoSlide,
		prev: publicPreviewSlide,
		next: publicNextSlide,
		thumbnails: publicClickThumbnail
	};
})();

$(document).ready(function() {
	slide.auto();
	
	// Event click for prev button
	$(".prev").click(function() {
		slide.prev();
	});

	// Event click for next button
	$(".next").click(function() {
		slide.next();
	});

	// Event click for thumbnail
	$(".cursor").click(function() {
		index = $(".cursor").index(this) + 1;
		slide.thumbnails(index);
	});
});
