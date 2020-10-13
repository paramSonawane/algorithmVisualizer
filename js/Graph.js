class Graph {
    constructor(maxHeight, barsWidth, spacing, offset) {
        this.totalHeight = maxHeight;
        this.barsWidth = barsWidth;
        this.offset = offset;
        this.spacing = spacing;
        this.noOfElements = ceil((width - this.offset * 2) / (this.barsWidth + spacing));
        this.elements = [];

        for (let i = 0; i < this.noOfElements; ++i)
            this.elements.push(

                new Element(
                    random(50),
                    (i * (barsWidth + spacing)) + offset,
                    height - 100,
                    barsWidth,
                    this.totalHeight
                )

            );
    }

    show() {
        fill(25, 118, 210);
        this.elements.forEach((item) => { item.showBar() });
    }

    addArrow(atIndex, color) {
        if (atIndex >= 0 && atIndex < this.noOfElements)
            return new Arrow(
                atIndex,
                this.elements[atIndex].x + this.barsWidth / 2,
                this.elements[atIndex].y + this.barsWidth / 2,
                color,
                this.barsWidth + this.spacing
            );
    }
    setArrow(arrow, atIndex) {
        if (atIndex >= 0 && atIndex < this.noOfElements)
            arrow.x = this.elements[atIndex].x + this.barsWidth / 2;
    }

    moveArrow(arrow, direction) {
        if (arrow.index + direction >= 0 && arrow.index + direction < this.noOfElements)
            arrow.move(direction);
    }

    addVBound(atIndex, color) {
        if (atIndex >= 0 && atIndex < this.noOfElements)
            return new VBound(
                this.elements[atIndex].height + this.elements[atIndex].y,
                color
            );
    }

    moveVBound(bound, atIndex) {
        if (atIndex >= 0 && atIndex < this.noOfElements)
            bound.y = this.elements[atIndex].height + this.elements[atIndex].y;
    }
}