# Data Structures and Algorithms

A simple implementation of most commonly used Data Structures in JavaScript.

# Installation

To install the package simply run the below command

```bash
npm install @tanishqvyas/dsa
```

# Table of Contents

1. Singly Linked List
2. Trie


# Singly Linked List

A simple implementation of `Singly Linked List` that supports the following operations:

* `push()`: Adds an element at the end of the linked list. 

* `pop()`: Removes an element from the end of the linked list and returns it.

* `shift()`: Removes an element from the beginning of the linked list and returns it.

* `unshift()`: Adds an element in the beginning of the linked list.

* `getMiddle()`: Returns the middle node of the linked list. If it does not exists then returns `null`.

* `display()`: Displays the contents of the linked list as strings.

* `reverse()`: Reverses the linked list.

## Singly Linked List Example

```javascript
import { SinglyLinkedList } from "@tanishqvyas/dsa"

const mySinglyLinkedList = SinglyLinkedList();

mySinglyLinkedList.push(1);
mySinglyLinkedList.unshift(2);
mySinglyLinkedList.push(3);

mySinglyLinkedList.getMiddle(); // returns 1

mySinglyLinkedList.pop(); // returns 3
mySinglyLinkedList.shift(); // returns 2

mySinglyLinkedList.display(); // shows 2

mySinglyLinkedList.push(1);
mySinglyLinkedList.reverse();

mySinglyLinkedList.display(); // shows 1 2
```


# Trie

A simple implementation of Trie aka Prefix Tree.

* `add()`: A method that takes in a string and adds it to the trie

* `delete()`: A method that takes in a string and removes it from the Trie. If the string is not present it does nothing.

* `contains()`: A method that takes in a string and checks whether it is present in the Trie.

# Example of Trie


```javascript
import { Trie } from "@tanishqvyas/dsa"

const myTrie = new Trie(['apple', 'banana']); // Optionally an array can be passed to prefill the Trie with these words

myTrie.add('Hello');

myTrie.contains('hello'); // false
myTrie.contains('apple'); // true

myTrie.contains('Hello'); // true

myTrie.delete('hello'); // does nothing

myTrie.delete('Hello'); // removes Hello from Trie
myTrie.delete('banana'); // removes banana from Trie

myTrie.contains('Hello'); // false;
myTrie.contains('banana'); // false;
myTrie.contains('apple'); // true;
```

# Contributions

For contributions to this package, please open a PR in [@tanishqvyas/dsa Github](https://github.com/tanishqvyas/dsa).