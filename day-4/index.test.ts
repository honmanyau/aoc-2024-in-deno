import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { findXmases, readPuzzleInput } from "./index.ts";

describe("Day 4", () => {
    describe("readPuzzleInput()", () => {
        it("returns the expected array of strings for the sample input", async () => {
            const path = `${Deno.cwd()}/day-4/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                "MMMSXXMASM",
                "MSAMXMSMSA",
                "AMXSXMAAMM",
                "MSAMASMSMX",
                "XMASAMXAMM",
                "XXAMMXXAMA",
                "SMSMSASXSS",
                "SAXAMASAAA",
                "MAMMMXMMMM",
                "MXMXAXMASX",
            ]);
        });
    });

    describe("findXmases()", () => {
        it('returns 1 for the input ["XMAS"]', () => {
            const count = findXmases(["XMAS"]);

            expect(count).toBe(1);
        });

        it('returns 2 for the input ["SAMXMAS"]', () => {
            const count = findXmases(["SAMXMAS"]);

            expect(count).toBe(2);
        });

        it('returns 2 for the input ["SAMXXMAS"]', () => {
            const count = findXmases(["SAMXXMAS"]);

            expect(count).toBe(2);
        });

        it('returns 2 for the input ["XMAS", "AMMA", "XAAX", "SAAS"]', () => {
            const count = findXmases(["XMAS", "AMMA", "XAAX", "SAAS"]);

            expect(count).toBe(2);
        });

        it('returns 2 for the input ["SMAS", "AAAA", "XMMX", "XAAX"]', () => {
            const count = findXmases(["SMAS", "AAAA", "XMMX", "XAAX"]);

            expect(count).toBe(2);
        });

        it('returns 2 for the input ["XMAS", "SSSA", "XXXM", "SSSX"]', () => {
            const count = findXmases(["XMAS", "SSSA", "XXXM", "SSSX"]);

            expect(count).toBe(2);
        });

        it("returns 18 for the sample input", async () => {
            const path = `${Deno.cwd()}/day-4/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const count = findXmases(input);

            expect(count).toBe(18);
        });
    });
});
