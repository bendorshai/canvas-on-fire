function Direction(x, y) {
    if (x) {
        this.x = x;
    }
    else {
        this.x = 0;
    }
    
    if (y) {
        this.y = y;
    }
    else {
        this.y =0;
    }
    this.up = function() {
        return new Direction(this.x, this.y-1);
    }
    this.down = function() {
        return new Direction(this.x, this.y+1);
    }
    this.right = function() {
        return new Direction(this.x+1, this.y);
    }
    this.left = function() {
        return new Direction(this.x-1, this.y);
    }
}