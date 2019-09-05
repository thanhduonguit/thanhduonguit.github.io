// Next turn
function nextTurn() {
    // Show open animation
    animationScene.visible = true;
    openAnimation();
    setTimeout(function() {
        [
            titleGameSceneText,
            boxGameScene,
            numberCaculate,
            numberTime,
            boxCaculate,
            textAnswer1,
            textAnswer2,
            textOk
        ].forEach(el => {
            el.visible = false;
        });
        blackSquare = addGraphic(0x000000, 1, 0, 0, 240, 240);
        clockwise.rotation = 0;
    }, 1700);

    // Show close animation
    setTimeout(function() {
        blackSquare.visible = false;
        closeAnimation();
    }, 2700);

    // New game
    setTimeout(function() {
        animationScene.visible = false;
        clear();
        init();
        setTimeout(function() {
            waitingGame();
            setTimeout(function() {
                clockCover.interactive = true;
            }, 6000);
        }, 1500);
    }, 4400);
}

// Set position
function setPosition(element, number, x1, x2, x3, x4) {
    if (element < 10) {
        number.x = x1;
    } else if (element >= 10 && element < 100) {
        number.x = x2;
    } else if (element >= 100 && element < 1000) {
        number.x = x3;
    } else if (element >= 1000 && element < 10000) {
        number.x = x4;
    }
}

// Hide sprites for each answer
function hideSpritesForEachAnswer() {
    numberCaculate.visible = true;
    setPosition(timeCaculateResult, numberCaculate, 101, 95, 90, 85.5);
    [
        randomTime,
        titleGameSceneText,
        titleGameSceneText2,
        titleGameSceneText3,
        randomSecondText,
    ].forEach(el => {
        el.visible = false;
    });
}

// Display text
function onCheck(time, result, textAnswer) {
    timeCaculateResult = time;
    timeCaculateResult = timeCaculateResult.toFixed(1);
    numberCaculate.text = `${result}${timeCaculateResult}`;
    hideSpritesForEachAnswer();
    textAnswer.visible = true;
    setTimeout(function() {
        moveToResultScene();
    }, 1700);
}

// Check answer for each level
function checkAnswerForEachLevel(limitedSecond) {
    // TimeAnswerOneQuestion under random time
    if (timeAnswerOneQuestion <= (randomNumber - limitedSecond)) {
        onCheck(randomNumber - timeAnswerOneQuestion, sub, textAnswer1);
    }

    // TimeAnswerOneQuestion over random time
    if (timeAnswerOneQuestion >= (randomNumber + limitedSecond)) {
        onCheck(timeAnswerOneQuestion - randomNumber, plus, textAnswer2);
    }

    // If right answer
    if (timeAnswerOneQuestion > (randomNumber - limitedSecond) && timeAnswerOneQuestion < (randomNumber + limitedSecond)) {
        if (timeAnswerOneQuestion < randomNumber) {
            timeCaculateResult = randomNumber - timeAnswerOneQuestion;
            timeCaculateResult = timeCaculateResult.toFixed(1);
            numberCaculate.text = `−${timeCaculateResult}`;
        } else if (timeAnswerOneQuestion >= randomNumber) {
            timeCaculateResult = timeAnswerOneQuestion - randomNumber;
            timeCaculateResult = timeCaculateResult.toFixed(1);
            numberCaculate.text = `+${timeCaculateResult}`;
        }
        hideSpritesForEachAnswer();
        textOk.visible = true;
        rightAnswers++;
        setTimeout(function() {
            nextTurn();
        }, 1700);
    }
}

// Check answer
function checkAnswer() {
    clockCover.on('pointerdown', function() {
        // Get end time play
        questionEndTime = new Date().getTime();
        clockCover.interactive = false;
        clockCover.visible = false;
    
        // Caculate time answer for each question
        timeAnswerOneQuestion = questionEndTime - questionStartTime;
        timeAnswerOneQuestion = timeAnswerOneQuestion / 1000;
        timeAnswerOneQuestion = timeAnswerOneQuestion.toFixed(1);

        // Display clockwise
        clockwise.rotation = timeAnswerOneQuestion * clockwiseSpeed;

        // Show caculate result
        numberTime.text = timeAnswerOneQuestion;
        numberTime.visible = true;
        setPosition(timeAnswerOneQuestion, numberTime, 107, 102, 98, 93);
        boxCaculate.visible = true;

        // Check answer for each level
        if (currentQuestion < 6) {
            checkAnswerForEachLevel(1);
        } else if (currentQuestion >= 6 && currentQuestion < 8) {
            checkAnswerForEachLevel(0.5);
        } else if (currentQuestion === 8) {
            checkAnswerForEachLevel(0.4);
        } else if (currentQuestion === 9) {
            checkAnswerForEachLevel(0.3);
        } else if (currentQuestion >= 10) {
            checkAnswerForEachLevel(0.2);
        }
    });
}
