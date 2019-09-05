// Random int
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Add text
function addTextGameScreen(text, styleText, scalexy, x, y, parent, visibleElm) {
    let element = new Text(text, styleText);
    element.x = x;
    element.y = y;
    element.scale.x = scalexy;
    element.scale.y = scalexy;
    element.visible = visibleElm;
    parent.addChild(element);
    return element;
}

// Remove all elenments in game screen
function clear() {
    gameScene.removeChildren();
}


// Create graphic
// @param color - background color  
// @param opacity - The opacity property specifies the opacity/transparency 
// @param x - set position x
// @param y - set position y
// @param width - set width 
// @param height - set hieght
function addGraphic(color, opacity, x, y, width, height, parent = animationScene) {
    let element = new Graphics();
    element.beginFill(color, opacity);
    element.drawRect(x, y, width, height);
    element.endFill();
    parent.addChild(element);
    return element;
}

// Create text
// @param text
// @param styleText - create styles for the text
// @param scalexy - zoom element
// @param x - set position x
// @param y - set position y
// @param visibleElm - set element appear of hide
function addText(text, styleText, scalexy, x, y, parent, visibleElm) {
    let element = new Text(text, styleText);
    element.scale.x = scalexy;
    element.scale.y = scalexy;
    element.x = 120 - element.width / 2 - x;
    element.y = y;
    element.visible = visibleElm;
    parent.addChild(element);
    return element;
}

// Create image
// @param url - link for the image
// @param x - set position x
// @param y - set position y
// @param width - set width 
// @param height - set hieght
// @param visibleElm - set element appear of hide
function addImage(url, x, y, width, height, parent, visibleElm) {
    let img = new PIXI.Sprite(PIXI.loader.resources[url].texture);
    img.x = x;
    img.y = y;
    img.width = width;
    img.height = height;
    img.visible = visibleElm;
    parent.addChild(img);
    return img;
}

// Create graphic && border-radius 
// @param thickness - property specifies the width of the four borders.
// @param colorBorder - set color of border
// @param border - hidden, visible of thickness 
// @param color - background color  
// @param opacity - The opacity property specifies the opacity/transparency 
// @param x - set position x
// @param y - set position y
// @param width - set width 
// @param height - set hieght
// @param raidus - This property allows you to add rounded corners to elements!
function addFrames(thickness, colorBorder, visible, color, opacity, x, y, width, height, radius, parent) {
    let element = new Graphics();
    element.lineStyle(thickness, colorBorder, visible);
    element.beginFill(color, opacity);
    element.drawRoundedRect(x, y, width, height, radius);
    element.endFill();
    parent.addChild(element);
    return element;
}

// Create image
// @param url - link for the image
// @param x - set position x
// @param y - set position y
// @param scale - set scale x, y
// @param visibleElm - set element appear of hide
function addImageGameScreen(url, x, y, scale, parent, visibleElm) {
    let img = new PIXI.Sprite(PIXI.loader.resources[url].texture);
    img.x = x;
    img.y = y;
    img.scale.x = scale;
    img.scale.y = scale;
    img.visible = visibleElm;
    parent.addChild(img);
    return img;
}
