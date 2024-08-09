import { add } from "../src/utils";

// Compare this snippet from src/utils.ts:

it("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
