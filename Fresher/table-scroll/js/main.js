$(document).ready(function() {
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

    $('ul.js-nav li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.js-nav li').removeClass('active');
		$('.js-tab-content').removeClass('active');
        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    });
});
