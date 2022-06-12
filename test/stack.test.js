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

  it.todo("can pop items");
});
