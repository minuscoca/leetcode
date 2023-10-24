import { LinkedList } from './class/LinkedList';

const list = new LinkedList<number>();
list.print();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.print();
list.reverse();
list.print();
console.log(list);
