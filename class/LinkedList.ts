export class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(data: T) {
    this.value = data;
    this.next = null;
  }
}

export class LinkedList<T> {
  head: Node<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  prepend(value: T) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  append(value: T) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let last = this.head;
      if (last !== null) {
        while (last.next) {
          last = last.next;
        }
        last.next = node;
      }
    }
    this.size++;
  }

  insert(value: T, index: number) {
    // * validate index
    this._validateIndex(index);

    // * insert at head
    if (index === 0) {
      this.prepend(value);
    }

    // * insert at tail
    else if (index === this.size) {
      this.append(value);
      return;
    }

    // * insert at middle
    else {
      const node = new Node(value);
      const prev = this._findPrev(index);
      if (prev) {
        node.next = prev.next;
        prev.next = node;
      }
    }

    // * update size
    this.size++;
  }

  removeFrom(index: number) {
    // * validate index
    this._validateIndex(index);
    let removed: Node<T> | null = null;

    // * remove at head
    if (index === 0 && this.head) {
      removed = this.head;
      this.head = this.head.next;
    }

    // * remove at middle or tail
    else {
      const prev = this._findPrev(index);
      if (prev) {
        removed = prev.next;
        prev.next = removed?.next || null;
      }
    }

    // * update size
    this.size--;
    return removed?.value;
  }

  removeValue(value: T) {
    if (this.isEmpty()) {
      return null;
    }

    // * remove at head
    if (this.head?.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }

    // * remvoe at middle or tail
    else {
      let prev = this.head;
      while (prev?.next) {
        if (prev.next.value === value) break;
        prev = prev.next;
      }
      if (prev?.next) {
        const removed = prev.next;
        prev.next = removed.next;
        this.size--;
        return value;
      }

      return null;
    }
  }

  findIndex(value: T) {
    if (this.isEmpty()) {
      return -1;
    }

    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return i;
      curr = curr.next;
      i++;
    }
    return -1;
  }

  print() {
    if (this.isEmpty()) {
      console.log('List is empty');
    } else {
      let curr = this.head;
      let v = '';
      while (curr !== null) {
        v += `${curr.value} `;
        curr = curr.next;
      }
      console.log(v);
    }
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  private _validateIndex(index: number) {
    const isValid = index >= 0 && index < this.size;
    if (!isValid) {
      throw new Error('Invalid index');
    }
  }

  private _findPrev(index: number) {
    // * validate index
    this._validateIndex(index);
    let i = 0;
    let prev = this.head;
    while (i < index - 1 && prev) {
      prev = prev.next;
      i++;
    }
    return prev;
  }
}
