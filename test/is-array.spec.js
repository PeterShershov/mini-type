import { isArray } from "../src/mini-type";

describe("isArray method", () => {
  it("returns false on string", () => {
    expect(isArray("test")).toBe(false);
  });

  it("returns false on number", () => {
    expect(isArray(1)).toBe(false);
  });

  it("returns false on function", () => {
    const mockFn = jest.fn();
    expect(isArray(mockFn)).toBe(false);
  });

  it("returns false on object", () => {
    expect(isArray({ test: "test" })).toBe(false);
  });

  it("returns false on null", () => {
    expect(isArray(null)).toBe(false);
  });

  it("returns false on undefined", () => {
    expect(isArray(undefined)).toBe(false);
  });

  it("returns true on array", () => {
    expect(isArray(["TEST"])).toBe(true);
  });

  it("returns false on true boolean", () => {
    expect(isArray(true)).toBe(false);
  });

  it("returns false on false boolean", () => {
    expect(isArray(false)).toBe(false);
  });
});
