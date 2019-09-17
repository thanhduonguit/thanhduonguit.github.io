var open = document.getElementsByClassName("open-inner");
var i;

for (i = 0; i < open.length; i++) {
    open[i].onclick = function() {
    this.classList.toggle("active");
    var inner = this.nextElementSibling;
    if (inner.style.maxHeight){
        inner.style.maxHeight = null;
        inner.style.overflow  = "hidden";
    } else {
        inner.style.maxHeight = 10 + inner.scrollHeight + "px";
        inner.style.overflow  = "visible";
    }           
    }
}

function topFunction() {
    $("html, body").animate({scrollTop: 0}, 400);
}