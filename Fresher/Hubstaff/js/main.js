$(document).ready(function(){
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