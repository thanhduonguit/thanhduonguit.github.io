$(document).ready(function(){
    // Handle click to toggle main menu
    $(".js__menu__btn").click(function () {
        $(".js__menu__btn").toggleClass("show__menu");
        $(".navbar-collapse").toggleClass("show__menu");
    });


    $(".hs-navbar-dropdown").click(function () {
        // $(this).find(".dropdown-menu").removeClass("active");
        $(".dropdown-menu").toggleClass("active");
    });

	$('ul.js-nav-tab li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.js-nav-tab li').removeClass('active');
		$('.js-tab-content').removeClass('active');
        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
        
        $('.js-tab-content').removeClass('in');
        $("#"+tab_id).addClass('in');
    });
    
    $('.js-testimonials-panel').click(function(){
		$('.js-testimonials-panel').removeClass('active-2');
        $(this).addClass('active-2');
	});
});