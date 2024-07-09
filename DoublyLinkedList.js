class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
	constructor(initVal) {
	    const firstNode = new Node(initVal);
	    this.head = firstNode;
	    this.tail = firstNode;
	    this.length = 1;
	}

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(this.length === 0) return undefined;
        let temp = this.tail;
        if(this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.head = this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if(this.length === 0) return undefined;
        const temp = this.head;
        if(this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    get(index) {
        if(this.length === 0) return undefined;
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        if(index < this.length/2) {
            for(let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for(let i = this.length-1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    set(index, value) {
        let temp = this.get(index);
        if(temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
        if(index < 0 || index > this.length) return undefined;
        
        const newNode = new Node(value);
        let temp = this.get(index);
        
        newNode.prev = temp.prev;
        newNode.next = temp;
        newNode.prev.next = newNode;
        temp.prev = newNode;
        this.length++;
        return true;
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    remove(index) {
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;

        let temp = this.get(index);
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = temp.prev = null;
        this.length--;
        return temp;
    }
}

let myLinkedList = new DoublyLinkedList(0);
myLinkedList.push(1);