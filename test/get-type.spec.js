import { getType } from "../src/mini-type";

describe("getType method", () => {
  it("returns undefined when no argument passed", () => {
    expect(getType()).toBe("undefined");
  });
  it("returns object", () => {
    expect(getType({})).toBe("object");
  });
  it("returns array", () => {
    expect(getType(["I AM A STRING IN AN ARRAY"])).toBe("array");
  });
  it("returns number", () => {
    expect(getType(123)).toBe("number");
  });
  it("returns string", () => {
    expect(getType("I AM A STRING")).toBe("string");
  });
  it("returns boolean", () => {
    expect(getType(true)).toBe("boolean");
  });
});
