import { toObject } from '../libs/array';

export class Queue<T> {
  items: T[];

  constructor(initItems: T[] = []) {
    this.items = initItems;
  }

  enqueue(element: T) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0] ?? null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

export class OptimizedQueue<T> {
  items: Record<string, T>;
  frontIndex: number;
  rearIndex: number;

  constructor(init: T[] = []) {
    this.items = init ? toObject(init) : {};
    this.frontIndex = 0;
    this.rearIndex = init ? init.length : 0;
  }

  enqueue(element: T) {
    this.items[this.rearIndex] = element;
    this.rearIndex++;
  }

  dequeue() {
    const frontItem = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return frontItem;
  }

  peek() {
    return this.items[this.frontIndex];
  }

  isEmpty() {
    return this.frontIndex === this.rearIndex;
  }

  size() {
    return this.rearIndex - this.frontIndex;
  }
}

export class CircularQueue<T> {
  items: Record<string, T>;
  limit: number;
  front: number;
  rear: number;

  constructor() {
    this.items = {};
    this.limit = 5;
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element: T) {
    const ref = this.items[this.rear % this.limit];
    if (ref === undefined) {
      this.items[this.rear % this.limit] = element;
      this.rear++;
    } else {
      throw new Error('Queue limitation reached.');
    }
  }

  dequeue() {
    const item = this.items[this.front % this.limit];
    delete this.items[this.front % this.limit];
    this.front++;
    return item;
  }

  peek() {
    return this.items[this.front % this.limit];
  }

  isEmpty() {
    return this.front === this.rear;
  }

  isFull() {
    return this.rear - this.front === this.limit;
  }

  size() {
    return this.rear - this.front;
  }
}
