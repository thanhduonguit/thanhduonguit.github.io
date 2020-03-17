$(".header-menu-btn").on("click", openMenu);
$("li.nav-item.js-close-menu").on("click", closeMenu);

// Open menu
function openMenu() {
    $('ul.navbar-nav').animate({ right: 0 }, 300);
    $(this).animate({ right: -120 }, 300);
}

// Close menu
function closeMenu() {
    $('ul.navbar-nav').animate({ right: "-68%" }, 300);
    $(".header-menu-btn").animate({ right: 0 });
}

// Click run scroll top
$('.js-pageTop').on('click', function (event) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
})

TweenMax.set('.js-pageTop', { y: -50, rotation: -30, scale: 0 })
var scroll = new TimelineMax({ paused: true })
scroll.add(TweenMax.to('.js-pageTop', 0.3, { rotation: 0, scale: 1 }))
scroll.pause()
var ButtonMenu = new TimelineMax({ paused: true })
ButtonMenu.add(TweenMax.to('.header-menu-btn', 0.4, { y: -80 }))
ButtonMenu.pause()

// Scroll top and run menu
$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        ButtonMenu.play()
        scroll.play()
    } else {
        scroll.reverse()
        ButtonMenu.reverse()
    }
})
 
var textInfo = $(".info").text();
if($(".item").hasClass("group2")) {
    $(".item .info").append("<a href='#'>Read More <i class='fa fa-angle-right'></i> </a>");
}

if($(".item").hasClass("normal")) {
    $(".normal .info").text(textInfo.slice(0, 46) + "... ");
    $(".normal .info").append("<a href='#'>Read More <i class='fa fa-angle-right'></i> </a>");
}

// Resize scroll menu mobile
$(window).resize(function () {
    if($(this).width() >$(this).height()) {
        if($(this).width() <= 500) {
            $("header ul.navbar-nav").css({
                "height" : "80vh",
                "overflow-y" : "auto",
                "overflow-x" : "hidden"
            });
        }
    }
});
if($(window).innerWidth() > $(this).innerWidth()) {
    if($(window).innerWidth() <= 500) {
        $("header ul.navbar-nav").css({
            "height" : "80vh",
            "overflow-y" : "auto",
            "overflow-x" : "hidden"
        });
    }
}

