// Next turn
function nextTurn() {
    // Show open animation
    animationScene.visible = true;
    openAnimation();
    setTimeout(function() {
        [
            titleGameSceneText,
            boxGameScene,
            boxGameScene3,
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

// Set positon number time
function setPositionNumberTime() {
    if (timeAnswerOneQuestion < 10) {
        numberTime.x = 107;
    } else if (timeAnswerOneQuestion >= 10 && timeAnswerOneQuestion < 100) {
        numberTime.x = 102;
    } else if (timeAnswerOneQuestion >= 100 && timeAnswerOneQuestion < 1000) {
        numberTime.x = 98;
    } else if (timeAnswerOneQuestion >= 1000 && timeAnswerOneQuestion < 10000) {
        numberTime.x = 93;
    }
}

// Set positon number time
function setPositionNumberCaculate() {
    if (timeCaculateResult < 10) {
        numberCaculate.x = 101;
    } else if (timeCaculateResult >= 10 && timeCaculateResult < 100) {
        numberCaculate.x = 95;
    } else if (timeCaculateResult >= 100 && timeCaculateResult < 1000) {
        numberCaculate.x = 90;
    } else if (timeCaculateResult >= 1000 && timeCaculateResult < 10000) {
        numberCaculate.x = 85.5;
    }
}

// Hide sprites for each answer
function hideSpritesForEachAnswer() {
    numberCaculate.visible = true;
    setPositionNumberCaculate();
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
        setPositionNumberTime();
        boxCaculate.visible = true;

        // Level 1 ~ 5
        if (currentQuestion < 6) {
            // TimeAnswerOneQuestion under random time
            if (timeAnswerOneQuestion <= (randomNumber - 1)) {
                timeCaculateResult = randomNumber - timeAnswerOneQuestion;
                timeCaculateResult = timeCaculateResult.toFixed(1);
                numberCaculate.text = `−${timeCaculateResult}`;
                hideSpritesForEachAnswer();
                textAnswer1.visible = true;
                setTimeout(function() {
                    moveToResultScene();
                }, 1700);
            }

            // TimeAnswerOneQuestion over random time
            if (timeAnswerOneQuestion >= (randomNumber + 1)) {
                timeCaculateResult = timeAnswerOneQuestion - randomNumber;
                timeCaculateResult = timeCaculateResult.toFixed(1);
                numberCaculate.text = `+${timeCaculateResult}`;
                hideSpritesForEachAnswer();
                textAnswer2.visible = true;
                setTimeout(function() {
                    moveToResultScene();
                }, 1700);
            }

            // If right answer
            if (timeAnswerOneQuestion > (randomNumber - 1) && timeAnswerOneQuestion < (randomNumber + 1)) {
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
        // Level 6 ~ 7
        } else if (currentQuestion >= 6 && currentQuestion < 8) {
            // TimeAnswerOneQuestion under random time
            if (timeAnswerOneQuestion <= (randomNumber - 0.5)) {
                timeCaculateResult = randomNumber - timeAnswerOneQuestion;
                timeCaculateResult = timeCaculateResult.toFixed(1);
                numberCaculate.text = `−${timeCaculateResult}`;
                hideSpritesForEachAnswer();
                textAnswer1.visible = true;
                setTimeout(function() {
                    moveToResultScene();
                }, 1700);
            }

            // TimeAnswerOneQuestion over random time
            if (timeAnswerOneQuestion >= (randomNumber + 0.5)) {
                timeCaculateResult = timeAnswerOneQuestion - randomNumber;
                timeCaculateResult = timeCaculateResult.toFixed(1);
                numberCaculate.text = `+${timeCaculateResult}`;
                hideSpritesForEachAnswer();
                textAnswer2.visible = true;
                setTimeout(function() {
                    moveToResultScene();
                }, 1700);
            }

            // If right answer
            if (timeAnswerOneQuestion > (randomNumber - 0.5) && timeAnswerOneQuestion < (randomNumber + 0.5)) {
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
        // Level 8
        } else if (currentQuestion === 8) {
            // TimeAnswerOneQuestion under random time
            if (timeAnswerOneQuestion <= (randomNumber - 0.4)) {
                timeCaculateResult = randomNumber - timeAnswerOneQuestion;
                timeCaculateResult = timeCaculateResult.toFixed(1);
                numberCaculate.text = `−${timeCaculateResult}`;
                hideSpritesForEachAnswer();
                textAnswer1.visible = true;
                setTimeout(function() {
                    moveToResultScene();
                }, 1700);
            }

            // TimeAnswerOneQuestion over random time
            if (timeAnswerOneQuestion >= (randomNumber + 0.4)) {
                timeCaculateResult = timeAnswerOneQuestion - randomNumber;
                timeCaculateResult = timeCaculateResult.toFixed(1);
                numberCaculate.text = `+${timeCaculateResult}`;
                hideSpritesForEachAnswer();
                textAnswer2.visible = true;
                setTimeout(function() {
                    moveToResultScene();
                }, 1700);
            }

            // If right answer
            if (timeAnswerOneQuestion > (randomNumber - 0.4) && timeAnswerOneQuestion < (randomNumber + 0.4)) {
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
        // Level 9
        } else if (currentQuestion === 9) {
            // TimeAnswerOneQuestion under random time
            if (timeAnswerOneQuestion <= (randomNumber - 0.3)) {
                timeCaculateResult = randomNumber - timeAnswerOneQuestion;
                timeCaculateResult = timeCaculateResult.toFixed(1);
                numberCaculate.text = `−${timeCaculateResult}`;
                hideSpritesForEachAnswer();
                textAnswer1.visible = true;
                setTimeout(function() {
                    moveToResultScene();
                }, 1700);
            }

            // TimeAnswerOneQuestion over random time
            if (timeAnswerOneQuestion >= (randomNumber + 0.3)) {
                timeCaculateResult = timeAnswerOneQuestion - randomNumber;
                timeCaculateResult = timeCaculateResult.toFixed(1);
                numberCaculate.text = `+${timeCaculateResult}`;
                hideSpritesForEachAnswer();
                textAnswer2.visible = true;
                setTimeout(function() {
                    moveToResultScene();
                }, 1700);
            }

            // If right answer
            if (timeAnswerOneQuestion > (randomNumber - 0.3) && timeAnswerOneQuestion < (randomNumber + 0.3)) {
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
        // Level 10 ++
        } else if (currentQuestion >= 10) {
            // TimeAnswerOneQuestion under random time
            if (timeAnswerOneQuestion <= (randomNumber - 0.2)) {
                timeCaculateResult = randomNumber - timeAnswerOneQuestion;
                timeCaculateResult = timeCaculateResult.toFixed(1);
                numberCaculate.text = `−${timeCaculateResult}`;
                hideSpritesForEachAnswer();
                textAnswer1.visible = true;
                setTimeout(function() {
                    moveToResultScene();
                }, 1700);
            }

            // TimeAnswerOneQuestion over random time
            if (timeAnswerOneQuestion >= (randomNumber + 0.2)) {
                timeCaculateResult = timeAnswerOneQuestion - randomNumber;
                timeCaculateResult = timeCaculateResult.toFixed(1);
                numberCaculate.text = `+${timeCaculateResult}`;
                hideSpritesForEachAnswer();
                textAnswer2.visible = true;
                setTimeout(function() {
                    moveToResultScene();
                }, 1700);
            }

            // If right answer
            if (timeAnswerOneQuestion > (randomNumber - 0.2) && timeAnswerOneQuestion < (randomNumber + 0.2)) {
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
    });
}
