function Sword(c) {
    this.swipes = [];
    this.swipeSizes = [];
    this.c = c;
}

Sword.prototype.update = function() {
    if(this.swipes.length > 0) {
        this.swipes.splice(0,1);
    }
};

Sword.prototype.draw = function() {
    for(var i = 0; i < this.swipes.length; i++) {
        var s = map(i, 0, this.swipes.length, 2, 20)
        noStroke();
        fill(this.c);

        ellipse(this.swipes[i].x, this.swipes[i].y, s)
    }
};

Sword.prototype.swipe = function(x,y) {
    this.swipes.push(createVector(x,y));
};