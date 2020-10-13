class Element {
    constructor(value, x, y, width, totalHeight) {
        this.value = value;
        this.x = x;
        this.y = y;
        this.height = map(value, 0, -50, 0, totalHeight);
        this.width = width;
        this.active = false;
    }

    showBar() {
        if (this.active) {
            strokeWeight(3)
            stroke(255, 223, 0);
        }
        else
            noStroke();
        rect(this.x, this.y, this.width, this.height);
    }
}