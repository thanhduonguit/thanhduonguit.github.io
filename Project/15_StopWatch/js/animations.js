// Open element
function openElm(element) {
    let moveOpenBg = function() {
        if (element.graphicsData[0].shape.height < 30) {
            element.graphicsData[0].shape.height += 0.5;
            element.y -= 0.25;
        } else {
            element.visible = false;
            app.ticker.remove(moveOpenBg);
        }
    };
    app.ticker.add(moveOpenBg);
}
// Open animation
function openAnimation() {
    // Add open element
    openBg1 = addGraphic(0x000000, 1, 0, 24, 240, 0);
    openBg2 = addGraphic(0x000000, 1, 0, 48, 240, 0);
    openBg3 = addGraphic(0x000000, 1, 0, 72, 240, 0);
    openBg4 = addGraphic(0x000000, 1, 0, 96, 240, 0);
    openBg5 = addGraphic(0x000000, 1, 0, 120, 240, 0);
    openBg6 = addGraphic(0x000000, 1, 0, 144, 240, 0);
    openBg7 = addGraphic(0x000000, 1, 0, 168, 240, 0);
    openBg8 = addGraphic(0x000000, 1, 0, 192, 240, 0);
    openBg9 = addGraphic(0x000000, 1, 0, 216, 240, 0);

    // Zoom out element
    openElm(openBg1);
    openElm(openBg2);
    openElm(openBg3);
    openElm(openBg4);
    openElm(openBg5);
    openElm(openBg6);
    openElm(openBg7);
    openElm(openBg8);
    openElm(openBg9);
    setTimeout(function() {
        openBg = addGraphic(0x000000, 1, 0, 11, 240, 218);
        let moveOpenBg = function() {
            if (openBg.graphicsData[0].shape.height < 250) {
                openBg.graphicsData[0].shape.height += 0.6;
                openBg.y -= 0.3;
            } else {
                openBg.visible = false;
                app.ticker.remove(moveOpenBg);
            }
        };
        app.ticker.add(moveOpenBg);
    }, 880);
}

// Close element
function closeElm(element) {
    let moveCloseBg = function() {
        if (element.graphicsData[0].shape.height > 1) {
            element.graphicsData[0].shape.height -= 0.36;
            element.y += 0.18;
        } else {
            element.visible = false;
            app.ticker.remove(moveCloseBg);
        }
    };
    app.ticker.add(moveCloseBg);
}

// Close animation
function closeAnimation() {
    // Add close element
    closeBg = addGraphic(0x000000, 1, 0, 0, 240, 240);
    closeBg1 = addGraphic(0x000000, 1, 0, 10, 240, 28);
    closeBg2 = addGraphic(0x000000, 1, 0, 34, 240, 28);
    closeBg3 = addGraphic(0x000000, 1, 0, 58, 240, 28);
    closeBg4 = addGraphic(0x000000, 1, 0, 82, 240, 28);
    closeBg5 = addGraphic(0x000000, 1, 0, 106, 240, 28);
    closeBg6 = addGraphic(0x000000, 1, 0, 130, 240, 28);
    closeBg7 = addGraphic(0x000000, 1, 0, 154, 240, 28);
    closeBg8 = addGraphic(0x000000, 1, 0, 178, 240, 28);
    closeBg9 = addGraphic(0x000000, 1, 0, 200, 240, 28);

    // Zoom in element
    let moveCloseBg = function() {
        if (closeBg.graphicsData[0].shape.height > 210) {
            closeBg.graphicsData[0].shape.height -= 0.6;
            closeBg.y += 0.3;
        } else {
            closeBg.visible = false;
            app.ticker.remove(moveCloseBg);
        }
    };
    app.ticker.add(moveCloseBg);
    setTimeout(function() {
        closeElm(closeBg1);
        closeElm(closeBg2); 
        closeElm(closeBg3); 
        closeElm(closeBg4); 
        closeElm(closeBg5); 
        closeElm(closeBg6); 
        closeElm(closeBg7); 
        closeElm(closeBg8); 
        closeElm(closeBg9); 
    }, 490);
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
