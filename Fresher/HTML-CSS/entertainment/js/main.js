const showPanel = document.getElementsByClassName('show-panel');

// Show panel
for (let i = 0; i < showPanel.length; i++) {
    showPanel[i].onclick = function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = 10 + panel.scrollHeight + "px";
        } 
    };
}

// Back to top
function backToTop() {
    // For Chrome, Safari and Opera 
    document.body.scrollTop = 0;
    // For IE and Firefox
    document.documentElement.scrollTop = 0;
}
