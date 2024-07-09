class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true) {
            if(temp.value === newNode.value) return undefined;
            if(temp.value < newNode.value) {
                if(!temp.right) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
            else {
                if(!temp.left) {
                    temp.left = newNode
                    return this;
                }
                temp = temp.left
            }
        }
    }

    contains(value) {
        let temp = this.root;
        while(temp){
            if(temp.value === value) return true;
            if(temp.value < value)
                temp = temp.right;
            else
                temp = temp.left;
        }
        return false;
    }

    rContains(value, currentNode=this.root) {
        if(currentNode === null) return false;
        if(value === currentNode.value) return true;

        if(value < currentNode.value) {
            return this.rContains(value, currentNode.left);
        }
        return this.rContains(value, currentNode.right);
    }

    #rInsert(value, currentNode=this.root) {
        if(currentNode === null) return new Node(value);
        
        if(value < currentNode.value) {
            currentNode.left = this.#rInsert(value, currentNode.left);
        } else if(value > currentNode.value) {
            currentNode.right = this.#rInsert(value, currentNode.right);
        }

        return currentNode;
    }

    rInsert(value) {
        if(this.root === null) this.root = new Node(value);
        this.#rInsert(value);
    }
}

let myTree = new BST();
myTree.insert(5);
myTree.insert(9);
myTree.insert(8);
myTree.insert(10);
myTree.insert(3);
myTree.insert(4);
myTree.insert(2);
