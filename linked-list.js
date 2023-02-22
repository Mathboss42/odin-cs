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
        return this.head; //if we want the actual node and not the value
        // return this.head === null ? null : this.head.value; //if we want the value
    }

    getTail() {
        let currentNode = this.head;

        if (currentNode === null) {
            return null;
        } else {
            while(currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
            // return currentNode.value; //if we want value
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
            // return currentNode.value; //value
            return currentNode; //node
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

    contains(value) {
        let currentNode = this.head;

        if (currentNode === null) {
            return false;
        } else {
            while (currentNode !== null) {
                if (currentNode.value === value) {
                    return true;
                }
                currentNode = currentNode.nextNode;
            }
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;

        if (!this.contains(value)) {
            const err = new Error(`${value} is not part of the list.`);
        } else {
            let i = 0;
            while (currentNode !== null) {
                if (currentNode.value === value) {
                    return i;
                }
                currentNode = currentNode.nextNode;
                i++;
            }
        }
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        let previousNode = this.getNodeAt(index-1);
        let currentNode = this.getNodeAt(index);

        const newNode = new Node(value);

        previousNode.nextNode = newNode;
        newNode.nextNode = currentNode;
    }

    removeAt(index) {
        if (index < 0) {
            const err = new Error('Invalid index.');
            throw err;
        }

        if (index === 0) {
            this.head = this.head.nextNode;
            return;
        }

        let previousNode = this.getNodeAt(index-1);
        let currentNode = this.getNodeAt(index);

        previousNode.nextNode = currentNode.nextNode;
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
console.log(list.getNodeAt(2));
console.log('find', list.find(4));

list.printList();
console.log(list.contains(4));

list.insertAt('My Cool Name', 0);
list.printList();

list.removeAt(0);
list.printList();

list.removeAt(2);
list.printList();

list.removeAt(2);
list.printList();