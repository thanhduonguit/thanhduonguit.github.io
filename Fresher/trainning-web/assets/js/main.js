 // Change icon button togger
 $(".js-change-menu").click(function() {
    (this).classList.toggle("change");
    var _menu = $(this).parent().find(".navbar-colspan");
    $(this).css({'pointer-events':'none'});
    if(_menu.hasClass("open")) {
        _menu.slideUp(400)
        setTimeout(function(){ $(".js-change-menu").css({'pointer-events':'auto'}); }, 300);
        _menu.removeClass("open")
    }else {
        _menu.slideDown(400)
        setTimeout(function(){ $(".js-change-menu").css({'pointer-events':'auto'}); }, 300);
        _menu.addClass("open")
    }
})

/* Handle page back to top */
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

/* Handle toggle menu with layout sp */
$(window).resize(function(){
    if($(this).width() > 768 && $(".js-change-menu").next().css({"display" : "none"})) {
        $(".js-change-menu").next().css({"display" : "block"})        
    }

    if($(this).width() < 769 &&  !$(".js-change-menu").hasClass("change")) {
        $(".js-change-menu").next().css({"display" : "none"})  
    }
});