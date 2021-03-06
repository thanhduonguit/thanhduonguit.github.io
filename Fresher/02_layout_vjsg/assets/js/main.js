// Open menu
function openMenu() {
    $('.js-navbar-nav').animate({ right: 0 }, 300);
    $(this).animate({ right: -120 }, 300);
}

// Close menu
function closeMenu() {
    $('.js-navbar-nav').animate({ right: "-68%" }, 300);
    $(".js-header-menu-btn").animate({ right: 0 });
}

$(document).ready(function(){
    // Handle toggle main menu
    $(".js-header-menu-btn").on("click", openMenu);
    $(".js-close-menu").on("click", closeMenu);
    
    // Click run scroll top
    $('.js-pageTop').on('click', function (event) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })

    // Create animation with button page-top and button menu
    TweenMax.set('.js-pageTop', { y: -50, rotation: -30, scale: 0 })
    var scroll = new TimelineMax({ paused: true })
    scroll.add(TweenMax.to('.js-pageTop', 0.3, { rotation: 0, scale: 1 }))
    scroll.pause()
    var ButtonMenu = new TimelineMax({ paused: true })
    ButtonMenu.add(TweenMax.to('.js-header-menu-btn', 0.4, { y: -80 }))
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
    
    // Resize scroll menu mobile
    $(window).resize(function () {
        if($(this).width() >$(this).height()) {
            if($(this).width() <= 500) {
                $("header ul.js-navbar-nav").css({
                    // "height" : "80vh",
                    "overflow-y" : "auto",
                    "overflow-x" : "hidden"
                });
            }
        }
    });
    if($(window).innerWidth() > $(this).innerWidth()) {
        if($(window).innerWidth() <= 500) {
            $("header ul.js-navbar-nav").css({
                // "height" : "80vh",
                "overflow-y" : "auto",
                "overflow-x" : "hidden"
            });
        }
    }
    
    // Create pic animation with TweenMax
    TweenMax.from(".js__img__animate--1", 1.5, {opacity: 0, rotation: -50, x: -700, delay: 1.8});
    TweenMax.from(".js__img__animate--2", 1.5, {opacity: 0, rotation: -50, x: -700, delay: 2.2});
    TweenMax.from(".js__img__animate--3", 1.5, {opacity: 0, rotation: -50, x: -700, delay: 2.6});
    TweenMax.from(".js__img__animate--4", 1.5, {opacity: 0, rotation: -50, x: -700, delay: 3});
    TweenMax.from(".js__img__animate--5", 1.8, { x: 800, delay: 2}, 3);
    TweenMax.from(".js__img__animate--6", 1.8, { x: -800, delay: 1.5}, 3);
    TweenMax.from(".js__img__animate--7", 1.8, { x: 800, delay: 2}, 3);
    TweenMax.from(".js__img__animate--8", 1.5, {opacity: 0, rotation: -50, x: 700, delay: 1.8});
});