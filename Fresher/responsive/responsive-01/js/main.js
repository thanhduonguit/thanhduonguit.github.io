$(document).ready(function() {
    $("#play-video").click(function() {
        if ($(window).innerWidth() <= 578) {
            $.colorbox({ href: 'https://www.youtube.com/embed/LzwGi3G7-4Y', width: '95%', height: '330', iframe: true });
        } else if ($(window).innerWidth() <= 768) {
            $.colorbox({ href: 'https://www.youtube.com/embed/LzwGi3G7-4Y', width: '95%', height: '430', iframe: true });
        } else if ($(window).innerWidth() <= 992) {
            $.colorbox({ href: 'https://www.youtube.com/embed/LzwGi3G7-4Y', width: '95%', height: '470', iframe: true });
        } else if ($(window).innerWidth() <= 1300) {
            $.colorbox({ href: 'https://www.youtube.com/embed/LzwGi3G7-4Y', width: '95%', height: '600', iframe: true });
        } else if ($(window).innerWidth() <= 1500) {
            $.colorbox({ href: 'https://www.youtube.com/embed/LzwGi3G7-4Y', width: '95%', height: '700', iframe: true });
        } else {
            $.colorbox({ href: 'https://www.youtube.com/embed/LzwGi3G7-4Y', width: '95%', height: '95%', iframe: true });
        } 
    })
})