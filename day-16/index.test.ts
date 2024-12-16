import { expect } from "@std/expect/expect";
import { describe, it } from "@std/testing/bdd";

import { readPuzzleInput, solvePart1, solvePart2 } from "./index.ts";

describe("Day 16", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-16/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const secondLine = input[1];
            const secondLastLine = input[input.length - 3];

            expect(secondLine).toEqual("#.......#....E#".split(""));
            expect(secondLastLine).toEqual("#S..#.....#...#".split(""));
        });
    });

    describe("solvePart1()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-16/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart1(input);
        });
    });

    describe("solvePart2()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-16/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = solvePart2(input);
        });
    });
});
