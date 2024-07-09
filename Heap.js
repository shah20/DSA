class Heap {
    #heap = [];

    getHeap() {
        return [...this.#heap];
    }

    #leftChild(index) {
        return 2 * index + 1;
    }

    #rightChild(index) {
        return 2 * index + 2;
    }

    #parent(index) {
        return Math.floor((index - 1) / 2);
    }

    #swap(index1, index2) {
        [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
    }

    #sinkDown(index) {
        let maxIndex = index;
        let size = this.#heap.length;
        
        while(true) {
            let leftIndex = this.#leftChild(index);
            let rightIndex = this.#rightChild(index);

            if(leftIndex < size && this.#heap[leftIndex] > this.#heap[maxIndex]) {
                maxIndex = leftIndex;
            }

            if(rightIndex < size && this.#heap[rightIndex] > this.#heap[maxIndex]) {
                maxIndex = rightIndex;
            }

            if (maxIndex !== index) {
                this.#swap(index, maxIndex);
                index = maxIndex;
            } else {
                return;
            }
        }
    }

    insert(value) {
        this.#heap.push(value);
        let current = this.#heap.length - 1;
        
        while (current > 0 && this.#heap[current] > this.#heap[this.#parent(current)]) {
            this.#swap(current, this.#parent(current));
            current = this.#parent(current);
        }
    }

    remove() {
        if(this.#heap.length === 0) return null;
        if(this.#heap.length === 1) return this.#heap.pop();

        const maxValue = this.#heap[0];
        this.#heap[0] = this.#heap.pop();
        this.#sinkDown(0);

        return maxValue;
    }
}

const myHeap = new Heap();
myHeap.insert(95);
myHeap.insert(75);
myHeap.insert(80);
myHeap.insert(55);
myHeap.insert(60);
myHeap.insert(50);
myHeap.insert(65);

console.log(myHeap.getHeap());

myHeap.remove();
console.log(myHeap.getHeap());

myHeap.remove();
console.log(myHeap.getHeap());
