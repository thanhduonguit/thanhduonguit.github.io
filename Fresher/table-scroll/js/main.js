$(document).ready(function() {

    // Handle scroll vertical of data table
    $('#example').DataTable( {
        "scrollY":        "600px",
        "scrollCollapse": true,
        "paging":         false
    });
    $('#example2').DataTable( {
        "scrollY":        "600px",
        "scrollCollapse": true,
        "paging":         false
    });

    // Handle click active menu
    $('ul.js-nav li').click(function(){
		$('ul.js-nav li').removeClass('active');
        $(this).addClass('active');
    });

    // Handle click scroll to table content
    $('.rika-tab').click(function(){
        $('html, body').animate({
            scrollTop: $("#rika-tab").offset().top
        }, 600);
    });
    $('.syakai-tab').click(function(){
        $('html, body').animate({
            scrollTop: $("#syakai-tab").offset().top
        }, 600);
    });
});
