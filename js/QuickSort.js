class QuickSort {
    constructor() {
        this.lArrow = graph.addArrow(0, 'blue');
        this.firstBound = graph.addVBound(0, 'grey');

        this.rArrow = graph.addArrow(graph.noOfElements - 1, 'red');
        // this.lastBound = graph.addVBound(graph.noOfElements-1, 'grey');
    }

    show() {
        graph.show();
        this.lArrow.draw();
        this.rArrow.draw();
        this.firstBound.draw();
        // this.lastBound.draw();
    }

    swap(a, b) {
        let temp = graph.elements[a].height
        graph.elements[a].height = graph.elements[b].height
        graph.elements[b].height = temp;
        temp = graph.elements[a].value
        graph.elements[a].value = graph.elements[b].value
        graph.elements[b].value = temp;

    }

    partition(low, high) {
    //         background(33, 33, 33);
    // qs.show();
        let pivot = graph.elements[high].value;// pivot
        graph.elements[high].active = true;
        graph.moveVBound(this.firstBound, high);

        let i = (low - 1); // Index of smaller element
        graph.setArrow(this.lArrow, i);

        for (let j = low; j <= high - 1; ++j) {
            graph.setArrow(this.rArrow, j);
            // let timeStamp = Date.now() + 50;
            // while(timeStamp > Date.now());
            // clear();
            redraw();
            // while(Date.now() != timeStamp);
            // If current element is smaller than the pivot
            if (graph.elements[j].value < pivot) {
                i++; // increment index of smaller element
                this.swap(i, j);
            }
        }
        this.swap(i + 1, high);
        graph.elements[high].active = false;
        return (i + 1);
    }

    quickSort(low, high) {
        if (low < high) {
            /* pi is partitioning index, arr[p] is now
            at right place */
            let pi = this.partition(low, high);

            // Separately sort elements before
            // partition and after partition
            this.quickSort(low, pi - 1);
            this.quickSort(pi + 1, high);
        }
    }
}