// Add intro graphic
function addIntroGraphic(color, opacity, x, y, width, height, border = 0, parent = introScene) {
    let element = new Graphics();
    element.beginFill(color, opacity);
    element.drawRoundedRect(x, y, width, height, border);
    element.endFill();
    parent.addChild(element);
    return element;
}

// Add game scene frames
function addGameSceneFrames(thickness, colorBorder, visible, color, opacity, x, y, width, height, radius, parent = gameScene) {
    let element = new Graphics();
    element.lineStyle(thickness, colorBorder, visible);
    element.beginFill(color, opacity);
    element.drawRoundedRect(x, y, width, height, radius);
    element.endFill();
    parent.addChild(element);
    return element;
}

// Render introduce scene
function renderIntroduceScene() {
    // Intro background
    introBg = new PIXI.Sprite(PIXI.loader.resources["images/defaultBg.png"].texture);
    introBg.width = 240;
    introBg.height = 240;
    introScene.addChild(introBg);

    // Button graphic
    btnGraphic = addIntroGraphic(0x000000, 0.8, 0, 0, 240, 25);
    btnGraphic.y = 185;
    btnGraphic.buttonMode = true;
    btnGraphic.interactive = true;

    // Intro Button
    introBtn = new PIXI.Sprite(PIXI.loader.resources["images/defaultBtn.png"].texture);
    introBtn.buttonMode = true;
    introBtn.interactive = true;
    introBtn.width = 75;
    introBtn.height = 18;
    introBtn.x = btnGraphic.width / 2 - introBtn.width / 2;
    introBtn.y = btnGraphic.height / 2 - introBtn.height / 2;
    btnGraphic.addChild(introBtn);
}

// Render tutorial scene
function renderTutorialScene() {
    // Add tutorial background
    tutorialBackground = new PIXI.Sprite(PIXI.loader.resources["images/background.png"].texture);
    tutorialBackground.width = 240;
    tutorialBackground.height = 240;
    tutorialScene.addChild(tutorialBackground);

    // Title text
    tutorialTitleText = new Text("ゲーム説明", tutorialTitleTextStyle);
    tutorialTitleText.scale.x = 0.38;
    tutorialTitleText.scale.y = 0.38;
    tutorialTitleText.x = 120 - tutorialTitleText.width / 2 - 1;
    tutorialTitleText.y = 0;
    tutorialScene.addChild(tutorialTitleText);

    // Box tutorial 1
    boxTutorial1 = addTutorialFrames(1.5, 0x6b6145, 0.7, 0xFFFFFF, 0.9, 4, 34, 231, 194, 6);

    function abc(element, text, x = 0) {
        element = new Text(text, textContent1Style);
        element.scale.x = 0.25;
        element.scale.y = 0.25;
        element.x = 120 - element.width / 2 - x;
        element.y = 74;
        tutorialScene.addChild(element);
    }

    abc(textContent1, "指定秒数を頭の中で", 1);

    // Text content 1


    // Text content 2
    textContent2 = new Text("カウントしてください", textContent1Style);
    textContent2.scale.x = 0.25;
    textContent2.scale.y = 0.25;
    textContent2.x = 120 - textContent2.width / 2 - 1;
    textContent2.y = 99;
    tutorialScene.addChild(textContent2);

    // Text content 3
    textContent3 = new Text("時間になったと思ったら", textContent1Style);
    textContent3.scale.x = 0.25;
    textContent3.scale.y = 0.25;
    textContent3.x = 120 - textContent3.width / 2 - 1;
    textContent3.y = 124;
    tutorialScene.addChild(textContent3);

    // Text content 4
    textContent4 = new Text("時計をタッチしてください", textContent1Style);
    textContent4.scale.x = 0.25;
    textContent4.scale.y = 0.25;
    textContent4.x = 120 - textContent4.width / 2;
    textContent4.y = 149;
    tutorialScene.addChild(textContent4);
    
    // Box tutorial 2
    boxTutorial2 = addTutorialFrames(1.5, 0x6b6145, 0.7, 0xFFFFFF, 0.8, 0, 0, 80, 32, 6);
    boxTutorial2.x = 147;
    boxTutorial2.y = 188;
    boxTutorial2.buttonMode = true;
    boxTutorial2.interactive = true;

    // Start game button
    startGameBtn = new Text("開始", textContent1Style);
    startGameBtn.scale.x = 0.25;
    startGameBtn.scale.y = 0.25;
    startGameBtn.x = 120 - startGameBtn.width / 2 + 67.5;
    startGameBtn.y = 193;
    startGameBtn.buttonMode = true;
    startGameBtn.interactive = true;
    tutorialScene.addChild(startGameBtn);
}
