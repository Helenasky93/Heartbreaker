
const GRAVITY = 0.2;
const BAD_FRUIT_PROBABILITY = 0.9;
const SWORD_SIZE = 20;

var sword;
var fruit = [];
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
    score += handleFruit();
    drawLives();
    drawScore();

    

}
function handleFruit() {

    if(frameCount % 10 === 0) {
        if (noise(frameCount) > 0.66) {
            fruit.push(Fruit.prototype.randomFruit());
        };
        
        console.log(fruit);
    };

    var points = 0;
    for(var i = fruit.length - 1; i >= 0; i--) {
        fruit[i].update();
        fruit[i].draw();

        if (!fruit[i].visible) {
            if (!fruit[i].sliced && !fruit[i].bad) {
                lives--;
            };

            if (lives < 1) {
                endGame();
            };

            fruit.splice(i,1);
        } else {
            points += (sword.checkForSlice(fruit[i])) ? 1 : 0;
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
    noStroke();
    fill('#888888');
    textSize(100);
    text("You fell in love!", width / 2, height / 2);


};