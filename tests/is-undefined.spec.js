import{ isUndefined } from "../src/mini-type";

describe("isUndefined method", () => {
	it("returns false on string", () => {
		expect(isUndefined("test")).toBe(false);
	})

	it("returns false on number", () => {
		expect(isUndefined(1)).toBe(false);
	})

	it("returns false on function", () => {
		const mockFn = jest.fn();
		expect(isUndefined(mockFn)).toBe(false);
	})

	it("returns false on object", () => {
		expect(isUndefined({ test: "test" })).toBe(false);
	})

	it("returns false on null", () => {
		expect(isUndefined(null)).toBe(false);
	})

	it("returns true on undefined", () => {
		expect(isUndefined(undefined)).toBe(true);
		expect(isUndefined()).toBe(true);
	})

	it("returns false on array", () => {
		expect(isUndefined(["TEST"])).toBe(false);
	})

	it("returns false on true boolean", () => {
		expect(isUndefined(true)).toBe(false);
	})

	it("returns false on false boolean", () => {
		expect(isUndefined(false)).toBe(false);
	})
})
