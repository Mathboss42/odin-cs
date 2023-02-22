class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    printList() {
        let currentNode = this.head;

        let arr = [];

        if (currentNode === null) {
            console.log('List is empty');
        } else {
            while(currentNode !== null) {
                arr.push(currentNode.value);
                currentNode = currentNode.nextNode;
            }
            
            const str = arr.join(' -> ');
            console.log(str);
        }
    }

    prepend(value) {
        let currentNode = this.head;

        if (currentNode === null) {
            this.head = new Node(value);
            return;
        } else {
            let newHead = new Node(value);
            newHead.nextNode = currentNode;
            this.head = newHead;
        }
    }

    append(value) {
        let currentNode = this.head;

        if (currentNode === null) {
            this.head = new Node(value);
            return;
        }

        if (currentNode.nextNode === null) {
            currentNode.nextNode = new Node(value);
        } else {
            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = new Node(value);
        }
    }  

    getSize() {
        let currentNode = this.head;
        
        if (currentNode === null) {
            return 0;
        } else {
            let size = 0;
            while (currentNode !== null) {
                size++;
                currentNode = currentNode.nextNode;
            }
            return size;
        }
    }

    getHead() {
        // return this.head; //if we want the actual node and not the value
        return this.head === null ? null : this.head.value; //if we want the value
    }

    getTail() {
        let currentNode = this.head;

        if (currentNode === null) {
            return null;
        } else {
            while(currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
            return currentNode.value; //if we want value
            return currentNode; //if we want node
        }
    }

    getNodeAt(index) {
        if (index >= this.getSize() || index < 0) {
            const err = new Error('Index does not exist.'); 
            throw err;
        } else {
            let currentNode = this.head;
            let i = 0;
            while (i < index) {
                currentNode = currentNode.nextNode;
                i++;
            }
            return currentNode.value;
            // return currentNode;
        }
    }

    pop() {
        let currentNode = this.head;
        
        if (currentNode === null) {
            return
        } else {
            while (currentNode.nextNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = null;
        }
    }
}


const list = new LinkedList();
list.printList();
console.log(list.getHead());
console.log(list.getTail());
console.log(list.getSize());
list.prepend('prepending');
list.printList();
console.log(list.getHead());
console.log(list.getTail());
console.log(list.getSize());

list.append(3);
list.append('HELLO');
list.append(345);
list.append('new word');
list.printList();
console.log(list.getSize());
console.log(list.getTail());


list.append('stg');
list.prepend(4);
list.printList();

console.log(list.getSize());

console.log(list.getHead());
console.log(list.getTail());
list.printList();
list.pop();
list.printList();
list.pop();
list.printList();
list.pop();
list.printList();
console.log(list.getSize());
console.log(list.getNodeAt(4));
