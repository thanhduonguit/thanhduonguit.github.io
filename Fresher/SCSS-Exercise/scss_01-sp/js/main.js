$(document).ready(function() {
    var width = $(window).width();

    if(width <= 768) {

        // add class active để thay đổi icon
        // siledown, slideup để chạy hiệu ứng menu con
        var bool = true;
        $("#collapsibleNavbar li.nav-item").click(function(e) {
            var subMenu =  $(this).children('ul.sub__menu');
            if(!$(this).hasClass("active")) {
            $(this).addClass("active").siblings().removeClass("active");
                
            }
            // subMenu.slideDown('slow');
            // if($(this).hasClass("active") && bool) {
            //     bool = false;

            // }else {

            //     bool = true;
            //     $('ul.sub__menu').slideUp('slow'); 
            //     $("li.nav-item").removeClass("active");   

            // }
        })  




    }
    
    // change svg to image
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });

    // Change icon button togger
    $("button.header__btn__2").click(function() {
        (this).classList.toggle("change");
        
        if($("button.header__btn__2").hasClass("change")) {
            $("#collapsibleNavbar").addClass("show");
        }else {
            $("#collapsibleNavbar").removeClass("show");
        }
    })

})