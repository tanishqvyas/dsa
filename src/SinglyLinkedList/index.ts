class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  #head: ListNode<T> | null;
  #tail: ListNode<T> | null;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  // Add a new node to the end of the list
  push(data: T): void {
    const newNode = new ListNode(data);

    if (this.#head === null || this.#tail === null) {
      this.#head = newNode;
      this.#tail = newNode;
      return;
    }

    this.#tail.next = newNode;
    this.#tail = newNode;
    return;
  }

  pop(): null | T {
    // no nodes
    if (this.#head === null) {
      return null;
    }

    // only one node
    if (this.#head.next === null) {
      const dataToDelete: T = this.#head.data;

      this.#head = null;
      this.#tail = null;

      return dataToDelete;
    }

    // more than one nodes
    let ptr: ListNode<T> = this.#head;
    let prev: ListNode<T> | null = null;
    while (ptr.next !== null) {
      prev = ptr;
      ptr = ptr.next;
    }

    this.#tail = prev;
    return ptr.data;
  }

  // Add a new node to the beginning of the list
  unshift(data: T): void {
    const newNode = new ListNode(data);

    if (this.#head === null) {
      this.#head = newNode;
      this.#tail = newNode;
      return;
    }

    newNode.next = this.#head;
    this.#head = newNode;
    return;
  }

  shift(): null | T {
    // no nodes
    if (this.#head === null) {
      return null;
    }

    // only one node
    if (this.#head.next === null) {
      const dataToDelete: T = this.#head.data;

      this.#head = null;
      this.#tail = null;

      return dataToDelete;
    }

    // more than one nodes
    const dataToDelete: T = this.#head.data;
    this.#head = this.#head.next;

    return dataToDelete;
  }

  getMiddle(): null | ListNode<T> {
    if (this.#head === null) {
      return null;
    }

    if (this.#head.next === null) {
      return this.#head;
    }

    let fast: null | ListNode<T> = this.#head;
    let slow: ListNode<T> = this.#head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next!; // slow.next will never be null
    }

    return slow;
  }

  display(): void {
    let ptr = this.#head;

    if (ptr === null) {
      console.log("Linked List is empty!");
      return;
    }

    while (ptr !== null) {
      console.log(ptr.data);
      ptr = ptr.next;
    }
    return;
  }

  reverse(): void {
    if (this.#head === null || this.#head.next === null) {
      return;
    }

    // more than one nodes
    let prev: null | ListNode<T> = null;
    let cur: null | ListNode<T> = this.#head;

    this.#tail = this.#head;

    while (cur !== null) {
      const hold: null | ListNode<T> = cur.next;
      cur.next = prev;
      prev = cur;
      cur = hold;
    }

    this.#head = prev;
    return;
  }
}
