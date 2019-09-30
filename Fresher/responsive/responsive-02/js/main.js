let buttons = $('.btn-text');
let contents = $('.place-container-images');
let buttonMore = $('.btn-more');
let showAll = $('#all');
let showHokkaido = $('#hokkaido');
let showTohoku = $('#tohoku');
let showKanto = $('#kanto');
let showTokai = $('#tokai');
let showWest = $('#west');

showAll.click(function() {
    show('all');
    $(buttonMore[0]).removeClass('hide');
});

showHokkaido.click(function() {
    show('hokkaido');
    hideButtonMore();
});

showTohoku.click(function() {
    show('tohoku');
    hideButtonMore();
});

showKanto.click(function() {
    show('kanto');
    hideButtonMore();
});

showTokai.click(function() {
    show('tokai');
    hideButtonMore();
});

showWest.click(function() {
    show('west');
    hideButtonMore();
});

function show(id) {
    for (let i = 0; i < buttons.length; i++) {
        $(buttons[i]).removeClass('btn-text-active');
        $(contents[i]).removeClass('active');
    }
    $('#' + id).addClass('btn-text-active');
    $('#place_' + id).addClass('active');
}

function hideButtonMore() {
    buttonMore[0].className += ' hide';
}

show('all');