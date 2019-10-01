let buttons = $('.js-btn-text');
let contents = $('.js-place-container-images');
let buttonMore = $('.js-btn-more');

buttons.click(function() {
    show(($(this).attr("id")));
    if($(this).attr("id") == "all") {
        $(buttonMore[0]).removeClass('hide');
    }else {
        buttonMore[0].className += ' hide';
    }
})

function show(id) {
    for (let i = 0; i < buttons.length; i++) {
        $(buttons[i]).removeClass('btn-text-active');
        $(contents[i]).removeClass('active');
    }
    $('#' + id).addClass('btn-text-active');
    $('#place_' + id).addClass('active');
}

show('all');