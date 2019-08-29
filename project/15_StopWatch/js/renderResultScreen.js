// Render result scene
function renderResultScene() {
    // Add result background
    resultBackground = new PIXI.Sprite(PIXI.loader.resources["images/background.png"].texture);
    resultBackground.width = 240;
    resultBackground.height = 240;
    resultScene.addChild(resultBackground);

    // Result text
    resultText = new Text("結果発表", tutorialTitleTextStyle);
    resultText.scale.x = 0.38;
    resultText.scale.y = 0.38;
    resultText.x = 120 - resultText.width / 2;
    resultText.y = 0;
    resultScene.addChild(resultText);

    // Box result scene 1
    boxResult1 = addResultFrames(1.5, 0x6b6145, 0.7, 0xFFFFFF, 0.9, 4, 34, 231, 194, 6);

    // Score text
    scoreText = new Text("正解数", scoreTextStyle);
    scoreText.scale.x = 0.35;
    scoreText.scale.y = 0.35;
    scoreText.x = 12;
    scoreText.y = 73;
    resultScene.addChild(scoreText);

    // Score number
    scoreNumber = new Text("", scoreTextStyle);
    scoreNumber.scale.x = 0.35;
    scoreNumber.scale.y = 0.35;
    scoreNumber.x = 189;
    scoreNumber.y = 73;
    resultScene.addChild(scoreNumber);

    // Age text
    ageText = new Text("脳トレ年齢", ageTextStyle);
    ageText.scale.x = 0.35;
    ageText.scale.y = 0.35;
    ageText.x = 12;
    ageText.y = 137;
    resultScene.addChild(ageText);

    // Age number
    ageNumber = new Text("", ageTextStyle);
    ageNumber.x = 149;
    ageNumber.y = 136;
    ageNumber.scale.x = 0.35;
    ageNumber.scale.y = 0.35;
    resultScene.addChild(ageNumber);

    // Box result scene 2
    boxResult2 = addResultFrames(1.5, 0x6b6145, 0.7, 0xFFFFFF, 0.8, 0, 0, 90, 32, 6);
    boxResult2.x = 137;
    boxResult2.y = 188;
    boxResult2.buttonMode = true;
    boxResult2.interactive = true;

    // Reset button
    resetBtn = new Text("もう一度", textContent1Style);
    resetBtn.scale.x = 0.27;
    resetBtn.scale.y = 0.27;
    resetBtn.x = 120 - resetBtn.width / 2 + 61.5;
    resetBtn.y = 193;
    resetBtn.buttonMode = true;
    resetBtn.interactive = true;
    resultScene.addChild(resetBtn);
}
