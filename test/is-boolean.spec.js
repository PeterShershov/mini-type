import { isBoolean } from "../src/mini-type";

describe("isBoolean method", () => {
  it("returns false on string", () => {
    expect(isBoolean("test")).toBe(false);
  });

  it("returns false on number", () => {
    expect(isBoolean(1)).toBe(false);
  });

  it("returns false on function", () => {
    const mockFn = jest.fn();
    expect(isBoolean(mockFn)).toBe(false);
  });

  it("returns false on object", () => {
    expect(isBoolean({ test: "test" })).toBe(false);
  });

  it("returns false on null", () => {
    expect(isBoolean(null)).toBe(false);
  });

  it("returns false on undefined", () => {
    expect(isBoolean(undefined)).toBe(false);
  });

  it("returns false on array", () => {
    expect(isBoolean(["TEST"])).toBe(false);
  });

  it("returns true on true boolean", () => {
    expect(isBoolean(true)).toBe(true);
  });

  it("returns true on false boolean", () => {
    expect(isBoolean(false)).toBe(true);
  });
});
