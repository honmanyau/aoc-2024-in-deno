import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput } from "./index.ts";

describe("Day 1", () => {
    describe("readPuzzleInput()", () => {
        it("returns and array of two arrays of sorted (ascending) integers of equal length", async () => {
            const path = `${Deno.cwd()}/day-1/example-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input.length).toBe(2);
            expect(input[0].length).toBe(input[1].length);

            for (let i = 0; i < input[0].length; i++) {
                expect(Number.isInteger(input[0][i])).toBe(true);
                expect(Number.isInteger(input[1][i])).toBe(true);

                if (input[0][i + 1] !== undefined) {
                    expect(input[0][i]).toBeLessThanOrEqual(input[0][i + 1]);
                    expect(input[1][i]).toBeLessThanOrEqual(input[1][i + 1]);
                }
            }
        });
    });
});
