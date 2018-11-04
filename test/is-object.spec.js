import { isObject } from "../src/mini-type";

describe("isObject method", () => {
  it("returns false on string", () => {
    expect(isObject("test")).toBe(false);
  });

  it("returns false on number", () => {
    expect(isObject(1)).toBe(false);
  });

  it("returns false on function", () => {
    const mockFn = jest.fn();
    expect(isObject(mockFn)).toBe(false);
  });

  it("returns true on object", () => {
    expect(isObject({ test: "test" })).toBe(true);
  });

  it("returns false on null", () => {
    expect(isObject(null)).toBe(false);
  });

  it("returns false on undefined", () => {
    expect(isObject(undefined)).toBe(false);
  });

  it("returns false on array", () => {
    expect(isObject(["TEST"])).toBe(false);
  });

  it("returns false on true boolean", () => {
    expect(isObject(true)).toBe(false);
  });

  it("returns false on false boolean", () => {
    expect(isObject(false)).toBe(false);
  });
});
