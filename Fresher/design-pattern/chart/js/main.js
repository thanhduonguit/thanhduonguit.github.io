// Variables
var canvas;
var context;
var canvas2;
var context2;
var context4;   

// Chart 1
var circleChart = (function() {
    var xScale = 1;
    var yScale = 0.5;
    var centerX = 220;
    var centerY = 300;
    var i;
    var data = [0.8, 0.2];
    // Draw circle chart
    function draw() {
        for (i = 90; i > 0; i--) {
            drawSuccess();
            drawFail();
            drawText();
        }
    }
    
    // Draw blue part
    function drawSuccess() {
        context.save();
        context.scale(xScale, yScale);
        context.beginPath();
        context.arc(centerX, centerY + i, 167, 0, 2 * Math.PI * data[0]);
        context.lineTo(centerX, centerY + i);
        context.restore();
        if (i == 1) {
            context.fillStyle = "#009ED5";
        } else {
            context.fillStyle = "#456AA4"
        }
        context.fill();
    }
    
    // Draw red part
    function drawFail() {
        context.save();
        context.scale(xScale, yScale);
        context.beginPath();
        context.arc(centerX + 15, centerY - 15 + i, 150, (2 * Math.PI * data[0]) + 0.01, -0.01);
        context.lineTo(centerX + 15, centerY - 15 + i);
        context.restore();
        if (i == 1) {
            context.fillStyle = "#E4322B";
        } else {
            context.fillStyle = "#E4322B";
        }
        context.fill();
    }

    // Draw line indicate to specific part
    // @param firstX - the horizontal position of starting point
    // @param firstY - the vertical position of starting point
    // @param secondX - the horizontal position of ending point
    // @param secondY - the vertical position of ending point
    // @param width - the width of the line
    // @param color - the color of the line
    function drawLine(firstX, firstY, secondX, secondY, width, color) {
        context.strokeStyle = color;
        context.lineWidth = 2;
        context.beginPath();
        context.fillStyle = color;
        context.moveTo(firstX, firstY);
        context.lineTo(firstX + width, firstY);
        context.lineTo(secondX, secondY);
        context.stroke();
    }
    // Draw line and fill entire text of the chart
    function drawText() {
        // Draw line 
        var lableSpace1 = 0;
        var lableSpace2 = 0;
        var lableX1 = 0;
        var lableX2 = 0;
        var lableY1 = 0;
        var lableY2 = 0;
        radian = 1 - data[0];
        lableSpace1 = (0 * 2 / 3) * xScale * Math.cos(2 * Math.PI * radian);
        lableSpace2 = (0 * 2 / 3) * yScale * Math.sin(2 * Math.PI * radian);
        lableX1 = (centerX + 20) * xScale + lableSpace1;
        lableY1 = (centerY - 2) * yScale - lableSpace2;
        lableX2 = 1.9 * centerX * xScale - lableX1;
        lableY2 = 2 * centerY * yScale - lableY1;
        if (data[0] >= 0.5) {
            drawLine(20, 50, lableX2, lableY2, 110, "#456AA4");
            drawLine(465, 30, lableX1, lableY1, -135, "#E4322B");
        } else {
            drawLine(20, 50, lableX1, lableY1, 110, "#456AA4");
            drawLine(465, 30, lableX2, lableY2, -135, "#E4322B");
        }

        // Fill text
        context.fillStyle = "#A29FA1";
        context.font = "18px Arial";
        context.fillText(data[0] * 100 + "% ĐÃ ĐẠT", 20, 45);
        context.fillText(data[1] * 100 + "% CHƯA ĐẠT", 330, 25);
        context.fillStyle = "#88D0DA";
        context.fillText("BIỂU ĐỒ TỔNG QUAN KHUNG NĂNG LỰC", 40, 320);
    }
    return {
        draw: draw
    };
})();

// Chart 2
var sineChart =(function() {
    function drawChart() {
        // Title text
        context2.beginPath();
        context2.fillStyle = "black"; 
        context2.font = "18px Arial";
        context2.fillText("RANK SCORE RANK", 180, 30);
        context2.fillText("QUY LAM VIEC", 150, 320);

        // Rotate text
        context2.save();
        context2.translate(20, 185);
        context2.rotate(-Math.PI / 2);
        context2.fillText("HISTORY", 0, 0);
        context2.restore();

        // Value of chart
        var space = 50;
        for(var scale = 4; scale >= 0; scale--) {
            context2.fillText(scale, 60, 30 + space);
            space+= 50;
        }
         //draw Oy
         context2.beginPath();
         context2.strokeStyle = "#000000";
         context2.moveTo(80, 50);
         context2.lineTo(80, 280);
         context2.stroke();
         //draw Ox
         context2.beginPath();
         context2.strokeStyle = "#000000";
         context2.moveTo(80, 280);
         context2.lineTo(440, 280);
         context2.stroke();

         //draw sine 
         context2.beginPath();
         context2.lineWidth = 5;
         context2.strokeStyle = "#00AEEF";
         context2.moveTo(100, 200);
         context2.bezierCurveTo(135, 197, 111, 103, 151, 100);
         context2.moveTo(149, 100);
         context2.bezierCurveTo(176, 100, 161, 200, 195, 200);
         context2.moveTo(195, 200);
         context2.bezierCurveTo(230, 197, 217, 100, 249, 100);
         context2.moveTo(248, 100);
         context2.bezierCurveTo(268, 107, 270, 173, 278, 170);
         context2.moveTo(276, 169);
         context2.bezierCurveTo(278, 172, 310, 180, 340, 150);
         context2.moveTo(340, 150);
         context2.bezierCurveTo(341, 149, 364, 100, 430, 100);
         context2.stroke();
    }
    return {
        draw : drawChart
    }
})();

// Chart 3
var pieChart = (function() {
    var datas = [10, 20, 10, 60];
    var colors = ["#4267B1", "#DB3D26", "#F8991D", "#189747"];
    var dataText = ["Xuất sắc", "Tốt", "Trung bình", "Kém"]

    // Draw a slice of the pie chart
    // @param positionX - Horizontal position of the starting point 
    // @param positionY - Vertical position of the starting point
    // @param radius - Radius of the slice
    // @param startAngle - The start angle of the slice
    // @param endAngle - The end angle of the slice
    // @param color - The color of the slice
    function drawSlice(positionX, positionY, radius, startAngle, endAngle, color) {
        context3.fillStyle = color;
        context3.beginPath();
        context3.moveTo(positionX, positionY);
        context3.arc(positionX, positionY, radius, startAngle, endAngle);
        context3.closePath();
        context3.fill();
    }
    
    // Draw pie chart and fill text
    function drawChart() {
        var offset = 75;
        var labelX;
        var labelY;
        var pieRadius = 75;
        var startAngle = -Math.PI / 2;
        for (var i = 0; i < datas.length; i++) {
            var sliceAngle = 2 * Math.PI * (datas[i] / 100);
            labelX = canvas3.width / 2 + (offset + (pieRadius / 2)) * Math.cos(startAngle + sliceAngle * 0.5);
            labelY = canvas3.height / 2 + (offset + (pieRadius / 2)) * Math.sin(startAngle + sliceAngle * 0.5);
            drawSlice(180, 200, 150, startAngle, startAngle + sliceAngle, colors[i]);
            drawText(datas[i] + "%", labelX - 90, labelY - 5);
            startAngle += sliceAngle;

        }
        // Call function circle white 
        drawSlice(180, 200, 75, 0, Math.PI * 2, "#ffffff");
        // Call function note square
        drawRect();
    }

    // Function for draw square and note square
    function drawRect() {
        var spaceY = 40;
        for(var i = 0; i < colors.length; i++) {
            context3.fillStyle = colors[i];
            context3.fillRect(360, 220 - spaceY, 30, 30);
            drawText(dataText[i], 400, 242 - spaceY);
            spaceY -= 40;
        }
    }

    // Fill text into specific slice
    // @param data - data to display
    // @param posX - Horizontal position where a text appear
    // @param posY - Vertical position where a text appear
    function drawText(data, posX, posY) {
        context3.fillStyle = "black";
        context3.font = "18px Arial";
        context3.fillText(data, posX, posY);
    }
    return {
        draw: drawChart
    };
})();

// Chart 4
var chartBar = (function() {
    function drawChart() {
        // Value, title of chart
        context4.beginPath();
        context4.fillStyle = "black"; 
        context4.font = "20px Arial";
        context4.fillText("BIỂU ĐỒ LỊCH SỬ LEVEL OF POSITION", 60, 30);
        context4.fillText("TEN DU AN", 150, 360);
        context4.fillText("LEFT", 400, 120);
        context4.fillText("OF", 400, 150);
        context4.fillText("POSITION", 400, 180);
        
        // Rotate text
        context4.save();
        context4.translate(20, 280);
        context4.rotate(-Math.PI / 2);
        context4.fillText("LEVEL OF POSITION", 0, 0);
        context4.restore();

        // Draw line behind column 
        var spaceY = 30;
        var spaceX = 30; 
        for (var i = 4; i >= 1; i--) {
            context4.fillText(i, 60, 50 + spaceY);
            context4.moveTo(60 + spaceX, 45 + spaceY);
            context4.lineTo(380, 45 + spaceY);
            context4.stroke();
            spaceY += 50;
        }
       
        // Draw Ox
        context4.beginPath();
        context4.strokeStyle = "black";
        context4.fillText("0", 60, 280);
        context4.moveTo(60 + spaceX, 275);
        context4.lineTo(380, 275);
        context4.stroke();

        // Draw square
        context4.fillStyle = "#3366CC";
        context4.fillRect(400, 70, 50, 25);

        // Add text in Ox
        context4.fillStyle = "black";
        context4.fillText("A", 100, 310);
        context4.fillText("B", 160, 310);
        context4.fillText("C", 220, 310);
        context4.fillText("E", 280, 310);
        context4.fillText("F", 340, 310);

        // Draw value of chart
        var data = [2, 0.1, 3, 4, 4];
        context4.fillStyle = "#3366CC";
        yScale = (canvas4.height - 199) / 4;
        xScale = (canvas4.width - 260) / 4;
        context4.translate(80, canvas4.height - 250 / 2);
        context4.scale(xScale, -1 * yScale);
        for (i = 0; i <= 4; i++) {
            context4.fillRect(i + 0.15, 0, 0.6, data[i]);
        }
    }
    return {
        draw : drawChart
    }
    
})();

$(document).ready(function() {
    canvas = document.getElementById("chart1");
    context = canvas.getContext("2d");
    circleChart.draw();

    canvas2 = document.getElementById("chart2");
    context2 = canvas2.getContext("2d");
    sineChart.draw();

    canvas3 = document.getElementById("chart3");
    context3 = canvas3.getContext("2d");
    pieChart.draw();

    canvas4 = document.getElementById("chart4");
    context4 = canvas4.getContext("2d");
    chartBar.draw();
});
