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

    // * insert at start
    if (index === 0) {
      this.prepend(value);
    }

    // * insert at end
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

    // * remove at start
    if (index === 0 && this.head) {
      removed = this.head;
      this.head = this.head.next;
    }

    // * remove at middle or end
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
