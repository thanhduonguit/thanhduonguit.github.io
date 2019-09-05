// Close elements
function closeElm(element, y, height, time, minHeight) {
    let moveCloseElm = setInterval(() => {
        if (element.height > minHeight) {
            element.height -= height;
            element.y += y;
        } else {
            element.visible = false;
            clearInterval(moveCloseElm);
        }
    }, time);
}

// Close animation
function closeAnimation() {
    closeBg = addGraphic(0x000000, 1, 0, 0, 240, 240);
    closeBg1 = addGraphic(0x000000, 1, 0, 10, 240, 24);
    closeBg2 = addGraphic(0x000000, 1, 0, 34, 240, 24);
    closeBg3 = addGraphic(0x000000, 1, 0, 58, 240, 24);
    closeBg4 = addGraphic(0x000000, 1, 0, 82, 240, 24);
    closeBg5 = addGraphic(0x000000, 1, 0, 106, 240, 24);
    closeBg6 = addGraphic(0x000000, 1, 0, 130, 240, 24);
    closeBg7 = addGraphic(0x000000, 1, 0, 154, 240, 24);
    closeBg8 = addGraphic(0x000000, 1, 0, 178, 240, 24);
    closeBg9 = addGraphic(0x000000, 1, 0, 202, 240, 24);

    // Zoom in box animation
    closeElm(closeBg, 1, 2, 50, 220);

    // Zoom in animation
    setTimeout(function() {
        closeElm(closeBg1, 0.8, 1, 35, 2);
        closeElm(closeBg2, 1.5, 0.8, 35, 2);
        closeElm(closeBg3, 1.7, 0.6, 25, 2);
        closeElm(closeBg4, 1.7, 0.45, 24, 2);
        closeElm(closeBg5, 2.1, 0.45, 25, 2);
        closeElm(closeBg6, 2.62, 0.45, 25, 2);
        closeElm(closeBg7, 3.1, 0.45, 24, 2);
        closeElm(closeBg8, 3.65, 0.46, 23, 2);
        closeElm(closeBg9, 4.07, 0.46, 23, 2);
    }, 500);
}

// Close elements
function openElm(element, y, height, time, maxHeight) {
    let moveOpenElm = setInterval(() => {
        if (element.height < maxHeight) {
            element.height += height;
            element.y -= y;
        } else {
            element.visible = false;
            clearInterval(moveOpenElm);
        }
    }, time);
}

// Open animation
function openAnimation() {
    openBg1 = addGraphic(0x000000, 1, 0, 20, 240, 2);
    openBg2 = addGraphic(0x000000, 1, 0, 44, 240, 1);
    openBg3 = addGraphic(0x000000, 1, 0, 68, 240, 1);
    openBg4 = addGraphic(0x000000, 1, 0, 92, 240, 1);
    openBg5 = addGraphic(0x000000, 1, 0, 116, 240, 1);
    openBg6 = addGraphic(0x000000, 1, 0, 140, 240, 1);
    openBg7 = addGraphic(0x000000, 1, 0, 164, 240, 1);
    openBg8 = addGraphic(0x000000, 1, 0, 188, 240, 1);
    openBg9 = addGraphic(0x000000, 1, 0, 212, 240, 1);

    // Zoom out elements
    openElm(openBg1, 2.06, 0.2, 12, 24);
    openElm(openBg2, 8.9, 0.2, 8, 24);
    openElm(openBg3, 13.7, 0.2, 8, 24);
    openElm(openBg4, 18.5, 0.2, 8, 24);
    openElm(openBg5, 23.3, 0.2, 8, 24);
    openElm(openBg6, 28.1, 0.2, 8, 24);
    openElm(openBg7, 32.9, 0.2, 8, 24);
    openElm(openBg8, 37.7, 0.2, 8, 24);
    openElm(openBg9, 42.5, 0.2, 8, 24);
    setTimeout(function() {
        openBg = addGraphic(0x000000, 1, 0, 15, 240, 210);
        openElm(openBg, 1, 1.6, 35, 245);
    }, 900);
}

// Fade animation
function fadeAnimation(sprite, delta) {
    sprite.alpha += fadeSpeed * delta;
    if (sprite.alpha >= 1.4) {
        sprite.alpha = 1;
        fadeSpeed *= -1;
    }
    if (sprite.alpha <= -0.4) {
        sprite.alpha = 0;
        fadeSpeed *= -1;
    }
}
