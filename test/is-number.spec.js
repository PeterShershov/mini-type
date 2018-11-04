import { isNumber } from "../src/mini-type";

describe("isNumber method", () => {
  it("returns false on string", () => {
    expect(isNumber("test")).toBe(false);
  });

  it("returns true on number", () => {
    expect(isNumber(1)).toBe(true);
  });

  it("returns false on function", () => {
    const mockFn = jest.fn();
    expect(isNumber(mockFn)).toBe(false);
  });

  it("returns false on object", () => {
    expect(isNumber({ test: "test" })).toBe(false);
  });

  it("returns false on null", () => {
    expect(isNumber(null)).toBe(false);
  });

  it("returns false on undefined", () => {
    expect(isNumber(undefined)).toBe(false);
  });

  it("returns false on array", () => {
    expect(isNumber(["TEST"])).toBe(false);
  });

  it("returns false on true boolean", () => {
    expect(isNumber(true)).toBe(false);
  });

  it("returns false on false boolean", () => {
    expect(isNumber(false)).toBe(false);
  });
});
