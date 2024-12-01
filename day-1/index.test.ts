import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput } from "./index.ts";

describe("Day 1", () => {
    describe("readInput()", () => {
        it("returns and array of two arrays of integers of equal length", () => {
            const input = readPuzzleInput("./example-input.txt");

            expect(input.length).toBe(2);
            expect(input[0].length).toBe(input[1].length);
            expect(input[0].every(Number.isInteger)).toBe(true);
            expect(input[1].every(Number.isInteger)).toBe(true);
        });
    });
});
