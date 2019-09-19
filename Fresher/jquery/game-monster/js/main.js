// Frame per second
const FPS = 60;
const TICKS = 1000 / FPS;

// Variables
var ctx = $("#containCanvas")[0].getContext("2d");
var ctxMenu = $("#menuCanvas")[0].getContext("2d");
var speedArr = [ 2, 2.5, 5, 10];  
var score = 100; 
var running = true;
var heart = 5;
var end = false; 
var highScore = 0; 
var level = 0; 
var speed = speedArr[0]; 
var boomNum = 3;
var bloodList = [];

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
var lastUpdateTime = Date.now();

// Init High Score Session Storage
if (sessionStorage.getItem("highscore") == null) {
	sessionStorage.setItem("highscore", 0);
} else {
	highScore = sessionStorage.getItem("highscore");
}

// Class Monster
function Monster(initX, initY, x, y, toX, toY, initToX, initToY, die, dieX, dieY, visible) {
	this.initX   = initX;   // position x default
	this.initY   = initY;   // position y default
	this.x       = x;       // position x current
	this.y       = y;       // position y current
	this.toX     = toX;     // move to position x
	this.toY     = toY;     // move to position y
	this.initToX = initToX; // move to position x default
	this.initToY = initToY; // move to position y default
	this.die     = die;     // boolean die
	this.dieX    = dieX;    // position x when die
	this.dieY    = dieY;    // position y when die
	this.visible = visible; // boolean visible
}

// Add method move monster
Monster.prototype.move = function() {
	if (this.x == this.toX && this.y == this.toY) {
		this.x = this.toX;
		this.y = this.toY;
		this.toX = this.initX;
		this.toY = this.initY;
	}
	if (this.x < this.toX) {
		this.x += speed;
	} else if (this.x > this.toX) {
		this.x -= speed;
	}
	if (this.y < this.toY) {
		this.y += speed;
	} else if (this.y > this.toY) {
		this.y -= speed;
	}

	// Disable monster
	if (this.x == this.initX && this.y == this.initY) {
		this.visible = false;
		this.x = this.initX;
		this.y = this.initY;
		this.toX = this.initToX;
		this.toY = this.initToY;
		score -= 5;
		randomMonster();
	}
};

// Init ojbect monster form class Monster
var monster1 = new Monster(0,   0,   0,   0,   120, 120, 120, 120, false, 0, 0, true);
var monster2 = new Monster(210, 0,   210, 0,   210, 120, 210, 120, false, 0, 0, false);
var monster3 = new Monster(420, 0,   420, 0,   300, 120, 300, 120, false, 0, 0, false);
var monster4 = new Monster(0,   210, 0,   210, 120, 210, 120, 210, false, 0, 0, false);
var monster5 = new Monster(420, 210, 420, 210, 300, 210, 300, 210, false, 0, 0, false);
var monster6 = new Monster(0,   420, 0,   420, 120, 300, 120, 300, false, 0, 0, false);
var monster7 = new Monster(210, 420, 210, 420, 210, 300, 210, 300, false, 0, 0, false);
var monster8 = new Monster(420, 420, 420, 420, 300, 300, 300, 300, false, 0, 0, false);
var monster = [monster1, monster2, monster3, monster4, monster5, monster6, monster7, monster8];

// Main Background
var bgImage = new Image();
bgImage.src = "images/mainbg.png";

// Menu Background
var mnImage = new Image();
mnImage.src = "images/menubg.png";

// Monster Terroza
var monsterImage = new Image();
var monsterTerrozaImage = new Image();
monsterTerrozaImage.src = "images/Terroza.png";
monsterImageSize = {
	width: 100,
	height: 100
};

// Monster Scary
var monsterScaryImage = new Image();
monsterScaryImage.src = "images/Scary.png";

// Monster Jake
var monsterJakeImage = new Image();
monsterJakeImage.src = "images/Jake.png";

// Monster Sea
var monsterSeaImage = new Image();
monsterSeaImage.src = "images/Sea.png";
monsterImage = monsterTerrozaImage;

// Blood
var bloodImage = new Image();
bloodImage.src = "images/blood.png";

// Bom
var boomImage = new Image();
boomImage.src = "images/bombb.png";

// Explosion
var explosionReady = false;
var explosionImage = new Image();
explosionImage.src = "images/boom.png";

// Heart
var heartImage = new Image();
heartImage.src = "images/heart.png";

// Pause
var pauseImage = new Image();
pauseImage.src = "images/pause_btn.png";

// Play
var playImage = new Image();
playImage.src = "images/play.png";

// Restart
var restartImage = new Image();
restartImage.src = "images/restart_btn.png";

// Game over
var overImage = new Image();
overImage.src = "images/over.png";

// SOUND EFFECT 
var swordrawSound = new Audio("sound/swordraw.wav");
var gameoverSound = new Audio("sound/gameover.wav");
var bombSound = new Audio("sound/bomb.wav");

// Event click container
var offsetContain = $("#containCanvas").offset();
containCanvas.addEventListener("click", function(e) {
	var xPosition = e.pageX - offsetContain.left;
	var yPosition = e.pageY - offsetContain.top;
	score -= 5;
	heart--;

	// If monster visible call clickMonster
	for(var i = 0; i < 8; i++){
		if (monster[i].visible) {
			clickMonster(xPosition, yPosition, monster[i]);
		}
	}
});

// Event click menu
var offsetMenu = $("#menuCanvas").offset();
menuCanvas.addEventListener("click", function(e){
	// Position mouse
	var xPosition = e.pageX - offsetMenu.left;
	var yPosition = e.pageY - offsetMenu.top;

	// Boom explosion
	if(xPosition > 430 && xPosition < 485 && yPosition > 25 && yPosition < 80) {
		killAll();
	}

	// Pause
	if(xPosition > 380 && xPosition < 420 && yPosition > 35 && yPosition < 75) {
		if(running == true) {
			running = false;
		}
		else if(running == false) {
			running = true;
			main();
		}
	}

	// Restart
	if(xPosition > 320 && xPosition < 360 && yPosition > 35 && yPosition < 75) {
		resetGame();
	}	
});

// Determine the monster clicked to define monster, blood, sound, score,..
function clickMonster(currX, currY, monster) {
	// Determine monster have clicked
	if (currX >= monster.x && currX <= monster.x + monsterImageSize.width && currY >= monster.y && currY <= monster.y + monsterImageSize.height) {
		score += 10;
		heart++;
		// Define monster died 
		monster.visible = false;
		monster.die = true;
		monster.dieX = currX;
		monster.dieY = currY;
		monster.x = monster.initX;
		monster.y = monster.initY;
		monster.toX = monster.initToX;
		monster.toY = monster.initToY;

		// Blood position
		var blood = {};
		blood.x = monster.dieX;
		blood.y = monster.dieY;

		// List blood
		bloodList[bloodList.length] = blood;
		if (bloodList.length > 5) {
			bloodList.splice(0, 1);
		}

		// Level
		var levelBefore = level;
		level = Math.floor((score - 50) / 100);
		if (level < levelBefore) {
			level = levelBefore;
		}
		if (level > 3) {
			level = 3;
		}
		for (li = 0; li <= level; li++) {
			randomMonster();
		}
		changeMonster(level);
		increaseSpeed(level);

		// Sound
		if(running){
			swordrawSound.play();
		}
	}
}

// Kill all Monster current
function killAll() {
	if (boomNum > 0 && end == false) {
		boomNum--;
		explosionReady = true;
		for(var i = 0; i < 8; i++){
			if (monster[i].visible == true) {
				monster[i].visible = false;
				score += 10;
			}
		}
		setTimeout(function() {
			randomMonster();
			explosionReady = false;
		}, 1000);		
		bombSound.play();
	}
}

// Define speed Monster
function increaseSpeed(level) {
	speed = speedArr[level];
}

// Change Monster with param level
function changeMonster(level) {
	switch(level) {
		case 1: 
		monsterImage = monsterScaryImage;
		break;
		case 2:
		monsterImage = monsterJakeImage; 
		break;
		case 3:
		monsterImage = monsterSeaImage;
		break;
		case 4:
		monsterImage = monsterSeaImage;
		break;
		default: 
		break;
	}
}

// Create Random Monster
function randomMonster() {
	var random = Math.floor((Math.random() * 8) + 1);
	switch (random) {
		case 1:
		if (!monster1.visible) {
			monster1.visible = true;
			monster1.die = false;
		}
		break;
		case 2:
		if (!monster2.visible) {
			monster2.visible = true;
			monster2.die = false;
		}
		break;
		case 3:
		if (!monster3.visible) {
			monster3.visible = true;
			monster3.die = false;
		}
		break;
		case 4:
		if (!monster4.visible) {
			monster4.visible = true;
			monster4.die = false;
		}
		break;
		case 5:
		if (!monster5.visible) {
			monster5.visible = true;
			monster5.die = false;
		}
		break;
		case 6:
		if (!monster6.visible) {
			monster6.visible = true;
			monster6.die = false;
		}
		break;
		case 7:
		if (!monster7.visible) {
			monster7.visible = true;
			monster7.die = false;
		}
		break;
		case 8:
		if (!monster8.visible) {
			monster8.visible = true;
			monster8.die = false;
		}
		break;
	}
}

// Render background, items, monster, score,... 
function render() {
	// Background
	ctx.drawImage(bgImage, 0, 0);

	// Boom no
	if(explosionReady) {
		ctx.drawImage(explosionImage, 7, 7, 500, 500);
	}

	// List blood
	if (bloodList.length > 0) {
		for (bi = 0; bi < bloodList.length; bi++) {
			ctx.drawImage(bloodImage, bloodList[bi].x - 50, bloodList[bi].y - 50);
		}
	}

	// Level
	ctx.fillStyle = "#F1F1F1";
	ctx.font = "24px Arial";
	ctx.fillText("Level: " + (level + 1), 25, 32);

	// Monster
	for(var i = 0; i < 8; i++){
		if (monster[i].visible)
			ctx.drawImage(monsterImage, monster[i].x, monster[i].y, 100, 100);
	}

	// Background menu
	ctxMenu.drawImage(mnImage, 0, 0);
	// Boom
	ctxMenu.drawImage(boomImage, 430, 25, 55, 55);
	// Pause
	ctxMenu.drawImage(pauseImage, 380, 35, 40, 40);	
	// Restart
	ctxMenu.drawImage(restartImage, 320, 35, 40, 40);
	// Heart img
	var xH = 90;
	for(h = 1; h <= heart; h++) {
		ctxMenu.drawImage(heartImage, xH, 15);
		xH += 34;
	}
	ctxMenu.font = "25px Arial";
	ctxMenu.fillStyle = "#FFF";
	// Heart
	ctxMenu.fillText("Heart:", 10, 35);
	// Score
	ctxMenu.fillText("Score: " + score, 10, 70);
	// Number Boom
	ctxMenu.fillText(boomNum, 465, 40);
}

// Update Game
function update() {
	for(var i = 0; i < 8; i++){
		if (monster[i].visible)
			monster[i].move();
	}
}

// Reset Game
function resetGame() {
	for(var i = 0; i < 8; i++){
		initMonster(monster[i]);
	}
	level = 0;
	end = false;
	running = true;
	score = 100;
	heart = 5;
	monsterImage = monsterTerrozaImage;
	highScore = sessionStorage.getItem("highscore");
	boomNum = 3;
	bloodList = [];
	monster1.visible = true;
	main();
}

// Set game over
function overGame() {
	end = true;
	running = false;
	gameoverSound.play();
}

// Init Monster with default property  
function initMonster(monster) {
	monster.x = monster.initX;
	monster.y = monster.initY;
	monster.toX = monster.initToX;
	monster.toY = monster.initToY;
	speed = speedArr[0];
	monster.die = false;
	monster.dieX = 0;
	monster.visible = false;
}

// Main function
function main() {
	if (heart < 1 || score < 0) {
		overGame();
	}
	var now = Date.now();
	var differentTime = now - lastUpdateTime;
	if (differentTime >= TICKS) {
		update();
		render();
		lastUpdateTime = now;
	}
	if (running) {
		requestAnimationFrame(main);
	} else if (!running && !end) {
		ctx.fillStyle = "#F1F1F1";
		ctx.font = "30px Arial";
		ctx.fillText("PAUSE", 200, 250);
	} else if (!running && end) {
		if (score > highScore) {
			highScore = score;
			sessionStorage.setItem("highscore", score);

			ctx.fillStyle = "#F1F1F1";
			ctx.font = "35px Arial bold";
			ctx.fillText("NEW HIGHSCORE: " + highScore, 100, 290);
		} else {
			ctx.fillStyle = "#F1F1F1";
			ctx.font = "35px Arial bold";
			ctx.fillText("SCORE: " + score, 150, 290);
		}
		ctx.fillStyle = "#ff0000";
		ctx.font = "50px Arial bold";
		ctx.fillText("GAME OVER", 120, 250);
	}
}

// Run
main();