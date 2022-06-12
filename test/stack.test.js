import Stack from "../stack";

describe("Stack", () => {
  it("is created empty", () => {
    const stack = new Stack();
    expect(stack.topItemIndex).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it.todo("can push items to the top");
  it.todo("can pop items");
});
