// Random number - returns number between a and b
// @param a - min
// @param b - max
function randomInteger(a, b) {
    return a + Math.floor(Math.random() * (b - a));
}

// Random array
// @param array
function randomInArray(array) {
    var length = array.length;
    if(length < 1){
        return false;
    } else {
        var rand = randomInteger(0, length - 1);
        var re = false;
        $.each(array, function(index, value) {
            if (index === rand){
                re = this;
            }
        });
        return re;
    }
}

(function($) {
    var caro = function() {
        var play = this;
        this.cellMinX = 25;
        this.runtimeMinute = $(".js-game-runtime.minute");
        this.runtimeSecond = $(".js-game-runtime.second");
        this.runtimeMinuteValue = 0;
        this.runtimeSecondValue = 0;
        this.runtimeTimeout = '';

        // Function runtime - time to play game
        this.runtime = function() {
            this.runtimeSecondValue ++;
            if (this.runtimeSecondValue >= 59){
                this.runtimeSecondValue = 0;
                this.runtimeMinuteValue ++;
            }
            this.runtimeMinute.html(this.runtimeMinuteValue);
            this.runtimeSecond.html(this.runtimeSecondValue);
            this.runtimeTimeout = setTimeout(function() {
                play.runtime();
            }, 1000);
        };
        
        this.data = {
            cellWidth: 0,
            cellHeight: 0,
            cellPixelWidth: 0,
            cellPixelHeight: 0,
            status: 'ready',
            weightedMaxPerson: 0,
            weightedMaxMachine: 0,
            weightedAdd: [0, 1, 2, 10, 20]
        };

        // Function renderCell - render each cell element
        this.renderCell = function() {
            var str = '';
            for (i = 0; i < this.data.cellHeight; i++) {
                for (j = 0; j < this.data.cellWidth; j++) {
                    str += "<div class='display-inline-block game-cell' id='game-cell-" + j + "_" + i 
                    + "' data-x='" + j + "' data-y='" + i + "' data-person='0' data-machine='0'></div>";
                }
            }
            $("#game-content").html(str + "<div class='clear-both'></div>");
            $("#game-content .game-cell").css({
                'width': this.data.cellPixelWidth + 'px',
                'height': this.data.cellPixelHeight + 'px'
            });
            this.data.status = 'WAIT_USER';
            $(".game-cell").click(function() {
                play.userCheck(this);
            });
        };

        // Function cellCheck - check each player playing in the cell
        // @param slt - position of each element is browsed
        // @param obj - object
        this.cellCheck = function(slt, obj) {
            this.data.currentCheck = $(slt);
            $(slt).addClass(obj);
            if (obj === 'person') {
                this.data.status = 'WAIT_MACHINE';
            } else {
                this.data.status = 'WAIT_USER';
                $(slt).addClass('currentcheck');
                setTimeout(function () {
                    $(slt).removeClass('currentcheck');
                }, 500);
            }
            this.checkwin(slt, obj);
        };

        // Function userCheck - check person is playing in the cell
        // @param slt - position of each element is browsed
        this.userCheck = function(slt) {
            console.log("********************");
            console.log("Người chơi đi");
            if ($(slt).hasClass('machine') || $(slt).hasClass('person')) {
                alert("Không được đánh vào ô đã có sẵn!");
                return;
            } else {
                if (this.data.status === 'WAIT_USER') {
                    this.cellCheck(slt, 'person');
                    console.log("Người chơi đi xong");
                    this.machineCheck();
                } else {
                    // console.log("Chưa đến lượt người chơi");
                    alert('Vui lòng click "Play Again" để chơi lượt kế tiếp!')
                }
            }
        };

        // Function machineCheck - check machine is playing in the cell
        this.machineCheck = function() {
            console.log("Máy đi");
            if (this.data.status === 'WAIT_MACHINE') {
                // 1. Create weighted number for all cell
                $(".game-cell").attr("data-person", 0);
                $(".game-cell").attr("data-machine", 0);
                this.data.weightedMaxPerson = 0;
                this.data.weightedMaxMachine = 0;
                var arrNoCheck = $(".game-cell:not(.person):not(.machine)");
                if (arrNoCheck !== undefined) {
                    $.each(arrNoCheck, function(index, value) {
                        play.createWeightedNumber(this, 'machine');
                        play.createWeightedNumber(this, 'person');
                    });
                    // 2. Select the largest weighted cells and get one cell at random
                    if (this.data.weightedMaxMachine >= this.data.weightedMaxPerson) {
                        var cellMax = $(".game-cell[data-machine='" + this.data.weightedMaxMachine + "']");
                        var secondObj = 'person';
                    } else {
                        var cellMax = $(".game-cell[data-person='" + this.data.weightedMaxPerson + "']");
                        var secondObj = 'machine';
                    }
                    if (cellMax !== undefined) {
                        var weightedSecond = 0;
                        $.each(cellMax, function (index, value) {
                            var t = ($(this).attr("data-" + secondObj)) * 1;
                            if (t > weightedSecond){
                                weightedSecond = t;
                            }
                        });
                        var ar = [];
                        $.each(cellMax, function (index, value) {
                            if ($(this).attr("data-" + secondObj)*1 === weightedSecond){
                                ar.push(this);
                            }
                        });
                        var cellSellect = randomInArray(ar);
                        if (cellSellect !== false) {
                            this.cellCheck($(cellSellect), 'machine');
                        } else {
                            alert("no cell to machine check");
                        }
                    } else {
                        alert("no cell max to machine check");
                    }
                } else {
                    this.endgame();
                }
                console.log("Máy đi xong");
            } else {
                console.log("Chưa đến lượt máy đi");
            }
        };

        // Function competior - set competior for each other
        // @param obj - object
        this.competitor = function(obj) {
            if (obj.trim() === '') {
                return '';
            }
            if (obj === 'person') {
                return 'machine';
            }
            if (obj === 'machine') {
                return 'person';
            }
        };

        // Function validCellCoor
        // @param x - cell of x
        // @param y - cell of y
        this.validCellCoor = function(x, y) {
            return !(x < 0 || y < 0 || x >= this.data.cell_x || y >= this.data.cell_y);
        };

        // Function createWeightedNumber
        // @param slt - position of each element is browsed
        // @param obj - object
        this.createWeightedNumber = function(slt, obj) {
            var weightedNumber = 0;
            var cx = $(slt).attr("data-x") * 1.0;
            var cy = $(slt).attr("data-y") * 1.0;
            var ilenght = this.data.weightedAdd.length;

            for (var y = -1; y <= 1; y++) {
                for (var x = -1; x <= 1; x++) {
                    var nextcheck = true;
                    for (var i = 1; i < ilenght; i++) {
                        if (nextcheck === true 
                                && this.validCellCoor(cx + i * x, cy + i * y) === true
                                && this.validCellCoor(cx + (i+1) * x, cy + (i+1) * y) === true){
                            if ($("#game-cell-" + (cx + i * x) + "_" + (cy + i * y)).hasClass(obj)
                                    && ! $("#game-cell-" + (cx + (i+1) * x) + "_" + (cy + (i+1) * y)).hasClass(this.competitor(obj))) {
                                weightedNumber += this.data.weightedAdd[i];
                            } else {
                                nextcheck = false;
                            }
                        } else {
                            nextcheck = false;
                        }
                    }
                }
            }
            if (obj === 'person') {
                if (weightedNumber > this.data.weightedMaxPerson) {
                    this.data.weightedMaxPerson = weightedNumber;
                }
            } else {
                if (weightedNumber > this.data.weightedMaxMachine) {
                    this.data.weightedMaxMachine = weightedNumber;
                }
            }
            $(slt).attr("data-" + obj, weightedNumber);
        };

        // Function check win - check highlight color for 5 win cell 
        // @param slt - position of each element is browsed
        // @param obj - object
        this.checkwin = function(slt, obj) {
            var cx = $(slt).attr("data-x") * 1.0;
            var cy = $(slt).attr("data-y") * 1.0;
            var delta = [
                {x: 1, y: -1},
                {x: 1, y: 0},
                {x: 1, y: 1},
                {x: 0, y: 1}
            ];
            var ldelta = delta.length;
            
            for (var i = 0; i < ldelta; i++) {
                var cell1 = {x: cx, y: cy};
                var cell2 = {x: cx, y: cy};
                var mark = 1;
                var stt = 1;
                while (this.validCellCoor(cx + stt * delta[i].x, cy + stt * delta[i].y)
                        && $("#game-cell-" + (cx + stt * delta[i].x) + "_" + (cy + stt * delta[i].y)).hasClass(obj)
                        ) {
                    cell1.x = cx + stt * delta[i].x;
                    cell1.y = cy + stt * delta[i].y;
                    stt++;
                    mark ++;
                }
                var stt = 1;
                while (this.validCellCoor(cx - stt * delta[i].x, cy - stt * delta[i].y)
                        && $("#game-cell-" + (cx - stt * delta[i].x) + "_" + (cy - stt * delta[i].y)).hasClass(obj)
                        ) {
                    cell2.x = cx - stt * delta[i].x;
                    cell2.y = cy - stt * delta[i].y;
                    stt++;
                    mark ++;
                }
                if (mark >= 5) {
                    this.win(cell1, cell2, obj, mark);
                }
            }
        };

        // Function check win - check highlight color for 5 win cell 
        // @param cell1 - number cell of person
        // @param cell2 - number cell of machine
        // @param obj - object
        // @param mark - when mark >= 5
        this.win = function(cell1, cell2, obj, mark) {
            this.data.status = obj + "win";
            var delta = {
                x: (cell2.x - cell1.x) / (mark - 1),
                y: (cell2.y - cell1.y) / (mark - 1)
            };
            for (var i = 0; i < mark; i++) {
                $("#game-cell-" + (cell1.x + i * delta.x) + "_" + (cell1.y + i * delta.y)).addClass('win');
            }
            this.endgame();
        };

        // Function reset new game
        this.resetNewGame = function() {
            this.data.status = 'ready';
            var gameContent = $("#game-content");
            var w = gameContent.width();
            var h = gameContent.height();
            var bh = $(window).height();
            if (h > bh) {
                h = bh;
                gameContent.css({'height':h+'px'});
            }
            this.data.cellWidth = Math.floor(w / this.cellMinX);
            this.data.cellHeight = Math.floor(h / this.cellMinX);
            this.data.cellPixelWidth = w / this.data.cellWidth;
            this.data.cellPixelHeight = h / this.data.cellHeight;
            this.renderCell();
            this.runtimeMinute.html("00");
            this.runtimeSecond.html('00');
            this.runtimeMinuteValue = 0;
            this.runtimeSecondValue = 0;
            clearTimeout(this.runtimeTimeout);
            this.runtime();
        };

        // Function end game
        this.endgame = function() {
            console.log('End game...!')
            alert('End game...!');
            clearTimeout(this.runtimeTimeout);
        };
        this.resetNewGame();
    
        $(".js-control").click(function() {
            play.resetNewGame();
        });
    };

    new caro();
})($);