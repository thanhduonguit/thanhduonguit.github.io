// Add game screen elements
function addGameSceneElm() {
    // Add game scene background
    gameSceneBackground = new PIXI.Sprite(PIXI.loader.resources["images/background.png"].texture);
    gameSceneBackground.width = 240;
    gameSceneBackground.height = 240;
    gameScene.addChild(gameSceneBackground);

    // Watch
    watch = new PIXI.Sprite(PIXI.loader.resources["images/watch.png"].texture);
    watch.width = 162;
    watch.height = 210;
    watch.x = 40;
    watch.y = 8;
    gameScene.addChild(watch);

    // Clockwise
    clockwise = new PIXI.Sprite(PIXI.loader.resources["images/clockwise.png"].texture);
    clockwise.width = 100;
    clockwise.height = 100;
    clockwise.x = 120.16;
    clockwise.y = 138.2;
    clockwise.anchor.set(0.5, 0.5);
    clockwise.rotation = 0;
    gameScene.addChild(clockwise);

    // Main square
    mainsquare = new PIXI.Sprite(PIXI.loader.resources["images/mainsquare.png"].texture);
    mainsquare.width = 85;
    mainsquare.height = 85;
    mainsquare.x = 78;
    mainsquare.y = 95;
    mainsquare.visible = false;
    gameScene.addChild(mainsquare);

    // Clock cover
    clockCover = new PIXI.Sprite(PIXI.loader.resources["images/clockCover.png"].texture);
    clockCover.width = 144.8;
    clockCover.height = 145;
    clockCover.x = 49;
    clockCover.y = 65.5;
    clockCover.interactive = true;
    clockCover.buttonMode = true;
    clockCover.visible = false;
    gameScene.addChild(clockCover);

    // Box game scene
    boxGameScene3 = addGameSceneFrames(0, 0x000000, 0.3, 0x000000, 0.3, 0, 0, 220, 23, 4);
    boxGameScene3.x = 15;
    boxGameScene3.y = 17.5;
    boxGameScene3.visible = false;

    // Number 3
    number3 = new Text("3", numberStyle);
    number3.x = 102;
    number3.y = 99.5;
    number3.scale.x = 0.5;
    number3.scale.y = 0.5;
    number3.visible = false;
    gameScene.addChild(number3);

    // Number 2
    number2 = new Text("2", numberStyle);
    number2.x = 102;
    number2.y = 99.5;
    number2.scale.x = 0.5;
    number2.scale.y = 0.5;
    number2.visible = false;
    gameScene.addChild(number2);

    // Number 1
    number1 = new Text("1", numberStyle);
    number1.x = 102;
    number1.y = 99.5;
    number1.scale.x = 0.5;
    number1.scale.y = 0.5;
    number1.visible = false;
    gameScene.addChild(number1);

    // Number text
    numbertext = new Text("始め", numbertextStyle);
    numbertext.x = 88;
    numbertext.y = 117;
    numbertext.scale.x = 0.5;
    numbertext.scale.y = 0.5;
    numbertext.visible = false;
    gameScene.addChild(numbertext);
}

// Render game scene
function renderGameScene() {
    // Add game screen elements
    addGameSceneElm();

    // Box game scene
    boxGameScene = addGameSceneFrames(2.3, 0x6b6145, 1, 0xFFFFFF, 1, 0, 0, 220, 23, 6);
    boxGameScene.x = 9.5;
    boxGameScene.y = 12;
    boxGameScene.visible = false;

    // Random time number
    randomTime = new Text("3.5", randomTimeStyle);
    randomTime.x = 33;
    randomTime.y = 10.8;
    randomTime.scale.x = 0.25;
    randomTime.scale.y = 0.25;
    randomTime.visible = false;
    gameScene.addChild(randomTime);

    // Title game scene text 1
    titleGameSceneText = new Text("秒待って下さい", titleGameSceneTextStyle);
    titleGameSceneText.x = 79;
    titleGameSceneText.y = 12.5;
    titleGameSceneText.scale.x = 0.25;
    titleGameSceneText.scale.y = 0.25;
    titleGameSceneText.visible = false;
    gameScene.addChild(titleGameSceneText);

    // Text answer 1
    textAnswer1 = new Text("早すぎです", textAnswerStyle);
    textAnswer1.x = 71;
    textAnswer1.y = 11;
    textAnswer1.scale.x = 0.25;
    textAnswer1.scale.y = 0.25;
    textAnswer1.visible = false;
    gameScene.addChild(textAnswer1);

    // Text answer 2
    textAnswer2 = new Text("遅すぎです", textAnswerStyle);
    textAnswer2.x = 71;
    textAnswer2.y = 11;
    textAnswer2.scale.x = 0.25;
    textAnswer2.scale.y = 0.25;
    textAnswer2.visible = false;
    gameScene.addChild(textAnswer2);

    // Text ok
    textOk = new Text("OK!", textOkStyle);
    textOk.x = 101;
    textOk.y = 10.2;
    textOk.scale.x = 0.25;
    textOk.scale.y = 0.25;
    textOk.visible = false;
    gameScene.addChild(textOk);

    // Title game scene text 2
    titleGameSceneText2 = new Text("誤差", titleGameSceneText2Style);
    titleGameSceneText2.x = 143;
    titleGameSceneText2.y = 38.8;
    titleGameSceneText2.scale.x = 0.25;
    titleGameSceneText2.scale.y = 0.25;
    titleGameSceneText2.visible = false;
    gameScene.addChild(titleGameSceneText2);

    // Title game scene text 3
    titleGameSceneText3 = new Text("秒まで", titleGameSceneText2Style);
    titleGameSceneText3.x = 200;
    titleGameSceneText3.y = 38.8;
    titleGameSceneText3.scale.x = 0.25;
    titleGameSceneText3.scale.y = 0.25;
    titleGameSceneText3.visible = false;
    gameScene.addChild(titleGameSceneText3);

    // Random second
    randomSecondText = new Text("1", randomSecondTextStyle);
    randomSecondText.x = 180;
    randomSecondText.y = 37.4;
    randomSecondText.scale.x = 0.25;
    randomSecondText.scale.y = 0.25;
    randomSecondText.visible = false;
    gameScene.addChild(randomSecondText);

    // Box result
    boxCaculate = addGameSceneFrames(2, 0x6b6145, 0.7, 0xFFFFFF, 1, 0, 0, 100, 19, 6);
    boxCaculate.x = 69;
    boxCaculate.y = 218;
    boxCaculate.visible = false;

    // Number caculate
    numberCaculate = new Text("+0.5", numberCaculateStyle);
    numberCaculate.x = 101;
    numberCaculate.y = 217;
    numberCaculate.scale.x = 0.25;
    numberCaculate.scale.y = 0.25;
    numberCaculate.visible = false;
    gameScene.addChild(numberCaculate)

    // Number time
    numberTime = new Text("9.6", numberCaculateStyle);
    numberTime.x = 107;
    numberTime.y = 152;
    numberTime.scale.x = 0.25;
    numberTime.scale.y = 0.25;
    numberTime.visible = false;
    gameScene.addChild(numberTime);
}