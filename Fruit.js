class Fruit {
    constructor(x,y,size,color,bad) {
        this.position = createVector(x,y);
        this.color = color;
        this.bad = bad;
        this.size = size;
        this.velocity = createVector(this.randomVelocity(x), random(-7,-11));
        this.sliced = false;
        this.slicedTime = 0;
        this.visible = true;
    }

    update() {
        this.position.add(this.velocity); 
        this.velocity.x *= 0.99;
        this.velocity.y += GRAVITY;
        this.visible = this.position.y < height;

        if(this.sliced) {
            this.slicedTime++;
        };

    }

    draw() {
        var fillColor = this.color;

        if(this.sliced) {
            if(this.bad) {
                endGame();
            }
            var interp = constrain(this.slicedTime, 0, 15) / 15;
            fillColor = lerpColor(this.color, color('#fae'), interp); 
            
        }

        if(this.bad) {
            stroke(0);
            strokeWeight(5);
        } else {
            noStroke();
        };

        fill(fillColor);
        let x = this.position.x;
        let y = this.position.y;
        let size = this.size;
        beginShape();
        vertex(x, y);
        bezierVertex(x - size / 2, y - size / 2,x - size, y + size / 3, x, y + size);
        bezierVertex(x + size, y + size / 3, x + size / 3, y - size / 2, x, y);
        endShape(CLOSE);


    }

    randomFruit() {
        var x = random(width);
        var y = height;
        var size = noise(frameCount) * 20 + 20;
        var bad = (random() > BAD_FRUIT_PROBABILITY);
        var r = (bad) ? 225 : 255;
        var g = (bad) ? 0 : noise(frameCount * 2) * 255;
        var b = (bad) ? 0 : noise(frameCount * 3) * 255;
        var col = color(r,g,b);
        
        return new Fruit(x,y,size,col,bad);
    }

    randomVelocity(x) {
        if (x < width /2) {
            return random(-1.5, -0.5);
        } else {
            return random(0.5, 1.5);
        }
    }
}