# Data Structures and Algorithms

A simple implementation of most commonly used Data Structures in JavaScript.

# Table of Contents

1. Singly Linked List


# Singly Linked List

A simple implementation of `Singly Linked List` that supports the following operations:

* `push()`: Adds an element at the end of the linked list. 

* `pop()`: Removes an element from the end of the linked list and returns it.

* `shift()`: Removes an element from the beginning of the linked list and returns it.

* `unshift()`: Adds an element in the beginning of the linked list.

* `getMiddle()`: Returns the middle node of the linked list. If it does not exists then returns `null`.

## Singly Linked List Example

```javascript

const mySinglyLinkedList = SinglyLinkedList();

mySinglyLinkedList.push(1);
mySinglyLinkedList.unshift(2);
mySinglyLinkedList.push(3);
mySinglyLinkedList.getMiddle(); // returns 1
mySinglyLinkedList.pop(); // returns 3
mySinglyLinkedList.shift(); // returns 2
```