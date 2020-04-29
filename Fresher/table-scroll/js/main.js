// Function click to croll table
function clickToScrollTable(tableID) {
    $('.section-0' + tableID).click(function(){
        $('html, body').animate({
            scrollTop: $("#section-0" + tableID).offset().top - 59
        }, 600);
    });
}

$(document).ready(function() {

    // Handle click active menu
    $('ul.js-nav li').click(function(){
		$('ul.js-nav li').removeClass('active');
        $(this).addClass('active');
    });

    // Handle click scroll to table content
    clickToScrollTable(1);
    clickToScrollTable(2);
    clickToScrollTable(3);

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
                $("#section-01, .section-01").addClass('active');
                $("#section-02, .section-02").removeClass('active');
                $("#section-03, .section-03").removeClass('active');
            } else if (height01 <= thisPosition < (height01 + height02)) {
                $("#section-02, .section-02").addClass('active');
                $("#section-01, .section-01").removeClass('active');
                $("#section-03, .section-03").removeClass('active');
            } 
            if (thisPosition >= (height01 + height02)) {
                $("#section-03, .section-03").addClass('active');
                $("#section-01, .section-01").removeClass('active');
                $("#section-02, .section-02").removeClass('active');
            }
        });
    });
});
