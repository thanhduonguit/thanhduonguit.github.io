$(".js__btn__2").on("click", clickSubMenu);
function clickSubMenu() {
    (this).classList.toggle("change");
    if ($(".js__btn__2").hasClass("change")) {
        $("#js__nav").addClass("show");
        $("#js__nav li.nav__item").click(clickLiMenu);
    } else {
        $("#js__nav").removeClass("show");
        $(".nav__item").removeClass(" active");
        $('ul.sub__menu').slideUp('slow');
        $("#js__nav li.nav__item").unbind();   
    }
}

// Click toggle submenu
function clickLiMenu() {
    var subMenu = $(this).children('ul.sub__menu');
    $('ul.sub__menu').slideUp('slow');
    if (!$(this).hasClass("active")) {
        $(this).addClass("active").siblings().removeClass("active");
        subMenu.slideDown('slow');
    } else {
        $('ul.sub__menu').slideUp('slow');
        $("li.nav__item").removeClass("active");
    }
}

// Change svg to image
jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
        var $svg = jQuery(data).find('svg');
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);
    }, 'xml');
});