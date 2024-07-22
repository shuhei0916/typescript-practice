import { reverseArray } from "../src/sample"


test("a, b, cをいれたらc, b, aを返す", () => {
    expect(reverseArray()).toEqual(["c", "b", "a"]);
});

// test("a, b, c, dをいれたらd, c, b, aを返す", () => {
//     const result 
// }

