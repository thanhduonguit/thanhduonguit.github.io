// Pic left animation
TweenMax.from(".js__animate--1", 1.6, { x: -800, delay: 0.5}, 3);

// Pic right animation
TweenMax.from(".js__animate--2", 1, {opacity: 0, rotation: 50, x: 100, delay: 1.8});

// Click button menu to open & close menu
$(".js__menu__btn").on("click", openMenu);
$("li.nav__item.js__close").on("click", closeMenu);

$(function() {
    var topBtn = $('#page__top');  
    var scroll2 = new TimelineMax({ paused: true })
    topBtn.hide();
    
    // Set page-top button animation
    TweenMax.set('#page__top', { y: -50, rotation: -30, scale: 0 })
    scroll2.add(TweenMax.to('#page__top', 0.5, { rotation: 0, scale: 1 }))
    scroll2.pause();

    // Show button page-top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
            scroll2.play()
        } else {
            topBtn.fadeOut();
            scroll2.reverse()
        }
    });

    // Click to back to top
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    }); 
});

// Open menu
function openMenu() {
    $('ul.js__nav__menu').animate({ right: 0 }, 300);
    $(this).animate({ right: -120 }, 300);
}

// Close menu
function closeMenu() {
    $('ul.js__nav__menu').animate({ right: "-68%" }, 300);
    $(".js__menu__btn").animate({ right: 0 });
}

// Hover run animation change text
var box = $("ul.content__img li.box__img");
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseenter', function (e) {
        TweenMax.to(e.target.querySelector('img'), 0.25, { scale: 1.1 });
        TweenMax.to(e.target.querySelector('li.info__img a p'), 0.5, {opacity: 1, scale: 1 });
        TweenMax.to(e.target.querySelector('li.info__img a'), 0.5, { backgroundColor: 'rgba(0,0,0,0.5)' });
    });

    // When mouse leave
    box[i].addEventListener('mouseleave', function (e) {
        TweenMax.to(e.target.querySelector('img'), 0.35, { scale: 1 });
        TweenMax.to(e.target.querySelector('li.info__img a p'), 0.5,{ opacity: 0, scale: 0, });
        TweenMax.to(e.target.querySelector('li.info__img a'), 0.5, { backgroundColor: 'rgba(0,0,0,0)' });
    });
}