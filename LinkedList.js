class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    
    getValue() {
        return this.value;
    }
    
    setValue(value) {
        this.value = value;
    }
    
    getNext() {
        return this.next;
    }
    
    setNext(next) {
        this.next = next;
    }
}

class LinkedList {
	constructor(initVal) {
	    const firstNode = new Node(initVal);
	    this.head = firstNode;
	    this.tail = firstNode;
	    this.length = 1;
	}


    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
   printList() {
        let temp = this.head;
       let list = '';
        while (temp !== null) {
            list += temp.getValue() + ', ';
            temp = temp.next;
        }
       console.log('Linked List =>', list);
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.head === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.setNext(newNode);
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    pop() {
        if (!this.head) return undefined;
        if (this.head == this.tail) {
            this.head = this.tail = null;
            this.length--;
            return undefined;
        }
        let temp = this.head;
        while(temp.next !== this.tail) {
            temp = temp.getNext();
        }
        this.tail = temp;
        temp = temp.getNext();
        this.tail.setNext(null);
        this.length--;
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        newNode.setNext(this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.length++;
        return true;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        const temp = this.head;
        this.head = this.head.getNext();
        temp.setNext(null);
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }
    
    get(index) {
        if (index < 0 || index >= this.length) {
			return undefined;
		}
		let temp = this.head;
		for(let i = 0; i < index; i++) {
			temp = temp.next;
		}
		return temp;
    }

	set(index, value) {
		const temp = this.get(index);
		if (temp) {
			temp.setValue(value);
			return true;
		}
		return false;
	}

    // This has issue
	insert(index, value) {
		if (index === 0) return this.unshift(value);
		if (index === this.length-1) return this.push(value);
		const temp = this.get(index - 1);
		if(!temp) return false;
		const newNode = new Node(value);
		newNode.setNext(temp.getNext());
		temp.setNext(newNode);
		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		const before = this.get(index - 1);
		const temp = before.getNext();
		before.setNext(temp.getNext());
		temp.setNext(null);
		this.length--;
		return temp;
	}

	reverse() {
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;
		let next = temp.getNext();
		let prev = null;
		for (let i = 0; i < this.length; i++) {
			next = temp.next;
			temp.next = prev;
			prev = temp;
			temp = next;
		}
		return this;
	}
}

let myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);