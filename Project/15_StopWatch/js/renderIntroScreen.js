// Render introduce scene
function renderIntroduceScene() {
    // Intro background
    introBg = addImage("images/defaultBg.png", 0, 0, 240, 240, introScene, true);

    // Title game
    englishText = addImage("images/englishText.png", 63, 153, 115, 19, introScene, true);

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
    boxTutorial1 = addFrames(1.5, 0x6b6145, 0.7, 0xFFFFFF, 0.7, 9, 34, 221, 194, 6, tutorialScene);

    // Text content
    tutorialTitleText = addText("ゲーム説明", tutorialTitleTextStyle, 0.38, 1, 0, tutorialScene, true);
    textContent1 = addText("指定秒数を頭の中で", textContent1Style, 0.24, 1, 78, tutorialScene, true);
    textContent2 = addText("カウントしてください", textContent1Style, 0.24, 1, 97.2, tutorialScene, true);
    textContent3 = addText("時間になったと思ったら", textContent1Style, 0.24, 1, 126, tutorialScene, true);
    textContent4 = addText("時計をタッチしてください", textContent1Style, 0.24, 0, 145.5, tutorialScene, true);
    
    // Box tutorial 2
    boxTutorial2 = addFrames(1.5, 0x6b6145, 0.7, 0xFFFFFF, 0.8, 142, 188, 80, 32, 6, tutorialScene);
    boxTutorial2.buttonMode = true;
    boxTutorial2.interactive = true;

    // Start game button
    startGameBtn = addText("開始", textContent1Style, 0.25, -62.5, 193, tutorialScene, true);
    startGameBtn.buttonMode = true;
    startGameBtn.interactive = true;
}
