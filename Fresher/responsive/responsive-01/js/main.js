$(document).ready(function() {
    $("#play-video").click(function() {
        if ($(window).innerWidth() <= 578) {
            $.colorbox({ href: 'https://www.youtube.com/embed/LzwGi3G7-4Y', width: '95%', height: '300', iframe: true });
        } else if ($(window).innerWidth() <= 768) {
            $.colorbox({ href: 'https://www.youtube.com/embed/LzwGi3G7-4Y', width: '95%', height: '400', iframe: true });
        } else if ($(window).innerWidth() <= 992) {
            $.colorbox({ href: 'https://www.youtube.com/embed/LzwGi3G7-4Y', width: '95%', height: '450', iframe: true });
        } else {
            $.colorbox({ href: 'https://www.youtube.com/embed/LzwGi3G7-4Y', width: '95%', height: '95%', iframe: true });
        } 
    })
})