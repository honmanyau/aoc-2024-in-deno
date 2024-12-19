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
                ["br", "wr", "r"],
                ["b", "r", "wr", "r"],
            ]);
        });

        it("returns [ 'b', 'g', 'g', 'r' ] for the second towel in the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors, towels] = await readPuzzleInput(path);
            const result = buildTowel(colors, towels[1]);

            expect(result).toEqual([["b", "g", "g", "r"]]);
        });

        it("returns the expected combinations for the third towel in the sample input", async () => {
            const path = `${Deno.cwd()}/day-19/sample-input.txt`;
            const [colors, towels] = await readPuzzleInput(path);
            const result = buildTowel(colors, towels[2]);

            expect(result).toEqual([
                ["gb", "br"],
                ["g", "b", "br"],
                ["gb", "b", "r"],
                ["g", "b", "b", "r"],
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
