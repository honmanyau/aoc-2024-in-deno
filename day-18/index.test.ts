import { describe, it } from "@std/testing/bdd";

import { expect } from "@std/expect/expect";
import { readPuzzleInput, simulate } from "./index.ts";

describe("Day 18", () => {
    describe("readPuzzleInput()", () => {
        it("returns the puzzle input correctly for the first sample input", async () => {
            const path = `${Deno.cwd()}/day-18/sample-input-0.txt`;
            const input = await readPuzzleInput(path);

            expect(input).toEqual([
                [2, 1],
                [4, 3],
                [0, 0],
                [6, 7],
                [24, 42],
            ]);
        });
    });

    describe("simulate()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-18/sample-input.txt`;
            const input = await readPuzzleInput(path);
            const result = simulate(input, 12, 6);

            expect(result).toEqual([
                "...#...".split(""),
                "..#..#.".split(""),
                "....#..".split(""),
                "...#..#".split(""),
                "..#..#.".split(""),
                ".#..#..".split(""),
                "#.#....".split(""),
            ]);
        });
    });

    describe("solvePart1()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-18/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });

    describe("solvePart2()", () => {
        it("returns", async () => {
            const path = `${Deno.cwd()}/day-18/sample-input.txt`;
            const input = await readPuzzleInput(path);
        });
    });
});
