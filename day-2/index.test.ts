import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { isSafeReport, readPuzzleInput } from "./index.ts";

describe("Day 2", () => {
    describe("readPuzzleInput()", () => {
        it("returns and array of arrays of integers of equal length", async () => {
            const path = `${Deno.cwd()}/day-2/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                [7, 6, 4, 2, 1],
                [1, 2, 7, 8, 9],
                [9, 7, 6, 2, 1],
                [1, 3, 2, 4, 5],
                [8, 6, 4, 4, 1],
                [1, 3, 6, 7, 9],
            ]);
        });
    });

    describe("isSafeReport()", () => {
        it("returns `true` for the report [7, 6, 4, 2, 1]", () => {
            const result = isSafeReport([7, 6, 4, 2, 1]);

            expect(result).toBe(true);
        });

        it("returns `false` for the report [1, 2, 7, 8, 9]", () => {
            const result = isSafeReport([1, 2, 7, 8, 9]);

            expect(result).toBe(false);
        });

        it("returns `false` for the report [9, 7, 6, 2, 1]", () => {
            const result = isSafeReport([9, 7, 6, 2, 1]);

            expect(result).toBe(false);
        });

        it("returns `false` for the report [1, 3, 2, 4, 5]", () => {
            const result = isSafeReport([1, 3, 2, 4, 5]);

            expect(result).toBe(false);
        });

        it("returns `false` for the report [8, 6, 4, 4, 1]", () => {
            const result = isSafeReport([8, 6, 4, 4, 1]);

            expect(result).toBe(false);
        });

        it("returns `true` for the report [1, 3, 6, 7, 9]", () => {
            const result = isSafeReport([1, 3, 6, 7, 9]);

            expect(result).toBe(true);
        });

        it("throw if a report contains less than 2 elements", () => {
            expect(() => isSafeReport([1])).toThrow();
        });
    });
});
