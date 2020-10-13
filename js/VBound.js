class VBound {
    constructor(y, color) {
        this.y = y;
        this.color = color;
    }

    draw() {
        strokeWeight(1);
        stroke(this.color)
        line(0, this.y, width, this.y);
    }
}