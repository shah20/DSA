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
}

let myTree = new BST();
myTree.insert(5);
myTree.insert(9);
myTree.insert(8);
myTree.insert(10);
myTree.insert(3);
myTree.insert(4);
myTree.insert(2);
