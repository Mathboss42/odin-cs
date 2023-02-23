class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.array = [...new Set(array.sort((a, b) => a - b))];
        this.root = this.buildTree();
    }

    buildTree(array = this.array, start = 0, end = this.array.length - 1) {
        if (start > end) {
            return null;
        }

        const mid = parseInt((start + end) / 2);
        const newNode = new Node(array[mid]); 

        newNode.left = this.buildTree(array, start, mid - 1);
        newNode.right = this.buildTree(array, mid + 1, end);
        
        return newNode;
    }

    prettyPrint(node, prefix = '', isLeft = true) {
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }

    insertCheat(value) { //this is the first method that came to mind, though I'm guessing it kind of goes against the exercise, plus changes tree structure so doesn't really work
        this.array.push(value);
        this.array = [...new Set(this.array.sort((a, b) => a - b))];
        this.root = this.buildTree();
        console.log('insert array', this.array)
    }

    insert(value) {
        this.root = this.insertRec(value);
    }

    insertRec(value, node = tree.root) {
        if (node === null) {
            node = new Node(value);
            return node;
        }

        if (value < node.value) {
            node.left = this.insertRec(value, node.left);
        } else if (value > node.value) {
            node.right = this.insertRec(value, node.right);
        }

        return node;
    }

    removeCheat(value) { //same comment as insertCheat
        console.log('array', this.array);
        this.array.splice(this.array.indexOf(value), 1);
        console.log('array', this.array);
        this.array = [...new Set(this.array.sort((a, b) => a - b))];
        this.root = this.buildTree();
    }

    remove(value) {
        this.root = this.removeRec(value);
    }

    removeRec(value, node = this.root) {
        if (node === null) {
            return node;
        }

        if (value < node.value) {
            node.left = this.removeRec(value, node.left);
        } else if (value > node.value) {
            node.right = this.removeRec(value, node.right);
        } else {
            if (node.left === null && node.right === null) {
                return null;
            } else if (node.left !== null && node.right === null) {
                return node.left;
            } else if (node.left === null && node.right !== null) {
                return node.right;
            } else {
                node.value = this.getMinVal(node.right);
                node.right = this.removeRec(node.value, node.right);
            }
        }
        
        return node;
    }

    getMinVal(node) {
        let minValue = node.value;

        while (node.left !== null) {
            minValue = node.left.value;
            node = node.left;
        }

        return minValue;
    }
}

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.prettyPrint(tree.root);
tree.insert(222);
// tree.insertCheat(222);
tree.prettyPrint(tree.root);
// tree.removeCheat(7);
tree.remove(4);
tree.prettyPrint(tree.root);
