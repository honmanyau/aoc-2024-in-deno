import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import { findRegions, readPuzzleInput } from "./index.ts";

describe("Day 12", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for `sample-input`", async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual(["AAAA", "BBCD", "BBCC", "EEEC"]);
        });
    });

    describe("findRegions()", () => {
        it(`returns ["A", 4, 10], ["B", 4, 8], ["C", 4, 10], ["D", 1, 4], and ["E", 3, 8] for \`sample-input\``, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const regions = findRegions(input);

            expect(regions).toEqual([
                ["A", 4, 10],
                ["B", 4, 8],
                ["C", 4, 10],
                ["D", 1, 4],
                ["E", 3, 8],
            ]);
        });

        it(`returns ["O", 21, 36], ["X", 1, 4], ["X", 1, 4], ["X", 1, 4], and ["X", 1, 4] for 
            \`sample-input-2\``, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input-2.txt`;
            const input = await readPuzzleInput(path);
            const regions = findRegions(input);

            expect(regions).toEqual([
                ["O", 21, 36],
                ["X", 1, 4],
                ["X", 1, 4],
                ["X", 1, 4],
                ["X", 1, 4],
            ]);
        });

        it(`returns the correct regions for \`sample-input-3\``, async () => {
            const path = `${Deno.cwd()}/day-12/sample-input-3.txt`;
            const input = await readPuzzleInput(path);
            const regions = findRegions(input);

            expect(regions).toEqual([
                ["R", 12, 18],
                ["I", 4, 8],
                ["C", 14, 28],
                ["F", 10, 18],
                ["V", 13, 20],
                ["J", 11, 20],
                ["C", 1, 4],
                ["E", 13, 18],
                ["I", 14, 22],
                ["M", 5, 12],
                ["S", 3, 8],
            ]);
        });
    });
});
