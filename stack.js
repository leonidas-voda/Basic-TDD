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
    // console.log("PEEK", this.items);
    return this.items[this.topItemIndex];
  }

  pop() {
    /* 
    just point to the previous index,
    item will still exist in the stack 
    but will be overwritten as soon as we push another item
    */
    this.topItemIndex--;
    // console.log("POPPED one, topItemIndex", this.topItemIndex);
    // console.log("POPPED one, items", this.items);
  }
}

export default Stack;
