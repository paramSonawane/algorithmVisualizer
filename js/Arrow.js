class Arrow {
    constructor(index, x, y, color, width) {
        this.index = index;
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = width;
    }

    draw() {
        stroke(this.color);

        strokeWeight(2);

        line(this.x, this.y, this.x + 4, this.y + 10);
        line(this.x, this.y, this.x - 4, this.y + 10);
        line(this.x, this.y, this.x, this.y + 50);
    }

    move(direction) {
        this.index += direction;
        this.x += this.width * direction;
    }
}