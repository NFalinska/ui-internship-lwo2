class Node {
  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
    this.next = null;
  }
}
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }
  push(value) {
    const node = new Node(value, this.tail);
    if (this.head === null) {
      this.head = node;
    }
    if (this.tail !== null) {
      this.tail.next = node;
    }
    this.tail = node;
    this.amount++;
  }
  pop() {
    const node = this.tail;
    if (node === null) {
      return null;
    }
    this.tail = node.prev;
    if (this.tail !== null) {
      this.tail.next = null;
    }
    if (this.head === node) {
      this.head = null;
    }
    this.amount--;
    return node.value;
  }
  iterate(callback) {
    let current = this.head;
    while (current !== null) {
      callback(current);
      current = current.next;
    }
  }
  insertAfter(valueToFind, valueToInsert) {
    let current = this.head;
    while (current !== null) {
      if (current.value === valueToFind) {
        const node = new Node(valueToInsert, current);
        if (current === this.tail) {
          this.tail = node;
        }
        if (current.next !== null) {
          node.next = current.next;
          current.next.prev = node.next;
        }
        current.next = node;
        this.amount++;
        break;
      }
      current = current.next;
    }
    return false;
  }
  removeItem(valueToRemove) {
    let current = this.head;
    while (current !== null) {
      if (current.value === valueToRemove) {
        if (current.prev !== null) {
          current.prev.next = current.next;
        }
        if (current.next !== null) {
          current.next.prev = current.prev;
        }
        if (current === this.head) {
          this.head = current.next;
        }
        if (current === this.tail) {
          this.tail = current.prev;
        }
        this.amount--;
        break;
      }
      current = current.next;
    }
    return true;
  }
}
