
const GRAVITY = 0.2;
const BAD_HEART_PROBABILITY = 0.9;
const SWORD_SIZE = 20;

var sword;
var heart = [];
var lives;
var score;

function setup() {
    createCanvas(600,400);
    sword = new Sword(color("#FFF0EE"));
    frameRate(60);
    lives = 3;
    score = 0;
}

function draw() {
    background('#fae');

    if(mouseIsPressed) {
        sword.swipe(mouseX, mouseY);
    }

    if(frameCount % 2 === 0) {
        sword.update();
    }

    sword.draw();
    score += handleHeart();
    drawLives();
    drawScore();

    

}

function instructions() {
    noLoop();
    textAlign(CENTER);
    stroke(10);
    fill('#888888');
    textSize(10);
    text("use the sword to break as many hearts as possible");
    


}

function handleHeart() {

    if(frameCount % 10 === 0) {
        if (noise(frameCount) > 0.66) {
            heart.push(Heart.prototype.randomHeart());
        };
        
        console.log(heart);
    };

    var points = 0;
    for(var i = heart.length - 1; i >= 0; i--) {
        heart[i].update();
        heart[i].draw();

        if (!heart[i].visible) {
            if (!heart[i].sliced && !heart[i].bad) {
                lives--;
            };

            if (lives < 1) {
                endGame();
            };

            heart.splice(i,1);
        } else {
            points += (sword.checkForSlice(heart[i])) ? 1 : 0;
        }
    };

   return points; 

};

function drawLives() {
    stroke(255);
    strokeWeight(3);
    fill("#FF00EE");

    for (var i = lives; i > 0; i--) {
        ellipse(width - (i * 20 + 20), 50, 20);
    }
}

function drawScore() {
    textAlign(LEFT);
    noStroke();
    fill(255);
    textSize(50);
    text(score, 10, 50);
}

function endGame() {
    noLoop();
    textAlign(CENTER);
    stroke(10);
    fill('#888888');
    textSize(60);
    text("You fell in love!", width / 2, height / 2);


};