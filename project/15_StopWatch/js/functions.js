// Init elements
function init() {
    gameScene.addChild(gameSceneBackground);
    gameScene.addChild(watch);
    gameScene.addChild(clockwise);
    gameScene.addChild(mainsquare);
    gameScene.addChild(number3);
    gameScene.addChild(number2);
    gameScene.addChild(number1);
    gameScene.addChild(numbertext);
    gameScene.addChild(clockCover);
    gameScene.addChild(boxGameScene3);
    gameScene.addChild(boxGameScene);
    gameScene.addChild(randomTime);
    gameScene.addChild(textAnswer1);
    gameScene.addChild(textAnswer2);
    gameScene.addChild(textOk);
    gameScene.addChild(titleGameSceneText);
    gameScene.addChild(titleGameSceneText2);
    gameScene.addChild(titleGameSceneText3);
    gameScene.addChild(randomSecondText);
    gameScene.addChild(boxCaculate);
    gameScene.addChild(numberCaculate);
    gameScene.addChild(numberTime);
    gameScene.addChild(blackSquare);
}

// Add frames tutorial frames
function addTutorialFrames(thickness, colorBorder, visible, color, opacity, x, y, width, height, radius, parent = tutorialScene) {
    let element = new Graphics();
    element.lineStyle(thickness, colorBorder, visible);
    element.beginFill(color, opacity);
    element.drawRoundedRect(x, y, width, height, radius);
    element.endFill();
    parent.addChild(element);
    return element;
}

// Show and hide sprites
function showAndHideSprites() {
    introScene.visible = true;
    tutorialScene.visible = false;
    gameScene.visible = false;
    resultScene.visible = false;
}

// Listen to event
function listenToEvent() {
    // Move to tutorial scene
    [btnGraphic, introBtn].forEach(el => el.on("pointerdown", () => {
        if (currentScene === 1) {
            introScene.visible = false;
            tutorialScene.visible = true;
        }
        currentScene++;
    }));

    // Click to start game
    [boxTutorial2, startGameBtn].forEach(el => el.on("pointerdown", () => {
        currentScene++;
        tutorialScene.visible = false;
        gameScene.visible = true;
        closeAnimation();
        setTimeout(function() {
            animationScene.visible = false;
            waitingGame();
        }, 2700);
    }));

    // Listen to reset game
    [boxResult2, resetBtn].forEach(el => el.on("pointerdown", resetNewGame));
}

// Waiting game
function waitingGame() {
    // Current question
    currentQuestion++;
    boxGameScene.visible = true;
    boxGameScene3.visible = true;

    // Random time number
    // Level 1
    if (currentQuestion === 1) {
        randomTime.visible = true;
        randomNumber = 3;
        randomTime.text = randomNumber;
        randomSecond = 1;
        randomSecondText.text = randomSecond;
    // Level 2
    } else if (currentQuestion === 2) {
        randomTime.visible = true;
        randomNumber = 5;
        randomTime.text = randomNumber;
        randomSecond = 1;
        randomSecondText.text = randomSecond;
    // Level 3
    } else if (currentQuestion === 3) {
        randomTime.visible = true;
        randomNumber = randomInt(7, 10);
        randomTime.text = randomNumber;
        randomSecond = 1;
        randomSecondText.text = randomSecond;
    // Level 4
    } else if (currentQuestion === 4) {
        randomTime.visible = true;
        randomNumber = randomInt(12, 14);
        randomTime.text = randomNumber;
        randomSecond = 1;
        randomSecondText.text = randomSecond;
    // Level 5
    } else if (currentQuestion === 5) {
        randomTime.visible = true;
        randomNumber = randomArr[randomInt(0, 5)];
        randomTime.text = randomNumber;
        randomSecond = 1;
        randomSecondText.text = randomSecond;
    // Level 6, 7
    } else if (currentQuestion > 5 && currentQuestion < 8) {
        randomTime.visible = true;
        randomNumber = randomInt(31, 60) / 10;
        randomTime.text = randomNumber;
        randomSecond = 0.5;
        randomSecondText.text = randomSecond;
        randomSecondText.x = 173;
    // Level 8
    } else if (currentQuestion === 8) {
        randomTime.visible = true;
        randomNumber = randomInt(31, 60) / 10;
        randomTime.text = randomNumber;
        randomSecond = 0.4;
        randomSecondText.text = randomSecond;
        randomSecondText.x = 173;
    // Level 9
    } else if (currentQuestion === 9) {
        randomTime.visible = true;
        randomNumber = randomInt(31, 60) / 10;
        randomTime.text = randomNumber;
        randomSecond = 0.3;
        randomSecondText.text = randomSecond;
        randomSecondText.x = 173;
    // Level 10 ++
    } else if (currentQuestion >= 10) {
        randomTime.visible = true;
        randomNumber = randomLevel10[randomInt(0, 5)];
        randomTime.text = randomNumber;
        randomSecond = 0.2;
        randomSecondText.text = randomSecond;
        randomSecondText.x = 173;
    }

    // Show game scene text
    titleGameSceneText.visible = true;
    titleGameSceneText2.visible = true;
    titleGameSceneText3.visible = true;
    randomSecondText.visible = true;

    // Show number 321
    setTimeout(function() {
        mainsquare.visible = true;
        number3.visible = true;
        setTimeout(function() {
            number3.visible = false;
            number2.visible = true;
            setTimeout(function() {
                number2.visible = false;
                number1.visible = true;
                setTimeout(function() {
                    number1.visible = false;
                    numbertext.visible = true;
                    setTimeout(function() {
                        // Hide elements
                        numbertext.visible = false;
                        mainsquare.visible = false;

                        // Hide time play
                        clockCover.visible = true;

                        // Get start time
                        questionStartTime = new Date().getTime();
                    }, 1200);
                }, 1200);
            }, 1200);
        }, 1200);
    }, 1200);
}

// Move to result scene
function moveToResultScene() {
    // Caculate right answer
    calculateRightAnswers();

    // Calculate age
    calculateAge();

    // Show open animation
    animationScene.visible = true;
    resetBtn.interactive = false;
    boxResult2.interactive = false;
    boxResult2.interactive = false;
    openAnimation();
    setTimeout(function() {
        blackSquare = addGraphic(0x000000, 1, 0, 0, 240, 240);
        resultScene.visible = true;
    }, 1700);

    // Show close animation
    setTimeout(function() {
        blackSquare.visible = false;
        closeAnimation();
        gameScene.visible = false;
    }, 2700);

    // Click to reset new game
    setTimeout(function() {
        resetBtn.interactive = true;
        boxResult2.interactive = true;
    }, 5500);
}

// Reset new game
function resetNewGame() {
    // Reset data
    resetBtn.interactive = false;
    boxResult2.interactive = false;
    currentQuestion = 0;
    rightAnswers = 0;
    currentScene = 3;
    nextTurn();

    // Hide result screen, show game screen
    setTimeout(function() {
        resultScene.visible = false;
        gameScene.visible = true;
    }, 1700);
}

// Calculate age
function calculateAge() {
    if (rightAnswers === 0) {
        age = 80;
    } else if (rightAnswers === 1) {
        age = 70;
    } else if (rightAnswers === 2) {
        age = 60;
    } else if (rightAnswers === 3) {
        age = 50;
    } else if (rightAnswers === 4) {
        age = 40;
    } else if (rightAnswers === 5) {
        age = 30;
    } else if (rightAnswers === 6) {
        age = 28;
    } else if (rightAnswers === 7) {
        age = 25;
    } else if (rightAnswers === 8) {
        age = 23;
    } else if (rightAnswers === 9) {
        age = 21;
    } else if (rightAnswers >= 10) {
        age = 20;
    }
    ageNumber.text = `${age}歳級`;
}

// Calculate the number of right answers
function calculateRightAnswers() {
    scoreNumber.text = `${rightAnswers}回`;
}
