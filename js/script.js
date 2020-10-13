function setup() {
    createCanvas(800, 800);

    graph = new Graph(height - 200, 10, 5, 30);

    qs = new QuickSort();
    background(33, 33, 33);
    // qs.show();
    // qs.quickSort(0, 49);
    // noLoop();
}

function draw() {
    background(33, 33, 33);
    qs.show();
}

function mouseClicked() {
//     // graph.moveArrow(qs.lArrow, 1);
//     // graph.setArrow(qs.lArrow, 25);
//     // graph.moveVBound(qs.firstBound, 24)
//     // qs.swap(0, 49);
    qs.quickSort(0, graph.noOfElements-1);
//     // graph.elements[40].active = true;
}