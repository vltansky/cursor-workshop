import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility function", () => {
  it("should combine class names correctly", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
    expect(cn("foo", undefined, "bar", null)).toBe("foo bar");
    // eslint-disable-next-line no-constant-binary-expression
    expect(cn("foo", false && "bar", true && "baz")).toBe("foo baz");
    expect(cn({ foo: true, bar: false })).toBe("foo");
    expect(cn(["foo", "bar"])).toBe("foo bar");
  });

  it("should merge tailwind classes properly", () => {
    // Test that conflicting tailwind classes are properly merged
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");

    // Test with more complex tailwind classes
    expect(
      cn("font-bold text-sm text-gray-500", "md:text-lg md:text-blue-500")
    ).toBe("font-bold text-sm text-gray-500 md:text-lg md:text-blue-500");

    // Test class merging with conditional classes
    expect(
      // eslint-disable-next-line no-constant-binary-expression
      cn("rounded-md bg-blue-500", true && "p-4", false && "text-red-500", {
        "bg-red-500": false,
        "bg-green-500": true,
      })
    ).toBe("rounded-md p-4 bg-green-500");
  });
});
