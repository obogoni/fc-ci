class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
  }

  push(value) {

    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    }
    else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }

  peek() {
    if (!this.head) return null;

    return this.head.value;
  }

  pop() {
    if (!this.head) return null;
    const popped = this.head.value;
    this.head = this.head.next;
    return popped;
  }

  toArray() {
    const arr = [];
    let curr = this.head;

    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }
    return arr;
  }
}

export { Queue };

