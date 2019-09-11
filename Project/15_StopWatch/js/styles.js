// Set font style
function setFontStyle(font, size, fontweight, color) {
    let styles = new TextStyle({
        fontFamily: font,
        fontSize: size,
        fontWeight: fontweight,
        fill: color
    });
    return styles;
}

// Styles for all scene text
tutorialTitleTextStyle = setFontStyle("noto-900", 70, "bold", "black");
textContent1Style = setFontStyle('mplus1p-800', 70, "bold", "black");
titleGameSceneTextStyle = setFontStyle('mplus1p-800', 72, "bold", "black");
titleGameSceneText2Style = setFontStyle('mplus1p-800', 52, "bold", "black");
scoreTextStyle = setFontStyle("Noto Serif JP", 70, "bold", "black");
ageTextStyle = setFontStyle("Noto Serif JP", 70, "bold", "black");
randomSecondTextStyle = setFontStyle("noto-900", 60, "bold", "black");
numberStyle = setFontStyle("noto-900", 125, "bold", "black");
numbertextStyle = setFontStyle("noto-900", 68, "bold", "black");
randomTimeStyle = setFontStyle("noto-900", 84, "bold", "black");
textAnswerStyle = setFontStyle("noto-900", 82, "bold", "#464a91");
textOkStyle = setFontStyle("noto-900", 88, "bold", "red");
numberCaculateStyle = setFontStyle("noto-900", 69, "bold", "black");
