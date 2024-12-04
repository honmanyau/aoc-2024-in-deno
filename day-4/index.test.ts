import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { readPuzzleInput } from "./index.ts";

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
});
