var setColumnHeight = function () {
    var width = window.innerWidth; // document.body.clientWidth;
    var items = document.getElementById('items');

    if (width < 668) {
        items.setAttribute('style', 'height: auto;');
    } else if (width < 1025) {
        // Set this according to the desired display for 2 columns
        items.setAttribute('style', 'height: ' + 800 + 'px;');
    } else {
        // Set this according to the desired display for 3 columns
        items.setAttribute('style', 'height: ' + 600 + 'px;');
    }
};

window.addEventListener("load", setColumnHeight);
window.addEventListener("resize", setColumnHeight);