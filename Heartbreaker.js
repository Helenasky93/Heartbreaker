
var sword;
function setup() {
createCanvas(600,400);
sword = new Sword(color("#FFF0EE"));
}

function draw() {
    background(51);

    if(mouseIsPressed) {
        sword.swipe(mouseX, mouseY);
    }

    if(frameCount % 2 === 0)
        sword.update();

    sword.draw();
}