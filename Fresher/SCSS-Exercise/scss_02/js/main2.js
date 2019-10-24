$(".js__section__title").click(function() {
    if (!$(this).hasClass("active")) {
        $(this).addClass("active").siblings().removeClass("active");
        $(this).next().css("display", "none");
    } else {
        $(this).removeClass("active");
        $(this).next().css("display", "flex");
    }
    (this).classList.toggle("change__2");
});