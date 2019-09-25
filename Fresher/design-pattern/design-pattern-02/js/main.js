var slide = (function() {
	// Variables
	var privateSlideWidth = $(".js-container").width();
	var privateSlideContaint = $(".js-slideshow");
	var privateSlides = $(".js-slideshow").children();
	var privateCursor = $(".js-thumbnail").children();
	var slideIndex = 0; 
	var privateInterval;
	
	/*----------  Private function  ----------*/
	// Function prev button
	function privatePreviewSlide() {
		slideIndex--;
		if (slideIndex < 0) {
			slideIndex = privateSlides.length - 1;
			privateSlideContaint.animate({left: '-='+ (privateSlideWidth * privateSlides.length - privateSlideWidth)}, 500);
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
			privateSlideContaint.animate({left: '+='+ (privateSlideWidth * privateSlides.length - privateSlideWidth)}, 500);
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
		privateInterval = setInterval(privateNextSlide, 3000);
	}

	function publicPreviewSlide() {
		clearInterval(privateInterval);
		privatePreviewSlide();
		privateInterval = setInterval(privateNextSlide, 3000);
	}

	function publicNextSlide() {
		clearInterval(privateInterval);
		privateNextSlide();
		privateInterval = setInterval(privateNextSlide, 3000);
	}

	function publicClickThumbnail(index) {
		clearInterval(privateInterval);
		privateClickThumbnail(index);
		privateInterval = setInterval(privateNextSlide, 3000);
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
	$(".js-thumbnail li").click(function() {
		index = $(".js-thumbnail li").index(this) + 1;
		slide.thumbnails(index);
	});
});
