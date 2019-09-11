// Aliases
const Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle,
    Texture = PIXI.Texture,
    TextMetrics = PIXI.TextMetrics,
    BitmapText = PIXI.extras.BitmapText;

// Width && height
const logicalWidth = 240;
const logicalHeight = 240;

// Responsive 
function resizeHandler() {
    const w = Math.max(window.innerWidth, document.documentElement.clientWidth);
    const h = Math.max(window.innerHeight, document.documentElement.clientHeight);
    const scaleFactor = Math.min(
        w / logicalWidth,
        h / logicalHeight
    );
    const newWidth = Math.ceil(logicalWidth * scaleFactor);
    const newHeight = Math.ceil(logicalHeight * scaleFactor);
    app.renderer.resize(newWidth, newHeight);
    app.stage.scale.set(scaleFactor);
}

// Create pixi application
let app = new Application({
    backgroundColor: 0xffffff,
    width: logicalWidth,
    height: logicalHeight,
    antialiasing: false, 
    transparent: true, 
    resolution: window.devicePixelRatio || 1,
    autoResize: true
});

// Create container
let introScene = new Container(),
    tutorialScene = new Container(),
    gameScene = new Container(),
    resultScene = new Container(),
    animationScene = new Container();

// Add container
document.body.appendChild(app.view);
app.stage.addChild(introScene, tutorialScene);
app.stage.addChild(gameScene, resultScene);
app.stage.addChild(animationScene);

// Load Images
loader
    .add([
        "images/titleGameSceneText4.png",
        "images/textOk.png",
        "images/textAnswer1.png",
        "images/textAnswer2.png",
        "images/boxCaculate.png",
        "images/boxGameScene.png",
        "images/englishText.png",
        "images/background.png",
        "images/defaultBg.png",
        "images/watch.png",
        "images/clockwise.png",
        "images/clockCover.png",
        "images/mainsquare.png",
        "images/defaultBtn.png"
    ])
    .load(setup);

// Game Setup
function setup(loader, res) {
    // Resize
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    // Render all screen
    renderIntroduceScene();
    renderTutorialScene();
    renderGameScene();
    renderResultScene();

    // Show and hide sprites
    showAndHideSprites();

    // Listen to event
    listenToEvent();

    // Check answer
    checkAnswer();
    
    // Game loop
    state = gameLoop;
    app.ticker.add(delta => {
        state(delta);
    });
}

// Game Loop
function gameLoop(delta) {
    if (introBtn.visible) {
        fadeAnimation(introBtn, delta);
    }
    if (startGameBtn.visible && tutorialScene.visible) {
        fadeAnimation(startGameBtn, delta);
    }
    if (resetBtn.visible && resultScene.visible) {
        fadeAnimation(resetBtn, delta);
    }
}
