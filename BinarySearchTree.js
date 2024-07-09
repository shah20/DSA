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

    minValue(currentNode) {
        while(currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    #deleteNode(value, currentNode) {
        if(currentNode === null) return null;
        
        if(value < currentNode.value) {
            currentNode.left = this.#deleteNode(value, currentNode.left);
        } else if(value > currentNode.value) {
            currentNode.right = this.#deleteNode(value, currentNode.right);
        } else {
            if(currentNode.left === null && currentNode.right === null) {
                return null;
            } else if(currentNode.left === null) {
                currentNode = currentNode.right;
            } else if(currentNode.right === null) {
                currentNode = currentNode.left;
            } else {
                let subTreeMin = this.minValue(currentNode.right);
                currentNode.value = subTreeMin;
                currentNode.right = this.#deleteNode(subTreeMin, currentNode.right);
            }
        }

        return currentNode;
    }

    deleteNode(value) {
        this.root = this.#deleteNode(value, this.root);
    }

    BFS() {
        let currentNode = this.root;
        let queue = [];
        let result = [];

        queue.push(currentNode);

        while(queue.length) {
            currentNode = queue.shift();
            result.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }

        return result;
    }

    DFSPreOrder() {
        let result = [];

        function traverse(currentNode) {
            result.push(currentNode.value);
            if(currentNode.left) traverse(currentNode.left);
            if(currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);

        return result;
    }

    DFSInOrder() {
        let result = [];

        function traverse(currentNode) {
            if(currentNode.left) traverse(currentNode.left);
            result.push(currentNode.value);
            if(currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);

        return result;
    }

    DFSPostOrder() {
        let result = [];

        function traverse(currentNode) {
            if(currentNode.left) traverse(currentNode.left);
            if(currentNode.right) traverse(currentNode.right);
            result.push(currentNode.value);
        }
        traverse(this.root);

        return result;
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
