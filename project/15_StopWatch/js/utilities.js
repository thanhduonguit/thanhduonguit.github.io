// Random int
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Add result frames
function addResultFrames(thickness, colorBorder, visible, color, opacity, x, y, width, height, radius, parent = resultScene) {
    let element = new Graphics();
    element.lineStyle(thickness, colorBorder, visible);
    element.beginFill(color, opacity);
    element.drawRoundedRect(x, y, width, height, radius);
    element.endFill();
    parent.addChild(element);
    return element;
}

// Shuffle list
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = randomInt(0, array.length - 1);
        [array[i], array[j]] = [array[j], array[i]];
    };
}

// Rotate random the image
function randomRadiant(degree, times) {
    let radiant = (degree * 3.14159) / 180;
    return radiant * randomInt(0, times);
}

// Clear
function clear() {
    gameScene.removeChildren();
}

// Add Graphic
function addGraphic(color, opacity, x, y, width, height, parent = animationScene) {
    let element = new Graphics();
    element.beginFill(color, opacity);
    element.drawRect(x, y, width, height);
    element.endFill();
    parent.addChild(element);
    return element;
}
