// Add game screen elements
function addGameSceneElm() {
    // Add game scene background
    gameSceneBackground = addImage("images/background.png", 0, 0, 240, 240, gameScene, true);

    // Watch
    watch = addImage("images/watch.png", 40, 8, 162, 210, gameScene, true);

    // Clockwise
    clockwise = addImage("images/clockwise.png", 120.16, 138.2, 100, 100, gameScene, true);
    clockwise.anchor.set(0.5, 0.5);
    clockwise.rotation = 0;

    // Main square
    mainsquare = addImage("images/mainsquare.png", 78, 95, 85, 85, gameScene, false);

    // Clock cover
    clockCover = addImage("images/clockCover.png", 49, 65.5, 144.8, 145, gameScene, false);
    clockCover.interactive = true;
    clockCover.buttonMode = true;

    // Number 321
    number3 = addText("3", numberStyle, 0.5, -0.5, 99.5, gameScene, false);
    number2 = addText("2", numberStyle, 0.5, -0.5, 99.5, gameScene, false);
    number1 = addText("1", numberStyle, 0.5, -0.5, 99.5, gameScene, false);

    // Number text
    numbertext = addText("始め", numbertextStyle, 0.5, -1.3, 117, gameScene, false);
}

// Render game scene
function renderGameScene() {
    // Add game screen elements
    addGameSceneElm();

    // Box game scene
    boxGameScene = addImage("images/boxGameScene.png", 10, 6, 221, 35, gameScene, false);
    boxGameScene.visible = false;

    // Random time number
    randomTime = addTextGameScreen("0.5", randomTimeStyle, 0.25, 33, 9, gameScene, false);

    // Title game scene text
    titleGameSceneText = addTextGameScreen("秒待って下さい", titleGameSceneTextStyle, 0.265, 79, 10.5, gameScene, false);
    titleGameSceneText2 = addTextGameScreen("差", titleGameSceneText2Style, 0.25, 156, 38.8, gameScene, false);
    titleGameSceneText3 = addTextGameScreen("秒まで", titleGameSceneText2Style, 0.25, 196.5, 38.8, gameScene, false);
    titleGameSceneText4 = addImage("images/titleGameSceneText4.png", 143.2, 40.8, 12, 12, gameScene, false);

    // Text answer
    textAnswer1 = addImageGameScreen("images/textAnswer1.png", 70, 11.8, 0.1175, gameScene, false);
    textAnswer2 = addImageGameScreen("images/textAnswer2.png", 71, 11.8, 0.106, gameScene, false);
    textOk = addImageGameScreen("images/textOk.png", 95, 11.5, 0.063, gameScene, false);

    // Random second
    randomSecondText = addTextGameScreen("1", randomSecondTextStyle, 0.25, 178.2, 37.4, gameScene, false);

    // Box result
    boxCaculate = addImage("images/boxCaculate.png", 70, 217, 101, 22, gameScene, false)

    // Number caculate
    numberCaculate = addTextGameScreen("+0.5", numberCaculateStyle, 0.25, 101, 216.3, gameScene, false);
    numberTime = addTextGameScreen("8.5", numberCaculateStyle, 0.25, 107, 154, gameScene, false);
}
