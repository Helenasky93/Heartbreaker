class Sword {
    constructor(color) {
        this.swipes = [];
        // this.swipeSizes = [];
        this.color = color;

    }
    update() {
        if(this.swipes.length > SWORD_SIZE) {
            this.swipes.splice(0, 1);
            this.swipes.splice(0, 1);
        } else if(this.swipes.length > 0) {
            this.swipes.splice(0,1);
        }
    };

    checkForSlice(fruit) {
        if(fruit.sliced || this.swipes.length < 2) {
            return false;
        };

        var length = this.swipes.length;
        var stroke1 = this.swipes[length - 1];
        var stroke2 = this.swipes[length - 2];

        var d1 = dist(stroke1.x, stroke1.y, fruit.position.x, fruit.position.y);
        var d2 = dist(stroke2.x, stroke2.y, fruit.position.x, fruit.position.y);
        var d3 = dist(stroke1.x, stroke1.y, stroke2.x, stroke2.y);

        var sliced = d1 < fruit.size || ((d1 < d3 && d2 < d3) && d3 < SWORD_SIZE);
        fruit.sliced = sliced;
        return sliced;
    }
    
    draw() {
        for(var i = 0; i < this.swipes.length; i++) {
            var s = map(i, 0, this.swipes.length, 2, 20)
            noStroke();
            fill(this.color);
    
            ellipse(this.swipes[i].x, this.swipes[i].y, s)
        }
    };
    
    swipe(x,y) {
        this.swipes.push(createVector(x,y));
    };
}
