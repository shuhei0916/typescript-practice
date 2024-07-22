import { reverseArray } from "../src/sample"


test("a, b, cをいれたらc, b, aを返す", () => {
    expect(reverseArray(["a", "b", "c"])).toEqual(["c", "b", "a"]);
});

test("a, b, c, dをいれたらd, c, b, aを返す", () => {
    expect(reverseArray(["a", "b", "c", "d"])).toEqual(["d", "c", "b", "a"]);
});

