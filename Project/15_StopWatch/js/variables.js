// Sprite variables
let introText1, btnGraphic, introBtn, tutorialTitleText, boxTutorial1, textContent1, introBg, startBg;
let textContent2, textContent3, textContent4, boxTutorial2, startGameBtn, boxGameScene, introText;
let titleGameSceneText2, resultText, boxResult1, scoreText, ageText, boxResult2, resetBtn, randomNumber;
let watch, clockwise, mainsquare, number3, number2, number1, numbertext, clockCover, titleGameSceneText;
let randomTime, textAnswer1, textAnswer2, textOk, nextStage, closeBg1, closeBg2, closeBg3, blackSquare;
let closeBg4, closeBg5, closeBg6, closeBg7, closeBg, closeBg8, closeBg9, closeBg10, boxCaculate;
let openBg, openBg1, openBg2, openBg3, openBg4, openBg5, openBg6, openBg7, openBg8, openBg9;
let itemRandom1, randomSecond, flag, titleGameSceneText3, randomSecondText, englishText, titleGameSceneText4;
let scoreNumber, ageNumber, age, tutorialBackground, gameSceneBackground, boxGameScene3;
let rectAnimation = [];
let randomArr = [4.5, 5.5, 6.5, 7.5, 8.5, 9.5];
let randomLevel10 = [2.7, 3.3, 3.7, 4.3, 4.7];

// Init variables each turn
let startTime = undefined,
    finishTime = undefined,
    questionStartTime = undefined,
    questionEndTime = undefined,
    timeAnswerOneQuestion = undefined,
    timeCaculateResult = undefined,
    currentScene = 1,
    rightAnswers = 0,
    currentQuestion = 0,
    fadeSpeed = 0.04,
    clockwiseSpeed = 6.28 / 60,
    sub = '−',
    plus = '+';
