 // Change icon button togger
 $(".js-change").click(function() {
    (this).classList.toggle("change");
    var _menu = $(this).parent().find(".navbar-colspan");
    $(this).css({'pointer-events':'none'});
    if(_menu.hasClass("open")) {
        _menu.slideUp(400)
        setTimeout(function(){ $(".js-change").css({'pointer-events':'auto'}); }, 300);
        _menu.removeClass("open")
    }else {
        _menu.slideDown(400)
        setTimeout(function(){ $(".js-change").css({'pointer-events':'auto'}); }, 300);
        _menu.addClass("open")
    }
})


/* pageTop */
if($('html').find('.js-page-top').length == 1){
    var showHeight = 600;
    var timer = false;
    var thisPosition = 0;
    $(window).scroll(function(){
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            thisPosition = $(window).scrollTop();
            if(showHeight > thisPosition) {
                $('.js-page-top').removeClass('show');
            }else{
                $('.js-page-top').addClass('show');
            }
        });
    });
    $('.js-page-top').click(function(){
        var speed = 400;
        $('body,html').animate({scrollTop:0}, speed, 'swing');
        return false;
    });
}

$(window).resize(function(){
    if($(this).width() > 768 && $(".js-change").next().css({"display" : "none"})) {
        $(".js-change").next().css({"display" : "block"})        
    }

    if($(this).width() < 769 &&  !$(".js-change").hasClass("change")) {
        $(".js-change").next().css({"display" : "none"})  
    }
});