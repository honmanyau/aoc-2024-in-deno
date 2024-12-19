import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { buildTowel, readPuzzleInput } from "./index.ts";

describe("Day 19", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input-0.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                { r: true, wr: true, br: true },
                ["brwrr", "bggr"],
            ]);
        });
    });

    describe("buildTowel()", () => {
        it("returns [ 'b', 'r', 'wr', 'r' ] and [ 'br', 'wr', 'r' ] for the first towel in the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors, towels] = await readPuzzleInput(path);
            const result = buildTowel(colors, towels[0]);

            expect(result).toEqual([
                ["b", "r", "wr", "r"],
                ["br", "wr", "r"],
            ]);
        });
    });

    describe("solvePart1()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
        });
    });

    describe("solvePart2()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
        });
    });
});
