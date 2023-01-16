import { describe, it, expect } from "vitest";
import { evenOrOdd, multiply } from "@/playground";

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  describe("evenOrOdd", () => {
    it("Indicates number is Even", () => {
      expect(evenOrOdd(4)).toBe("Even");
    });
  });

  describe("when number is odd", () => {
    it("Indicates number is Odd", () => {
      expect(evenOrOdd(3)).toBe("Odd");
    });
  });

  describe("multiply", () => {
    it("multiplies two numbers together", () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });
});
