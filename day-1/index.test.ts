import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput } from "./index.ts";

describe("Day 1", () => {
    describe("readPuzzleInput()", () => {
        it("returns and array of two arrays of integers of equal length", async () => {
            const path = `${Deno.cwd()}/day-1/example-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input.length).toBe(2);
            expect(input[0].length).toBe(input[1].length);
            expect(input[0].every(Number.isInteger)).toBe(true);
            expect(input[1].every(Number.isInteger)).toBe(true);
        });
    });
});
