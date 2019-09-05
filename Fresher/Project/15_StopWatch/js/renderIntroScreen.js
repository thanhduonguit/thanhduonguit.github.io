// Render introduce scene
function renderIntroduceScene() {
    // Intro background
    introBg = addImage("images/defaultBg.png", 0, 0, 240, 240, introScene, true);

    // Intro screen text
    // englishText = addImage("images/englishText.png", 66, 153, 109, 19, introScene, true);

    // Button graphic
    btnGraphic = new PIXI.Graphics();
    btnGraphic.beginFill(0x000000);
    btnGraphic.drawRect(0, 0, 240, 25);
    btnGraphic.endFill();
    btnGraphic.x = 0;
    btnGraphic.y = 185;
    btnGraphic.buttonMode = true;
    btnGraphic.interactive = true;
    btnGraphic.alpha = 0.6; 
    introScene.addChild(btnGraphic);

    // Intro Button
    introBtn = addImage("images/defaultBtn.png", 82, 188.3, 75, 18, introScene, true);
    introBtn.buttonMode = true;
    introBtn.interactive = true;
}

// Render tutorial scene
function renderTutorialScene() {
    // Add tutorial background
    tutorialBackground = addImage("images/background.png", 0, 0, 240, 240, tutorialScene, true);

    // Box tutorial 1
    boxTutorial1 = addFrames(1.5, 0x6b6145, 0.7, 0xFFFFFF, 0.88, 4, 34, 231, 194, 6, tutorialScene);

    // Text content
    tutorialTitleText = addText("ゲーム説明", tutorialTitleTextStyle, 0.38, 1, 0, tutorialScene, true);
    textContent1 = addText("指定秒数を頭の中で", textContent1Style, 0.25, 1, 74, tutorialScene, true);
    textContent2 = addText("カウントしてください", textContent1Style, 0.25, 1, 99, tutorialScene, true);
    textContent3 = addText("時間になったと思ったら", textContent1Style, 0.25, 1, 124, tutorialScene, true);
    textContent4 = addText("時計をタッチしてください", textContent1Style, 0.25, 0, 149, tutorialScene, true);
    
    // Box tutorial 2
    boxTutorial2 = addFrames(1.5, 0x6b6145, 0.7, 0xFFFFFF, 0.8, 147, 188, 80, 32, 6, tutorialScene);
    boxTutorial2.buttonMode = true;
    boxTutorial2.interactive = true;

    // Start game button
    startGameBtn = addText("開始", textContent1Style, 0.25, -67.5, 193, tutorialScene, true);
    startGameBtn.buttonMode = true;
    startGameBtn.interactive = true;
}
