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
    // let moveCloseBg = setInterval(() => {
    //     if (closeBg.height > 220) {
    //         closeBg.height -= 2;
    //         closeBg.y += 1;
    //     } else {
    //         closeBg.visible = false;
    //         clearInterval(moveCloseBg);
    //     }
    // }, 50);

    // Zoom in animation
    setTimeout(function() {
        closeElm(closeBg1, 0.8, 1, 35, 2);
       
        let moveCloseBg2 = setInterval(() => {
            if (closeBg2.height > 2) {
                closeBg2.height -= 0.8;
                closeBg2.y += 1.5;
            } else {
                closeBg2.visible = false;
                clearInterval(moveCloseBg2);
            }
        }, 35);
        let moveCloseBg3 = setInterval(() => {
            if (closeBg3.height > 2) {
                closeBg3.height -= 0.6;
                closeBg3.y += 1.7;
            } else {
                closeBg3.visible = false;
                clearInterval(moveCloseBg3);
            }
        }, 25);
        let moveCloseBg4 = setInterval(() => {
            if (closeBg4.height > 2) {
                closeBg4.height -= 0.45;
                closeBg4.y += 1.7;
            } else {
                closeBg4.visible = false;
                clearInterval(moveCloseBg4);
            }
        }, 24);
        let moveCloseBg5 = setInterval(() => {
            if (closeBg5.height > 2) {
                closeBg5.height -= 0.45;
                closeBg5.y += 2.1;
            } else {
                closeBg5.visible = false;
                clearInterval(moveCloseBg5);
            }
        }, 25);
        let moveCloseBg6 = setInterval(() => {
            if (closeBg6.height > 2) {
                closeBg6.height -= 0.45;
                closeBg6.y += 2.62;
            } else {
                closeBg6.visible = false;
                clearInterval(moveCloseBg6);
            }
        }, 25);
        let moveCloseBg7 = setInterval(() => {
            if (closeBg7.height > 2) {
                closeBg7.height -= 0.45;
                closeBg7.y += 3.1;
            } else {
                closeBg7.visible = false;
                clearInterval(moveCloseBg7);
            }
        }, 24);
        let moveCloseBg8 = setInterval(() => {
            if (closeBg8.height > 2) {
                closeBg8.height -= 0.46;
                closeBg8.y += 3.65;
            } else {
                closeBg8.visible = false;
                clearInterval(moveCloseBg8);
            }
        }, 23);
        let moveCloseBg9 = setInterval(() => {
            if (closeBg9.height > 2) {
                closeBg9.height -= 0.46;
                closeBg9.y += 4.07;
            } else {
                closeBg9.visible = false;
                clearInterval(moveCloseBg9);
            }
        }, 23);
    }, 500);
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
    let moveOpenBg1 = setInterval(() => {
        if (openBg1.height < 24) {
            openBg1.height += 0.2;
            openBg1.y -= 2.06;
        } else {
            openBg1.visible = false;
            clearInterval(moveOpenBg1);
        }
    }, 12);
    let moveOpenBg2 = setInterval(() => {
        if (openBg2.height < 24) {
            openBg2.height += 0.2;
            openBg2.y -= 8.9;
        } else {
            openBg2.visible = false;
            clearInterval(moveOpenBg2);
        }
    }, 8);
    let moveOpenBg3 = setInterval(() => {
        if (openBg3.height < 24) {
            openBg3.height += 0.2;
            openBg3.y -= 13.7;
        } else {
            openBg3.visible = false;
            clearInterval(moveOpenBg3);
        }
    }, 8);
    let moveOpenBg4 = setInterval(() => {
        if (openBg4.height < 24) {
            openBg4.height += 0.2;
            openBg4.y -= 18.5;
        } else {
            openBg4.visible = false;
            clearInterval(moveOpenBg4);
        }
    }, 8);
    let moveOpenBg5 = setInterval(() => {
        if (openBg5.height < 24) {
            openBg5.height += 0.2;
            openBg5.y -= 23.3;
        } else {
            openBg5.visible = false;
            clearInterval(moveOpenBg5);
        }
    }, 8);
    let moveOpenBg6 = setInterval(() => {
        if (openBg6.height < 24) {
            openBg6.height += 0.2;
            openBg6.y -= 28.1;
        } else {
            openBg6.visible = false;
            clearInterval(moveOpenBg6);
        }
    }, 8);
    let moveOpenBg7 = setInterval(() => {
        if (openBg7.height < 24) {
            openBg7.height += 0.2;
            openBg7.y -= 32.9;
        } else {
            openBg7.visible = false;
            clearInterval(moveOpenBg7);
        }
    }, 8);
    let moveOpenBg8 = setInterval(() => {
        if (openBg8.height < 24) {
            openBg8.height += 0.2;
            openBg8.y -= 37.7;
        } else {
            openBg8.visible = false;
            clearInterval(moveOpenBg8);
        }
    }, 8);

    let moveOpenBg9 = setInterval(() => {
        if (openBg9.height < 24) {
            openBg9.height += 0.2;
            openBg9.y -= 42.5;
        } else {
            openBg9.visible = false;
            clearInterval(moveOpenBg9);
        }
    }, 8);
    setTimeout(function() {
        openBg = addGraphic(0x000000, 1, 0, 15, 240, 210);
        let moveOpenBg = setInterval(() => {
            if (openBg.height < 245) {
                openBg.height += 1.6;
                openBg.y -= 1;
            } else {
                openBg.visible = false;
                clearInterval(moveOpenBg);
            }
        }, 35);
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
