import Stack from "../stack";

describe("Stack", () => {
  it("is created empty", () => {
    const stack = new Stack();
    expect(stack.topItemIndex).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("can push items to the top", () => {
    const stack = new Stack();
    stack.push("42");
    expect(stack.topItemIndex).toBe(0);
    expect(stack.peek).toBe("42");
  });

  it("can pop items", () => {
    const stack = new Stack();
    stack.push("item1"); // idx 0
    stack.push("item2"); // idx 1
    stack.push("item3"); // idx 2
    stack.pop();
    expect(stack.topItemIndex).toBe(1);
    expect(stack.peek).toBe("item2");
    stack.push("item42"); // idx 2
    expect(stack.peek).toBe("item42");
  });
});
