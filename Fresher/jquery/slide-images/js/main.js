// Variables
let slides = $(".mySlides");
let cursor = $(".cursor");
let prev = $("#prev");
let next = $("#next");
let slideIndex = 1;
let flag = 0;
let timeout, timer;

// Run active image 
showSlides();

// Loop image
function loop () {
	showSlides(slideIndex += 1);
}
timer = setInterval(loop, 3000);

// Click next image
next.click(function() {
	if(flag == 0) {
		clearInterval(timer);
		showSlides(slideIndex += 1);
		flag = 1;
		timeOut = setTimeout(function() {
			flag = 0;
			timer = setInterval(loop, 3000);
		}, 3000);
	}
});

// Click prev image
prev.click(function() {
	if(flag == 0) {
		clearInterval(timer);
		showSlides(slideIndex -= 1);
		flag = 1;
		timeOut = setTimeout(function() {
			flag = 0;
			timer = setInterval(loop, 3000);
		}, 3000);
	}
});

// Event click for dot button
cursor.click(function(){
	index = cursor.index(this) + 1;
	slideIndex = index;
	if(flag == 0) {
		clearInterval(timer);
		showSlides(slideIndex = index);
		flag = 1;
		timeOut = setTimeout(function() {
			flag = 0;
			timer = setInterval(loop, 3000);
		}, 3000);
	}
});

// Set acive image
function showSlides(n) {
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (var i = 0; i < slides.length; i++) {
		slides.eq(i).hide();
	}

	for (i = 0; i < cursor.length; i++) {
		cursor[i].className = cursor[i].className.replace(" active", "");
	}
	slides.eq(slideIndex - 1).show();
	cursor.eq(slideIndex - 1).addClass("active").siblings().removeClass("active");
}