import { isString } from "../src/mini-type";

describe("isString method", () => {
	it("returns true on string", () => {
		expect(isString("test")).toBe(true);
	})

	it("returns false on number", () => {
		expect(isString(1)).toBe(false);
	})

	it("returns false on function", () => {
		const mockFn = jest.fn();
		expect(isString(mockFn)).toBe(false);
	})

	it("returns false on object", () => {
		expect(isString({ test: "test" })).toBe(false);
	})

	it("returns false on null", () => {
		expect(isString(null)).toBe(false);
	})

	it("returns false on undefined", () => {
		expect(isString(undefined)).toBe(false);
	})

	it("returns false on array", () => {
		expect(isString(["TEST"])).toBe(false);
	})

	it("returns false on true boolean", () => {
		expect(isString(true)).toBe(false);
	})

	it("returns false on false boolean", () => {
		expect(isString(false)).toBe(false);
	})
})
