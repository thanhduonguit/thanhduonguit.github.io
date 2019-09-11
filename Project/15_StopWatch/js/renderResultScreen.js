// Render result scene
function renderResultScene() {
    // Add result background
    resultBackground = new PIXI.Sprite(PIXI.loader.resources["images/background.png"].texture);
    resultBackground.width = 240;
    resultBackground.height = 240;
    resultScene.addChild(resultBackground);

    // Result text
    resultText = addText("結果発表", tutorialTitleTextStyle, 0.42, 0, -1, resultScene, true);

    // Box result scene 1
    boxResult1 = addFrames(1.5, 0x6b6145, 0.7, 0xFFFFFF, 0.7, 9, 35, 221, 193, 6, resultScene);

    // Score
    scoreText = addTextGameScreen("正解数", scoreTextStyle, 0.32, 18, 79, resultScene, true);
    scoreNumber = addTextGameScreen("", scoreTextStyle, 0.32, 187, 79, resultScene, true);

    // Age
    ageText = addTextGameScreen("脳トレ年齢", ageTextStyle, 0.32, 18, 137, resultScene, true);
    ageNumber = addTextGameScreen("", ageTextStyle, 0.32, 149, 137, resultScene, true);

    // Box result scene 2
    boxResult2 = addFrames(1.5, 0x6b6145, 0.7, 0xFFFFFF, 0.8, 132, 188, 90, 32, 6, resultScene);
    boxResult2.buttonMode = true;
    boxResult2.interactive = true;

    // Reset button
    resetBtn = addText("もう一度", textContent1Style, 0.27, -56.5, 193, resultScene, true);
    resetBtn.buttonMode = true;
    resetBtn.interactive = true;
}
