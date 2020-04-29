$(document).ready(function() {

    // Handle click active menu
    $('ul.js-nav li').click(function(){
		$('ul.js-nav li').removeClass('active');
        $(this).addClass('active');
    });

    // Handle click scroll to table content
    $('.section-01').click(function(){
        $('html, body').animate({
            scrollTop: $("#table-01").offset().top - 132
        }, 600);
    });
    $('.section-02').click(function(){
        $('html, body').animate({
            scrollTop: $("#table-02").offset().top - 132
        }, 600);
    });
    $('.section-03').click(function(){
        $('html, body').animate({
            scrollTop: $("#table-03").offset().top - 132
        }, 600);
    });

    // Handle croll fixed table
    $(window).scroll(function(){
        var height01 = $("#section-01").height();
        var height02 = $("#section-02").height();
        var timer = false;
        var thisPosition = 0;
        
        if (timer !== false) {
            clearTimeout(timer);
        }

        timer = setTimeout(function() {
            thisPosition = $(window).scrollTop();
            if (thisPosition < height01) {
                $("#section-01").addClass('active');
                $("#section-02").removeClass('active');
                $("#section-03").removeClass('active');
            } else if (height01 <= thisPosition < (height01 + height02)) {
                $("#section-02").addClass('active');
                $("#section-01").removeClass('active');
                $("#section-03").removeClass('active');
            } 
            if (thisPosition >= (height01 + height02)) {
                $("#section-03").addClass('active');
                $("#section-01").removeClass('active');
                $("#section-02").removeClass('active');
            }
        });
    });
});
