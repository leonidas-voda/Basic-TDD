class Stack {
  constructor() {
    // top item index is -1 when the stack is created empty
    this.topItemIndex = -1;
    // stack items is an empty object
    this.items = {};
  }

  push(item) {
    this.topItemIndex++;
    this.items[this.topItemIndex] = item;
  }

  get peek() {
    // console.log(this.items);
    return this.items[this.topItemIndex];
  }
}

export default Stack;
