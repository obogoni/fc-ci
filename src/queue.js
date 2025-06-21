class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
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
      while (curr.prev) {
        curr = curr.prev;
      }
      curr.prev = node;
    }
  }

  peek() {
    return this.head?.value;
  }

  pop() {
    if (!this.head) return null;
    const popped = this.head.value;
    this.head = this.head.prev;
    return popped;
  }

  toArray() {
    const arr = [];
    let curr = this.head;

    while (curr) {
      arr.push(curr.value);
      curr = curr.prev;
    }
    return arr;
  }
}

export { Queue };

