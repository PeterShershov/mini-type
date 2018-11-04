import { isFunction } from "../src/mini-type";

describe("isFunction method", () => {
  it("returns false on string", () => {
    expect(isFunction("test")).toBe(false);
  });

  it("returns false on number", () => {
    expect(isFunction(1)).toBe(false);
  });

  it("returns true on function", () => {
    const mockFn = jest.fn();
    expect(isFunction(mockFn)).toBe(true);
  });

  it("returns false on object", () => {
    expect(isFunction({ test: "test" })).toBe(false);
  });

  it("returns false on null", () => {
    expect(isFunction(null)).toBe(false);
  });

  it("returns false on undefined", () => {
    expect(isFunction(undefined)).toBe(false);
  });

  it("returns false on array", () => {
    expect(isFunction(["TEST"])).toBe(false);
  });

  it("returns false on true boolean", () => {
    expect(isFunction(true)).toBe(false);
  });

  it("returns false on false boolean", () => {
    expect(isFunction(false)).toBe(false);
  });
});
